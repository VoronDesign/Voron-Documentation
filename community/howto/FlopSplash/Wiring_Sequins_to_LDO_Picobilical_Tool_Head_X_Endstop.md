---
layout: default
title: Wiring_Sequins_to_LDO_Picobilical_Tool_Head_X_Endstop
nav_exclude: true
---

# Wiring Sequins to LDO Picobilical Tool Head X Endstop

## Adafruit Sequins

The [Adafruit Sequins](https://learn.adafruit.com/adafruit-led-sequins/overview) are a small form factor LED that accept 3 to 6VDC. We'll be connecting these to our LDO Picobilical X endstop, which supplies 3.3V, the sequins will draw about 5mA at this voltage.

## LDO Picobilical

The [Picobilical](https://github.com/MotorDynamicsLab/LDO-Picobilical) by LDO is a PCB mod designed specifically for the Voron0 series printers. The Picobilical is based on [V0-Umbilical](https://github.com/VoronDesign/Voron-Hardware/tree/master/V0-Umbilical) by timmit99

## BOM

* LDO Picobilical
* 2 Adafruit Sequins
* 30 AWG wire (for the Mini SB, I used 4 200mm lengths, double check for your setup and desired routing)
* 2 Pin Male JST XH(2.54mm pitch) and crimping tool
* Soldering Iron and solder
* CA Glue or Hot Melt Adhesive


## Guide

### Wire Prep
1. We're going to crimp a pair of wires to a single pin each, I used two strands of red wire for positive, and two strands of black wire for ground. To accomplish this, I find it best to strip off a few mm extra on the ends to be crimped, bending the exposed wire 90 degrees, lining up the insulation, and evenly twisting them together. Before attempting to crimp, cut your excess exposed wire to the appropriate length to ensure good contact when crimped. As always, pull test your crimps :)

2. With the tabs of your JST connector facing down, insert your positive pair into the left slot, and ground pair into the right slot.

3. Strip and tin the ends of the wire that will be soldered to the Sequins.

### Installation
1. Printer must be powered down, installation is easiest with the tool head detached.

2. Insert JST connector into the X endstop of the Picobilical tool head PCB. When viewing the PCB with the ports facing you, your positive wires should be on the left, towards the Thermistor port.

3. Route one positive and one ground wire through each Sequin port and double check length.

4. Solder one positive wire to + and one ground wire to - on each Sequin

5. Glue the sequins in place. I hot glued the wiring channel and gently pulled the slack until the Sequins nested snug, CA glue would work well here too.

6. Double check your wire path and tidy up as needed.

### Configuring Klipper
1. In your board_pins section for the LDO Picobilical, comment out your gpio0, 'endstop_pin: umb:gpio0' if using the [LDOs cfg](https://github.com/MotorDynamicsLab/LDO-Picobilical/blob/master/Klipper_Configs/ldo-picobilical.cfg) at time of writing.

2. Add the Sequins as an output_pin:
[output_pin hotend_light]
pin: umb:gpio0

3. Save & Restart Klipper, this simple setup will add a Hotend Light toggle to your Klipper Dashboard under 'Miscellaneous'. When pressed this issues 'SET_PIN PIN=hotend_light VALUE=1.00' to turn the lights on, and 'SET_PIN PIN=hotend_light VALUE=0.00' to turn them off. You can add these commands to your existing macros, or even create an individual macro that issues this command if you wish. Please refer to the [Klipper Documentation](https://www.klipper3d.org/Command_Templates.html) for Commands templates.  

## Advanced (thanks to user Toboshii from the Voron Discord)

There's a hardware pullup on the [Picobilical frame PCB](https://github.com/MotorDynamicsLab/LDO-Picobilical/blob/master/Hardware/Picobilical_A1.3_Schematics.pdf), this results in two things:

* The sequins being powered on during startup, until Klipper initializes and pulls it down again. 
* Reduced brightness.

If you'd like, you can desolder C15, R17, and bridge R14. These are clearly labeled on the PCB, you should double check the [schematics](https://github.com/MotorDynamicsLab/LDO-Picobilical/blob/master/Hardware/Picobilical_A1.3_Schematics.pdf) before attempting.

