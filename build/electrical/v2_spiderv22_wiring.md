---
layout: default
title: "Voron V2 - Fysetc Spider V2.2 Wiring"
nav_exclude: true
has_children: true
---

# Voron V2 - Fysetc Spider V2.2 Wiring

## What is the difference between UART mode and SPI mode?

* This stuff refers to the way the hardware communicates. SPI is significantly faster than UART. In some cases, an SPI solution can be three times faster than a UART solution.

* So, how do you know which mode to pick? It depends on the stepper motor drivers you choose to buy with the Fysetc Spider V2.2 board.  The list below shows which stepper motor drivers are UART mode and which are SPI mode.

## UART Mode TMC Driver List

### UART Mode TMC Drivers That Use 24 VDC:

1.  TMC2208
2.  TMC2209
3.  TMC2225
4.  TMC2226


## SPI Mode TMC Driver List

### SPI Mode TMC Drivers That Use 24 VDC:

1.  TMC2100
2.  TMC2130
3.  TMC5160
4.  TMC5161

### SPI Mode TMC Drivers That Use 48 VDC or Higher:

1. TMC5160HV
2. TMC5160_PRO