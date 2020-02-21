#!/bin/sh

mogrify -format jpg -quality 50 *.png

rm *.png
