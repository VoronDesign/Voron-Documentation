---
layout: default
title: I wish I had known
nav_exclude: true
---

# Introduction

Advice commonly given to new comers is to ask questions in discord. After reading through the docs, the BOM, the sourcing guide, and watching Nero's videos a person normally has the basics down and discord fills in the cracks that aren't covered or things just missed. Some things though are not obvious to ask so without months of lurking in discord and watching discussions important details may be missed. Often this information is just part of the fast paced learning the Voron community goes through as recommended practices adjust over time as a result of community learning. 

This guide as a result is intending to be fast summary of lessons learned that can be quickly adjusted over time. Information is meant to be sparse but searching in Discord or asking questions can fill in the gaps. The lessons are focused on the 2.4 printer, but may also apply to other printers.

# Lessons
## Expensive
1. Bed tacos are expensive and can be avoided by not heating too fast and not tightening fasteners cold! When tightening do one screw tight, 2 firm, and last one loose or not even there. You can confirm a taco by rotating the bed 90 degrees then doing a bed mesh to see if it rotates as well. Twisted extrusions could also make a bed look tacoed. 
1. Nozzle crashes can bend the frame
1. The button by the control knob is an e stop but only kills the z motors ... Wire the boards together and it will be for them all
1. The kit from magicstudio, digmach, or mostly vendor in discord chat will likely be of good quality. In contrast most kits from China are considered suspect quality for the power supply and SSR
1. Important: Do not unplug or re-plug motors from MCUs without powering down the printer. Damage to MCU may result.
1. Do not move the the stepper motors fast by hand if they are plugged in since they act as generators

## Build
1. Sourcing guide only shows where to buy not how much to buy. Source guide has other extra tabs like optional parts and tools.
1. The pulley used on the z motor is a 16 tooth pulley. At a glance, it's almost identical to the 20 tooth pulleys used elsewhere in the printer.
1. Z cubes should move a little
1. Loosen screws on gantry to d rack
1. While not spec most people use a PEI on spring steel attached the the bed with a magnet
1. Common options for magnet (don't use entergetic) subtle design, wambam, or mcmaster
1. How do people hide the wires? (there is a 3d printed wire hider on thingiverse that fits the 2020 extrusion)
1. T nuts what are they the types and how to put them in -- Nero's video on frame has some information on them
1. You can tell Keenovo to not put on adhesive so that high tempt RTV can be used instead
1. [Belt tension meter]( https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Kruppes/Tension_Meter)
1. Nero in a video mentioned that robotdigg black rails are more brittle
1. Misumi has economy alternatives
1. Spare belts are handy since local sources are often pricey
1. There is a printable corner tool for lining up the frame

### AfterBurner
1. There is a catch on the claw in the AfterBurner that fits into a notch. If you filiment does not grip tight at all check out the diagrams in the build guide to see if this is the issue.
1. Hone the AferBurner filament path with a very sharp drill bit
1. The switchwire manual has better info on the AfterBurner

### Wiring
1. Connectors for hotend and the probe could be put below the cover to help save space in the cover and make toolhead swaps faster
1. Wago wire nuts can help the build be more tidy
1. Use ptfe wiring from Remington
1. Only wiring on the drag chain needs to be ptfe, silicone, or etc
1. The heater should be 20 gauge but the others on the drag chain can be 24 gauge

## Things not in the sourcing guide
1. Dinn rails -- digikey has some
1. Amazon has cheap SSR mounts
