---
layout: default
title: "Voron Switchwire - SKR mini E3 V3.0 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V3.0 Wiring

## Initial Removal of Jumpers

* There is only **one jumper** on the SKR mini E3 V3.0 board. This jumper is called "Neo-PWR1" jumper.  See the next section about this jumper.

## Initial Preparation

* The Neo-PWR1 jumper setting will decide the source of the SKR's 5V rail. The board's 5V rail can be sourced from the board itself or from an external DCDC bridge module.  One can purchase an external DCDC bridge module (sold separately) to power 5V NeoPixel LEDs.  This bridge module is called the "DCDC Mode V1.0" board. Since the Voron printer does not require the extra DCDC bridge module, **set the Neo-PWR1 jumper** so that the board's 5V rail will be powered by the MCU (as shown by the **<span class="color-blind-green">GREEN</span>** jumper in the diagram below).

###### ![](./images/SKR_mini_E3_V3.0_for_Prep_and_Wiring_Diagram_150.png) {#PREP_SKR_mini_E3_V3.0}

### USB Voltage Selection Header

* Ensure the **removal of the SW_USB 5V power supply jumper ("SW_USB header, shown in the <span class="color-blind-purple">PURPLE box</span>")** which avoids the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* Ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-orange">ORANGE boxes</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstops.

###### ![](./images/SKR_MINI_E3_V3.0_voltageselect.png) {#SSKR_MINI_E3_V3.0_voltageselect}

## MCU

* - [ ] Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, ZAm, and Em
* - [ ] Plug Hot End thermistor to thermistor TH0 (PA0)
* - [ ] Plug Hot End heater in to E0 (PC8)
* - [ ] Plug Hot End Fan in to FAN1 (PC7)
* - [ ] Plug Part Cooling Fan in to FAN0 (PC6)
* - [ ] Plug Bed Thermistor in to THB (PC4)
* - [ ] Connect Bed Heater to HB connector (PC9)
* - [ ] Connect X end stop to X-STOP connector (PC0)
* - [ ] Connect Y end stop to Y-STOP connector (PC1)
* - [ ] Plug Probe GND and Signal (with&nbsp;**BAT85 diode**) in to Z-STOP (PC2)
* - [ ] Connect Probe +V (Probe Voltage) to VIN/DCIN pin on the VIN header (look next to the 20Amp fuse)
* - [ ] Wire 24V and -V from DC power supply to VIN and GND terminals of the POWER/DCIN connector
* - [ ] Connect USB Cable to your SKR mini E3,&nbsp; **but do not connect it yet to your Raspberry Pi**

BAT85
: a Schottky barrier diode. BAT85 is needed to protect the SKR board (MCU board) from being fried.  An Inductive Probe device (Omron TL-Q5MC2; Omron TL-Q5MC2-Z or Panasonic GX-HL15BI-P) communicates at a much higher voltage level (10V - 30V) then the MCU board.  The BAT85 is used to protect the input signal PIN of the MCU board; without the BAT85 the MCU board will be damaged.  If two BAT85s are used in series, the circuit will protect the MCU board and still allow the inductive probe to function properly. [For more information, click here](./index#bat85-diode){:target="_blank" rel="noopener"}

### MCU Diagram

###### ![](./images/SW_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg) {#SW_Wiring_Diagram_SKR_mini_E3_V3.0}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SW_Wiring_Diagram_SKR_mini_E3_V3.0_150.jpg){:target="_blank" rel="noopener"}</span>

## Raspberry Pi

### Power
* The BTT SKR mini E3 V3.0 board is **NOT capable of providing 5V power** to run your Raspberry Pi.

### Setting up UART Communications with the Raspberry Pi

* see [the SKR mini E3 V3.0 Raspberry Pi Section](./skr_miniE3v30_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

<div>

<!--### The Klipper Configuration file for SKR Mini E3 V3.0

The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for SKR Mini E3 V3.0 board is [located here](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/xxxxxxxskr_mini_e3_v3_config.cfg)
-->

</div>

## URL Resources Links for the SKR mini E3 V2.0 (PIN Diagrams and Repo)

* see [The SKR mini E3 V3.0 Resource Section](./mini_e3_v30_Resources#color-pin-diagram-for-skr-mini-e3-v30){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please use the [Color Pin Diagram displayed here, look for "Klipper Building Options"](./images/SKR_mini_E3_V3.0_Color_PIN_diagram_300.pdf){:target="_blank" rel="noopener"}; an alternative source of information on [how to build and install the Klipper firmware for the SKR mini E3 V3.0 is located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/firmware/V3.0/Klipper#how-to-use-klipper-on-skr-mini-e3-v30){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create** the Klipper Config file (create a printer.cfg file);

    * Please use the Color PIN Diagrams, [displayed here](./mini_e3_v30_Resources#color-pin-diagram-for-skr-mini-e3-v30){:target="_blank" rel="noopener"}, as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After **creating** the Klipper Config file (printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}