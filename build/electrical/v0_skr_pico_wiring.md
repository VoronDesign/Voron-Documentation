---
layout: default
title: "Voron V0.1 - SKR Pico v1.0 Wiring"
nav_exclude: true
---

# Voron V0.1 - SKR Pico Wiring

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions X(Xm), Y(Ym), Z1(ZAm), and E(Em)
* Plug Hot End thermistor to thermistor TH0
* Plug Hot End heater in to HE
* Plug Hot End Fan Signal in to FAN2
* Plug Hot End Fan V+ (5VDC) to "LASER" connector's 5V PIN
* Plug Part Cooling Fan in to FAN1
* Plug Bed Thermistor in to THB
* Connect The DC bed to HB
* Connect X end stop to X-STOP connector
* Connect Y end stop to Y-STOP connector
* Connect Z end stop to Z-STOP connector
* Wire 24V and -V from DC power supply to DCIN/POWER
* Connect USB Cable to your SKR Pico, but do not connect it yet to your Raspberry Pi

### ![](.images/../images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg)

### Here is the URL for [the Klipper Configuration file from VoronDesign/Voron-0 GitHub Repo, Voron0.1 branch for SKR Pico board](https://github.com/VoronDesign/Voron-0/blob/Voron0.1/Firmware/skr-pico-v1.0.cfg)

## Color PIN Diagram for SKR Pico

For reference, here is the Color PIN diagram for the SKR Pico

### ![](./images/Voron0.1_SKR_PICO_V1.0_Color_PIN_diagram.jpg)

## Original SKR Pico Pinout

For reference, here is the original pinout of the SKR Pico

![](./images/skr-pico-pinout.png)

### Here is the URL for the [GitHub repository of BTT SKR Pico](https://github.com/bigtreetech/SKR-Pico/tree/master/Hardware) 