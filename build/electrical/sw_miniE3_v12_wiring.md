---
layout: default
title: "Voron Switchwire - SKR mini E3 V1.2 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V1.2 Wiring

## Initial Removal of Jumpers

* There is only **one jumper** on the SKR mini E3 V1.2 board.  This jumper will be set in the next step.

## Initial Preparation

* Set the on-board jumper, located at the position as shown by the **<span class="color-blind-green">GREEN</span>** jumper in the diagram below:

* Please take **<span class="underline-double-trouble color-blind-red-red">NOTE</span>** of the **<span class="color-blind-red-red">RED jumper ("Stepper Mode" Jumper)</span>**.  Please set this **<span class="color-blind-red-red">RED Jumper</span>** to the Stealthchop Mode or SpreadCycle Mode.

###### ![](./images/SKR_mini_E3_V1.2_for_Prep_Diagram_150.png) {#PREP_SKR_mini_E3_V1.2}

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, Zm, and Em
* Plug Hot End thermistor to thermistor TH0 (PA0)
* Plug Hot End heater in to E0 (PC8)
* Plug Hot End Fan Signal into PT-DET's Signal PIN (PC12)
* Plug Hot End Fan V+ and GND into FAN1
* Plug Part Cooling Fan in to FAN0 (PA8)
* Plug Bed Thermistor in to THB (PC3)
* Connect Bed Heater to HB connector (PC9)
* Connect X end stop to X-STOP connector (PC0)
* Connect Y end stop to Y-STOP connector (PC1)
* Plug Probe GND and Signal (with BAT85 diode) in to Z-STOP (PC2)
* Connect Probe +V (Probe Voltage) to VIN in terminal on the "Power DCOUT" connector next to HB
* Wire 24V and -V from DC power supply to VIN and GND terminals in corner on the "Power DCIN" connector
* Connect USB Cable to your SKR mini E3, **but do not connect it yet to your Raspberry Pi**

### MCU Diagram

###### ![](./images/SW_Wiring_Diagram_SKR_mini_E3_V1.2_150.jpg) {#SW_Wiring_Diagram_SKR_mini_E3_V1.2}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SW_Wiring_Diagram_SKR_mini_E3_V1.2_150.jpg){:target="_blank" rel="noopener"}</span>

## Please Ensure the Heat Sinks are Installed Before Use

###### ![](./images/SKR_E3_Mini_V1.2_heatsinks_150.png) {#SKR_E3_Mini_V1.2_heatsinks}

<div>

<!--### The Klipper Configuration file for SKR Mini E3 V1.2 board

The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for SKR Mini E3 V1.2 board is [located here](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/xxxxxxxxxxxxxxxsw_skr_mini_e3_v12_config.cfg)
-->

</div>

## Color PIN Diagram for SKR Mini E3 V1.2

For reference, here is the Color PIN diagram for the SKR mini E3 V1.2

###### ![](./images/SKR_mini_E3_V1.2_Color_PIN_diagram_300.jpg) {#SKR_mini_E3_V1.2_Color_PIN_diagram}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](./images/SKR_mini_E3_V1.2_Color_PIN_diagram_300.pdf){:target="_blank" rel="noopener"}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SKR_mini_E3_V1.2_Color_PIN_diagram_300.jpg){:target="_blank" rel="noopener"}

## Original SKR Mini E3 V1.2 Pinout

For reference, here is the original pinout of the SKR mini E3 V1.2

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR mini E3 V1.2 schematic diagram](<./images/BTT SKR mini E3 V1.2sch.pdf>){:target="_blank" rel="noopener"}

###### ![](./images/miniE3-V12-pinout.png) {#miniE3-V12-pinout}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](<./images/BTT SKR MINI E3 V1.2PIN.pdf>){:target="_blank" rel="noopener"}

### The BTT's GitHub Repo for the BTT SKR mini E3 V1.2 Board

*  BTT's documentation for BTT SKR mini E3 V1.2 board is [located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V1.2){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please see [The Build ═► Software Installation -> Firmware Flashing(Header) -> SKR mini e3 V1.2](../../build/software/miniE3_v12_klipper#skr-mini-e3-v12-klipper-firmware){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create** the Klipper Config file (printer.cfg), **please see the config file** for SKR mini e3 V2 [located here; Select "SW SKR mini e3 V2.0"](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} **as a starting point**;

    * Please use the Color PIN Diagrams, [displayed above](#SKR_mini_E3_V1.2_Color_PIN_diagram), as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After creating/editing the Klipper Config file (printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}