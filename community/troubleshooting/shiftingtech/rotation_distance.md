---
layout: default
title: Rotation Distance
nav_exclude: true
---

# Rotation Distance
On 2020-12-22, klipper introduced a new system for defining stepper motor movement, replacing the old `step_distance` setting with a new `rotation_distance` setting.
Currently, we are in a transitional period, where the old `step_distance` settings are depreciated, but may still be used.  Sometime around 2021-06-15, this new system is expected to become mandatory.  When this second change occurs, it *will break* all printer.cfg which have not been adapted to the new system.

For full information on the new system, see the [klipper documentation](https://github.com/KevinOConnor/klipper/blob/master/docs/Rotation_Distance.md)

# Changes Required?
You will need to update all stepper motor related sections of your printer.cfg. These include all `[stepper_??]`, `[tmcXXXX stepper_??]`, `[extruder]`, and `[tmcXXXX extruder]` sections.  The specific changes required for each section, on a stock printer are listed below, under 
* [Voron 0](#Voron-0) 
* [Voron Switchwire](#Voron-Switchwire)
* [Voron 1](#Voron-1)
* [Voron 2](#Voron-2)

**Please Note: If you are running a modified printer, only you can validate whether these settings match your printer**

# Voron 0
### `[stepper_x]` and `[stepper_y]`
* Remove the `step_distance: ` line
* Add the line `rotation_distance: 40`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc2209 section, use the same number here)

### `[tmc2209 stepper_x]` and `[tmc2209 stepper_y]`
* remove the `microsteps:` line

### `[stepper_z]`
* Remove the `step_distance: ` line
* For a T8x8 Leadscrew (step_distance: 0.0025): Add the line `rotation_distance: 8`
* For a T8x2 Leadscrew (step_distance: 0.000625 ): Add the line `rotation_distance: 2`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc2209 section, use the same number here)

### `[tmc2209 stepper_z]`
* remove the `microsteps:` line

### `[extruder]`
* calculate your new rotation_distance.  the basic formula is `rotation_distance = <full_steps_per_rotation> * <microsteps> * <step_distance>` in most cases, this means:  `rotation_distance = 200 * 16 * <old_step_distance>`
* remove the `step_distance:` line
* add the line `rotation_distance: x` replacing *x* with the value you calculated above
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)

### `[tmc2209 extruder]`
* remove the `microsteps:` line


# Voron Switchwire

### `[stepper_x]`, `[stepper_y]`, and `[stepper_z]`
* Remove the `step_distance: ` line
* Add the line `rotation_distance: 40`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`

### `[tmc2209 stepper_x]`, `[tmc2209 stepper_y]`, `[tmc2209 stepper_z]` or `[tmc2130 stepper_x]`, `[tmc2130 stepper_y]`, `[tmc2130 stepper_z]`
* Remove the `microsteps:` line

### `[extruder]`
* calculate your new rotation_distance.  the basic formula is `rotation_distance = <full_steps_per_rotation> * <microsteps> * <step_distance>` in most cases, this means:  `rotation_distance = 200 * 16 * <old_step_distance>`
* remove the `step_distance:` line
* add the line `rotation_distance: x` replacing *x* with the value you calculated above
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`

### `[tmc2209 extruder]` or `[tmc2130 extruder]`
* Remove the `microsteps:` line


# Voron 1
### `[stepper_x]` and `[stepper_y]`
* Remove the `step_distance: ` line
* Add the line `rotation_distance: 40`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc220* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`

### `[tmc220* stepper_x]` and `[tmc220* stepper_y]`
* remove the `microsteps:` line

### `[stepper_z]`, `[stepper_z1]`
* Remove the `step_distance: ` line
* Add the line `rotation_distance: 8`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`

### `[tmc220* stepper_z]`, `[tmc220* stepper_z1]`
* remove the `microsteps:` line

### `[extruder]`
* calculate your new rotation_distance.  the basic formula is `rotation_distance = <full_steps_per_rotation> * <microsteps> * <step_distance>` in most cases, this means:  `rotation_distance = 200 * 16 * <old_step_distance>`
* remove the `step_distance:` line
* add the line `rotation_distance: x` replacing *x* with the value you calculated above
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`


### `[tmc220* extruder]`
* remove the `microsteps:` line


# Voron 2

### `[stepper_x]` and `[stepper_y]`
* Remove the `step_distance: ` line
* Add the line `rotation_distance: 40`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc220* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`

### `[tmc220* stepper_x]` and `[tmc220* stepper_y]`
* remove the `microsteps:` line

### `[stepper_z]`, `[stepper_z1]`, `[stepper_z2]`, `[stepper_z3]`
* Remove the `step_distance: ` line
* Add the line `rotation_distance: 40`
* Add the line `gear_ratio: 80:16`
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`

### `[tmc220* stepper_z]`, `[tmc220* stepper_z1]`, `[tmc220* stepper_z2]`, `[tmc220* stepper_z3]`
* remove the `microsteps:` line

### `[extruder]`
* calculate your new rotation_distance.  the basic formula is `rotation_distance = <full_steps_per_rotation> * <microsteps> * <step_distance>` in most cases, this means:  `rotation_distance = 200 * 16 * <old_step_distance>`
* remove the `step_distance:` line
* add the line `rotation_distance: x` replacing *x* with the value you calculated above
* Add the line `microsteps: 16`   (if you have a microstepping other than 16 in your tmc* section, use the same number here)
* Only for 0.9 degree steppers: add the line `full_steps_per_rotation:400`


### `[tmc220* extruder]`
* remove the `microsteps:` line

