---
layout: default
title: Picobilical Not Connecting ('Reset' Issue)
nav_exclude: true
---

# Assumptions

1. You are building/have built a V0 that uses a LDO Motors Picobilical which is not connecting to the Host.
2. If the Picobilical is configured properly is only connects after the RESET button on the picobilical has been pressed.
3. Your Host controller is a Raspberry Pi or similar.
4. Your main MCU is a SKR Pico or similar.
5. Your MCU and Picobilical are connected over USB.

# Diagnosis and 'Quickfix'

Firstly check that the Picobilical is connected to your Host (i.e. Raspberry Pi) via USB and that the Picobilical is recieving power (typically, this will be through the 24VDC port on the Picobilical). If when starting Klipper/turning the printer on, and are getting stuck in the Klipper 'startup' screen on the web interface, check the Klipper log via the download link on the page. The last line of the log will be a record that the Host attempted to open a connection to the mcu:umb. Press the RESET button (NOT BootSel) on the picobilical, and click firmware restart on the web interface. If the printer then begins to work normally, the problem is most likely the Picobilical 'Reset' issue.

If you have NOT been able to get the Picobilical to function at all and have not been able to get a USB address to use in `printer.cfg`, turn the printer on and SSH into the Host. Run the command `ls /dev/serial/by-id`, take note of the ID shown (that ID should belong to the MCU). Now, press the RESET button on the Picobilical, and run the `ls /dev/serial/by-id` command again. This time, there should now be two IDs, the ID of the MCU that was previously noted, and the new ID belonging to the picobilical. Ensure that both IDs are placed into the `printer.cfg` file.

# Installing Katapult

In order to resolve the connection issue, Katapult, formerly CanBoot, must be installed. SSH into your Host controller and download Katapult, then open the make menuconfig interface:
```
git clone https://github.com/Arksine/katapult
cd katapult
make menuconfig
```
You will be presented with a few options, select your microarchitecture according to your devices (i.e. the SKR Pico and Picobilical both use RP2040s). Select the 16kib Bootloader option, and make sure the communication method is set to USB. There are a multitude of other adjustable settings, however these shouldn't need to be touched. Then, run the `make` command. 

# Flashing Katapult
1. Place a boot jumper on your MCU. (Check your MCUs pinouts/port labeling for where this is) and press the RESET button.
2. Place a boot jumper on the Picobilical (located near the USB port).
3. Put the Picobilical into boot mode, hold both buttons, then release the BOOTSEL button followed by the RESET Button.
4. Run `sudo make flash FLASH_DEVICE=/dev/serial/by-id/<YOUR USB ID>` for both the MCU and Picobilical.
5. Turn the printer off, wait a second, then back on again.
6. Congrats! Katapult should now be installed, but there is still a bit more to do.

# Installing Klipper
1. Connect back to the Host via SSH
2. Check that some necessary python packages are installed to the Host with `pip3 install pyserial`. This will install/update the packages if needed.
3. Move to the klipper subdirectory with `cd ~/klipper/`.
4. Run `make clean`, then `make menuconfig` to prepare to build Klipper
5. Set the MCU type according to your hardware, ensure the communication method is set to USB, and for the bootloader offset, select `16kib Booloader`. This is VERY important.
6. Run `make`.
7. Run `ls /dev/serial/by-id` again, (after pressing that Picobilical reset button 😄) and ensure the two device IDs are still present (they may say Katapult instead of Klipper, this is normal).
8. Flash the Klipper firmware onto the MCU AND Picobilical with `python3 ~/katapult/scripts/flashtool.py -f ~/klipper/out/klipper.bin -d /dev/serial/by-id/<YOUR USB ID>`.
9. At this point you may remove any BOOT jumpers and resume normal printing. Congrats! Remember to read below regarding updating Klipper in the future.

# Notes for Future Klipper Updates
Until LDO/Klipper find a more permanent solution to this issue, you will need to follow a slightly different process for future Klipper updates:
1. SSH into the Host as normal and retrieve the USB IDs with `ls /dev/serial/by-id`.
2. Run the Klipper flash script for the MCU with `python3 ~/klipper/scripts/flash_usb.py -t rp2040 -d /dev/serial/by-id/<YOUR USB ID> ~/klipper/out/klipper.bin`. This flash attempt WILL fail, but puts the MCU into the bootloader.
3. Run `ls /dev/serial/by-id` again to confirm the bootloader is operating (it will have a 'Katapult' ID instead of Klipper).
4. Once ready to flash, run `python3 ~/katapult/scripts/flashtool.py -f ~/klipper/out/klipper.bin -d /dev/serial/by-id/<YOUR USB ID>` to flash the new Klipper firmware.
5. Repeat steps 2-4 for the Picobilical, and power cycle the printer.


* Thank you hibiki.nyaa/Luna on the Voron Discord for contributing some important knowledge!
