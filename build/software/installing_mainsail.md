---
layout: default
title: Installing Mainsail
parent: Software Installation
grand_parent: The Build
nav_order: 1
---

# Installing Mainsail

The recommended way to install Mainsail on a Raspberry Pi is to use [MainsailOS](#MainsailOS), a pre-packaged disk image.  If you are building a custom configuration, you may need to skip these instructions and install Mainsail [manually](#mainsail-manual-installation).

## MainsailOS

To install Mainsail on a Raspberry Pi:
1. Download the latest mainsailOS  [Release](https://github.com/mainsail-crew/MainsailOS/releases)
2. Unzip the .img file from your download.
3. Use [BalenaEtcher](https://www.balena.io/etcher/) to write the .img to an 8GB (or larger) microSD card.  *THIS WILL DESTROY ALL DATA ON YOUR CARD*.

_note: It is a good idea to use a premium microSD card from a reputable manufacturer such as Sandisk, Kingston or Samsung. Low end cards will often fail quickly when used in this application_

4. If you will be using wifi, edit the file `mainsailos-wpa-supplicant.txt` with your Wifi information. If you are having trouble seeing this file on the microSD card, try removing it and re-inserting it into your card reader.
5. Make sure that your MCU(s) is connected to your pi. If you will be using wired networking, also make sure your ethernet cable is connected.
5. Insert the microSD card into your Pi, and power on the Pi.    
6. Find your Pi on the network, and ssh into it (using PuTTY on Windows or the terminal on MacOS)
    * If your network supports bonjour, the pi should show up as `mainsailos.local`
    * If your network automatically assigns DNS hostnames, it may simply show up as `mainsailos`
    * Failing these two options, you may need to check your router's DHCP server, and find out what IP address as been assigned to the device.

You can also use Raspberry Pi Imager; more information can be found in [the Mainsail docs](https://docs.mainsail.xyz/setup/mainsail-os).
 
### Software Update
 
As soon as you have MainsailOS loaded, it is highly recommended that you make sure all the software is up to date.  (At times, the downloaded image file contains fairly out of date software.)

1. Access Mainsail through a web browser, using whatever IP or hostname you found above.  
(Note, you will see some errors regarding the non-configured state of your printer.  These can be ignored… for now)
2. Click the "Machine" button on the left side of the screen
3. In the "Update Manager" panel, click the refresh button
4. Click the "Update" button for each component that needs updating.

### Next: [Firmware Flashing](./index.md#firmware-flashing)

## Mainsail Manual Installation

The Mainsail manual installation process is documented in [the Mainsail docs](https://docs.mainsail.xyz/setup/manual-setup).

---
### Back: [Software Installation](./index.md)
