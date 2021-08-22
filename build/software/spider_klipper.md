---
layout: default
title: "Spider Klipper Firmware"
nav_exclude: true
---

# Spider Klipper Firmware

The firmware installation process for the Fysetc Spider MCU.

### Prerequisites

* Klipper must be installed onto the Raspberry Pi
* It is desirable, though not strictly necessary to have a small sdcard available
* Even if you intend to power your Pi with the Spider, during this flashing process, you will find it far more convenient 
to power your pi from some other source, such as a regular USB power supply
* Voron Design recommends using USB to control the Spider, which simply requires connecting a USB-A to USB-C cable between the Spider and Pi.  If you prefer a UART connection, please consult the fysetc documentation for the necessary configuration adjustments

### Build Firmware Image

* Login to the Raspberry Pi via ssh
* Run the following:

   ```
   sudo apt install make
   cd ~/klipper
   make clean
   make menuconfig
   ```

* In the menu structure there are a number of items to be selected.
  * Select "Enable extra low-level configuration options"
  * Set the micro-controller architecture is set to `STMicroelectronics STM32`
  * Set the Processor model to `STM32F446`
  * If your Spider was made after `2021/06/23`, Set the Bootloader offset to `32KiB bootloader` 
  * If your Spider was made prior to  `2021/06/23`, Set the Bootloader offset to `64KiB bootloader`
  * Set the Clock Reference to `12 MHz crystal`
  * Set the Communication interface to `USB (on PA11/PA12)`  (note: see Fysetc documentation if you intend to use UART rather than USB)

   ![](./images/spider_klipper_menuconfig.png)

* Once the configuration is selected, press `q` to exit,  and "Yes" when  asked to save the configuration.

* Run the command `make`
* The `make` command, when completed, creates a firmware file **klipper.bin** that is store in the folder `/home/pi/klipper/out`.  

There are multiple options for getting this firmware file installed onto your Spider.
### Firmware Installation
#### Option 1: DFU Firmware Install

* Requires a USB connection
* Requires the installation of an extra jumper on the Spider
* Does NOT require an sdcard

1. Power off the Spider
2. Install a jumper between BT0 and 3.3V
3. Connect Spider & Pi via USB
4. Power on Spider
5. from your ssh session, run `lsusb`. and find the ID of the dfu device.
6. run `make flash FLASH_DEVICE=1234:5678` replace 1234:5678 with the ID from the previous step
7. power off the Spider
8. remove the jumper from BT0/3.3V
9. Power up the Spider
10. you can confirm that the flash was successful, by running `ls /dev/serial/by-id`.  if the flash was successful, this should now show a klipper device, similar to:
 
   ![](./images/spider_by-id.png)

   (note: this test is not appicable if the firmware was compiled for UART, rather than USB)
   
#### Option 2: SDcard Firmware Install

* Works regardless of USB vs UART
* Requires a microSD card

1. Use a tool such as cyberduck or winscp to copy the klipper.bin file off your pi, onto your computer.

   ![](./images/cyberduck_example.png)

2. Rename **klipper.bin** to **firmware.bin**

**Important:** If the file is not renamed, the bootloader will not be updated properly.

3. Ensure that your sdcard is formatted FAT32  (NOT EXFAT!) 
4. copy **firmware.bin** onto the microSD card  (if this card has previously been used for this process, remove all old firmware.bin and old.bin files)
5. power down the Spider
6. insert the microSD card
7. power on the Spider
8. after a few seconds, the Spider should be flashed
9. you can confirm that the flash was successful, by running `ls /dev/serial/by-id`.  if the flash was successful, this should now show a klipper device, similar to:
 
   ![](./images/spider_by-id.png)

(note: this test is not appicable if the firmware was compiled for UART, rather than USB)


**Important:** If the Spider is not powered with 12-24V, Klipper will be unable to communicate with the TMC drivers via UART and the SKR will automatically shut down.

### Back to [Software Installation](./index.md#klipper-octoprint-configuration)
