---
layout: default
title: "Voron V2 - BTT SKR V1.4/V1.4Turbo Wiring"
nav_exclude: true
has_children: true
---

# Voron V2 - BTT SKR V1.4/V1.4Turbo Wiring

## What is the difference between UART mode and SPI mode?

* This stuff refers to the way the hardware communicates. SPI is significantly faster than UART. In some cases, an SPI solution can be three times faster than a UART solution.

* So, how do you know which mode to pick? It depends on the stepper motor drivers you choose to buy with the SKR V1.4 board or SKR V1.4 Turbo board.  The list below shows which stepper motor drivers are UART mode and which are SPI mode.
<span> <br> </span>

### For Further Information

* Read this article ["Understanding the Difference Between UART vs SPI" ](./images/What_is_the_Difference_Between_SPI_vs_UART.pdf#toolbar=1&page=1){:target="_blank" rel="noopener"}

* A nice [comparison chart of the different TMC stepper motor drivers](https://learn.watterott.com/silentstepstick/comparison/){:target="_blank" rel="noopener"}


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