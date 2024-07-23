---
layout: default
title: (obsolete)Bed Mesh with Relative Reference Index
parent: Tuning Guides
nav_exclude: true
---

## Bed Mesh with RELATIVE_REFERENCE_INDEX

{: .note }
These are the OLD instructions, for configuring a mesh using RELATIVE_REFERENCE_INDEX.  If your Klipper install is new enough to support the new ZERO_REFERENCE_POSITION, you should follow the updated instructions [here](./secondary_printer_tuning.html)

### Legacy, Trident, V2

Larger printers are also likely to need a bed mesh, but for different reasons.

While the thick beds themselves are usually quite flat, your gantry and frame will expand and warp a bit with chamber heat.\
The extrusions with linear rails will actually [bend slightly when heated](./images/bimetallic_flex.png) due to differing rates of thermal expansion.

This often requires a bed mesh to compensate.

### Setup

Because your mesh can change at different bed, chamber, and frame temperatures, it is generally recommended to generate a mesh before every print rather than using saved meshes.

All of the `[bed_mesh]` configuration options and explanations can be found [in the Klipper docs](https://github.com/KevinOConnor/klipper/blob/master/docs/Bed_Mesh.md).

Here is a sample configuration. You can copy & paste this into your `printer.cfg`, making sure to uncomment the appropriate `mesh_min` and `mesh_max` for your bed size.

**The Switchwire stock configs already include this.**

```python
[bed_mesh]
speed: 300
horizontal_move_z: 10
##--------------------------------------------------------------------
##	Uncomment below for 250mm build
#mesh_min: 40, 40
#mesh_max: 210,210

##	Uncomment for 300mm build
#mesh_min: 40, 40
#mesh_max: 260,260

##	Uncomment for 350mm build
#mesh_min: 40, 40
#mesh_max: 310,310
##--------------------------------------------------------------------
fade_start: 0.6
fade_end: 10.0
probe_count: 5,5 # Values should be odd, so one point is directly at bed center
algorithm: bicubic
relative_reference_index: 12 # Update when changing probe_count, to ((x points * y points) - 1) / 2. (the center point)
```

Then, place `BED_MESH_CALIBRATE` in your `PRINT_START` macro, **AFTER** any homing and leveling routines like `G28`, `G32`, `QUAD_GANTRY_LEVEL`, and `Z_TILT_ADJUST`.\
This will generate a mesh before every print.

### Mesh Points

Generally a 5x5 grid is acceptable for even the largest Voron printer, but you can adjust the points as you see fit.

It is recommended to use **odd** values for numbers of points in X and Y, *(such as 3x3, 5x5, or 7x7)*, so that there is always a probe point directly in the center of your bed.

### Relative Reference Index (!)

- The Switchwire should **NOT** use `relative_reference_index`.

- The Legacy, Trident, and V2 **SHOULD** use `relative_reference_index`.

As the Legacy, Trident, and V2 use the probe as a relative and not absolute measurement device, **it is critical that you have the `relative_reference_index` parameter. This value will change as you adjust your mesh size.**

Your `relative_reference_index` should be set to **((x points * y points) - 1) / 2**.

Examples:

- 3x3 mesh = 4
- 5x5 mesh = 12
- 7x7 mesh = 24
- *(etc)*
