---
layout: default
title: Installing Fluidd
parent: Software Installation
grand_parent: The Build
nav_order: 2
---

# Installing Fluidd

The recommended way to install Fluidd on a Raspberry Pi is to use [FluiddPi](#FluiddPi), a pre-packaged disk image.  If you are building a custom configuration, you may need to skip these instructions and install Fluidd [manually](#fluidd-manual-installation).

## FluiddPi

To install Fluidd on a Raspberry Pi:
1. Download the latest fluiddPi  [Release](https://github.com/cadriel/FluiddPI/releases)
2. Unzip the .img file from your download.
3. Use [BalenaEtcher](https://www.balena.io/etcher/) to write the .img on to an 8GB, or larger SDcard.  *THIS WILL DESTROY ALL DATA ON YOUR CARD*.

_note: It is a good idea to use a premium SDcard from a reputable manufacturer such as Sandisk, Kingston or Samsung. Low end cards will often fail quickly when used in this application_

4. If you will be using wifi, edit the file `fluiddpi-wpa-supplicant.txt` with your Wifi information. If you are having trouble seeing this file on the sdcard, try removing it and re-inserting it into your card reader.
5. Make sure that your MCU(s) is connected to your pi, If you will be using wired networking, also make sure your ethernet cable is connected.
5. Insert the SDcard into your Pi, and power on the Pi.    
6. Find your pi on the network, and ssh into it, (Using PuTTY on Windows or the terminal on MacOS)
    * If your network supports bonjour, the pi should show up as `fluiddpi.local`
    * If your network automatically assigns DNS hostnames, it may simply show up as `fluiddpi`
    * Failing these two options, you may need to check your router's DHCP server, and find out what IP address as been assigned to the device.
7. Also connect to your pi in a web browser:  [http://fluiddpi.local](http://fluiddpi.local) or whatever you determined the host name/ip to be in the previous step
8.  When you first connect, fluiddpi will ask you to "provide the moonraker api uri":  enter the same host name or IP address once more.  (`fluiddpi.local`)

### Software Update
 
As soon as you have Fluiddpi loaded, it is highly recommended that you make sure all the software is up to date.  (at times, the downloaded image file
contains fairly out of date software)

1. Access Fluidd through a webbrowser, using whatever IP or hostname you found above.  
(Note, you will see some errors regarding the non-configured state of your printer.  these can be ignored for now)
2. Click the "Settings" button on the left side of the screen
3. Scroll down to the  "Software Updates" section
4. Click the "check for updates" button
5. Click "update" for each component that needs it.

### Next: [Firmware Flashing](./index.md#firmware-flashing)

## Fluidd Manual Installation

Coming soon.

---
### Back: [Software Installation](./index.md)
