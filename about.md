---
layout: default
title: About Voron
nav_order: 2
---

# About Voron

The original goal of the VORON project, back in 2015, was to create a no-compromise 3D printer that was fun to assemble and a joy to use. It had to be quiet, clean, pretty, and continue to operate 24 hours a day without requiring constant fiddling. In short a true home micro-manufacturing machine without a hefty price tag. It took over a year in development, with every part being redesigned, stress tested and optimized. Shortly after the release a vibrant community formed around the project and continues to grow today. This community is part of what makes VORON such a special experience.

What was once a one-person operation has grown into a small tight-knit group of engineers united under a common design ethos. We're dedicated to creating production-quality printers you can assemble in your kitchen. It's this passion and dedication that drive us to push the boundaries just a little further. We build space shuttles with gardening tools so anyone can have a space shuttle of their own.

Welcome to VORON Design

### Motion System

All Voron printers are built using CoreXY or CoreXZ configurations to reduce the amount of moving mass, allowing increased acceleration and speeds. Depending on the printer, linear rails (MGN7, MGN9, MGN12) or linear rods may be used along the X, Y, and/or Z axes. Gates 6mm and/or 9mm belts are used for movement; genuine Gates Unitta belts are recommended over generic versions for improved reliability and performance. A simple stack of flanged F695 bearings are often used as smooth belt idlers, as the bearings are much larger than the more common GT2 idlers. This provides increased service life.

### Frames

All V1, V2, and Legacy frames are constructed with 2020 aluminum extrusions with a 6mm slot width.  The V0 is built with 1515 Makerbeam XL extrusions, and the Switchwire is constructed with 6030 and 3030 extrusions. Be sure to pay attention to the extrusion profile--not all extrusion types are the same, even if the outer dimensions are equal!

### Motion Control - Klipper

All Voron printers use [Klipper](https://www.klipper3d.org/Overview.html) firmware. Klipper uses a Raspberry Pi for all the computation-heavy tasks and sends a list of preprocessed orders to the controller board. This gives a considerable amount of flexibility as a variety of control boards (or combination of boards) can be easily configured. As well, more complex features such as input shaping (to reduce ringing) can be added no matter what control board is used. Finally, configuring firmware is fast and easy. Change to your desired parameter in an easy to read printer configuration file, save, and restart Klipper--a few seconds later the printer is ready to go!

### Serial Numbers

In 2015, the very first set of 18 Voron printers were packaged in RCF's garage and shipped as kits. As a fun addition, he gave each kit a serial number. While those were the only printers ever sold directly by RCF, the tradition has lived on as a way to represent the hard work each Voron owner puts into sourcing, assembling, and configuring their printer. It also is a great way to show how the community has grown throughout the years!

All it takes to receive a serial number after you have completed your build is to post a video of your printer printing on the Voron [Subreddit](https://www.reddit.com/r/voroncorexy/). Be sure to have your printer cleaned up with all cable management above the deck plate done. Wiring can be tricky, but do your best!

*Note: the serial submission process has become more automated now. In order to have the bot pick up your serial request video, be sure to use the "Serial Request" flair and add your full Discord name, including the unique 4 digit number (for example, #1234) after your username. Mods will review the requests periodically!* 

## Unsupported Configurations

### Large Format Printers

As print volumes for CoreXY printers grow, they become increasingly difficult to build, tune, operate, and maintain. Vorons are no exception to these fundamentals.

Please be mindful of the size specifications listed for each Voron printer -- these have been chosen based on limitations of the components and structure unique to each model. We do not recommend exceeding the largest size.

### Chamber Heating

There are a few reasons Voron does not and will not support active chamber heating:

* It is not necessary to use a chamber heater to achieve sufficient chamber temperatures for ABS or other common 3D printing materials.
* Chamber heating is easy to screw up for someone that doesn't have direct experience with properly designing, controlling, and mounting heaters in high temperature environments.
* If we spec something and people cheap out, there will be fires involved.
* If we spec something and people don't cheap out but don't install it correctly, there will be fires involved.
* Fire is bad.

### Exotic Materials (PEEK, PEI, etc.)

While Vorons are designed to be enclosed, chamber temperatures generally do not exceed 50-60C. This is perfect for printing ABS and most Nylon and PC blends, but it is insufficient for exotic materials such as PEEK and PEI which require 100-130C chamber temperatures. While the jump from 60C to 100C may not sound like a lot, most of the parts in your Voron printer will fail before 100C including: all of the 3D printed components, stepper motors, Gates belt, linear bearings, linear rail end caps, inductive probe, acrylic, and ABS panels, fans...

Voron printers are currently not designed for exotic materials and there are no plans to modify the design to support this in the future. We recommend purchasing an industrial printer designed for this purpose if you intend to print with these materials.

### Multimaterial

Voron does not currently support dual extrusion, dual hot ends, tool changers, or other multimaterial solutions. The only exception to this is the bowden Y splitter attachment which is available for the Afterburner tool head. --please note that this attachment is still considered "beta" level, and as with all Y-splitter solutions, tuning the filament switch routine can be difficult.



---

### Next: [Choosing a Printer / Extruder](./hardware.md)
