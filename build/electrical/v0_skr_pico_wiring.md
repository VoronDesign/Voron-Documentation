---
layout: default
title: "Voron V0.1 - SKR Pico v1.0 Wiring"
parent: Electrical Wiring
grand_parent: The Build
nav_exclude: true
---

# Voron V0.1 - SKR Pico Wiring

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions X, Y, Z1, and E
* Plug Hot End thermistor to thermistor TH0
* Plug Hot End heater in to HE
* Plug Hot End Fan (+) in to 5Pin connector (5V pin)
* Plug Hot End Fan (-) in to FAN2
* Plug Part Cooling Fan in to FAN1
* Plug Bed Thermistor in to THB
* Connect The DC bed to HB
* Connect X end stop to X-STOP connector
* Connect Y end stop to Y-STOP connector
* Connect Z end stop to Z-STOP connector
* Wire 24V and -V from DC power supply to POWER
* Connect USB Cable to your SKR Pico, but do not connect it yet to your Raspberry Pi

![SKR Pico wiring diagram for Voron V0](.images/../images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg)

## SKR Pico Pinout

For reference, here is the pinout of the BTT SKR Pico

![SKR Pico Pinout](./images/skr-pico-pinout.png)
