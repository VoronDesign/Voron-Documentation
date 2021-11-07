---
layout: default
title: "Voron V2 - Octopus (Pro) Wiring"
nav_exclude: true
---

# Voron V2 - BigTreeTech Octopus Wiring

## Initial Preparation 

Set jumpers as shown:

![](./images/v2-octopus-initial-preparation.jpg)

* Green – Add Jumper
* Red – Remove Jumper 
1. Insert only the jumper in the Green and remove the other three jumpers in the Red in order to use TMC2209 UART mode.
2. Remove all the jumpers of DIAG to avoid the influence of TMC2209 DIAG on the endstop.
3. Remove the USB 5V power supply jumper to avoid the interaction between the USB 5V of raspberry pi and the DC-DC 5V of the motherboard.
4. Insert all the jumpers into V_FUSED to set the fan voltage to the system supply voltage.
5. Insert the jumper into V_FUSED to set the probe voltage to the system supply voltage.

## Wiring

* Connect 24V Power from the PSU to PWR, BED_POWER and MOTOR_POWER 
* Connect the A Motor (gantry left) to MOTOR0
* Connect the B Motor (gantry right) to MOTOR1
* Connect the Z, Z1, Z2, and Z3 Motors to MOTOR2_1, MOTOR3, MOTOR4 and MOTOR5
* Connect the extruder motor to MOTOR6
* Connect the hot end heater to HE0 OUT
* Connect the bed SSR (DC Control Side) to BED_OUT
* Connect the part cooling fan to CNC_FAN0
* Connect the hot end fan to CNC_FAN1
* Connect the controller fans to CNC_FAN2
* Connect the chamber exhaust fan to  CNC_FAN3
* Connect the hot end thermistor to TE0
* Connect the bed thermistor to TB
* Connect the X endstop to X Endstop
* Connect the Y endstop to Y Endstop
* Connect the Z endstop to Z Endstop
* Connect the probe to Probe
* if using a mini12864 display, connect to EXP1 & EXP2, only after completing the steps shown [below](#mini-12864-Display)

![](./images/v2_octopus_wiring.jpg)
 
## mini 12864 Display

* *BTT mini12864 only* remove components R1, and C6
* See [the mini12864 guide](./mini12864_klipper_guide.md)

## Other
* full pinout, and other BigTreeTech documentation is located at [here](https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/tree/master/Octopus%20works%20on%20Voron%20v2.4/Firmware/Klipper) 
