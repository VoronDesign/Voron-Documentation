---
layout: default
title: Slicer Setup
parent: The Build
nav_order: 6
---

# Slicer Setup

All modern mainstream slicers are able to produce high quality prints when properly configured for your printer. The Voron community maintenances a set of slicer profiles that you can use as a known good starting point for further tuning.

Proper understanding of slicer settings will have a tremendous impact on print results. Try to learn more about your favorite slicer and tweak the settings to meet your needs.

While using different slicers for different kinds of prints can be beneficial avoid blindly hopping between slicers and slicer profiles just because someone posted a nice print sliced with a different slicer.

## Slicer Selection

There are two slicers that come with built in profiles for most Voron printers:

* Cura
* Super Slicer

Other slicers that can be configured to support Voron printers but do not have built in support:

* Prusa Slicer
* Simplify3D
* Slic3r

Some slicers (e.g. PrusaSlicer) do not recognize the Klipper PRINT\_START macro as a valid start macro and add an additional bed heat and nozzle heat to the start gcode.  If examination of the output gcode shows an M109 and/or M190 before the PRINT\_START macro, consider using a different or newer slicer that recognizes that macro as a valid start macro.

## Slicer Profile Creation

Both Cura and SuperSlicer (in current versions) have built-in profiles for V2 printers which can be setup usin each software's normal processes.  The V1 is similar enough to V2 that the profile can be re-used.

Some pre-built slicer profiles are available from Voron.

* [Voron 2.4 - PrusaSlicer / SuperSlicer](https://github.com/VoronDesign/Voron-2/tree/Voron2.4/slicer_profiles/PrusaSlicer)
* [Voron 2.4 - Cura](https://github.com/VoronDesign/Voron-2/tree/Voron2.4/slicer_profiles/cura/Voron_Cura)

Profile generation for V0 and Switchwire is ongoing.

## Preheat and Start Sequences

For maximum quality and accuracy, preheating the printer is recommended.  This can be part of a scripted process or separate.  A preheat of at least 10 minutes is highly recommended in order to bring all components to thermal expansion equilibrium.  This time may vary depending on many factors including the size of the printer and bed heater.

Every printer is going to have a start sequence that typically involves homing and/or leveling to prepare the printer.  This is in addition to heating the nozzle and bed and doing other tasks.  Look at the PRINT_START macro in the printer.cfg for the standard process.  For additional information or ideas, check the [macros page](./additional/macros.md).

---
### Next: [First Print](./first_print.md)
