---
layout: default
title: Calculating Driver Current Settings
nav_exclude: true
---

# Calculating Driver Current Settings

When using the 2208 / 2209 drivers, the voltage & current are set in software.  In Klipper, the motor currents have two settings: run and hold.  [However, it is no longer recommended][klipperTMCUpdate] to specify a `hold_current` for most motors. Klipper current settings are based on root-mean-squared (RMS) and **not** on peak current.  Depending on the spec sheet the rated current is either peak or RMS.  If you are unsure, assume that it is peak.

[klipperTMCUpdate]: https://www.klipper3d.org/TMC_Drivers.html#prefer-to-not-specify-a-hold_current

#### Calculating Currents

To calculate the maximum Klipper current settings for a given stepper assuming peak specifications, follow this process:

1. Look up the specifications for the stepper motor and locate the peak current limits of the motor.
2. Multiply the peak current by 0.707 to determine the maximum current in RMS.  This is the maximum run current. (Typically round down to the nearest .1)
3. If you plan to set a separate hold current, multiply the maximum run current by 0.6 to determine the hold current.  (Typically round to the nearest (0.05)
4. Both value needs be less than 1.2 amps which recommended maximum value for TMC 2209 drivers.

#### Example

The LDO LDO-42STH48-1684 is specified with a maximum RMS of 1.68 amps. Maximum hold current is 1.1877 * 0.6 = 1 rounded to a maximum hold current of 1 amps. However, the maximum run current exceeds the recommended maximum value of the 2209 driver which is 1.2 amps, so the actual maximum run current should be set to 1.2 amps or lower.

The OMC 14HS20-1504S is specified with a maximum peak of 1.5 amps.  Maximum RMS run current is 1.68 * .707 = 1.06, rounded down to a maximum RMS run current of 1 amps.  Maximum hold current is 1.1877 * 0.6 = 0.636, rounded to a maximum hold current of 0.6 amps. 

### Maximums

Whatever the maximum calculated current of the motor is still limited by the maximum capacity of the 2209 driver is 2.0 amps however 1.2 amps should be used without active cooling and to prevent overheating.  This calculation is for the maximum the motor can handle, however it is HIGLHLY recommended to start with smaller values and work from there. Starting from the high end may result in melted motor mounts or damaged drivers.
