---
layout: default
title: "Voron V0.1 - SKR mini E3 V3.0 Wiring"
nav_exclude: true
---

# Voron V0.1 - SKR mini E3 V3.0 Wiring

## Initial Removal of Jumpers

* There is only **one jumper** on the SKR mini E3 V3.0 board. This jumper is called "Neo-PWR1" jumper.  See the next section about this jumper.

## Initial Preparation - Set Jumper

* The Neo-PWR1 jumper setting will decide the source of the SKR's 5V rail. The board's 5V rail can be sourced from the board itself or from an external DCDC bridge module.  One can purchase an external DCDC bridge module (sold separately) to power 5V NeoPixel LEDs.  This bridge module is called the "DCDC Mode V1.0" board. Since the Voron printer does not require the extra DCDC bridge module, **set the Neo-PWR1 jumper** so that the board's 5V rail will be powered by the MCU (as shown by the **<span class="color-blind-green">GREEN</span>** jumper in the diagram below).

###### ![](./images/SKR_mini_E3_V3.0_for_Prep_and_Wiring_Diagram_150.png) {#PREP_v01_SKR_mini_E3_V30}

### USB Voltage Selection Header

* Ensure the **removal of the SW_USB 5V power supply jumper ("SW_USB header, shown in the <span class="color-blind-purple">PURPLE box</span>")** which avoids the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* Ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-orange">ORANGE boxes</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstops.

###### ![gone baby gone](./images/SKR_MINI_E3_V3.0_voltageselect.png) {#SSKR_MINI_E3_V30_voltageselect_v01}

## MCU

* - [ ] Plug in stepper motors for X in positions Xm (motor connector)
* - [ ] Plug in stepper motors for Y in positions Ym (motor connector)
* - [ ] Plug in stepper motors for Z in positions ZAm (motor connector)
* - [ ] Plug in stepper motors for E in positions Em (motor connector)
* - [ ] Plug Hot End thermistor to thermistor TH0 (PA0)
* - [ ] Plug Hot End heater in to E0 (PC8)
* - [ ] Plug Hot End Fan Signal in to FAN1 (PC7)
* - [ ] Plug Hot End Fan's V+ (+5VDC) into Z-Probe's NPWR PIN
* - [ ] Plug Part Cooling Fan in to FAN0 (PC6)
* - [ ] Plug Bed Thermistor in to THB (PC4)
* - [ ] Connect The DC bed to HB (PC9)
* - [ ] Connect X end stop to X-STOP connector (PC0)
* - [ ] Connect Y end stop to Y-STOP connector (PC1)
* - [ ] Connect Z end stop to Z-STOP connector (PC2)
* - [ ] Wire 24V and -V from DC power supply to VIN and GND terminals of the POWER/DCIN connector
* - [ ] Connect USB Cable to your SKR mini E3,&nbsp;**but do not connect it yet to your Raspberry Pi**

### MCU Diagram

###### ![](./images/Voron0.1_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg) {#Voron01_Wiring_Diagram_SKR_mini_E3_V30}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/Voron0.1_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg){:target="_blank" rel="noopener"}</span>

## Raspberry Pi

### Power
* The BTT SKR mini E3 V3.0 board is **NOT capable of providing 5V power** to run your Raspberry Pi.

### Setting up UART Communications with the Raspberry Pi

* see [the SKR mini E3 V3.0 Raspberry Pi Section](./skr_miniE3v30_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

### The Klipper Configuration file for SKR mini E3 V3.0 Board

The Klipper Configuration file from VoronDesign/Voron-0 GitHub Repo, Voron0.1 branch for SKR mini E3 V3.0 board is [located here](https://raw.githubusercontent.com/VoronDesign/Voron-0/Voron0.1/Firmware/skr-mini-E3-v3.0.cfg){:target="_blank" rel="noopener"};

## URL Resources Links for the SKR mini E3 V2.0 (PIN Diagrams and Repo)

* see [The SKR mini E3 V3.0 Resource Section](./mini_e3_v30_Resources#color-pin-diagram-for-skr-mini-e3-v30){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please use the [Color Pin Diagram displayed here, look for "Klipper Building Options"](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.pdf){:target="_blank" rel="noopener"}; an alternative source of information on [how to build and install the Klipper firmware for the SKR mini E3 V3.0 is located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/firmware/V3.0/Klipper#how-to-use-klipper-on-skr-mini-e3-v30){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create/edit** the Klipper Config file (skr-mini-E3-v3.0.cfg rename it to printer.cfg) to ensure your Voron build matches your Klipper Config file, please see [the file located here; Select "V0 SKR mini e3 3.0"](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed here](./mini_e3_v30_Resources#color-pin-diagram-for-skr-mini-e3-v30){:target="_blank" rel="noopener"}, as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.


4. After **creating/editing** the Klipper Config file (skr-mini-E3-v3.0.cfg renamed to printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}