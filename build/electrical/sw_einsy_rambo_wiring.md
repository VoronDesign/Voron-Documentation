---
layout: default
title: "Voron Switchwire - Einsy Rambo Wiring"
nav_exclude: true
---
# Voron Switchwire - Einsy Rambo Wiring

## Initial Removal of Jumpers

* The Einsy Rambo will arrive without any jumpers being set.

## Initial Preparation - Set Jumpers

* **All** Jumpers should be removed from the Einsy Rambo board.

## MCU

* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, Z, and E</span> in <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">positions X, Y, Z, and E0</span>
* Plug <span style="text-shadow: 2px 2px 5px #dcc623; font-size: 125%;">Hot End thermistor</span> to <span style="text-shadow: 2px 2px 5px #00ff00; font-size: 125%;">thermistor T0 (PF0)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End heater</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">extruder heater "HEAT-0/Heater output" (PE5)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN-1 (PH5)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Part Cooling Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN-2 (PH3)</span>
* Plug <span style="text-shadow: 2px 2px 5px #a286c0; font-size: 125%;">Bed Thermistor</span> in to <span style="text-shadow: 2px 2px 5px #0c7b84; font-size: 125%;">thermistor T2 (PF2)</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Bed Heater</span> to <span style="text-shadow: 2px 2px 5px #0e7a86; font-size: 125%;">Bed Output (PG5)</span>
* Connect <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X end stop</span> to <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X-MIN (PB6)</span>
* **_<span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">Y Endstop is not used</span>._**
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">inductive probe</span> to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Probe input (PB4), on pins +, -, and 's'</span> on the drawing.  **_<span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">Pin 1 (T) is unused.</span>_**
* Wire <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">+V and -V</span> from DC power supply to <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">both Power Input and Bed Power Input</span>.
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">USB Cable</span>, <span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">but do not connect it yet to your Raspberry Pi</span>

### MCU Diagram

![](./images/SW_EinsyRambo1.1B_Wiring_Diagram_150.jpg)

* <span style="text-shadow: 0 0 3px #FF0000; font-size: 110%;">Downloadable Einsy Rambo Wiring Diagram in .jpg format is [located here](./images/SW_EinsyRambo1.1B_Wiring_Diagram_150.jpg)</span>

## Please Ensure the Heat Sinks are Installed Before Use
<span> <br> </span>
![](./images/EinsyRambo1.1b_PREP-WiringDiagram-heatsinks_150.png)

## mini 12864 Display

* See [the mini12864 guide](./mini12864_klipper_guide.md)

### The Klipper Configuration file for Einsy Rambo Board

The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for Einsy Rambo is [located here](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/einsy_config.cfg)

## Einsy Rambo Pinout

For reference, here is the pinout of the Einsy Rambo

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [The Einsy Rambo schematic diagram](https://github.com/ultimachine/Einsy-Rambo/blob/1.1a/board/Project%20Outputs/Schematic%20Prints_Einsy%20Rambo_1.1a.PDF)

![](./images/EinsyRambo1.1a-connections.jpg)

* Downloadable and ZOOM capable web display for Einsy Rambo original pinout is [located here](https://nbviewer.org/github/GadgetAngel/EinsyRambo/blob/main/EinsyRambo11_Pinout.pdf)

