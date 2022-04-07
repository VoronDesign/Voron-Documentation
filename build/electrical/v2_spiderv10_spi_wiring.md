---
layout: default
title: "Voron V2 - Fysetc Spider V1.1: TMC2100, TMC2130, TMC5160, TMC5161, TMC5160HV, TMC5160_PRO"
parent: "Voron V2 - Fysetc Spider V1.1 Wiring"
nav_exclude: true
nav_order: 2
---

# Voron V2 - Fysetc Spider V1.1: TMC2100, TMC2130, TMC5160, TMC5161, TMC5160HV, TMC5160_PRO

## Initial Removal of Jumpers for SPI Mode

We have no idea what state your board is in when you start this process.  Someone could have moved jumpers around already.  But since we are here, on the SPI end of the site, then I assume that you might want to look at the next section **before** removing **all the jumpers** because if all the jumpers are already set for SPI mode then removing them and placing them right back in would be a waste of your valuable time.

**If one does not understand what I mean by "if the jumpers are set for SPI" then I would recommend that removing all the jumpers would be the place to start.**

* Remove **all <span class="color-blind-yellow">YELLOW</span>** on-board jumpers, located at the positions shown below:

* __<span class="underline-double-trouble color-blind-red">NOTE:</span>__ The Fysetc Spider V1.0 board has jumpers located inside the endstop connectors when the board is first unpacked, **remove them**.

###### ![](./images/FYSETC_Spider_V1.0_PREP-Removal_150.png) {#FYSETC_Spider_V10_PREP-Removal_1}

## Initial Preparation for SPI Mode - Set Jumpers

* Ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-blue">BLUE box</span>) are removed** because the Voron printer does not use sensorless homing.

* **Set the USB-PWR jumper to the +5V position (as shown in the <span class="color-blind-purple">PURPLE box</span>)** to avoid the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard. The top pin on this header is labeled "U5V", and the middle and bottom pins do not have labels, but the Fysetc Spider V1.0 schematic diagram labels the bottom pin as "+5V".  Ensure the USB-PWR jumper is set as shown in the diagram below.

* Set the on-board jumpers, located at the positions as shown by the **<span class="color-blind-green">GREEN</span>** jumpers in the diagram below:

###### ![](./images/FYSETC_Spider_V1.0_in_SPI_mode_PREP_150.png) {#FYSETC_Spider_V10_in_SPI_Mode_PREP}

### (FAN & PROBE) Voltage Selection Headers

* In the diagram below, the **<span class="color-blind-yellow">YELLOW box</span>** indicates the RGB Block header's Jumper is not present, but this header can be used to run fans. Other headers that can be used with fans (as shown by a **<span class="color-blind-orange">ORANGE box</span>**) have their Fan Voltage Selections headers which are located below the FAN0, FAN1 and FAN2 connectors. The **<span class="color-blind-green">GREEN</span>** jumpers are set for a fan voltage of 24VDC.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If fans that use 5VDC or 12VDC are used, please take <span class="color-blind-red">NOTE</span> of these "fan voltage selection headers" and set the jumpers to the appropriate jumper position so that the correct fan voltage will be produced to run the 5VDC or 12VC fan.  If the fan voltage selection jumper is set for 24VDC and a 5VDC/12VDC fan is connected to it, the Fysetc Spider board will be damaged.**

* In the diagram below, the **<span class="color-blind-purple">PURPLE box</span>** to the right of Z- connector, is the header for setting the PROBE voltage. The **<span class="color-blind-green">GREEN</span>** jumper sets the PROBE voltage for 24VDC.  If a PROBE voltage of 5V is desired, this jumper needs to be changed.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If the voltage required by the PROBE device does not match the voltage selected by the "probe voltage selection Jumper" then the Fysetc Spider board could be damaged.**

* __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **Double check all the** __<span class="color-blind-green">GREEN</span>__ **jumpers BEFORE the power supply is connected, to ensure these jumpers and wire jumper are set appropriately.**

### (FAN & PROBE) Voltage Selection Diagram

###### ![](./images/FYSETC_Spider_V1.0_inSPIMode_VoltageSelect_150.png) {#FYSETC_Spider_V10_inSPIMode_VoltageSelect}

## Stepper Drivers
* If using Fysetc drivers, inspect for left over rosin, and clean with IPA if need
* Install step drivers in all slots except E4-MOT
* Install heat sinks on all step drivers
* _**NOTE: if the board has been powered, ensure that motor power caps are fully drained before inserting stepper drivers: Temporarily connect a 100K resistor between VMOT+ and VMOT- to safely drain the capacitors**_ See [Fysetc Spider 3.3v issue](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/Spider%203.3v%20issue.md){:target="_blank" rel="noopener"}

## MCU Wiring for SPI Mode

* - [ ] Connect 24V Power from the PSU to PWR IN and BED_POWER/DCIN
* - [ ] Connect stepper driver for the B Motor (gantry left) into position X-MOT (driver socket).
* - [ ] Plug in stepper motor for the B Motor (gantry left) into position X-MOT (motor connector).
* - [ ] Connect stepper driver for the A Motor (gantry right) into position Y-MOT (driver socket).
* - [ ] Plug in stepper motor for the A Motor (gantry right) into position Y-MOT (motor connector).
* - [ ] Connect stepper drivers for the Z into positions Z-MOT (driver socket).
* - [ ] Plug in stepper motors for the Z into positions Z1-MOT (motor connectors).
* - [ ] Ensure that Z2-MOT motor connector has two jumpers set.  These jumpers allow the Z1-MOT connector to work properly.
* - [ ] Connect stepper drivers for the Z1 into positions E1-MOT (driver socket).
* - [ ] Plug in stepper motors for the Z1 into positions E1-MOT (motor connectors).
* - [ ] Connect stepper drivers for the Z2 into positions E2-MOT (driver socket).
* - [ ] Plug in stepper motors for the Z2 into positions E2-MOT (motor connectors).
* - [ ] Connect stepper drivers for the Z3 into positions E3-MOT (driver socket).
* - [ ] Plug in stepper motors for the Z3 into positions E3-MOT (motor connectors).
* - [ ] Connect stepper driver for the extruder motor into position E0-MOT (driver socket).
* - [ ] Plug in stepper motor for the extruder motor into position E0-MOT (motor connector).
* - [ ] Connect the hot end heater to E0 OUT (PB15)
* - [ ] Connect the chamber exhaust fan to E2 OUT (PB3)
* - [ ] Connect the bed SSR (DC Control Side) to BED OUT (PB4)
* - [ ] Connect the hot end fan to FAN0 (PB0)
* - [ ] Connect the part cooling fan to FAN1 (PB1)
* - [ ] Connect the controller fans to FAN2 (PB2)
* - [ ] Connect the hot end thermistor to TE0 (PC0)
* - [ ] Connect the bed thermistor to TB (PC3)
* - [ ] Connect the X endstop to X+ (PA1)
* - [ ] Connect the Y endstop to Y+ (PA2)
* - [ ] Connect the PROBE to Z+ (PA3)
* - [ ] Connect the Z endstop to Z- (PA0)
* if using a mini12864 display:
    1.  - [ ] [complete the steps shown below](#mini-12864-display)
    2.  - [ ] connect to EXP1 & EXP2

## MCU Wiring Diagram for SPI Mode

###### ![](./images/Voron2.4r2_Wiring_Diagram_FYSETC_Spider_V1.0_in_SPI_mode_150.jpg) {#Voron2_Wiring_Diagram_FYSETC_Spider_V10_in_SPI}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/Voron2.4r2_Wiring_Diagram_FYSETC_Spider_V1.0_in_SPI_mode_150.jpg){:target="_blank" rel="noopener"}</span>

## Please Ensure the Heat Sinks are Installed Before Use

<span class="color-blind-red">Note on the Orientation of the Stepper Motor Driver's Heat Sinks</span>
: Place the heat sinks for the stepper motor drivers so that the orientation of the fins on the heat sinks are parallel to the air flow from the controller fans once the MCU board is installed on the DIN rail. Ensure the heat sinks are **not touching** the solder joints located on the top of the step stick. Please note, that your placement of heat sinks may be different from the orientation shown below.

### MCU in SPI Mode with Heat Sinks Installed

###### ![](./images/FYSETC_Spider_V1.0_in_SPI_mode_Heatsinks_150.png) {#FYSETC_Spider_v10_SPI_Heatsinks}

## Powering the Raspberry Pi & Setting up UART Communications with the Raspberry Pi

* see [the Fysetc Spider Raspberry Pi Section](./Fysetc_Spider_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

## SSR Wiring (Board Shown is in SPI mode)

* Wire colors will vary depending on your locale.

###### ![](./images/fysetc-spiderv1.0inSPI-ssr-wiring_150.png) {#fysetc-spiderv10-ssr-SPI-wiring}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PNG format then [click here](./images/fysetc-spiderv1.0inSPI-ssr-wiring_150.png){:target="_blank" rel="noopener"}
<span> <br> </span>

## mini 12864 Display

* *spider Rev 1.0 only*: the EXP1 & EXP2 header labels are swapped. Connect  EXP1 (display) to EXP2(spider), and EXP2 (display) to EXP1 (spider).  On the Spider 1.1 or later: connect EXP1->EXP1, and EXP2->EXP2
* *Fysetc mini12864 only*:  components R1 and R4 must be removed from the board before connecting to the Spider.  Note: new displays are shipping with this step already complete, but this should be verified before connecting
* *BTT mini12864 only* remove components R1, and C6, and rotate the connectors 180 degrees
* See [the mini12864 guide](./mini12864_klipper_guide#mini12864-klipper-guide){:target="_blank" rel="noopener"}

### The Klipper Configuration file for Fysetc Spider V1.0 Board

The Klipper Configuration file from VoronDesign/Voron-2 GitHub Repo for Fysetc Spider V1.0 board is [located here](https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/firmware/klipper_configurations/Spider/Voron2_Spider_Config.cfg){:target="_blank" rel="noopener"};

## URL Resources Links for the Fystec Spider (PIN Diagrams and Repo)

* See [The Fysetc Spider V1.1 Resource Section](./Fysetc_Spider_Resources_v1#color-pin-diagram-for-fysetc-spider-v10){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please see [The Build ═► Software Installation -> Firmware Flashing(Header) -> Fysetc Spider](../../build/software/spider_klipper#spider-klipper-firmware){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create/edit** the Klipper Config file (Voron2_Spider_Config.cfg rename it to printer.cfg) to ensure your Voron build matches your Klipper Config file, please see [the file located here; Select "V2 Spider"](../../build/software/configuration#initial-voron-printer-configuration){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed here](./Fysetc_Spider_Resources_v1#color-pin-diagram-for-fysetc-spider-v10){:target="_blank" rel="noopener"}, as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After **creating/editing** the Klipper Config file (Voron2_Spider_Config.cfg renamed to printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}