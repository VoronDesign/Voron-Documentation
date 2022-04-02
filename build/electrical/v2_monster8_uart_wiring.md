---
layout: default
title: "Voron V2 - MKS Monster 8 V1.0 in UART Mode (TMC2208, TMC2209, TMC2225, TMC2226)"
parent: "Voron V2 - MKS Monster 8 V1.0 Wiring"
nav_exclude: true
nav_order: 1
---

# Voron V2 - MKS Monster 8 V1.0 in UART Mode (TMC2208, TMC2209, TMC2225, TMC2226)

## Initial Removal of Jumpers for UART Mode

* Remove **all <span class="color-blind-yellow">YELLOW</span>** on-board jumpers, located at the positions shown below.

###### ![](./images/Monster8v10_PREP-removal.png) {#Monster8v10_PREP-Removal_UART}

## Initial Preparation for UART Mode - Set Jumpers

* Ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-orange">ORANGE box</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstop.

* **Set the USB-PWR jumper to off (as shown in the <span class="color-blind-red">RED box</span>)** to avoid the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* Set the on-board jumpers, located at the positions as shown by the **<span class="color-blind-blue">BLUE</span>** jumpers in the diagram below:

###### ![](./images/Monster8v10_UART_PREP.png) {#Monster8v10_UART_PREP}

### (FAN & Endstop/PROBE & DRIVER IC) Voltage Selection Headers

* In the diagram below, the **COLORED BOXES** indicate the headers with **<span class="color-blind-blue">BLUE</span>** jumpers that will be discussed next.

* In the diagram below, the **<span class="color-blind-purple">PURPLE box</span>** indicates the "fan voltage selection headers" with **<span class="color-blind-blue">BLUE</span>** jumpers which are set for 24VDC.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If fans that use 5VDC or 12VDC are used, please take <span class="color-blind-red">NOTE</span> of these "fan voltage selection headers" and set the jumpers to the appropriate jumper position so that the correct fan voltage will be produced to run the 5VDC or 12VC fan.  If the fan voltage selection jumper is set for 24VDC and a 5VDC/12VDC fan is connected to it, the Monster 8 board will be damaged.**

* In the diagram below, the **<span class="color-blind-orange">ORANGE box</span>** indicates the "end stop voltage selection header" with a **<span class="color-blind-blue">BLUE</span>** jumper which is set for V<sub>in</sub> or 24VDC. Since the PROBE voltage will be connected to the Z+ end stop connector, the end stop voltage selection header can also be referred to as the PROBE voltage selection header.  If a PROBE voltage of 5VDC is desired, "end stop voltage selection" jumper needs to be changed.

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If the voltage required by the PROBE device does not match the voltage selected by the "end stop voltage selection Jumper" then the Monster 8 board could be damaged.**

* In the diagram below, the **<span class="color-blind-yellow">YELLOW box</span>** indicates the DRIVER IC power selection header with **<span class="color-blind-blue">BLUE</span>** jumper which is set for 5VDC.  Each stepper motor driver uses a digital logic level to communicate with the Monster 8's STM32 processor. **This jumper MUST BE SET or the stepper motor drivers will not work!**  Since the Voron printers do not use sensorless homing, set this jumper to 5VDC.  [You can find more information about this jumper setting by reading page 12 of this document](https://github.com/makerbase-mks/MKS-Monster8/blob/main/MKS%20MONSTER8%20V1.0%20datasheet%20(based%20on%20Klipper%20firmware%20to%20configure%20Voron%202.4%20machine).pdf){:target="_blank" rel="noopener"}

    * __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **If the DRIVER IC power selection jumper is NOT SET, all the stepper motor drivers will not work!**

* **As shown in the <span class="color-blind-red">RED box</span>, set the I<sup>2</sup>C Bus selection jumper to EEPROM/I<sup>2</sup>C** to allow the EEPROM to use the I<sup>2</sup>C bus lines instead of the CAN connector. [ Refer to the Monster 8 schematic, for more information about this setting](https://github.com/makerbase-mks/MKS-Monster8/blob/main/hardware/MKS%20Monster8%20V1.0_003/MKS%20Monster8%20V1.0_003%20SCH.pdf){:target="_blank" rel="noopener"}

* __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **Double check all the** __<span class="color-blind-blue">BLUE</span>__ **jumpers are set appropriately, especially the jumpers called out by the _COLORED BOXES_, BEFORE the power supply is connected.**

### (FAN & Endstop/PROBE & DRIVER IC) Voltage Selection Diagram

###### ![](./images/Monster8v10_UART_voltageselect.png) {#Monster8v10_UART_voltageselect}

## Stepper Motor Drivers
* Inspect the stepper motor drivers for left over rosin, and clean with IPA, if needed
* Install heat sinks on all stepper motor drivers

## MCU Wiring for UART Mode

* Connect 24V and GND (V+ and V-) from the PSU to POWER (silk screen markings are located on the underside of board)
* Connect stepper driver for the B Motor (gantry left) into position DRIVER0
* Plug in stepper motor for the B Motor (gantry left) into position DIRVER0:X (motor connector)
* Connect stepper driver for the A Motor (gantry right) into position DRIVER1
* Plug in stepper motor for the A Motor (gantry right) into position DRIVER1:Y (motor connector)
* Connect stepper driver for the Z into positions DRIVER2
* Plug in stepper motor for the Z (Front Left) into positions DRIVER2:Z2 (leaving an empty motor connector between A and Z)
* Connect stepper driver for the Z1 into positions DRIVER3
* Plug in stepper motor for the Z1 into positions DRIVER3:E0 (motor connector)
* Connect stepper driver for the Z2 into positions DRIVER4
* Plug in stepper motor for the Z2 into positions DRIVER4:E1 (motor connector)
* Connect stepper driver for the Z3 into positions DRIVER5
* Plug in stepper motor for the Z3 into positions DRIVER5:E2 (motor connector)
* Connect stepper driver for the extruder motor into position DRIVER7 (leaving an empty driver socket between Z3 and E)
* Plug in stepper motor for the extruder motor into position DRIVER7:E4 {motor connector} (leaving an empty motor connector between Z3 and E)
* Connect the hot end heater to HE0 (PB1)
* Connect the bed SSR (DC Control Side) to H-BED {silk screen markings are located on the underside of board} (PB10)
* Connect the hot end fan to FAN0 (PA2)
* Connect the part cooling fan to FAN1 (PA1)
* Connect the chamber exhaust fan to FAN2 (PA0)
* Connect the controller fans to HE1 (PB0)
* Connect the hot end thermistor to TH0 (PC1)
* Connect the bed thermistor to TB (PC0)
* Connect the X endstop to X+ (PA13)
* Connect the Y endstop to Y+ (PC5)
* Connect the Z endstop to Z- (PB13)
* Connect the signal wire on the probe with BAT85 to Z+ (PB12)
* Connect the V+ an 0V wires on the probe to Z+
* if using a mini12864 display, connect to EXP1 & EXP2, only after completing the steps shown [below](#mini-12864-display)

## MCU Wiring Diagram for UART Mode
<span> <br> </span>

###### ![](./images/v2_Wiring_Diag_Monster8v10_UART.jpg) {#v2_Wiring_Diag_Monster8v10_UART}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/v2_Wiring_Diag_Monster8v10_UART.jpg){:target="_blank" rel="noopener"}</span>

[Go Back to the Table of Contents](./v2_monster8_wiring#table-of-contents)

## Please Ensure the Heat Sinks are Installed Before Use

### MCU in UART Mode with Heat Sinks Installed
<span> <br> </span>

###### ![](./images/v2_Monster8v10_UART_heatsinks.png) {#v2_Monster8v10_UART_heatsinks}

## Raspberry Pi

### Power
* The MKS Monster 8 is **NOT capable of providing 5V power** to run your Raspberry Pi.

## Setting up UART Communications with the Raspberry Pi

* see [the Raspberry Pi Section](./monster8_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

## SSR Wiring (Board Shown is in UART mode)

* Wire colors will vary depending on your locale.

###### ![](./images/moster8v10-ssr-UART-wiring.png) {#moster8v10-ssr-UART-wiring}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PNG format then [click here](./images/moster8v10-ssr-UART-wiring.png){:target="_blank" rel="noopener"}

[Go Back to the Table of Contents](./v2_monster8_wiring#table-of-contents)

## mini 12864 Display

* See [the mini12864 guide](./mini12864_klipper_guide.md){:target="_blank" rel="noopener"}

## The Klipper Configuration file for MKS Monster 8 V1.0 Board

* The Klipper Configuration file from VoronDesign/VoronUsers/master/firmware_configurations/klipper/RealDeuce GitHub Repo for MKS Monster 8 board is [located here;](https://raw.githubusercontent.com/VoronDesign/VoronUsers/master/firmware_configurations/klipper/RealDeuce/MKS-Makerbase/Monster8_v1.0_003/Voron2_Monster8_Config.cfg){:target="_blank" rel="noopener"}

[Go Back to the Table of Contents](./v2_monster8_wiring#table-of-contents)

## URL Resources Links for the Monster 8 (PIN Diagrams and Repo)

* see [The MKS Monster Resource Section](./monster8_Resources#color-pin-diagram-for-mks-monster-8-v10){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please use the [above Color Pin Diagram, look for "How To Compile the Klipper Firmware for MKS Monster 8 V1.0"](./images/MKS_Monster8-V1.0-color-PIN.pdf){:target="_blank" rel="noopener"} or an alternative source [for instructions on how to compile the klipper firmware for the MKS Monster 8 V1.0 board - See the README file](https://github.com/makerbase-mks/MKS-Monster8/tree/main/klipper%20firmware){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create/edit** the Klipper Config file (Voron2_Monster8_Config.cfg rename it to printer.cfg) to ensure your Voron build matches your Klipper Config file, please see [the file located here by RealDeuce](https://raw.githubusercontent.com/VoronDesign/VoronUsers/master/firmware_configurations/klipper/RealDeuce/MKS-Makerbase/Monster8_v1.0_003/Voron2_Monster8_Config.cfg){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed here](./monster8_Resources#color-pin-diagram-for-mks-monster-8-v10){:target="_blank" rel="noopener"}, as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.


4. After **creating/editing** the Klipper Config file (Voron2_Monster8_Config.cfg renamed to printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}

[Go Back to the Table of Contents](./v2_monster8_wiring#table-of-contents)