---
layout: default
title: "Trident - BTT SKR V1.4/Turbo and EXP-MOT Wiring for both SPI and UART modes"
nav_exclude: true
has_children: true
has_toc: false
---

# Trident - BTT SKR V1.4/Turbo and EXP-MOT Wiring for both SPI and UART modes

## What is the difference between UART mode and SPI mode?

* This stuff refers to the way the hardware communicates.

* So, how do you know which mode to pick? It depends on the stepper motor drivers you choose to buy with the SKR V1.4/Turbo and EXP-MOT V1.0 boards.

* The list below shows which stepper motor drivers are UART mode and which are SPI mode.

* In the list below, locate the name of the stepper motor drivers that were purchased with the boards and click on their name.

## Information

* Read this article ["Understanding the Difference Between UART vs SPI" ](./images/What_is_the_Difference_Between_SPI_vs_UART.pdf#toolbar=1&page=1){:target="_blank" rel="noopener"} for further information.

* Here is a [comparison chart of the different TMC stepper motor drivers](https://learn.watterott.com/silentstepstick/comparison/){:target="_blank" rel="noopener"}


## SPI Mode TMC Driver List

### SPI Mode TMC Drivers That Use 24 VDC:

1.  [TMC2100](./tri_skrv14_exp-mot_spi_wiring#trident---skr-v14turbo-and-exp-mot-tmc2100-tmc2130-tmc5160-tmc5161-tmc5160hv-tmc5160pro-wiring){:target="_blank" rel="noopener"}
2.  [TMC2130](./tri_skrv14_exp-mot_spi_wiring#trident---skr-v14turbo-and-exp-mot-tmc2100-tmc2130-tmc5160-tmc5161-tmc5160hv-tmc5160pro-wiring){:target="_blank" rel="noopener"}
3.  [TMC5160](./tri_skrv14_exp-mot_spi_wiring#trident---skr-v14turbo-and-exp-mot-tmc2100-tmc2130-tmc5160-tmc5161-tmc5160hv-tmc5160pro-wiring){:target="_blank" rel="noopener"}
4.  [TMC5161](./tri_skrv14_exp-mot_spi_wiring#trident---skr-v14turbo-and-exp-mot-tmc2100-tmc2130-tmc5160-tmc5161-tmc5160hv-tmc5160pro-wiring){:target="_blank" rel="noopener"}

### SPI Mode TMC Drivers That Use 48 VDC or Higher:

1. [TMC5160HV](./tri_skrv14_exp-mot_spi_wiring#trident---skr-v14turbo-and-exp-mot-tmc2100-tmc2130-tmc5160-tmc5161-tmc5160hv-tmc5160pro-wiring){:target="_blank" rel="noopener"}
2. [TMC5160_PRO](./tri_skrv14_exp-mot_spi_wiring#trident---skr-v14turbo-and-exp-mot-tmc2100-tmc2130-tmc5160-tmc5161-tmc5160hv-tmc5160pro-wiring){:target="_blank" rel="noopener"}


## UART Mode TMC Driver List

### UART Mode TMC Drivers That Use 24 VDC:

1.  [TMC2208](../../../build/electrical/tri_skrv14_exp-mot_uart_wiring#trident---skr-v14turbo-and-exp-mot-tmc2208-tmc2209-tmc2225-tmc2226-wiring){:target="_blank" rel="noopener"}
2.  [TMC2209](../../../build/electrical/tri_skrv14_exp-mot_uart_wiring#trident---skr-v14turbo-and-exp-mot-tmc2208-tmc2209-tmc2225-tmc2226-wiring){:target="_blank" rel="noopener"}
3.  [TMC2225](../../../build/electrical/tri_skrv14_exp-mot_uart_wiring#trident---skr-v14turbo-and-exp-mot-tmc2208-tmc2209-tmc2225-tmc2226-wiring){:target="_blank" rel="noopener"}
4.  [TMC2226](../../../build/electrical/tri_skrv14_exp-mot_uart_wiring#trident---skr-v14turbo-and-exp-mot-tmc2208-tmc2209-tmc2225-tmc2226-wiring){:target="_blank" rel="noopener"}