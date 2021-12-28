---
layout: default
title: Calculating Driver Current Settings
nav_exclude: true
---

# Calculating Driver Current Settings

When using the 2208 / 2209 drivers, the voltage & current are set in software.  In Klipper, the motor currents have two settings: run and hold.  [However, it is no longer recommended][klipperTMCUpdate] to specify a `hold_current` for most motors. Klipper current settings are based on root-mean-squared (RMS) and **not** on peak current.  The spec sheets for most motors list the peak current capacity.

[klipperTMCUpdate]: https://www.klipper3d.org/TMC_Drivers.html#prefer-to-not-specify-a-hold_current

#### Calculating Currents

To calculate the maximum Klipper current settings for a given stepper, follow this process:

1. Look up the specifications for the stepper motor and locate the peak current limits of the motor.
2. Multiply the peak current by 0.707 to determine the maximum current in RMS.  This is the maximum run current. (Typically round down to the nearest .1)
3. If you plan to set a separate hold current, multiply the maximum run current by 0.6 to determine the hold current.  (Typically round to the nearest (0.05)

#### Example

The LDO 42STH130-1684 is specified with a maximum current of 1.68 Amps.  Maximum run current is 1.68 * .707 = 1.1877, rounded down to a maximum RMS run current of 1.1 Amps.  Maximum hold current is 1.1877 * 0.6 = 0.712, rounded to a maximum hold current of 0.7 Amps. 

### Maximums

Whatever the maximum calculated current of the motor is, the maximum capacity of the 2209 driver is 1.2 Amps.  Also, the calculation is for the maximum the motor can handle.  It is recommended to start with smaller values and work from there. Starting from the high end may result in melted motor mounts.
