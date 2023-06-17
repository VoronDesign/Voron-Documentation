---
layout: default
title: Switchwire Screws Adjust
nav_exclude: true
---

# Voron Switchwire - Screws Adjust method

This process should be used when using the `Prusa Nylock Mod` with your Switchwire heated bed. This mod replaces 8 of the metallic 6mm spacers with nylon washers and M3 nylock nuts.

## Bill of Materials

8 Nylon washers: [Amazon - not affiliate](https://www.amazon.com/gp/product/B07MX9LDQY/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)

8 Nylock nuts: [Amazon - not affiliate](https://www.amazon.com/gp/product/B078T4TGY6/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1 

## Configuration update

In your printer.cfg, include the following section:

```
[screws_tilt_adjust]
# SW Nylock Mod: Screw 1 uses the 6mm metallic spacer so its
# height is considered the baseline. For tilt adjust using the
# command SCREWS_TILT_CALCULATE, this has to be your Screw 1:
#
#         ******************
#         * S7    S8    S9 *
#         *                * 
#   Bed:  * S5    S1    S6 *  
#         *                *
#         * S2    S3    S4 *
#         ******************
#
screw1: 128,110
screw1_name: center
screw2: 18,5
screw2_name: front_left
screw3: 128,5
screw3_name: front_center
screw4: 233,5
screw4_name: front_right
screw5: 18,110
screw5_name: middle_left
screw6: 233,110
screw6_name: middle_right
screw7: 18,215
screw7_name: rear_left
screw8: 128,215
screw8_name: rear_center
screw9: 233,215
screw9_name: rear_right
horizontal_move_z: 10.
speed: 50.
screw_thread: CCW-M3
```

This sections tells Klipper the location of your screws. These measurements were taken from a Switchwire build using the LDO Y Carriage and Heated bed.

With this method, Klipper uses one screw as baseline for calculating the adjustment for the remaining screws. In this configuration, the center screw is the baseline, so it has to be our `screw1`. This screw still uses the original 6mm metallic spacer from the original bill of materials. All eight of the other screws will use the M3 screws, washers and the nylock nut.

[Here is a quick video from Chris Riley](https://www.youtube.com/watch?v=qRbMOfMy-MA) showing how to assemble the screws, washers and nylock nuts.

## Adjusting the screws

Once you saved and restarted your firmware, run the following commands on the Fluidd or Mainsail console:

```gcode
G8 
SCREWS_TILT_CALCULATE
```

Klipper will move the toolhead over each of the 8 screws and calculate the amount of adjustment you need for each of the screws. Once it finishes, it will give you an output similar to this one:

```
08:35:49 // center (Base): X 128.0, Y 110.0, Z 2.02500
08:35:49 // front_left : X 18.0, Y 5.0, Z 2.11250 : Adjust -> CCW 00:11
08:35:49 // front_center : X 128.0, Y 5.0, Z 2.02500 : Adjust -> CW 00:00
08:35:49 // front_right : X 233.0, Y 5.0, Z 2.07500 : Adjust -> CCW 00:06
08:35:49 // middle_left : X 18.0, Y 110.0, Z 2.08750 : Adjust -> CCW 00:07
08:35:49 // middle_right : X 233.0, Y 110.0, Z 1.98750 : Adjust -> CW 00:05
08:35:49 // rear_left : X 18.0, Y 215.0, Z 2.05000 : Adjust -> CCW 00:03
08:35:49 // rear_center : X 128.0, Y 215.0, Z 1.40000 : Adjust -> CW 01:15
08:35:49 // rear_right : X 233.0, Y 215.0, Z 2.05000 : Adjust -> CCW 00:03
```

`CW` refers to a clockwise turn and `CCW` refers to a counter-clockwise turn, and the number after refers to the amount of "minutes" the screw needs to be turned. So for screw middle_right `CW 00:05`, the screw needs to be turned 5 minutes clockwise, while for screw middle_left `CCW 00:07` the screw needs to be turned 7 minutes counter-clockwise.

According to Klipper [documentation](https://github.com/KevinOConnor/klipper/blob/master/docs/Manual_Level.md#adjusting-bed-leveling-screws-using-the-bed-probe), you should be good when the amount to be adjusted is less than or equal to `00:06` (6 minutes) - but you should aim for at least `00:02` (2 minutes).
