---
layout: default
title: "Voron Switchwire - SKR mini E3 V3.0 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V3.0 Wiring

## Initial Preparation

* Reconfigure the on-board jumper(s) as shown {See the lime green jumper(s)}

![](./images/SKR_mini_E3_V3.0_for_Prep_and_Wiring_Diagram_150.jpg)

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, ZAm, and Em
* Plug Hot End thermistor to thermistor TH0
* Plug Hot End heater in to E0
* Plug Hot End Fan in to FAN1
* Plug Part Cooling Fan in to FAN0
* Plug Bed Thermistor in to THB
* Connect Bed Heater to HB connector
* Connect X end stop to X-STOP connector
* Connect Y end stop to Y-STOP connector
* Plug Probe GND and Signal (with BAT85 diode) in to Z-STOP
* Connect Probe +V to VIN in terminal on "DCIN (Power In)" connector
* Wire 24V and -V from DC power supply to VIN and GND terminals of the "DCIN (Power In)" connector
* Connect USB Cable to your SKR mini E3, but do not connect it yet to your Raspberry Pi

![](./images/SW_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg)


<!--### Here is the URL for the [Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/skr_mini_e3_v2_config.cfg)-->

## Color PIN Diagram for SKR Mini E3 V3.0
For reference, here is the Color PIN diagram for the SKR mini E3 V3.0

![](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.jpg)

## Original SKR Mini E3 V3.0 Pinout

For reference, here is the original pinout of the SKR mini E3 V3.0

![](./images/miniE3-v30-pinout.png)

## Here is the URL for the [GitHub repository of BTT SKR mini E3 V3.0](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V3.0/Hardware)
