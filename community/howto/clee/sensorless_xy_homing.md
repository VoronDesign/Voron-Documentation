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
```ini
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
```ini
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
```ini
[stepper_x]
# …
endstop_pin: PG6

[tmc5160 stepper_x]
# …
```

After:

```ini
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
- If your toolhead moves all the way to the end of the rail, **IMMEDIATELY HIT THE EMERGENCY STOP BUTTON**.
- The Klipper documentation is good here, with one exception. This information is not correct:  
  > Then issue a G28 X0 command and verify the axis does not move at all.  
  
  When running the `G28 X0` or `G28 Y0` command, the toolhead *WILL* move a millimeter or so before it triggers the virtual endstop. This is normal.
- Assuming that the toolhead moved a millimeter or so and then stopped, change the `VALUE` to decrease the sensitivity by 5-10, try again, and keep going until you find the first value that successfully homes your printer. 
- Follow the Klipper instructions on fine-tuning the value once your toolhead is homing successfully on this axis. Make sure you run  
  ```gcode
  G91
  G1 X-10
  ```  
  to back the toolhead off after hitting the end of the rail (assuming you're homing to the maximum X value) or else Y homing will not work properly.
- Update the `driver_SGTHRS` or `driver_SGT` value with your new StallGuard threshold.

**Do not forget, you need to repeat this same process for the Y axis.**

### Final setup

If you have a `[safe_z_home]` section, you need to comment out the entire block (not just the `[safe_z_home]` line!). Or you could just delete the entire block, but if sensorless homing doesn't work reliably for you for some reason and you decide you want to go back to a physical endstop setup, you'll be glad you didn't delete it.

Now you need to create a `[homing_override]` section. The Klipper docs recommend setting up dedicated `SENSORLESS_HOME_X`/`SENSORLESS_HOME_Y` macros. Here's a setup that has been working well for several Voron owners (you will probably want to tweak the `HOME_CUR` values for your own setup):

<!-- {% raw %} -->
```ini
[gcode_macro _SENSORLESS_HOME_X]
gcode:
    # Set current for sensorless homing
    {% set driver_config = printer.configfile.settings['tmc2209 stepper_x'] %}
    {% set RUN_CUR = driver_config.run_current|float %}
    {% set HOME_CUR = 0.7 %}
    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CUR}
    # Home
    G28 X
    # Move away
    G91
    G1 X-10 F1200
    # Set current during print
    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CUR}

[gcode_macro _SENSORLESS_HOME_Y]
gcode:
    # Set current for sensorless homing
    {% set driver_config = printer.configfile.settings['tmc2209 stepper_y'] %}
    {% set RUN_CUR = driver_config.run_current|float %}
    {% set HOME_CUR = 0.7 %}
    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CUR}
    # Home
    G28 Y
    # Move away
    G91
    G1 Y-10 F1200
    # Set current during print
    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CUR}

[homing_override]
axes: xyz
gcode:
  {% set home_all = 'X' not in params and 'Y' not in params and 'Z' not in params %}

  {% if home_all or 'X' in params %}
    _SENSORLESS_HOME_X
  {% endif %}
  G4 P2000
  {% if home_all or 'Y' in params %}
    _SENSORLESS_HOME_Y
  {% endif %}
  {% if home_all or 'Z' in params %}
    G28 Z
    G1 Z10
  {% endif %}
```
<!-- {% endraw %} -->

Restart Klipper, and now the "Home X"/"Home Y"/"Home Z" buttons in Mainsail and Fluidd will work properly (and so will commands like "G28 X"), using your new sensorless homing setup.
