---
layout: default
title: "Trident - BTT Octopus V1.0/V1.1: TMC2100, TMC2130, TMC5160, TMC5161, TMC5160HV, TMC5160_PRO"
parent: "Trident - BTT Octopus V1.0/V1.1 Wiring"
nav_exclude: true
nav_order: 2
---

# Trident - BTT Octopus V1.0/V1.1: TMC2100, TMC2130, TMC5160, TMC5161, TMC5160HV, TMC5160_PRO

## Initial Removal of Jumpers for SPI Mode

We have no idea what state your board is in when you start this process.  Someone could have moved jumpers around already.  But since we are here, on the SPI end of the site, then I assume that you might want to look at the next section **before** removing **all the jumpers** because if all the jumpers are already set for SPI mode then removing them and placing them right back in would be a waste of your valuable time.

**If one does not understand what I mean by "if the jumpers are set for SPI" then I would recommend that removing all the jumpers would be the place to start.**

* Remove **all <span class="color-blind-yellow">YELLOW</span>** on-board jumpers, located at the positions shown below.

###### ![](./images/Octopus11_PREP-Removal.png) {#Octopus11_PREP-Removal_SPI}

## Initial Preparation for SPI Mode - Set Jumpers

* Set the on-board jumpers, located at the positions as shown by the **<span class="color-blind-green">GREEN</span>** jumpers in the diagram below:

###### ![](./images/Octopus11_SPI_Mode_for_Prep.png) {#Octopus11_SPI_Mode_for_Prep_Tri}

* If you want to open the above picture, in a new tab of your web browser, then [click here](./images/Octopus11_SPI_Mode_for_Prep.png){:target="_blank" rel="noopener"}

### (FAN & PROBE) Voltage Selection Headers

* As shown in the diagram below, ensure the **removal of the USB-PWR jumper (as shown in the <span class="color-blind-yellow">YELLOW box</span>")** which avoids the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* As shown in the diagram below, ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-purple">PURPLE box</span>) are removed** because the Voron printer does not use sensorless homing.

* In the diagram below, the **<span class="color-blind-blue">BLUE</span> and <span class="color-blind-orange">ORANGE</span> boxes** indicate the headers with **<span class="color-blind-green">GREEN</span>** jumpers which are set for 24VDC.

* In the diagram below, the **<span class="color-blind-blue">BLUE box</span>** indicates the "fan voltage selection headers" with **<span class="color-blind-green">GREEN</span>** jumpers which are set for 24VDC.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If fans that use 5VDC or 12VDC are used, please take <span class="color-blind-red">NOTE</span> of these "fan voltage selection headers" and set the jumpers to the appropriate jumper position so that the correct fan voltage will be produced to run the 5VDC or 12VC fan.  If the fan voltage selection jumper is set for 24VDC and a 5VDC/12VDC fan is connected to it, the Octopus board will be damaged.**

* In the diagram below, the **<span class="color-blind-orange">ORANGE box</span>** indicates the "probe voltage selection header" with a **<span class="color-blind-green">GREEN</span>** jumper which is set for 24VDC. If a PROBE voltage of 5VDC or 12VDC is desired, this jumper needs to be changed.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If the voltage required by the PROBE device does not match the voltage selected by the "probe voltage selection Jumper" then the Octopus board could be damaged.**

* __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **Double check all the** __<span class="color-blind-green">GREEN</span>__ **jumpers are set appropriately, especially the jumpers called out by the _COLORED BOXES_, BEFORE the power supply is connected.**

### (FAN & PROBE) Voltage Selection Diagram

###### ![](./images/Octopus11_SPI_VoltageSelect.png) {#Octopus11_SPI_VoltageSelect_Tri}

* If you want to open the above picture, in a new tab of your web browser, then [click here](./images/Octopus11_SPI_VoltageSelect.png){:target="_blank" rel="noopener"}

## Stepper Motor Drivers
* Inspect the stepper motor drivers for left over rosin, and clean with IPA, if needed
* Install heat sinks on all stepper motor drivers

## MCU Wiring for UART Mode

* - [ ] Connect 24V and GND (V+ and V-) from the PSU to PWR and MOTOR_POWER
* - [ ] Connect stepper driver for the B Motor (gantry left) into position DRIVER0 (driver socket)
* - [ ] Plug in stepper motor for the B Motor (gantry left) into position MOTOR0 (motor connector)
* - [ ] Connect stepper driver for the A Motor (gantry right) into position DRIVER1 (driver socket)
* - [ ] Plug in stepper motor for the A Motor (gantry right) into position MOTOR1 (motor connector)
* - [ ] Connect stepper driver for the Z into positions DRIVER2 (driver socket)
* - [ ] Plug in stepper motor for the Z into positions MOTOR2_1 (motor connector)
* - [ ] Connect stepper driver for the Z1 into positions DRIVER3 (driver socket)
* - [ ] Plug in stepper motor for the Z1 into positions MOTOR3 (motor connector)
* - [ ] Connect stepper driver for the Z2 into positions DRIVER4 (driver socket)
* - [ ] Plug in stepper motor for the Z2 into positions MOTOR4 (motor connector)
* - [ ] Connect stepper driver for the extruder motor into position DRIVER6 (driver socket)
* - [ ] Plug in stepper motor for the extruder motor into position MOTOR6 (motor connector)
* - [ ] Connect the hot end heater to HE0 (PA2)
* - [ ] Connect the bed SSR (DC Control Side) to HE1 (PA3)
* - [ ] Connect the part cooling fan to FAN0 (PA8)
* - [ ] Connect the hot end fan to FAN1 (PE5)
* - [ ] Connect the controller fans to FAN2 (PD12)
* - [ ] Connect the chamber exhaust fan to FAN3 (PD13)
* - [ ] Connect the hot end thermistor to T0 (PF4)
* - [ ] Connect the bed thermistor to TB (PF3)
* - [ ] Connect the X endstop to STOP_0 (PG6)
* - [ ] Connect the Y endstop to STOP_1 (PG9)
* - [ ] Connect the Z endstop to STOP_2 (PG10)
* - [ ] Plug Probe Signal (with&nbsp;**BAT85 diode**) in to STOP_7 (PG15)
* - [ ] Connect the V+ an 0V wires on the probe to PROBE
* if using a mini12864 display:
    1. - [ ] [complete the steps in the mini 12864 Display section](#mini-12864-display)
    2. - [ ] connect to EXP1 & EXP2
* if using USB to communicate with Pi:
    1. - [ ] Connect USB Cable to your Octopus board, but do not connect it yet to your Raspberry Pi
* if using UART (3-wire communication) with Pi:
    1. - [ ] [complete the steps for setting up UART communications with the Raspberry Pi](#powering-the-raspberry-pi--setting-up-uart-communications-with-the-raspberry-pi)
    2. - [ ] Connect UART cable to your Octopus board, but do not connect it yet to your Raspberry Pi

* <span> </span>

BAT85
: a Schottky barrier diode. BAT85 is needed to protect the Octopus board (MCU board) from being fried.  An Inductive Probe device (Omron TL-Q5MC2; Omron TL-Q5MC2-Z or Panasonic GX-HL15BI-P) communicates at a much higher voltage level (10V - 30V) then the MCU board.  The BAT85 is used to protect the input signal PIN of the MCU board; without the BAT85 the MCU board will be damaged.  If two BAT85s are used in series, the circuit will protect the MCU board and still allow the inductive probe to function properly. [For more information, click here](./index#bat85-diode){:target="_blank" rel="noopener"}

## MCU Wiring Diagram for SPI Mode

###### ![](./images/Trident_Wiring_Diagram_Octopus_V1.1_in_SPI.jpg) {#Tri_Wiring_Diagram_Octopus_V11_SPI}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/Trident_Wiring_Diagram_Octopus_V1.1_in_SPI.jpg){:target="_blank" rel="noopener"}</span>

## Please Ensure the Heat Sinks are Installed Before Use

<span class="color-blind-red">Note on the Orientation of the Stepper Motor Driver's Heat Sinks</span>
: Place the heat sinks for the stepper motor drivers so that the orientation of the fins on the heat sinks are parallel to the air flow from the controller fans once the MCU board is installed on the DIN rail. Ensure the heat sinks are **not touching** the solder joints located on the top of the step stick. Please note, that your placement of heat sinks may be different from the orientation shown below.

### MCU in SPI Mode with Heat Sinks Installed

###### ![](./images/Trident_Octopus11_SPI_Heatsinks.png) {#Tri_Octopus11_SPI_Heatsinks}

## Further Information about the PROBE port:

* see [the Octopus V1.0/V1.1 Probe port section](./Octopus11_ProbePort#btt-octopus-v10v11-probe-port){:target="_blank" rel="noopener"}

## Powering the Raspberry Pi & Setting up UART Communications with the Raspberry Pi

* see [the Octopus V1.0/V1.1 Raspberry Pi Section](./Octopus11_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

## SSR Wiring (Board Shown is in SPI mode)

* Wire colors will vary depending on your locale.

###### ![](./images/BTTOctopus11-ssr-SPI-wiring.png) {#BTTOctopus11-ssr-SPI-wiring_Tri}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PNG format then [click here](./images/BTTOctopus11-ssr-SPI-wiring.png){:target="_blank" rel="noopener"}

## mini 12864 Display

* See [the mini12864 guide](./mini12864_klipper_guide.md){:target="_blank" rel="noopener"}

## The Klipper Configuration file for BTT Octopus V1.0/V1.1 Board

* The Klipper Configuration file from VoronDesign/Voron-Trident GitHub Repo for BTT Octopus 1.0/V1.1 board is [located here](https://raw.githubusercontent.com/VoronDesign/Voron-Trident/main/Firmware/Octopus/Trident_Octopus_Config.cfg){:target="_blank" rel="noopener"};

## URL Resources Links for the Octopus V1.0/V1.1 (PIN Diagrams and Repo)

* see [The Octopus V1.0/V1.1 Resource Section](./Octopus11_Resources#color-pin-diagram-for-btt-octopus-v10v11){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please see [The Build ═► Software Installation -> Firmware Flashing(Header) -> BTT Octopus](../../build/software/octopus_klipper#octopuspro-klipper-firmware){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create/edit** the Klipper Config file (Trident_Octopus_Config.cfg rename it to printer.cfg) to ensure your Voron build matches your Klipper Config file, please see [the file located here; Select "Trident Octopus"](../../build/software/configuration#initial-voron-printer-configuration){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed here](./Octopus11_Resources#color-pin-diagram-for-btt-octopus-v10v11){:target="_blank" rel="noopener"}, as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After **creating/editing** the Klipper Config file (Trident_Octopus_Config.cfg renamed to printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}