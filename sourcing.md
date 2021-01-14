---
layout: default
title: Sourcing Information
has_children: true
nav_order: 4
---

# Sourcing Information

## Bill of Materials and Source Guide

The Bill of Materials (BOM) is generated from the [Voron Design website](http://vorondesign.com).  Select the printer to be built, then select 'Configurator' and choose from the parameters.  A customized BOM will be presented.  The BOM is considered the absolute guide for what is actually required to build the printer.

The Sourcing Guide is made available at the same time as the customized BOM.  It is a list of Voron maintained references to where to purchase the various components listed on the BOM for the different printers.  _The sourcing guide is not customized to the printer.  All quantities are mostly incorrect._  There are additional tabs at the bottom of the sourcing guide for optional or additional components.

## Printing Parts

### Material

Voron printers are designed to print ABS and other filaments that require an enclosure. Depending on the model, size of printer, and materials used for the enclosure, chamber temperatures may exceed 60°C. As a result, Voron recommends printing the structural components for your printer out of a material that has a heat deflection temperature of at least 90°C. While there are more exotic materials that meet this criteria, ABS and ABS+ are the most common and cost effective options. PC-ABS is not recommended for anything outside of the toolhead due to the overly-high stiffness.

Using a resin printer for components is not recommended. Most hobby-grade resins have issues with long-term dimensional stability as they [creep](https://en.wikipedia.org/wiki/Creep_(deformation)) over time. There are commercial resins that may work but there is no definitive list at this time.

### Print It Forward (PIF)

If you are not able to print the ABS parts of a Voron yourself, there is a community-driven service called Print it Forward (PIF) in place. The goal of PIF is to provide a set of necessary structural parts for a Voron printer of your desire, printed on a Voron 3D Printer, showcasing their print quality. Every PIF-Provider undergoes a thorough vetting procedure in order to provide parts capable of demonstrating of what a Voron is capable of. PIF is a non-profit project, the pricing is set to compensate for the filament, energy and wear on the provider's rig.

More information and the current queue length can be found on the [PIF Website](https://pif.voron.dev/). There is also a separate channel on the Voron discord, where questions can be asked.

### Colors and Quantities

The recommended accent parts are denoted with a "[a]_" in the filename. Many of these are still functional in nature and should still follow the recommended print settings.

Filenames that end with "_x#", indicate that the part must be printed multiple times (ie. x2, x4, etc.)

Typical printers require approximately 1.5kg of the primary color and 0.3kg of the alternate color, assuming no failed or reprinted parts. Most people end up reprinting a few parts and a few mods, so plan on 2kg of the primary color.

### Print Settings

These are the recommended settings.

- Layer height: 0.2mm
- Extrusion width: 0.4mm, forced
- Infill pecentage: 40%
- Infill type: grid, gyroid, honeycomb, triangle, or cubic
- Wall count: 4
- Solid top/bottom layers: 5
- Supports: NONE


## Ordering Parts

For every printer on the main webpage, there is a method to generate a bill of materials (BOM).  That is the definitive guide for what parts are required for that printer.  The BOM also references the sourcing guide.  The sourcing guide is a list of recommended vendors for the various components that are required to build a printer.  While there may be quantities listed on the sourcing guide, those numbers are not guaranteed to be accurate and we strongly recommend that people reference the BOM for specific quantities.

*When purchasing small items, it is recommended to buy extras (round up). Having a few extra screws or connectors around may actually help you later.*

_Note:_ The generated BOM part numbers for Misumi extrusions are the exact part numbers.  Enter them into Misumi's website and they will return exactly what needs to be ordered, including any extra drilling or tapping operations.

There are a growing number of suppliers that are assembling kits to build Voron printers.  Outside of the sourcing guide, Voron does not implicitly endorse any specific vendor of Voron kits.

### Parts Selection / Alternates

When choosing extrusions, V-slot extrusions are discouraged.  This is due to the use of the MGN9 linear rail as the V-slot and width of the rail are very close and cause misalignment.  Vendors of extrusions other than Misumi are generally fine but verification of the extrusion profile is highly recommended.

If trying to keep costs down, the display / screen on any printer is entirely optional. Many builders solely use the web interface.

Builders are welcome to make substitutions as they see fit but this printer is not a race to be as cheap as possible. It is designed to compete with many other high-end printers while still being affordable. Substituting parts may also have other unintended side effects and cause compatibility issues. Please feel free to ask for advice before any substitutions are made.

More sourcing information can be found in the [sourcing FAQ](./sourcing_faq.md)

## Tools

### Required Tools

_It might be possible to build, troubleshoot, and tune a Voron without this list, but it will be much harder._

* Set of metric hex wrenches ("keys") from at least 1.5mm - 5mm. (Wiha, Wera, or Bondhus are preferred)
* Standard screwdrivers
* Wire strippers from 16 gauge (1.5mm) to 28 gauge (0.8mm)
* Diagonal wire cutters, small
* Soldering iron (solder helpful)
* Multimeter
* Metric calipers, 6"/150mm
* Crimpers
	* Molex Crimpers (Good: IWISS IWS-3220M, Better: Engineer PA-09, Best: Molex Crimper)
	* Ferrule Crimpers
	* Terminal Crimpers

### Helpful / Nice To Have Tools

_These make Voron life a little nicer._

* Needle nose pliers
* Tweezers
* Small "X-Acto" knife
* Machinist scale / ruler, either 6"/150mm or 12"/300mm
* Machinist square, 4"/100mm or larger (Sometimes called "locksmith angles", see DIN 875)
* Deburring tool
* Small flashlight
* Precision screwdriver set
* Heat shrink labeler

---

### Next: [The Build](./build/index.md)
