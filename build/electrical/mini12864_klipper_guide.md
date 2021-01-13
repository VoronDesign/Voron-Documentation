---
layout: default
title: Mini12864 Klipper Guide
nav_exclude: true
---

# Mini12864 Klipper Guide

## Requirements

1. An MCU must be used that is compatible with the EXP1/EXP2 wiring standard (e.g. SKR, FLY).
2. The EXP1/EXP2 ports must be available and not connected to another expansion module

## Hardware
*NOTE: only the Fysetc mini12864 requires the connector housings to be reversed.  If you have a BigTree Tech mini12864, skip steps 1 & 2*
1. Pry off the two black connector housings from the back of the display
2. Rotate connector housings 180 degrees and insert back onto pins
3. Connect EXP1 and EXP2 cables to the display and to your MCU board, being sure to match port numbers (EXP1 <> EXP1).

## Klipper

For SKR boards, add the following `[board_pins]` section to the configuration:

```
[board_pins]
aliases:
    # EXP1 header
    EXP1_1=P1.30, EXP1_3=P1.18, EXP1_5=P1.20, EXP1_7=P1.22, EXP1_9=<GND>,
    EXP1_2=P0.28, EXP1_4=P1.19, EXP1_6=P1.21, EXP1_8=P1.23, EXP1_10=<5V>,
    # EXP2 header
    EXP2_1=P0.17, EXP2_3=P3.26, EXP2_5=P3.25, EXP2_7=P1.31, EXP2_9=<GND>,
    EXP2_2=P0.15, EXP2_4=P0.16, EXP2_6=P0.18, EXP2_8=<RST>, EXP2_10=<NC>
    # Pins EXP2_1, EXP2_6, EXP2_2 are also MISO, MOSI, SCK of bus "ssp0"
```

For RAMPS boards, add the following `[boards_pins]` to your config:

```
[board_pins]
aliases:
    # Common EXP1 header found on many "all-in-one" ramps clones
    EXP1_1=ar37, EXP1_3=ar17, EXP1_5=ar23, EXP1_7=ar27, EXP1_9=<GND>,
    EXP1_2=ar35, EXP1_4=ar16, EXP1_6=ar25, EXP1_8=ar29, EXP1_10=<5V>,
    # EXP2 header
    EXP2_1=ar50, EXP2_3=ar31, EXP2_5=ar33, EXP2_7=ar49, EXP2_9=<GND>,
    EXP2_2=ar52, EXP2_4=ar53, EXP2_6=ar51, EXP2_8=ar41, EXP2_10=<RST>
    # Pins EXP2_1, EXP2_6, EXP2_2 are also MISO, MOSI, SCK of bus "spi"
    # Note, some boards wire: EXP2_8=<RST>, EXP2_10=ar41
```

For both controller types, add following section to your config:

```
[display]
lcd_type: uc1701
cs_pin: EXP1_3
a0_pin: EXP1_4
rst_pin: EXP1_5
contrast: 63
encoder_pins: ^EXP2_5, ^EXP2_3
click_pin: ^!EXP1_2
 
[output_pin beeper]
pin: EXP1_1
 
[neopixel fysetc_mini12864]
pin: EXP1_6
chain_count: 3
color_order: RGB
initial_RED: 0.4
initial_GREEN: 0.4
initial_BLUE: 0.4
```

The `initial_RED`, `initial_GREEN`, and `initial_BLUE` sections can be adjusted to change the color of the display as desired.


Optionally add this section for additional color control:

``` 
[delayed_gcode setdisplayneopixel]
initial_duration: 1
gcode:
        SET_LED LED=fysetc_mini12864 RED=1 GREEN=1 BLUE=1 INDEX=1 TRANSMIT=0
        SET_LED LED=fysetc_mini12864 RED=1 GREEN=0 BLUE=0 INDEX=2 TRANSMIT=0
        SET_LED LED=fysetc_mini12864 RED=1 GREEN=0 BLUE=0 INDEX=3
```

The "delayed gcode" sets the display and two knob neopixels on boot up - index 1 is the display, and index 2 and 3 are the knob LEDs.   Copy the SET_LED command and run it any time through the terminal window in Octoprint to test out different Red/Green/Blue combinations.

## Mini12864 Troubleshooting Checklist
The Mini12864 display can be a little tricky to get running correctly.  Here is a short checklist to help double check some of the common issues.

* Have you Rotated the headers on the back of the display?  See [Hardware](#hardware) above
* Is EXP1 connected to EXP1, and EXP2 to EXP2?
* Have you enabled all the config sections?  you must have `[display]`,  `[output_pin beeper]`, `[neopixel fysetc_mini12864]`, AND `[delayed_gcode setdisplayneopixel]` to fully enable your display
* Voron2: Is your firmware configuration in agreement with your physical wiring about which MCU board the display is connected to?  ( As provided in the V2 reference printer.cfg, the display should be connected to MCU-Z )
