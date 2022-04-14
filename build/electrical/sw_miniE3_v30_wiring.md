---
layout: default
title: "Voron Switchwire - SKR mini E3 V3.0 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V3.0 Wiring

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, ZAm, and Em
* Plug Hot End thermistor to thermistor TH0
* Plug Hot End heater in to FAN2
* Plug Electronics Fan in to FAN1
* Plug Part Cooling Fan in to FAN0
* Plug Bed Thermistor in to THB
* Connect Bed Heater to HB connector
* Connect X end stop to X-STOP connector
* Connect Y end stop to Y-STOP connector
* Plug Probe GND and Signal (with BAT85 diode) in to Z-STOP
* Connect Probe +V to VIN in terminal next to HB
* Wire 24V and -V from DC power supply to VIN and GND terminals in corner
* Connect USB Cable to your SKR mini E3, but do not connect it yet to your Raspberry Pi

## Mini E3 V3.0 Pinout

For reference, here is the pinout of the SKR mini E3 V3.0

![](./images/miniE3-v30-pinout.png)
