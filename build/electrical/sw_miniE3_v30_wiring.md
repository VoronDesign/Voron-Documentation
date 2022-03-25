---
layout: default
title: "Voron Switchwire - SKR mini E3 V3.0 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V3.0 Wiring

## Initial Removal of Jumpers

* There is only **one jumper** on the SKR mini E3 V3.0 board.  This jumper will be set in the next step.

## Initial Preparation

* Set the on-board jumper, located at the position as shown by the **<span class="color-blind-green">GREEN</span>** jumper in the diagram below:

###### ![](./images/SKR_mini_E3_V3.0_for_Prep_and_Wiring_Diagram_150.png) {#PREP_SKR_mini_E3_V3.0}

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
* Connect Probe +V (Probe Voltage) to VIN in terminal on "DCIN (Power)" connector
* Wire 24V and -V from DC power supply to VIN and GND terminals of the "DCIN (Power)" connector
* Connect USB Cable to your SKR mini E3, **but do not connect it yet to your Raspberry Pi**

### MCU Diagram

###### ![](./images/SW_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg) {#SW_Wiring_Diagram_SKR_mini_E3_V3.0}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SW_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg){:target="_blank" rel="noopener"}</span>

<div> 

<!--### The Klipper Configuration file for SKR Mini E3 V3.0

The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for SKR Mini E3 V3.0 board is [located here](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/xxxxxxxskr_mini_e3_v3_config.cfg)
--> 

</div>

## Color PIN Diagram for SKR Mini E3 V3.0
For reference, here is the Color PIN diagram for the SKR mini E3 V3.0

###### ![](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.jpg) {#skr_mini_E3_V3.0_Color_PIN_diagram}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.pdf){:target="_blank" rel="noopener"}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.jpg){:target="_blank" rel="noopener"}

## Original SKR Mini E3 V3.0 Pinout

For reference, here is the original pinout of the SKR mini E3 V3.0

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR mini E3 V3.0 schematic diagram](<./images/BTT E3 SKR MINI V3.0_SCH.pdf>){:target="_blank" rel="noopener"}

###### ![](./images/miniE3-v30-pinout.png) {#miniE3-v30-pinout}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](<./images/BTT E3 SKR MINI V3.0_PIN.pdf>){:target="_blank" rel="noopener"}

### The BTT's GitHub Repo for the BTT SKR mini E3 V3.0 Board

*  BTT's documentation for BTT SKR mini E3 V3.0 board is [located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V3.0){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please use the [above Color Pin Diagram, look for "Klipper Building Options"](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.pdf){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to create the Klipper Config file (printer.cfg), please see the config file for SKR mini e3 V2 [located here; Select "SW SKR mini e3 V2.0"](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} as a starting point;

    * Please use the Color PIN Diagrams, [displayed above](#skr_mini_E3_V3.0_Color_PIN_diagram), as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.


4. After creating/editing the Klipper Config file (printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}