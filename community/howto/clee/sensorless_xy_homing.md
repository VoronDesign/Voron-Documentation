---
layout: default
title: Setting Up and Calibrating Sensorless XY Homing
nav_exclude: true
---

# Setting Up and Calibrating Sensorless XY Homing

When using the TMC2130 / TMC2209 / TMC2660 / TMC5160 drivers, the StallGuard feature makes it possible to set up sensorless homing on the X and Y axes for CoreXY machines. The Klipper project [has a page with documentation and recommendations on getting it working][KlipperTMCDrivers]. 

[KlipperTMCDrivers]: https://www.klipper3d.org/TMC_Drivers.html#sensorless-homing

Following are some more detailed instructions and suggestions to supplement the Klipper documentation specifically for Vorons.

## Hardware Setup

You need to configure your hardware properly to enable sensorless homing. This involves two main steps:

1. If you currently have Hall Effect or microswitch XY endstops connected to your microcontroller (SKR, Spider, Octopus, E3 mini, SKR Pico, etc), then you must physically pull them out of the microcontroller. **If you leave the physical endstops connected, sensorless homing will not work**.
2. Install jumpers on the relevant DIAG pins to enable sensorless homing on the X and Y stepper drivers.

## Software Setup

### Klipper

You'll need to modify the `endstop_pin` values for `[stepper_x]` and `[stepper_y]`, by adding a pullup `^`, moving the current value into the relevant TMC blocks, and updating the `endstop_pin`s to use the `virtual_endstop` as described in the following sections.

Also, as the Klipper docs instruct, set the `homing_retract_dist` to `0`, and make sure your X and Y `homing_speed` values are set to half of your `rotation_distance` (`homing_speed` should be `20` for Vorons with 20T pulleys on the A/B motors).

#### For TMC2209 

The following pin examples are from a BTT E3 mini V2; make sure to adjust based on your own configuration.

Before:
```
[stepper_x]
# …
endstop_pin: PC0

[tmc2209 stepper_x]
# …

[stepper_y]
# …
endstop_pin: PC1

[tmc2209 stepper_y]
# …
```

After:
```
[stepper_x]
endstop_pin: tmc2209_stepper_x:virtual_endstop

[tmc2209 stepper_x]
# …
diag_pin: ^PC0 # use the same pin that was previously the endstop_pin!
driver_SGTHRS: 255

[stepper_y]
# …
endstop_pin: tmc2209_stepper_y:virtual_endstop

[tmc2209 stepper_y]
# …
diag_pin: ^PC1     # use the same pin that was previously the endstop_pin!
driver_SGTHRS: 255 # 255 is most sensitive value, 0 is least sensitive
```

#### For TMC5160

The following pin examples are from a BTT Octopus Pro; make sure to adjust based on your own configuration.

Before:
```
[stepper_x]
# …
endstop_pin: PG6

[tmc5160 stepper_x]
# …
```

After:

```
[stepper_x]
# …
endstop_pin: tmc5160_stepper_x:virtual_endstop

[tmc5160 stepper_x]
# …
diag1_pin: ^!PG6 # use the same pin that was previously the endstop_pin! 
driver_SGT: -64  # -64 is most sensitive value, 63 is least sensitive
```

### Finding the right StallGuard threshold

The calibration process is:
- For TMC2209, start with `SET_TMC_FIELD FIELD=SGTHRS STEPPER=stepper_x VALUE=255` in the console. For TMC2130/TMC2660/TMC5160, use `SET_TMC_FIELD FIELD=SGT STEPPER=stepper_x VALUE=-64` instead. Start with the most sensitive value for the StallGuard threshold based on which kind of TMC driver you're using (`255` for TMC2209, or `-64` for TMC2130/TMC2660/TMC5160).
- Try running `G28 X0` to see if the toolhead moves along the X axis.
- If your toolhead moves all the way to the end of the rail, **IMMEDIATELY HIT THE EMERGENCY STOP BUTTON**. Go back and double-check that you have configured your hardware and the Klipper sections above correctly. Ask on Discord if you need help.

- When running the `G28 X0` or `G28 Y0` command, the toolhead *WILL* move ever so slightly before it triggers the virtual endstop. This is normal. After triggering the toolhead will also move 10mm back in the opposite direction. For example: if you stallguard value is too high you may observe the toolhead only moving 10mm to the left. This is expected and simply means your stallguard value is still too sensitive for the toolhead to overcome the resistance in the beltpath.
- As described above when you first start trying to find your value, it will look like the toolhead is moving away from the right rail, then stopping. This is normal and just means the value is still too sensitive to home properly. Early on, you can jump down in jumps of 50. To change the stallguard value quickly simply enter `SET_TMC_FIELD FIELD=SGTHRS STEPPER=stepper_x VALUE=XXX` into the console, replacing the XXX with your desired stallgurad value to test. This command only overwrites the value temporarily so when you are finished it will have to be updated in your actual printer.cfg file.
- At some point you will get X to home all the way to the rail. However, if you went TOO low, it might bump harder into the rail than it should. In this case, split the difference and try homing the axis again.
- Eventually you will find the BIGGEST number that homes X successfully. Nice! With the maximum found, continue to DECREASE the value by 5 or so until X homes, but bumps too hard into the rail. You may need to walk this in by changing the value by 1 when getting close. This is your MINIUMUM value. Ideally we want to hard code a final value between the minimum and maximum that will always work, it is best to shoot for something slightly LESS than halfway between minimum and maximum.

- Example: If maximum is 113 and minimum is 99, the difference is 14. Half of 14 is 7, so use a value of 99+6, or 105. If that looks and feels good, you now have the driver value that you need in order to update your printer.cfg file's [tmc2209 stepper_x] section.

**Do not forget, you need to repeat this same process for the Y axis.**

### Homing macros

The Klipper docs recommend setting up dedicated `SENSORLESS_HOME_X`/`SENSORLESS_HOME_Y` macros. The stock configs have renamed them to `_HOME_X` and `_HOME_Y` (the leading underscores will hide them in Mainsail/Fluidd, and those specific names are special for Klicky). This setup that has been working well for several Voron owners. These should already be present in your stock config but if you are building a confi file from scratch or configuring a board that does not have a premade file the homing macros basic layout is as follows:

<!-- {% raw %} -->
```
[gcode_macro _HOME_X]
gcode:
    # Always use consistent run_current on A/B steppers during sensorless homing
    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}
    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}
    {% set HOME_CURRENT = 0.7 %}
    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT}
    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT}

    # Home
    G28 X
    # Move away
    G91
    G1 X-10 F1200
    
    # Wait just a second… (give StallGuard registers time to clear)
    G4 P1000
    # Set current during print
    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}
    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}

[gcode_macro _HOME_Y]
gcode:
    # Set current for sensorless homing
    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}
    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}
    {% set HOME_CURRENT = 0.7 %}
    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT}
    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT}

    # Home
    G28 Y
    # Move away
    G91
    G1 Y-10 F1200

    # Wait just a second… (give StallGuard registers time to clear)
    G4 P1000
    # Set current during print
    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}
    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}
```
<!-- {% endraw %} -->

### Final setup

If you have a `[safe_z_home]` section, you need to comment out the entire block (not just the `[safe_z_home]` line!). Or you could just delete the entire block, but if sensorless homing doesn't work reliably for you for some reason and you decide you want to go back to a physical endstop setup, you'll be glad you didn't delete it.

The last piece to bring everything together is `[homing_override]`. If you use a stock config file from the voron repo or the Klicky probe, then you already *have* a `[homing_override]` section. Make sure you have [the latest klicky-macros.cfg][klickyMacros], and then you can skip the rest of this guide; you're done here!

If you already have a `[homing_override]` and you're not using Klicky, replace `G28 X` with `_HOME_X` and replace `G28 Y` with `_HOME_Y`.

For anybody who needs a `[homing_override]`, the following example has proven extremely reliably on a V0.1.

<!-- {% raw %} -->
```
[homing_override]
axes: xyz
gcode:
  {% set home_all = 'X' not in params and 'Y' not in params and 'Z' not in params %}

  {% if home_all or 'X' in params %}
    _HOME_X
  {% endif %}
  
  {% if home_all or 'Y' in params %}
    _HOME_Y
  {% endif %}
  
  {% if home_all or 'Z' in params %}
    G28 Z
    G1 Z10
  {% endif %}
```
<!-- {% endraw %} -->

Restart Klipper, and now the "Home X"/"Home Y"/"Home Z" buttons in Mainsail and Fluidd will work properly (and so will commands like "G28 X"), using your new sensorless homing setup.

[klickyMacros]: https://github.com/jlas1/Klicky-Probe/blob/main/Klipper_macros/klicky-macros.cfg
