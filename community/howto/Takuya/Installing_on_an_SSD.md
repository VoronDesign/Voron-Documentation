---
layout: default
title: Installing Mainsail or Fluidd on an SSD
nav_exclude: true
---

# Installing Klipper + Mainsail / Fluidd on an SSD

The recommended way to install Mainsail or Fluidd on a Raspberry Pi is to use their pre-packaged disk images. The usual way is by flashing the pre-packaged disk image to an microSD card; however, microSD cards have a limited life span. Installing on SSD has many benefits, including faster read and write speeds and enough space for all of your gcodes and timelapse videos, but the main improvement is the extended life span. microSD cards have limited read/write cycles, and at around 10_000 writes, the microSD card's memory chips wear out. If you're lucky, the microSD card will still mount as a read-only filesystem, and you can get your data off of it before it fails completely.

## Backup your config files if you are moving from microSD to SSD!

## Requirements

1. A spare microSD card, for the bootloader
2. A USB to SATA adapter
  I (Takuya#0523) have personally tested a SATA to USB adapter from Sabrent. Even though it says USB3.0, it only works with USB 2.0 on the Pi 4. Some people also had success with the SATA to USB A Cable from JSAUX. Sadly, some adapters don't work and there is no perfect way to know until it arrives.
4. A SATA SSD

### Why SATA?

NVMe does not offer any particular advantages when used over USB, and actually might be more unreliable on the Pi because NVMe USB controllers tend to draw more power than SATA USB controllers do. Also, SATA SSDs still tend to cost less than NVMe SSDs.

## Enabling USB-Boot

To enable USB-Boot, you need a spare microSD card with the USB Boot Bootloader flashed onto it.

1. [Download and install the Raspberry Pi Imager](https://www.raspberrypi.com/software/)
2. Insert the microSD card into your computer, then choose the following OS in Raspberry Pi Imager:
  ```Misc utility images``` --> ```Bootloader``` --> ```USB BOOT```
3. Flash the USB BOOT image to your spare microSD card
4. Turn off the Pi and remove the microSD card from the Pi
5. Transfer the USB BOOT microSD card from your PC to the Pi
6. Turn on the Pi
  The green activity light will blink a steady pattern once the update has been completed. If you have an HDMI monitor attached, the screen will go green once the update is complete. Allow 10 seconds or more for the update to complete. Do not remove the microSD card until the update is complete.
7. Turn off the Pi and remove the microSD card

## Installing Mainsail or Fluidd on your SSD

Installing Mainsail or Fluidd, is exactly the same as flashing it to an microSD card.

1. Insert the SSD into your USB to SATA adapter and plug it into your computer
2. Install your preferred MainsailOS or FluiddPi image to the SSD
3. Transfer the SSD adapter with the SSD attached from your PC to your Pi and power up the Pi
4. The Pi will now boot from the SSD
5. If there is no SSD attached, the Pi falls back to booting from the microSD card
