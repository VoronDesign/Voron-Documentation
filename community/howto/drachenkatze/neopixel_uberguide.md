---
layout: default
title: Stealthburner Neopixel Uberguide
nav_exclude: true
---

# Stealthburner Neopixel Uberguide

## Neopixel Theory: Basics

Neopixel is Adafruit's name for a variety of digitally controlled LEDs. They are also often named
by their driver ICs, with `WS2812B` and `SK6812` being the most common.

Each neopixel has 3 or 4 individually controllable LEDs inside: `Red (R)`, `Green (G)`, `Blue (B)` and optionally
`White (W)`. The intensity of these colors can also be individually controlled. Most often `SK6812`-based
Neopixels are `RGBW`, but SK6812 variants with only `RGB` exist. A dedicated white LED gives a more pure white color - 
mixing white out of the individual `RGB` components often result in a white with a noticeable blue tint.

For `RGBW` Neopixels you often have the choice of `Warm White`, `Neutral White` and `Cold White`, which are often 
advertised as `RGBWW`, `RGBNW` or `RGBCW`. Neopixels with a dedicated white LED can be identified by their yellow
phosphor part embedded in the LED.

Neopixels require a permanent +5V supply and a data signal. Other non-5V-variants exist, but are not covered within this
guide.

It's always good if you have a datasheet available for the particular Neopixel you've bought.

## Neopixel Theory: Data

Neopixels use a single data wire to transmit data to all LEDs. To achieve this, the data output (often named `DOUT`) of
a neopixel must be connected to the data input (often named `DIN`) of the next. Neopixels are not aware of their
position in the chain - the first Neopixel simply removes the data it receives first and passes on the rest of the data
to the following pixels.

Since `RGBW` Neopixels use 32 bits of data and `RGB`Neopixels use 24 bits of data, it is not recommended mixing the
two types on a single chain of Neopixels.

Different types of Neopixels have different color orders - it is the order in which the color components are
transmitted over the wire. The color order is denoted by their beginning letters - for example, `GRB` means that
`green` is transmitted first, followed by `red` and finally by `blue`. 

Once the Neopixels have received their data, they will keep their color until they receive other data. This means that
unless you change your LED color, Klipper (and other firmware as well) will not transmit anything to the Neopixels.

## Quick Problem Guides

### No LED
