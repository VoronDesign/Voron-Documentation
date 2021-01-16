---
layout: default
title: Custom Macros
parent: Community Documentation
nav_order: 4
---

# Macros

Macros are an essential tool for configuring and managing Klipper.  A number of macros are pre-defined in the example configurations but a lot more is possible.

Klipper macros are always in the following format:

```
[gcode_macro <macro_name>]
gcode:
    <gcode>
    <gcode>
```

**Important:** The tab / spaces before the gcode is required.

## Required / Pre-built

To see examples of the macros themselves, look at the standard printer.cfg for the printer.

### Homing Override / Safe Z Home

By default, all printers are setup with a `[homing_override]` configuration section that includes a gcode macro for the home process.  This macro is updating during thee setup process to define the Z endstop location.  However the homing override method always homes X and Y before homing Z.

The `[safe_z_home]` configuration allows for a Z homing process without requiring a repeat home of X and Y.  To enable safe z homing disable homing override and provide a X,Y coordinate of your Z endstop pin.  Be aware that enabling safe Z home will likely require a change in other processes / macros.

```
[safe_z_home]
home_xy_position: 175.5,253
z_hop: 5.0
```

### G32

The G32 macro is included with the stock configuration for most printers.  This is typically used as a "full home" process that will home and perform leveling / tilt adjustments.

### PRINT_START

The PRINT_START macro is called at the start of every print by slicers that are confgured to be aware of it.

### PRINT_END

The PRINT_END macro is called at the end of every print by slicers that are configured to be aware of it.

## User Macros

| Creator | Macros | Bed Size |
| --- | --- | --- |
| [120decibell](./macros/120decibell.cfg) | CG28, G32, G141, PURGE\_BUCKET, TEST\_SPEED\_FAST | 350mm |

_Contributors - please make sure your macros are well documented!_
