---
layout: default
title: Setup a BTT Smart Filament Sensor
nav_exclude: true
---

# Setup a BTT Smart Filament Sensor

This is a guide to setup a [BIGTREETECH Smart Filament Sensor](https://github.com/bigtreetech/smart-filament-detection-module) with klipper.

There are a few things you should do to ensure the sensor works effectively.

1. Set your endstop as a pull-up.
1. Take it entirely apart and lubricate everything especially the little wheel that sits in front of the sensor. The grease that comes with the sensor is not the best and can cause the filament to slide on the bearings instead of rotating them which is needed to drive the sensing wheel. 
1. Shim the interior so it can only move back and forth. See picture bellow.
  * **Green arrows** indicate where the sensor should be shimmed.
  * **Red arrows** indicate what the internal body motion should be constrained to.
1. Ensure that the reverse bowden is contiguous all the way from the toolhead to the sensor. Any open/unconstrained filament will cause it to false detect
1. Sensorless homing/StallGuard is known to interfere with the sensor if the diag pin is set on the MCU where the filament sensor is connected.

<p align="center">
  <img width="400" src="./Images/btt_shim.png">
</p>

## Example config
```ini
[filament_motion_sensor SFS_T0]
detection_length: 7.00
extruder: extruder
switch_pin: ^PG11
pause_on_runout: True
event_delay: 3.0
pause_delay: 0.5
runout_gcode:
    M117 Runout Detected!
```
## NOTE:
**You will want to ensure that you have good pause and resume macros. Your pause macro may need to prime the nozzle slightly so there are no gaps where the printer resumes**
