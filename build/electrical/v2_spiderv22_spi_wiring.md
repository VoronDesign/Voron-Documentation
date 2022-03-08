---
layout: default
title: "Voron V2 - Fysetc Spider V2.2 Wiring in SPI Mode"
nav_exclude: true
---

# Voron V2 - Fysetc Spider V2.2 Wiring in SPI Mode

## Initial Removal of Jumpers

Remove **all** the <span style="color: #f4ed68;">YELLOW</span> on-board jumpers, located at the positions as shown below.

![](./images/FYSETC_Spider_V2.2_PREP-Removal_150.png)

## Initial Preparation - Set Jumpers

* Set the on-board jumpers, located at the positions as shown by the <span style="color: #61d745;">GREEN</span> jumpers in the below diagram:

![](./images/FYSTEC_Spider_V2.2_in_SPI_mode_PREP_150.png)

### FAN Voltage Selection

* In the diagram below, the <span style="color: #00aeef;">BLUE boxes</span> indicate the headers with <span style="color: #61d745;">GREEN</span> jumpers or a WIRE jumper which are set for 24VDC.

* In the diagram below, the <span style="color: #cc333f;">RED box</span> indicates the RGB Block header's Jumper is not present, but this header can be used to run fans. Other headers that can be used with fans (as shown by a <span style="color: #00aeef;">BLUE box</span>) have their Fan Voltage Selections headers which are located below the FAN0, FAN1 and FAN2 connectors.

* In the diagram below, the <span style="color: #00aeef;">BLUE box</span> to the right of Z- connector, is the header for setting the PROBE voltage. The jumper sets the PROBE voltage for 24VDC.  If a PROBE voltage of 5V is desired, this jumper needs to be changed.

* <span style="text-decoration: red double underline; color: red;">IMPORTANT:</span> **If fans that use 5VDC or 12VDC are used, please take** <span style="color: red;">NOTE</span> **of these fan voltage selection headers and set the fan voltage selection header's jumpers to the appropriate position so that the correct fan voltage will be produced to run the 5VDC or 12VC fan.  If the fan voltage selection jumper is set for 24VDC and a 5VDC/12VDC fan is connected to it, the Fysetc Spider board will be damaged.** 

* In the diagram below the **wire jumper**, located in upper right-hand corner of the board, is set so that the X-MOT and Y-MOT stepper motor driver voltage will be 24VDC.  If X-MOT and Y-MOT stepper motor drivers at 48VDC are used, the wire jumper will need to be placed between the 48V pin and the GND pin of this connector.  If the stepper motor voltage is set for 48VDC and the actual stepper motor driver can not run at 48VDC, the Fysetc Spider board and the stepper motor driver will be damaged.

* <span style="text-decoration: red double underline; color: red;">IMPORTANT:</span> **Double check all the** <span style="color: #61d745;">GREEN</span> **jumpers and the WIRE jumper, before the power supply is connected, to ensure these jumpers and wire jumper are set appropriately.**

### FAN Voltage Selection Diagram
<br>
![](./images/FYSETC_Spider_V2.2_inSPIMode_VoltageSelect_150.png)

## Stepper Drivers
* If using Fysetc drivers, inspect for left over rosin, and clean with IPA if need
* Install step drivers in all slots except E4
* Install heat sinks on all step drivers
* _**NOTE: if the board has been powered, ensure that motor power caps are fully drained before inserting stepper drivers: Temporarily connect a 100K resistor between VMOT+ and VMOT- to safely drain the capacitors**_ See [Fysetc Spider 3.3v issue](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/Spider%203.3v%20issue.md)

## MCU Wiring for SPI Mode

* Connect <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">24V Power</span> from the PSU to <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">PWR IN</span> AND <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">BED_POWER/DCIN</span>
* Connect stepper driver for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the B Motor (gantry left)</span> into position <span style="text-shadow: 2px 2px 5px #e35223; font-size: 125%;">X-MOT</span>
* Plug in stepper motor for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the B Motor (gantry left)</span> into position <span style="text-shadow: 2px 2px 5px #e35223; font-size: 125%;">M1</span>
* Connect stepper driver for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the A Motor (gantry right)</span> into position <span style="text-shadow: 2px 2px 5px #32a3e5; font-size: 125%;">Y-MOT</span>
* Plug in stepper motor for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the A Motor (gantry right)</span> into position <span style="text-shadow: 2px 2px 5px #32a3e5; font-size: 125%;">M2</span>
* Connect stepper drivers for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the Z, Z1, Z2, and Z3</span> into positions <span style="text-shadow: 2px 2px 5px #700aea; font-size: 125%;">Z-MOT, E1-MOT, E2-MOT and E3-MOT</span>
* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the Z, Z1, Z2, and Z3</span> into positions <span style="text-shadow: 2px 2px 5px #700aea; font-size: 125%;">M3, M5, M6 and M7</span>
* Connect stepper driver for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the extruder motor</span> into position <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">E0-MOT</span>
* Plug in stepper motor for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the extruder motor</span> into position <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">M4</span>
* Plug in stepper motor for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">the extruder motor</span> into position <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">M4</span>
* Connect the <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">hot end heater</span> to <span style="text-shadow: 2px 2px 5px #e216d1; font-size: 125%;">E0 OUT (PB15)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">chamber exhaust fan</span> to <span style="text-shadow: 2px 2px 5px #04dc93; font-size: 125%;">E2 OUT (PB3)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">bed SSR (DC Control Side)</span> to <span style="text-shadow: 2px 2px 5px #0e7a86; font-size: 125%;">BED OUT (PB4)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">hot end fan</span> to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN0 (PA13)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">part cooling fan</span> to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN1 (PA14)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">controller fans</span> to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN2 (PB2)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #dcc623; font-size: 125%;">hot end thermistor</span> to <span style="text-shadow: 2px 2px 5px #00ff00; font-size: 125%;">TE0 (PC0)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #a286c0; font-size: 125%;">bed thermistor</span> to <span style="text-shadow: 2px 2px 5px #0c7b84; font-size: 125%;">TB (PB0)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X endstop</span> to <span style="text-shadow: 2px 2px 5px #1d4d1d; font-size: 125%;">X+ (PA1)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #e45223; font-size: 125%;">Y endstop</span> to <span style="text-shadow: 2px 2px 5px #71b05f; font-size: 125%;">Y+ (PA2)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #6c6b69; font-size: 125%;">PROBE</span> to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">Z+ (PA3)</span>
* Connect the <span style="text-shadow: 2px 2px 5px #d38aa8; font-size: 125%;">Z endstop</span> to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Z- (PA0)</span>
* if using a <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">mini12864 display</span>, connect to <span style="text-shadow: 2px 2px 5px #2bb5e3; font-size: 125%;">EXP1 & EXP2</span>, only after completing the steps <span style="text-shadow: 2px 2px 5px #d38aa8; font-size: 125%;">shown [below](#mini-12864-display)</span>

## MCU Wiring Diagram for SPI Mode
<br>
![](./images/Voron2.4r2_Wiring_Diagram_FYSETC_Spider_V2.2_in_SPI_mode_150.jpg)
## Download MCU Wiring Diagram for SPI Mode

* Downloadable Fysetc Spider V2.2 Wiring Diagram diagram in .jpg format is [located here](./images/Voron2.4r2_Wiring_Diagram_FYSETC_Spider_V2.2_in_SPI_mode_150.jpg)
## Please Ensure the Heat Sinks are Installed Before Use

### MCU in SPI Mode with Heat Sinks Installed
<br>
![](./images/FYSETC_Spider_v2.2_SPImodeHeatsinks_150.png)

## Raspberry Pi

### Power 
 * The spider is capable of providing 5V power to run your Raspberry pi.  To take advantage of this feature, connect the wires shown below, from the pi header of the spider, to the GPIO header of the pi.
 * Use at least 24awg wire for this connection.  It may be tempting to use the common "dupont" jumpers found in many electronics kits, however these jumpers typically use very small gauge wire, and will not carry enough current to run the pi.
![](./images/v2_spider_pi.png)

### Control
 * Voron Design recommends using USB to control the Spider, which simply requires connecting a USB-A to USB-C cable between the Spider and Pi. 
 * The option does also exist to use a UART connection from the Pi header, in place of the USB.  If you prefer this option, please see the [Fysetc](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/firmware/Klipper/Connect%20RPI%20uart.md) documentation

## SSR Wiring

* Wire colors will vary depending on your location.

![](./images/fysetc-spiderv2.2inSPI-ssr-wiring_150.png)

* Downloadable SSR Wiring Diagram for the Fysetc Spider V2.2 board in SPI mode (.jpg format) is [located here](./images/fysetc-spiderv2.2inSPI-ssr-wiring_150.png)
<br>
## mini 12864 Display

* *spider Rev 1.0 only*: the EXP1 & EXP2 header labels are swapped. Connect  EXP1 (display) to EXP2(spider), and EXP2 (display) to EXP1 (spider).  On the Spider 1.1 or later: connect EXP1->EXP1, and EXP2->EXP2
* *Fysetc mini12864 only*:  components R1 and R4 must be removed from the board before connecting to the Spider.  Note: new displays are shipping with this step already complete, but this should be verified before connecting
* *BTT mini12864 only* remove components R1, and C6, and rotate the connectors 180 degrees
* See [the mini12864 guide](./mini12864_klipper_guide.md)

### The Klipper Configuration file for Fysetc Spider V2.2 Board 
<br>
The Klipper Configuration file from VoronDesign/Voron-2 GitHub Repo for Fysetc Spider V2.2 board is [located here](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/firmware/klipper_configurations/Spider/Voron2_Spider_Config.cfg)

## Color PIN Diagram for Fysetc Spider V2.2

For reference, here is the Color PIN diagram for the Fysetc Spider V2.2

![](./images/FYSETC_Spider_V2.2_Color_PIN_diagram_300.jpg)

* Downloadable Fysetc Spider V2.2 Color PIN diagram in .pdf format is [located here](./images/FYSETC_Spider_V2.2_Color_PIN_diagram_300.pdf)

* Downloadable Fysetc Spider V2.2 Color PIN diagram in .jpg format is [located here](./images/FYSETC_Spider_V2.2_Color_PIN_diagram_300.jpg)

{% assign colorfilename = "/build/electrical/images/FYSETC_Spider_V2.2_Color_PIN_diagram_300.pdf" %}

{% assign nbviewer_url = "https://nbviewer.org/github/VoronDesign/Voron-Documentation/" %}

{% if site.url == "http://localhost:4000" %}
* Downloadable and LOCAL ZOOM capable web display for Fysetc Spider V2.2 Color PIN diagram is [located here]({{ "/build/electrical/images/FYSETC_Spider_V2.2_Color_PIN_diagram_300.pdf" | prepend:site.url }})
{% else %}
* Downloadable and ZOOM capable web display for Fysetc Spider V2.2 Color PIN diagram is [located here]({{ nbviewer_url | append: "blob/main" | append: colorfilename }})
{% endif %}

## Original Fysetc Spider V2.2 Pinout

For reference, here is the original pinout of the Fysetc Spider V2.2

* Note: the original Fysetc Spider V2.2 Pinout is known to have errors. If you see a conflict between the original pinout and any other source, please refer back to the [Fysetc Spider V2.2 schematic diagram](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/hardware/Spider%20V2.2%20SCH.pdf)

![](./images/Spider_V2.2_Pinout_150.jpg)

### The Fysetc's GitHub Repo for the Spider V2.2 board

* Fysetc's documentation for Spider V1.0-V2.2 board is [located here](https://github.com/FYSETC/FYSETC-SPIDER)
* Downloadable and ZOOM capable web display for Fysetc's Spider V2.2 original pinout diagram is [located here](http://nbviewer.jupyter.org/github/FYSETC/FYSETC-SPIDER/blob/main/Spider_V2.2_Pinout.pdf)
