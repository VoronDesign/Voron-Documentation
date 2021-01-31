---
layout: default
title: Twisted X Extrusion Diagnostics
nav_exclude: true
---

# Twisted X Extrusion Diagnostics

If a first layer is constantly high on one or both sides and is low on the other side or in the middle, the printer may have a twisted X extrusion.  than can happen from the factory or be a result of a head crash.

The sensor is correctly offset from the bed based on the Bed_Tilt or Quad_Gantry_Level, but the nozzle is ~25mm in front of the probe. As the head moves along the twisted X extrusion the toolhead is rotating about the X axis swinging the nozzle in an arc. Moving along Y should not change this rotation.

This process helps to identify a twisted X extrusion without tearing down the printer.

_Note: The values used in this exmaple are for a printer with a 300x300 bed.  If the printer being tested is larger or smaller, compensate accordingly._

## Prep

Perform the following homing procedure(s):

#### V1
```
BED_MESH_CLEAR
G28
BED_TILT
G28
```

#### V2

```
BED_MESH_CLEAR
G28
QUAD_GANTRY_LEVEL
G28
```

## Measure

### Measure Middle Center

* Move to center of bed

```
G90
G0 X150 Y150 Z5
```

* Find bed location by moving bed down 0.1mm at a time until it touches a piece of paper.

```
G91
G0 Z-0.1
```

* Retrieve current location

```
M114
```

* Record position

### Measure Remaining Points

* Middle Right (X250, Y150)
* Middle Left (X50, Y150)
* Front Center (X150, Y50)
* Front Right (X250, Y50)
* Front Left (X50, Y50)
* Rear Center (X150, Y250)
* Rear Right (X250, Y250)
* Rear Left (X50, Y250)

## Calculations

For each Y position (Middle, Front, Rear), calculate the Z offset of each side with the following calculation:

`Z Offset = (Recorded Z Value - Center Z Value)`

Compute the 6 resulting values for (Middle, Front, Rear) and (Left, Right).

## Comparisons

If the Z offsets match for the same three X positions along the different Y values there is likely a twisted X extrusion - (or the bed is a perfect taco)
