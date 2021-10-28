---
layout: default
title: Filament Runout Sensor
nav_exclude: true
---

# Filament Runout Sensor

Klipper supports a filament runout sensor to automatically pause and resume a print if filament ends.  This guide goes through the process of setting up a Triagle Labs filament runout sensor.

_Note: Some other printers and sensors support jam detection with the same sensor.  That capability is not currently in Klipper._

## Hardware / Wiring

The Triangle Labs filament sensor takes a 3-wire connection: 5V power, Ground, and Signal.  If using one of the common SKR boards, the 3 wires line up directly with the sensor connections.

For V2 owners, a replacement filament guide / mount is available in the VoronUsers repository to locate the Triangle Labs sensor in the same spot as the filament guide is intended to go.

Common MCU ports

* V0 - SKR mini E3: E0-STOP (PC15)
* V1 / V2 - SKR 1.3: Z+ STOP (P1.24)
* V1 / V2 - SKR 1.4: E0DET (P1.26)
* V2 - FLY FLYF407ZG: Z3 (PC14)

## Klipper Configuration

Add the following to the printer configuration file.  Be sure to update the pin ID!

```
[filament_switch_sensor my_sensor]
pause_on_runout: True
runout_gcode:
    PARK_MACRO
    M117 Out of Filament
insert_gcode:
    M117 Resuming
    RESUME_MACRO
event_delay: 3.0
pause_delay: 0.5
switch_pin: P1.26
```

There is no current standard for the process for how to handle parking / changing filament / resuming printing, so that is not documented here.  Check in the [macros](../../macros/index.md) page to see if anything has been contributed.
