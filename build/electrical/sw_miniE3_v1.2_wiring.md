---
layout: default
title: "Voron Switchwire - SKR mini E3 V1.2 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V1.2 Wiring

## Initial Preparation

* Set the on-board jumper(s), located at the positions as shown by the GREEN jumper(s) in the below diagram:

* Please take NOTE of the red jumper ("Stepper Mode" Jumper).  Please set this Jumper to the Stealthchop Mode or SpreadCycle Mode.

![](./images/SKR_mini_E3_V1.2_for_Prep_Diagram_150.png)

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, Zm, and Em
* Plug Hot End thermistor to thermistor TH0
* Plug Hot End heater in to E0
* Plug Hot End Fan Signal into PT-DET's Signal PIN
* Plug Hot End Fan V+ and GND into FAN1
* Plug Part Cooling Fan in to FAN0
* Plug Bed Thermistor in to THB
* Connect Bed Heater to HB connector
* Connect X end stop to X-STOP connector
* Connect Y end stop to Y-STOP connector
* Plug Probe GND and Signal (with BAT85 diode) in to Z-STOP
* Connect Probe +V (Probe Voltage) to VIN in terminal on the "Power DCOUT" connector next to HB
* Wire 24V and -V from DC power supply to VIN and GND terminals in corner on the "Power DCIN (Power In)" connector
* Connect USB Cable to your SKR mini E3, but do not connect it yet to your Raspberry Pi

### MCU Diagram

![](./images/SW_Wiring_Diagram_SKR_mini_E3_V1.2_150.jpg)

## Please Ensure the Heat Sinks are Installed Before Use

![](./images/SKR_E3_Mini_V1.2_heatsinks_150.png)

<!--### Here is the URL for the [Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/skr_mini_e3_v2_config.cfg)-->

## Color PIN Diagram for SKR Mini E3 V1.2
For reference, here is the Color PIN diagram for the SKR mini E3 V1.2

![](./images/SKR_mini_E3_V1.2_Color_PIN_diagram_300.jpg)

## Original SKR Mini E3 V1.2 Pinout

For reference, here is the original pinout of the SKR mini E3 V1.2

![](./images/miniE3-V12-pinout.png)

### The BTT's GitHub Repo for the BTT SKR mini E3 V1.2 Board

The GitHub repository for BTT SKR mini E3 V1.2 board is [located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V1.2)
