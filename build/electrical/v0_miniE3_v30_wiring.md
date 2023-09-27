---
layout: default
title: "Voron V0 - SKR mini E3 V3.0 Wiring"
parent: Electrical Wiring
grand_parent: The Build
nav_exclude: true
---

# Voron V0.1 - SKR mini E3 V3.0 Wiring

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, ZAm, and Em
* Insert hotend heater wires into screw terminals E0 (PC8)
* Insert bed heater wires into screw terminals HB (PC9)
* Plug hotend thermistor into TH0 (PA0)
* Plug bed thermistor into THB (PC4)
* Plug part-cooling fan in to FAN0 (PC6)
* Plug hotend fan into FAN1 (PC7)
  * Note that if you are using a 5V fan (typically supplied with V0 kits), you will need to remove the red-wire from the JST connector, and insert it into a 5V   source (e.g. on pin 2 of Z-probe connector; see pinout below).
Otherwise, you will burn out your fan immediately.
* Plug X end stop into X-STOP (PC0)
* Plug Y end stop into Y-STOP (PC1)
* Plug Z end stop into Z-STOP (PC2)
* Wire 24V and -V from DC power supply to VIN and GND
* Connect USB Cable to your SKR mini E3, but do not connect it yet to your Raspberry Pi

![SKR mini E3 V3.0 Pinout](./images/miniE3-v30-pinout.png)
