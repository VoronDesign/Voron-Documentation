---
layout: default
title: "printer.cfg Changes & Klipper updates"
nav_exclude: true
---

# printer.cfg Changes & Klipper updates
You just updated klipper, and now your printer won't start?  Don't worry.  The vast majority of these issues are quickly fixed with a few easy changes to your *printer.cfg*

*Do note: this guide is only intended to highlight changes that show up in at least one stock Voron configuration.  If you have a heavily customized config, you will likely also need to have a look at the [Klipper config changes document](https://github.com/KevinOConnor/klipper/blob/master/docs/Config_Changes.md)*

Change Date | Printer | changes required
--- | --- | ---
2020-12-22 | All  | Klipper is depreciating `step_distance:` in favour of `rotation_distance:`  Please see the [rotation_distance](rotation_distance.md) document. Although it's currently in a soft transition period, this change will eventually break *all* existing printer.cfg
2020-11-20 | Voron-2 |  If you are using aliases, aka, a `[board_pins]` section: add the line `mcu: mcu, z`
2020-10-29 | All | If you are using a Fystec Mini12864, or other display with neopixels: in the `[neopixel]` section, replace `color_order_GRB: False` with `color_order: RGB`
2020-09-02 | All | If you are using a MAX31865 amplifier, there was a math error, which has now been corrected.  you will need to re calibrate all printing temperatures, and re PID-tune your extruder.
2020-08-09 | All | If you are using any custom display menus, the configuration has changed.  You will need to remove these menus, or re-write them with the new formatting


## Okay, my printer.cfg is good, but now I'm getting this other error:
```
Recv: // Unknown command: queue_digital_out
Recv: // This type of error is frequently caused by running an older
Recv: // version of the firmware on the micro-controller (fix by
Recv: // recompiling and flashing the firmware).
```

Remember, klipper is split into two halves.  the main software, which runs on your Pi, and the MCU firmware, which runs on the SKR or other printer control board.  These sorts of errors typically mean that you have updated the main software, but not the MCU Firmware.  You should follow the flashing process for your specific MCU board, found in the [build docs](../../../official/build/software)
