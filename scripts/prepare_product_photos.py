#!/usr/bin/env python3
"""Normalize Bucco's real product photos without generative editing."""

from __future__ import annotations

import argparse
import unicodedata
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps, ImageDraw
from scipy import ndimage


TARGET_SIZE = (1600, 1200)
CANVAS_COLOR = (255, 255, 255)


PHOTO_SETS: dict[str, list[tuple[str, str]]] = {
    "bauernbrot": [
        ("usb", "Bauernbrot.JPG"),
        ("usb", "Bauernbrot (2).JPG"),
    ],
    "dinkelvollkornbrot": [("usb", "Dinkelvollkornbrot m. Saaten.JPG")],
    "dinkelvollkornbroetchen": [("usb", "Dinkelvollkornbrötchen.JPG")],
    "dinkelvollkornseele": [("usb", "Dinkelvollkornseele.JPG")],
    "franzbroetchen": [("usb", "Franzbrötchen.JPG")],
    "haselnussbrot": [
        ("usb", "Haselnußbrot.JPG"),
        ("usb", "Haselnußbrot2.JPG"),
    ],
    "kuerbiskernbrot": [
        ("usb", "Kürbiskernbrot.JPG"),
        ("usb", "Kürbiskernbrot2.JPG"),
    ],
    "landbrot": [
        ("usb", "Landbrot.JPG"),
        ("usb", "Landbrot2.JPG"),
    ],
    "quarkbrot": [
        ("usb", "Quarkbrot.JPG"),
        ("usb", "Quarkbrot2.JPG"),
    ],
    "rosinenbroetchen": [("usb", "Rosinenbrötchen.JPG")],
    "sonnenblumenkernbrot": [
        ("usb", "Sonnenblumenkernbrot3.JPG"),
        ("usb", "Sonnenblumenkernbrot.JPG"),
        ("usb", "Sonnenblumenkernbrot2.JPG"),
    ],
    "dinkelbaguettebroetchen": [
        ("usb", "Dinkelbaguettebrötchen.JPG"),
        ("usb", "Dinkelbaguettebrötchen2.JPG"),
    ],
    "vollkorncroissant": [("usb", "Vollkorncroissant.JPG")],
    "walnussbrot": [
        ("usb", "Walnußbrot.JPG"),
        ("usb", "Walnußbrot2.JPG"),
    ],
    "dinkelkraftbroetchen": [("usb", "Dinkelkraftbrötchen.JPG")],
    "zwiebelbrot": [
        ("usb", "Zwiebelbrot2.JPG"),
        ("usb", "Zwiebelbrot.JPG"),
    ],
    "weissbrot": [("usb", "Weißbrot.JPG")],
    "schrippen-sternbroetchen": [
        ("downloads", "Schrippe.JPG"),
        ("downloads", "Schrippe.2.JPG"),
    ],
    "croissant-hoernchen": [
        ("downloads", "Croissant.JPG"),
        ("downloads", "Croissant.2.JPG"),
    ],
}


def normalized_files(directory: Path) -> dict[str, Path]:
    return {
        unicodedata.normalize("NFC", path.name): path
        for path in directory.iterdir()
        if path.is_file()
    }


def product_mask_and_bounds(
    image: Image.Image,
) -> tuple[np.ndarray, tuple[int, int, int, int]]:
    rgb = np.asarray(image, dtype=np.float32)
    luminance = 0.2126 * rgb[:, :, 0] + 0.7152 * rgb[:, :, 1] + 0.0722 * rgb[:, :, 2]
    chroma = rgb.max(axis=2) - rgb.min(axis=2)

    # The lightbox and table are bright and nearly neutral. Bread crust stays
    # chromatic even when it is pale; very dark seeds are retained separately.
    probable_product = ((chroma > 34) & (luminance < 246)) | (luminance < 122)
    probable_product = ndimage.binary_opening(probable_product, structure=np.ones((3, 3)))
    probable_product = ndimage.binary_closing(probable_product, structure=np.ones((11, 11)))

    labels, count = ndimage.label(probable_product)
    height, width = probable_product.shape
    center_x, center_y = width / 2, height / 2
    best_label = None
    best_score = 0.0

    for label in range(1, count + 1):
        ys, xs = np.where(labels == label)
        area = len(xs)
        if area < width * height * 0.004:
            continue

        component_width = xs.max() - xs.min() + 1
        component_height = ys.max() - ys.min() + 1
        if component_width < width * 0.08 or component_height < height * 0.08:
            continue

        distance = np.hypot(xs.mean() - center_x, ys.mean() - center_y)
        normalized_distance = distance / np.hypot(center_x, center_y)
        score = area * (1.65 - min(normalized_distance, 1.0))
        if score > best_score:
            best_score = score
            best_label = label

    if best_label is None:
        fallback = np.ones((height, width), dtype=bool)
        return fallback, (0, 0, width, height)

    product = labels == best_label
    product = ndimage.binary_closing(product, structure=np.ones((13, 13)))
    product = ndimage.binary_fill_holes(product)
    product = ndimage.binary_dilation(product, iterations=5)
    ys, xs = np.where(product)
    bounds = (int(xs.min()), int(ys.min()), int(xs.max() + 1), int(ys.max() + 1))
    return product, bounds


def render_product(
    image: Image.Image,
    product_mask: np.ndarray,
    bounds: tuple[int, int, int, int],
) -> Image.Image:
    left, top, right, bottom = bounds
    source = image.crop((left, top, right, bottom))
    mask = Image.fromarray((product_mask * 255).astype(np.uint8), "L").crop((left, top, right, bottom))
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1.6))

    max_product = (1320, 900)
    scale = min(max_product[0] / source.width, max_product[1] / source.height)
    size = (max(1, int(source.width * scale)), max(1, int(source.height * scale)))
    source = source.resize(size, Image.Resampling.LANCZOS)
    mask = mask.resize(size, Image.Resampling.LANCZOS)

    canvas = Image.new("RGB", TARGET_SIZE, CANVAS_COLOR)
    x = (TARGET_SIZE[0] - size[0]) // 2
    y = (TARGET_SIZE[1] - size[1]) // 2 - 8

    shadow = Image.new("RGBA", TARGET_SIZE, (0, 0, 0, 0))
    shadow_mask = Image.new("L", TARGET_SIZE, 0)
    shadow_mask.paste(mask, (x, y + 22))
    shadow_mask = shadow_mask.filter(ImageFilter.GaussianBlur(radius=20))
    shadow_alpha = shadow_mask.point(lambda value: int(value * 0.12))
    shadow.paste((38, 28, 18, 255), (0, 0, *TARGET_SIZE), shadow_alpha)
    canvas = Image.alpha_composite(canvas.convert("RGBA"), shadow).convert("RGB")
    canvas.paste(source, (x, y), mask)
    return canvas


def prepare_photo(source: Path, destination: Path) -> None:
    with Image.open(source) as raw:
        image = ImageOps.exif_transpose(raw).convert("RGB")

    image.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    image = ImageEnhance.Brightness(image).enhance(1.025)
    image = ImageEnhance.Contrast(image).enhance(1.045)
    image = ImageEnhance.Color(image).enhance(1.02)

    product_mask, bounds = product_mask_and_bounds(image)
    image = render_product(image, product_mask, bounds)
    image = image.filter(ImageFilter.UnsharpMask(radius=1.2, percent=75, threshold=3))

    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, "JPEG", quality=90, optimize=True, progressive=True, subsampling=0)


def create_contact_sheet(paths: list[Path], destination: Path) -> None:
    thumb_size = (320, 240)
    columns = 4
    rows = (len(paths) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * 340, rows * 285), (244, 240, 229))
    draw = ImageDraw.Draw(sheet)

    for index, path in enumerate(paths):
        row, column = divmod(index, columns)
        with Image.open(path) as image:
            preview = image.copy()
            preview.thumbnail(thumb_size, Image.Resampling.LANCZOS)
        x = column * 340 + 10
        y = row * 285 + 10
        sheet.paste(preview, (x, y))
        draw.text((x, y + 246), path.stem, fill=(0, 53, 127))

    sheet.save(destination, "JPEG", quality=88, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--usb", type=Path, default=Path("/Volumes/USB"))
    parser.add_argument("--downloads", type=Path, default=Path.home() / "Downloads")
    parser.add_argument("--output", type=Path, default=Path("public/images/products"))
    parser.add_argument("--contact-sheet", type=Path)
    args = parser.parse_args()

    roots = {
        "usb": normalized_files(args.usb),
        "downloads": normalized_files(args.downloads),
    }
    outputs: list[Path] = []

    for slug, photos in PHOTO_SETS.items():
        for index, (root_name, filename) in enumerate(photos, start=1):
            normalized_name = unicodedata.normalize("NFC", filename)
            source = roots[root_name].get(normalized_name)
            if source is None:
                raise FileNotFoundError(f"Missing source photo: {root_name}/{filename}")

            destination = args.output / f"{slug}-{index:02d}.jpg"
            prepare_photo(source, destination)
            outputs.append(destination)
            print(f"{source.name} -> {destination}")

    if args.contact_sheet:
        create_contact_sheet(outputs, args.contact_sheet)
        print(f"Contact sheet -> {args.contact_sheet}")


if __name__ == "__main__":
    main()
