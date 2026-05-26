---
layout: default
title: Cascade Build Options
parent: Voron CNC Build
nav_order: 1
has_children: false
---

This page outlines the various build options available when building a Cascade.

# Work Table

There are at least two supported work tables.  Minimum table size is 300x200, maximum table size is 350x230. 

* An extrusion based table that utilizes 2 of the 100mm wide Misumi single-sided extrusions.  The additional tapped holes on the top of the carriage adapters are to support the extrusion table.  This is the least expensive option.
* A solid aluminum grid-style table with a pattern of M6 holes to allow a variety of hold-down clamps.  This is the preferred option. 

If a consumable wood surface is desired, the recommendation is to use an extrusion based table and a wood surface bolted on top with countersunk FHCS. 

# Spindle

The recommended default spindle is a 1.5 kW 24,000 RPM air cooled AC spindle that is 65mm in diameter, paired with an H100 VFD, with the combination rated at either 110V or 220V.  A supported alternative from the same manufacturer is an 800W 24,000 RPM water cooled spindle that is also 65mm and connected to the same VFD.  An aftermarket spindle mount is required for both as the provided mount does not fit.

If absolutely desired, there is a capability to use a 500W or 600W 11,000 RPM 48 VDC spindle fed by a PWM drive module.  However that does require upgrading to a 600W 48V power supply and does not support RS485 control.  This is not a preferred option due to the combination of low RPM and lower power.

For all spindles, ER11 collet size is the minimum and the ER16 collet size is recommended.  

# Controller and Drivers

There are currently two supported options for the controller:

* BTT Scylla
* FlexiHAL

# Input Voltage

Both 110V and 220V inputs are supported.  The only required difference is the voltage of the spindle, as all other specified power supplies are full range.

# Tool Length Sensor

Two tool length sensors are supported.


---

