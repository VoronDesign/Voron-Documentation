---
layout: default
title: "Octopus (Pro) Klipper Firmware"
nav_exclude: true
---

# Octopus(Pro) Klipper Firmware

The firmware update process for both Octopus and Octopus Pro is the same so the guides have been combined.

### Prerequisites

* Klipper must be installed onto the Raspberry Pi
* It is desirable, though not strictly necessary to have a small sdcard available
* Even if you intend to power your Pi with the Octopus, during this flashing process, you will find it far more convenient 
to power your pi from some other source, such as a regular USB power supply
* Voron Design recommends using USB to control the Octopus, which simply requires connecting a USB-A to USB-C cable between the Octopus and Pi.  If you prefer a UART connection, please consult the [BigTreeTech documentation](https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/tree/master/Octopus%20works%20on%20Voron%20v2.4/Firmware/Klipper) for the necessary configuration adjustments

### Build Firmware Image

* Login to the Raspberry Pi
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
  * Set the Processor model to `STM32F446` or `STM32F429` (Depends on the MCU of your motherboard)
  * Set the Bootloader offset to `32KiB bootloader` 
  * Set the Clock Reference to `12 MHz crystal`(for `STM32F446`) or `8 MHz crystal`(for `STM32F429`)
  * Set the Communication interface to `USB (on PA11/PA12)`  (note: see [BigTreeTech documentation](https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/tree/master/Octopus%20works%20on%20Voron%20v2.4/Firmware/Klipper) if you intend to use UART rather than USB)

   ![](./images/octopus_f446_klipper_menuconfig.png)
   ![](./images/octopus_f429_klipper_menuconfig.png)

* Once the configuration is selected, press `q` to exit,  and "Yes" when  asked to save the configuration.

* Run the command `make`
* The `make` command, when completed, creates a firmware file **klipper.bin** that is store in the folder `/home/pi/klipper/out`.

There are multiple options for getting this firmware file installed onto your Octopus.
### Firmware Installation
#### Option 1: DFU Firmware Install

* Requires a USB connection
* Requires the installation of an extra jumper on the Octopus
* Does NOT require an sdcard

1. Power off Octopus
2. Install a jumper between BOOT0 and 3.3V
3. Connect Octopus & Pi via USB-C
4. Power on Octopus
5. from your ssh session, run `lsusb`. and find the ID of the dfu device.
6. run `make flash FLASH_DEVICE=1234:5678` replace 1234:5678 with the ID from the previous step
7. power off the Octopus
8. remove the jumper from BOOT0 and 3.3V
9. Power on the Octopus
10. You can confirm that the flash was successful, by running `ls /dev/serial/by-id`.  if the flash was successful, this should now show a klipper device, similar to:
 
   ![](./images/stm32f446_id.png)

   (note: this test is not appicable if the firmware was compiled for UART, rather than USB)
   
#### Option 2: SDcard Firmware Install

* Works regardless of USB vs UART
* Requires a microSD card

1. Use a tool such as cyberduck or winscp to copy the klipper.bin file off your pi, onto your computer.

   ![](./images/cyberduck_example.png)

2. Rename **klipper.bin** to **firmware.bin**

**Important:** If the file is not renamed, the bootloader will not be updated properly.

3. Ensure that your sdcard is formatted FAT32  (NOT EXFAT!) 
4. copy **firmware.bin** onto the microSD card
5. power off the Octopus
6. insert the microSD card
7. power on the Octopus
8. after a few seconds, the Octopus should be flashed
9. you can confirm that the flash was successful, by running `ls /dev/serial/by-id`.  if the flash was successful, this should now show a klipper device, similar to:
 
   ![](./images/stm32f446_id.png)

(note: this test is not appicable if the firmware was compiled for UART, rather than USB)


**Important:** If the Octopus is not powered with 12-24V, Klipper will be unable to communicate with the TMC drivers via UART and the Octopus will automatically shut down.

### Back to [Software Installation](./index.md#klipper-octoprint-configuration)
