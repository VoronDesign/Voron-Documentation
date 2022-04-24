---
layout: default
title: Automating Klipper MCU Updates
nav_exclude: true
---

# Automating Klipper MCU Updates

This document describes a method to make updating your MCUs to the latest Klipper version easy, especially with multiple
boards.

## Terminology

- `Host System`: The system where you run the host part of Klipper on, usually on a Raspberry Pi.
- `MCU`: The board(s) where your microcontroller unit (`MCU`) runs on, like the SKR, Octopus or Spider,
  but also the RPI itself if you are using SPI for the ADXL345 accelerometer.

## Prerequisites

- Basic knowledge on how to update Klipper on the command line via SSH
- A board which supports [flashing the firmware](https://www.klipper3d.org/SDCard_Updates.html) via an SD-Card, which
  almost all modern 32-bit controller boards support.

## Introduction

Whenever you update Klipper on your host system, you should also update Klipper on all your MCUs. This is because
Klipper on your host system and Klipper on your MCUs need to use the same communication protocol. If one of them is out
of date, you get an error like this:

```
mcu 'mcu': Command format mismatch: endstop_home oid=%c clock=%u sample_ticks=%u sample_count=%c rest_ticks=%u
pin_value=%c trsync_oid=%c trigger_reason=%c vs endstop_home oid=%c clock=%u sample_ticks=%u sample_count=%c
rest_ticks=%u pin_value=%c

This type of error is frequently caused by running an older
version of the firmware on the micro-controller (fix by
recompiling and flashing the firmware).
```

However, MCU updates are often skipped because:
- Updating all MCUs is tedious, especially with multiple controller boards
- Error-prone because if different boards are used, `make menuconfig` needs to be called multiple times
- Updates are technically only necessary if the communication protocol has changed, often causing the updates to feel
  "unnecessary"

## menuconfig Theory

Klipper uses the [menuconfig](https://en.wikipedia.org/wiki/Menuconfig) system, which was originally developed to make
configuring the [Linux Kernel](https://en.wikipedia.org/wiki/Linux_kernel) easier. The `menuconfig` system is a more
user-friendly way of setting options in the configuration file (usually called `.config`).

Because the name of the configuration file does not change between invocations of `make menuconfig`, settings done for
one MCU board will overwrite the previous settings in the default `.config` file.

Fortunately, the `menuconfig` infrastructure supports custom configuration files, so we can easily add one configuration
file for each of our MCUs. This is achieved by passing `KCONFIG_CONFIG=name` to the script, where `name` is the desired
name of the configuration file instead of `.config`.

Note that the `.config` file is often not visible because files starting with a dot are treated as hidden files by
Linux/Unix systems. To view the contents of this file, simply type `cat .config` in your Klipper directory or use
`ls -al` to view all files in the directory.

An example would be:

```
make clean KCONFIG_CONFIG=config.spider
make menuconfig KCONFIG_CONFIG=config.spider
make KCONFIG_CONFIG=config.spider
```

All the settings would now be stored in the file `config.spider`. If you skip the `KCONFIG_CONFIG` parameter, the
system would revert to the `.config` filename.

## flash-sdcard Theory

Usually you would copy the firmware file onto your SD-Card and then restart your board(s), then wait for the board(s)
to flash the new firmware for you. Thanks to Klipper's [flash-sdcard.sh](https://www.klipper3d.org/SDCard_Updates.html)
script, this can be automated.

In a nutshell, this script places the new firmware file on the card, restarts the board, waits for the new firmware to
be flashed, and then verifies the new firmware. This can be done with a single command after the firmware is compiled:

`./scripts/flash-sdcard.sh /dev/ttyACM0 btt-skr-v1.3`

Note that the serial path and the board parameters need to be adjusted for your particular board, please refer to the
[flash-sdcard.sh Documentation](https://www.klipper3d.org/SDCard_Updates.html)


## Full Example

Here is a simple example for my v1.8 where I have a Fysetc Spider and an RPI MCU.

```
sudo service klipper stop
cd ~/klipper
git pull

make clean KCONFIG_CONFIG=config.spider
make menuconfig KCONFIG_CONFIG=config.spider
make KCONFIG_CONFIG=config.spider
./scripts/flash-sdcard.sh /dev/ttyAMA0 fysetc-spider-v1

make clean KCONFIG_CONFIG=config.rpi
make menuconfig KCONFIG_CONFIG=config.rpi
make flash KCONFIG_CONFIG=config.rpi

sudo service klipper start
```

You could simply place all the required commands in a text file `update-all.sh` within the Klipper directory, and then
run all the above commands by using one single command: `bash update-all.sh`.

Note that you still need to watch for errors during the build process!

## Elegant Example

This example adds an input prompt to hit `[Enter]` after each step, so it's easier to spot errors during the previous
step.

```
sudo service klipper stop
cd ~/klipper
git pull

make clean KCONFIG_CONFIG=config.spider
make menuconfig KCONFIG_CONFIG=config.spider
make KCONFIG_CONFIG=config.spider
read -p "Spider firmware built, please check above for any errors. Press [Enter] to continue flashing, or [Ctrl+C] to abort"

./scripts/flash-sdcard.sh /dev/ttyAMA0 fysetc-spider-v1
read -p "Spider firmware flashed, please check above for any errors. Press [Enter] to continue, or [Ctrl+C] to abort"

make clean KCONFIG_CONFIG=config.rpi
make menuconfig KCONFIG_CONFIG=config.rpi

make KCONFIG_CONFIG=config.rpi
read -p "RPi firmware built, please check above for any errors. Press [Enter] to continue flashing, or [Ctrl+C] to abort"
make flash KCONFIG_CONFIG=config.rpi

sudo service klipper start
```

## FAQ

### Can I just skip the menuconfig line?

You could, but if Klipper decides to add another configuration option during an update, the new option would be missing
from the config file and the build process would complain. Running `make menuconfig` ensures that the new option is
added with the defaults.
