---
layout: default
title: FLY FLYF407ZG Klipper Firmware
nav_exclude: true
---

# FLY FLYF407ZG Klipper Firmware

## Required Items

* Klipper must be installed onto the Raspberry Pi
* At least one microSD card needs to be available depending on number of controllers.

### Build Firmware Image

* Login to the Raspberry Pi
* Run the following:

```bash
sudo apt install make
cd ~/klipper
make menuconfig
```

In the menu structure there are a number of items to be selected.

* Ensure that "Enable extra low-level configuration options" is selected
* Ensure that the micro-controller architecture is set to 'STMicroelectronics STM32'
* Ensure that the Processor model is set to "STM32F407"
* Ensure that the Bootloader offset is set to "32KiB bootloader"
* Ensure that Clock Reference is set to "8 MHz crystal"
* Ensure that  "Use USB for communication (instead of serial)" is selected

![Klipper compilation config menu](./images/flyf407zg_klipper_menuconfig.png)

Once the configuration is selected, select "Exit" and "Yes" if asked to save the configuration.

Run the following:

```bash
make clean
make
```

The `make` command, when completed, creates a firmware file **klipper.bin** that is store in the folder `/home/pi/klipper/out`.  This file need to be copied to the FLY board.  The easiest way to do this is to use a GUI like [WinSCP](https://winscp.net/eng/download.php) on Windows or either [Cyberduck](https://cyberduck.io) or scp (from terminal) on Mac to copy the file to your computer.

![Cyberduck software example](./images/cyberduck_example.png)

### Load Firmware Image

Copy the **klipper.bin** to the desktop, then rename it to **firmware.bin**

**Important:** If the file is not renamed, the bootloader will not be updated properly.

Ensure that the FLY board is not powered, then remove the microSD card that is installed.

Connect the microSD card to the computer with the **firmware.bin** file.  Open the microSD card in the file browser.  There may be a file named 'fly.cur'; that file can be deleted or left alone, it will be overwritten later.

Copy the **firmware.bin** from the desktop onto the microSD card.  If problems are encountered transferring the file(s) to the microSD card, reformat the microSD card with a FAT32 filesystem and try again.

Replace the microSD card(s) into the FLY.  If more than one, it does not matter which card goes into which controller.

Turn on the power supply to power on the FLY board.  If named properly, the FLY will automatically update with the Klipper firmware.

**Important:** If the FLY not powered with 12-24V, Klipper will be unable to communicate with the TMC drivers via UART and the FLY will automatically shut down.

---

### Back to [Software Installation](./index.md#klipper-octoprint-configuration)
