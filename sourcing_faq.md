---
layout: default
title: "Sourcing / Buying FAQ"
parent: Sourcing Information
---

# Sourcing / Buying FAQ

These are common questions for builders looking to gather all of the components for their upcoming build.

## Filament / Printing

### How much filament do I need for all printed parts?

Assuming no failed or reprinted parts and following the recommendations for accent parts, the following guidelines apply:

- V0:
- V1:
- V2: 1.6kg of primary color, 0.3kg of accent color.
- Switchwire:

### Can I print with a 0.6mm nozzle?

It is not recommended.

### Why does the BOM not match the Sourcing Guide?

The bill of materials (BOM) is a list specifically generated for the defined specifications of the printer being built.  The Sourcing Guide is very general for quantities and is not customized.  The BOM is considered the absolute reference for items and quantities needed.

## Hardware

### What are the "TPW" and "LCP-RCP" options for the frame?

These are the options specified to have Misumi tap and drill the hex key access holes in your extrusions. You can remove these options and do this yourself to save ~$40 USD. You will need appropriate tapping tools, oil, and patience to do it correctly which may add back up to $40 when it's all complete.

### The HNTAJ5-5 nuts are expensive. Do I really need this many?

No, you can substitute ball spring post-assembly nuts from Ali just as easily in 99% of the manual.

### Why do you recommend Chinese linear rails vs a Hiwin or THK genuine rail?

- We are not imparting cutting forces onto the carriages on the rails (ie: side loads), so the low preload and ok tolerances are good for this application
- A set of 7 V2 rails is the cost of one genuine mid-grade THK rail.
- Clean all of your rails, then grease them (there are numerous videos on youtube on how to do this). Pick your best rail for the X axis, then the Y, use the worst on the Z.

### Can I substitute MGN(insert rail size here) for MGN9H rails?

No, the Voron V1/V2 are not designed for anything but a MGN9H.

### Why does VORON-Design not use IGUS products?

IGUS bushings exhibit a phenomenon called stiction, therefore in small movements the bushings will actually stick instead of gliding, at small detail, this causes detrimental issues. The amount of slop required is unfavorable, tolerances are quite poor. Bushing life is low for the price when compared to Misumi and even standard chinese offerings.

### I cannot find MIC6 Aluminum anywhere, is there something else I can use?

Yes, try to find the following, they are all the same thing, with a different trade name:

- Mic 6
- Alpase K100-S
- Alca 5
- Vista Metals ATP 5
- Alimex 5083 (vendor is very important on this one)

Materials not supported, these are all not designed to take repeated heating and cooling cycles and will warp quickly:

- 6061
- 5052
- 5053
- 2024
- 7### series not listed above
- 5### series not listed above

### What lube should I use?

The currently recommended lube for the linear rails is Mobilux EP1 or EP2, or the NLGI equivalents. Either Super Lube or EP1/2 is recommended for the extruder gears.

### What kind of bolts are what?

![](./images/socket-screws-wirral.jpg)

### What are the hammer nuts used for?

The hammer nuts are intended to be used with the panel clips to allow easier removal and reinstallation. It is possible to apply some locktite and create quarter-turn fasteners.

## Wiring

### What is a good crimping tool to use for terminating wires?

Engineer PA-09, PA-20, or PA-21. Yes, it's worth the cost.

### What gauge wire should I use where?

The gantry wiring should be all 24 gauge wire except for the hot end heater, which should be wired with 20 gauge.  This will permit all of the wires to fit within the drag chains.  The power wiring (AC and DC) should be at least 20 gauge, preferably larger (18 or 16 gauge).

In metric units:
- Power Wiring/Mains Wiring: at least 1 mm², better 1.5 mm²
- Hotend Heater: 0.5 mm²
- Stepper Motors: 0.25 mm²
- everything else (endstops, thermistors, fans (if wired separately!), ...): 0.14 mm²; can also be done in 0.25 mm² for easier sourcing

### PTFE or Silicone wire?

The BOM currently specifies silicone wire for bend and heat tolerance.  For an increased cost, PTFE wire is a option.  PTFE insulation is thinner and slicker, making it more effective in the drag chains and granting the cables a longer lifetime.

## Electronics

### Why an SKR 1.4? What about Turbo?

The BTT SKR controller is inexpensive and extremely capable for the purpose. Either an SKR 1.3 or 1.4 is recommended and can be used. While both controllers have different pin configurations, they use the same controller chip. BTT is no longer producing the 1.3 and it will eventually be unavailable.

The Turbo version is certainly usable, but the additional speed is not required since most of the computing is handled by the Raspberry Pi.

### Can I use 0.9 degree stepper motors rather than the spec'ed 1.8 degree motors?

- They would not be recommended for the Z and E motors. These are already geared or screw driven which give them better resolution. Going to 0.9 degree motors would mean they would then need twice as many steps to go the same distance as a 1.8 degree motor. This combined with microstepping results in more cpu load on your boards and would then start to limit how fast you can drive these.
- They may have some beneficial affect on the XY axis (AB motors) which don't have the gearing that the Z and E assemblies have. Don't expect miracles though, filament variance is another factor that starts to be an issue as well when attempting small detail.
    - While 0.9 motor can be a bit quieter, from all accounts in an enclosed Voron the fans are likely to make most of the noise. So any noise benefit would be negligible.
    - Using the BOM spec MCU and klipper with 0.9deg steppers will limit your theoretical travel speeds greatly, just running 1/16 microstepping with 0.9deg XY motors and pressure advance with a 1.8deg stepper on the extruder is enough to easily overwhelm the board.

## Hot Parts

### Dragon standard flow or high flow?

The Dragon standard flow is capable of supporting nozzles up to 0.6mm. If planning on using 0.8mm nozzles or larger, the high flow is recommended.

### Does the Voron Support the Super Volcano

No, its a case of [shit design and metal fatigue waiting to happen](https://www.reddit.com/r/3Dprinting/comments/blqw6s/i_believe_there_was_some_initial_concern_about/).

---

### Back to [Sourcing Information](./sourcing.md)
