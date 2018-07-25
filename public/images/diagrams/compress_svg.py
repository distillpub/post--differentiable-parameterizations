#! /usr/bin/env python3

from xml.etree import ElementTree as ET
import sys
import base64
import os
import io
from PIL import Image


PREFIX_PNG = "data:image/png;base64,"
PREFIX_JPG = "data:image/jpg;base64,"
ATTR = "{http://www.w3.org/1999/xlink}href"
SVG_NS = "http://www.w3.org/2000/svg"
XLINK_NS = "http://www.w3.org/1999/xlink"

ET.register_namespace("", SVG_NS)
ET.register_namespace("xlink", XLINK_NS)

with open(sys.argv[1]) as svgfile:
    tree = ET.parse(svgfile)
    root = tree.getroot()
    file_id = 1
    base_name = os.path.splitext(sys.argv[1])[0]
    for e in root.findall(".//{%s}image" % SVG_NS):
        href = e.get(ATTR)
        if href and href.startswith(PREFIX_PNG):
            pngimage = io.BytesIO()
            jpgimage = io.BytesIO()
            pngimage.write(base64.b64decode(href[len(PREFIX_PNG):]))
            Image.open(pngimage).convert("RGB").save(jpgimage, "JPEG", quality=75)
            e.set(ATTR, PREFIX_JPG + base64.b64encode(jpgimage.getvalue()).decode("utf-8"))

tree.write(sys.argv[1])