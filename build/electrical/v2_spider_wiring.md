---
layout: default
title: "Voron V2 - Fysetc Spider Wiring"
nav_exclude: true
---

# Voron V2 - Fysetc Spider Wiring

## Initial Preparation

Set jumpers as shown:

![](./images/v2_spider_jumpering.png)

## Step Sticks
* If using Fysetc step sticks, inspect for left over rosin, and clean with IPA if need
* Install step sticks in all slots except E4

## Wiring
* Connect wiring as shown
* if using a mini12864 display, do not connect this until reviewing the notes below

![](./images/v2_spider_wiring.png)

## Raspberry Pi

### Power 
 * The spider is capable of providing 5V power to run your Raspberry pi.  To take advantage of this feature, connect the wires shown below, from the pi header of the spider, to the GPIO header of the pi.
 * Use at least 24awg wire for this connection.  It may be tempting to use the common "dupont" jumpers found in many electronics kits, however these jumpers typically use very small gauge wire, and will not carry enough current to run the pi.
![](./images/v2_spider_pi.png)

### Control
 * Voron Design recommends using USB to control the Spider, which simply requires connecting a USB-A to USB-C cable between the Spider and Pi. 
 * The option does also exist to use a UART connection from the Pi header, in place of the USB.  If you prefer this option, please see the [fysetc documentation](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/firmware/Klipper/Switch%20RPI%20hardware%20uart.md)
 
## mini 12864 Display

* *spider Rev 1.0 only*: the EXP1 & EXP2 header labels are swapped. Connect  EXP1 (display) to EXP2(spider), and EXP2 (display) to EXP1 (spider).  On the Spider 1.1 or later: connect EXP1->EXP1, and EXP2->EXP2
* *Fysetc mini12864 only*:  components R1 and R4 must be removed from the board before connecting to the Spider.  Note: new displays are shipping with this step already complete, but this should be verified before connecting
* *BTT mini12864 only* remove components R1, and R6, and rotate the connectors 180 degrees
* See [the mini12864 guide](./mini12864_klipper_guide.md)




