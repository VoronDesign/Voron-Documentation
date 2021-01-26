---
layout: default
title: Klipper Common Errors
nav_exclude: true
---

# Klipper Common Errors

#### Retrieve Log File (Octoprint)

The Klippy log file (/tmp/klippy.log) contains debugging information.
Execute the `M112` command in the OctoPrint terminal window immediately after the undesirable event.

There is also a logextract.py script that may be useful when analyzing a micro-controller shutdown or similar problem.  To use it follow this procedure:

```
mkdir work_directory
cd work_directory
cp /tmp/klippy.log .
~/klipper/scripts/logextract.py ./klippy.log
```

The script will extract the printer config file and MCU shutdown information to work_directory.

_Mainsail and Fluidd have built-in tools to extract and downlaod the klippy.log._

#### TMC UART Error

This appears when the communication between the TMC drivers and the MCU is not working. Typically this means that you have not powered the SKR board with 12-24V (TMC drivers didn’t boot), you haven’t plugged in the TMC steppers to the correct spots, or you forgot to add or remove a jumper as detailed above.

#### ADC Error

ADC stands for “Analog to Digital Converter” and is what is used to convert thermistor readings to temperatures for your hotend and heated bed. As a safety precaution, if Klipper is expecting a thermistor to be plugged in but it is reading an invalid reading (no thermistor = open, or 0 ohms for a shorted wire as closed), it will go in to this shut down mode. Double check to make sure your thermistors are plugged in to the correct boards and plugs.

#### Unable to Connect

Once the underlying issue is corrected, use the `FIRMWARE_RESTART` command to reset the firmware, reload the config, and restart the host software. Check MCU IDs match your printer.cfg.  _Make sure you get the paths right!_
