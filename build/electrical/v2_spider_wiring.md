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
* if using a mini12864 display, do NOT connect this yet

![](./images/v2_spider_wiring.png)

## Raspberry Pi

### Power 
 * The spider is capable of providing 5V power to run your Raspberry pi.  To take advantage of this feature, connect the wires shown below, from the pi header of the spider, to the GPIO header of the pi.
 * Note: Use at least 24awg wire for this connection.  It may be tempting to use the common "dupont" jumpers found in many electronics kits, however the small wires used in these jumpers will likely cause voltage drops for the pi.
 
## mini 12864 Display

* On the spider 1.0, the EXP1 & EXP2 header labels are swapped, so you must connect EXP1 on the display to EXP2 on the board, and EXP2 on the display to EXP1 on the board.  Note:  *this is only for the spider 1.0* spider 1.1 has corrected labelling, so it connects EXP1->EXP1, and EXP2->EXP2
* With a Fysetc brand mini12864, R1 and R4 must be removed from the board before connecting to the Spider.  Note: new displays are shipping with this step already complete, but this should be verified before connecting
* With a BTT brand mini12864 remove components R1, and R6, and rotate the connectors 180 degrees




