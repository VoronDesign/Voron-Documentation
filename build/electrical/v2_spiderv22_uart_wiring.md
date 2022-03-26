---
layout: default
title: "Voron V2 - Fysetc Spider V2.2 in UART Mode (TMC2208, TMC2209, TMC2225, TMC2226)"
parent: "Voron V2 - Fysetc Spider V2.2 Wiring"
nav_exclude: true
nav_order: 1
---

# Voron V2 - Fysetc Spider V2.2 in UART Mode (TMC2208, TMC2209, TMC2225, TMC2226)

## Initial Removal of Jumpers

Remove **all <span class="color-blind-yellow">YELLOW</span>** on-board jumpers, located at the positions shown below:

###### ![](./images/FYSETC_Spider_V2.2_PREP-Removal_150.png) {#FYSETC_Spider_V22_PREP-Removal}

## Initial Preparation for UART Mode - Set Jumpers

* Ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-blue">BLUE box</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstop.

* Ensure the "Power Selection Jumper" (shown in the **<span class="color-blind-red">RED box</span>**) is in the bottom position (as shown in the diagram below) on the "Power Selection" header. This setting prevents the USB 5V power supply from being used.

* Set the on-board jumpers, located at the positions as shown by the **<span class="color-blind-green">GREEN</span>** jumpers in the diagram below:

###### ![](./images/FYSETC_Spider_V2.2_in_UART_Mode_PREP_150.png) {#FYSETC_Spider_V22_in_UART_Mode_PREP}

### (FAN & MOTOR POWER & PROBE) Voltage Selection Headers

* In the diagram below, the **<span class="color-blind-blue">BLUE boxes</span>** indicate the headers with **<span class="color-blind-green">GREEN</span>** jumpers **or a WIRE jumper** which are set for 24VDC.

* In the diagram below, the **<span class="color-blind-red">RED box</span>** indicates the RGB Block header's Jumper is not present, but this header can be used to run fans. Other headers that can be used with fans (as shown by a **<span class="color-blind-blue">BLUE box</span>**) have their Fan Voltage Selections headers which are located below the FAN0, FAN1 and FAN2 connectors. The **<span class="color-blind-green">GREEN</span>** jumpers are set for a fan voltage of 24VDC.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If fans that use 5VDC or 12VDC are used, please take <span class="color-blind-red">NOTE</span> of these "fan voltage selection headers" and set the jumpers to the appropriate jumper position so that the correct fan voltage will be produced to run the 5VDC or 12VC fan.  If the fan voltage selection jumper is set for 24VDC and a 5VDC/12VDC fan is connected to it, the Fysetc Spider board will be damaged.**

* In the diagram below, the **<span class="color-blind-blue">BLUE box</span>** to the right of Z- connector, is the header for setting the PROBE voltage. The **<span class="color-blind-green">GREEN</span>** jumper sets the PROBE voltage for 24VDC.  If a PROBE voltage of 5V is desired, this jumper needs to be changed.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If the voltage required by the PROBE device does not match the voltage selected by the "probe voltage selection Jumper" then the Fysetc Spider board could be damaged.**

* In the diagram below the **wire jumper**, located in upper right-hand corner of the board, is set so that the X-MOT and Y-MOT stepper motor driver voltage will be 24VDC.  **If X-MOT and Y-MOT stepper motor drivers at 48VDC** are used, the **wire jumper** will need to be placed **between the 48V pin and the GND pin** of this connector.

    *  __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If the wire jumper, which selects the power voltage for X-MOT and Y-MOT stepper motor driver slots, DOES NOT match the voltage being supplied to the stepper driver, the Fysetc Spider board will be damaged along with the stepper motor driver.  Set the wire jumper to the appropriate position so that the stepper driver _voltage needed, matches the PSU voltage selected_ by the wire jumper. For example, If the stepper motor driver voltage is set for 48VDC and the actual stepper motor driver runs at 24VDC, the Fysetc Spider board and the stepper motor driver will be damaged.**

* __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **Double check all the** __<span class="color-blind-green">GREEN</span>__ **jumpers and the WIRE jumper BEFORE the power supply is connected, to ensure these jumpers and wire jumper are set appropriately.**

### (FAN & MOTOR POWER & PROBE) Voltage Selection Diagram

###### ![](./images/FYSETC_Spider_V2.2_inUARTMode_VoltageSelect_150.png) {#FYSETC_Spider_V22_inUARTMode_VoltageSelect}

## Stepper Drivers
* If using Fysetc drivers, inspect for left over rosin, and clean with IPA if need
* Install step drivers in all slots except E4
* Install heat sinks on all step drivers
* _**NOTE: if the board has been powered, ensure that motor power caps are fully drained before inserting stepper drivers: Temporarily connect a 100K resistor between VMOT+ and VMOT- to safely drain the capacitors**_ See [Fysetc Spider 3.3v issue](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/Spider%203.3v%20issue.md){:target="_blank" rel="noopener"}

## MCU Wiring for UART Mode

* Connect 24V Power from the PSU to PWR IN and BED_POWER/DCIN
* Connect stepper driver for the B Motor (gantry left) into position X-MOT
* Plug in stepper motor for the B Motor (gantry left) into position M1
* Connect stepper driver for the A Motor (gantry right) into position Y-MOT
* Plug in stepper motor for the A Motor (gantry right) into position M2
* Connect stepper drivers for the Z, Z1, Z2, and Z3 into positions Z-MOT, E1-MOT, E2-MOT and E3-MOT
* Plug in stepper motors for the Z, Z1, Z2, and Z3 into positions M3, M5, M6 and M7
* Connect stepper driver for the extruder motor into position E0-MOT
* Plug in stepper motor for the extruder motor into position M4
* Connect the hot end heater to E0 OUT (PB15)
* Connect the chamber exhaust fan to E2 OUT (PB3)
* Connect the bed SSR (DC Control Side) to BED OUT (PB4)
* Connect the hot end fan to FAN0 (PA13)
* Connect the part cooling fan to FAN1 (PA14)
* Connect the controller fans to FAN2 (PB2)
* Connect the hot end thermistor to TE0 (PC0)
* Connect the bed thermistor to TB (PB0)
* Connect the X endstop to X+ (PA1)
* Connect the Y endstop to Y+ (PA2)
* Connect the PROBE to Z+ (PA3)
* Connect the Z endstop to Z- (PA0)
* if using a mini12864 display, connect to EXP1 & EXP2, only after completing the steps shown [below](#mini-12864-display)

## MCU Wiring Diagram for UART Mode

###### ![](./images/Voron2.4r2_Wiring_Diagram_FYSETC_Spider_V2.2_in_UART_mode_150.jpg) {#Voron2_Wiring_Diagram_FYSETC_Spider_V22_in_UART}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/Voron2.4r2_Wiring_Diagram_FYSETC_Spider_V2.2_in_UART_mode_150.jpg){:target="_blank" rel="noopener"}</span>

[Go Back to the Table of Contents](v2_spiderv22_wiring#table-of-contents)

## Please Ensure the Heat Sinks are Installed Before Use

### MCU in UART Mode with Heat Sinks Installed

###### ![](./images/FYSETC_Spider_v2.2_UARTmodeHeatsinks_150.png) {#FYSETC_Spider_v22_UART_Heatsinks}

## Powering the Raspberry Pi & Setting up UART Communications with the Raspberry Pi

* see [the Raspberry Pi Section](Fysetc_Spider_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

## SSR Wiring (Board Shown is in UART mode)

* Wire colors will vary depending on your locale.

###### ![](./images/fysetc-spiderv2.2inUART-ssr-wiring_150.png) {#fysetc-spiderv22-ssr-UART-wiring}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PNG format then [click here](./images/fysetc-spiderv2.2inUART-ssr-wiring_150.png){:target="_blank" rel="noopener"}
<span> <br> </span>

[Go Back to the Table of Contents](v2_spiderv22_wiring#table-of-contents)

## mini 12864 Display

* *spider Rev 1.0 only*: the EXP1 & EXP2 header labels are swapped. Connect  EXP1 (display) to EXP2(spider), and EXP2 (display) to EXP1 (spider).  On the Spider 1.1 or later: connect EXP1->EXP1, and EXP2->EXP2
* *Fysetc mini12864 only*:  components R1 and R4 must be removed from the board before connecting to the Spider.  Note: new displays are shipping with this step already complete, but this should be verified before connecting
* *BTT mini12864 only* remove components R1, and C6, and rotate the connectors 180 degrees
* See [the mini12864 guide](./mini12864_klipper_guide#mini12864-klipper-guide){:target="_blank" rel="noopener"}

## URL Resources Links for the Fystec Spider (Klipper Configuration file, PIN Diagrams and Repo)

* See [The Fysetc Spider Resource Section](./Fysetc_Spider_Resources#the-klipper-configuration-file-for-fysetc-spider-v22-board)