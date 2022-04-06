---
layout: default
title: "Voron V1 - SKR V1.3: TMC2208, TMC2209, TMC2225, or TMC2226"
parent: "Voron V1 - BTT SKR V1.3 Wiring"
nav_exclude: true
nav_order: 1
---

# Voron V1 - SKR V1.3: TMC2208, TMC2209, TMC2225, or TMC2226

## Initial Removal of Jumpers

Remove **all <span class="color-blind-yellow">YELLOW</span>** on-board jumpers, located at the positions shown below:

###### ![](./images/SKR_V1.3_PREP-Removal_150.png) {#SKR_V13_PREP-Removal_UART1_v1}

## Initial Preparation for UART Mode - Set Jumpers

* Ensure **all of "DIAG Jumpers" or "ST Jumper Block" (shown in the <span class="color-blind-blue">BLUE box</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstop.

* **Set the USB-PWR jumper to the INT position (as shown in the <span class="color-blind-purple">PURPLE box</span>)** to avoid the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* Set the on-board jumpers, located at the positions as shown by the **<span class="color-blind-green">GREEN</span>** jumpers in the diagram below:

###### ![](./images/SKR_V1.3_in_UART_mode_PREP_150.png) {#SKR_V13_in_UART_mode_for_Prep_150_v1}

## Stepper Motor Drivers
* Inspect the stepper motor drivers for left over rosin, and clean with IPA, if needed
* Install heat sinks on all stepper motor drivers

## MCU in UART Mode

* - [ ] Place stepper drivers for X, Y, Z, Z1, and E in positions X, Y, Z, E0, and E1
* - [ ] Plug in stepper motors for X, Y, Z, Z1, and E in positions X, Y, Z, E0, and E1 (one of the Z connectors will be empty)
* - [ ] Plug Hot End thermistor to thermistor TH0 (P0.24)
* - [ ] Plug Hot End heater in to HE0 (P2.7)
* - [ ] Plug Hot End Fan + Controller Fan in to HE1 (P2.4)
* - [ ] Plug Heated Bed thermistor in to TB (P0.23)
* - [ ] Plug SSR Control for Heated Bed in to Servos (P2.0)
* - [ ] Plug Part Cooling Fan in to Fan (P2.3)
* - [ ] Connect X end stop to X+ connector (P1.28)
* - [ ] Connect Y end stop to Y+ connector (P1.26)
* - [ ] Connect Z end stop to Z- connector (P1.25)
* - [ ] Plug Probe PWR and GND into DCOUT next to the X motor connector
* - [ ] Plug Probe Signal (with BAT85 diode) in to Z+ (P1.24)
* - [ ] Plug in Chamber Exhaust Fan in to H-BED (P2.5)
* - [ ] Plug display wires in to EXP1 and EXP2
* - [ ] Wire 24V and 0V from DC power supply to DCIN/Power In
* - [ ] Connect USB Cable to your SKR V1.3,&nbsp; **but do not connect it yet to your Raspberry Pi**

BAT85
: a Schottky barrier diode. BAT85 is needed to protect the SKR board (MCU board) from being fried.  An Inductive Probe device (Omron TL-Q5MC2; Omron TL-Q5MC2-Z or Panasonic GX-HL15BI-P) communicates at a much higher voltage level (10V - 30V) then the MCU board.  The BAT85 is used to protect the input signal PIN of the MCU board; without the BAT85 the MCU board will be damaged.  If two BAT85s are used in series, the circuit will protect the MCU board and still allow the inductive probe to function properly. [For more information, click here](./index#bat85-diode){:target="_blank" rel="noopener"}

### MCU in UART Mode Wiring Diagram

###### ![](./images/V1_Wiring_Diagram_BTT_SKRV1.3_XYE_in_UART_mode.jpg) {#V1_Wiring_Diagram_BTT_SKRV13_XYE_in_UART_mode}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/V1_Wiring_Diagram_BTT_SKRV1.3_XYE_in_UART_mode.jpg){:target="_blank" rel="noopener"}</span>

[Go Back to the Table of Contents](./v1_skr13_wiring#voron-v1---btt-skr-v13-wiring)

## Please Ensure the Heat Sinks are Installed Before Use

<span class="color-blind-red">Note on the Orientation of the Stepper Motor Driver's Heat Sinks</span>
: Place the heat sinks for the stepper motor drivers so that the orientation of the fins on the heat sinks are parallel to the air flow from the controller fans once the MCU board is installed on the DIN rail. Ensure the heat sinks are **not touching** the solder joints located on the top of the step stick. Please note, that your placement of heat sinks may be different from the orientation shown below.

### MCU with Heat Sinks Installed

###### ![](./images/V1_SKR_V1.3_in_UART_mode_Heatsinks_150.png) {#V1_SKR_V13_in_UART_mode_Heatsinks}

## Raspberry Pi

### Power
* The BTT SKR V1.3 board is **NOT capable of providing 5V power** to run your Raspberry Pi.

## Setting up UART Communications with the Raspberry Pi

* see [the Raspberry Pi Section](./skrv13_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

## SSR Wiring (Board Shown is in UART mode)

* Wire colors will vary depending on your locale.

###### ![](./images/btt-SKRV1.3inUART-ssr-wiring.png) {#btt-SKRV13inUART-ssr-wiring}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PNG format then [click here](./images/btt-SKRV1.3inUART-ssr-wiring.png){:target="_blank" rel="noopener"}

[Go Back to the Table of Contents](./v1_skr13_wiring#voron-v1---btt-skr-v13-wiring)

### The Klipper Configuration file for SKR V1.3 board

The Klipper Configuration file from VoronDesign/Voron-1/Voron1.8 GitHub Repo for SKR V1.3 board is [located here;](https://raw.githubusercontent.com/VoronDesign/Voron-1/Voron1.8/Firmware/klipper_configurations/SKR_1.3/Voron_1_SKR_13_Config.cfg){:target="_blank" rel="noopener"}

## URL Resources Links for the SKR V1.3 (PIN Diagrams and Repo)

* see [The SKR V1.3 Resource Section](./skr_v13_Resources#color-pin-diagram-for-skr-v13){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please see [The Build ═► Software Installation -> Firmware Flashing(Header) -> SKR 1.3](../../build/software/skr13_klipper#skr-1314-klipper-firmware){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create/edit** the Klipper Config file (Voron_1_SKR_13_Config.cfg rename it to printer.cfg) to ensure your Voron build matches your Klipper Config file, please see [the file located here](https://raw.githubusercontent.com/VoronDesign/Voron-1/Voron1.8/Firmware/klipper_configurations/SKR_1.3/Voron_1_SKR_13_Config.cfg){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed above](./skr_v13_Resources#SKRV13_Colored_PIN_Diagram){:target="_blank" rel="noopener"}, as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After **creating/editing** the Klipper Config file (Voron_1_SKR_13_Config.cfg renamed to printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}

[Go Back to the Table of Contents](./v1_skr13_wiring#voron-v1---btt-skr-v13-wiring)