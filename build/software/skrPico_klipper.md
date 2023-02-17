---
layout: default
title: SKR Pico Klipper Firmware
nav_exclude: true
---

# SKR Pico Klipper Firmware

### Required Items

* Klipper must be installed onto the Raspberry Pi
* At least one microSD card needs to be available depending on number of controllers.

### Build Firmware Image

* Connect the Pico and the Pi via USB
* SSH into the Raspberry Pi using Putty or a similar tool
* Run the following:

```
sudo apt install make
cd ~/klipper
make menuconfig
```

In the configurator, Enable extra low-level configuration options

* Ensure that the micro-controller architecture is set to 'Raspberry Pi RP2040' 

![](./images/skrPico_klipper_menuconfig.png)

Once the configuration is selected, Pres `Q` to exit and "Yes" if asked to save the configuration.

Run the following:

```
make clean
make
```

The `make` command, when completed, creates a firmware file called klipper.uf2 and can be located in the directory ~/klipper/out. On the raspberry pi


### Prepare SKR PICO for flashing

A couple steps need to be taken to setup the SKR Pico for flashing

* Install the jumper for USB Power (this enables the Pico to be powered over USB and will be removed after flashing. Only use this if you don’t have it connected to 24v at the moment)

* Install the jumper on the Boot pins

![](./images/SKR_Pico_Pin_Flashing.png)

Now, you can flash the SKR Pico a couple different ways - via PC or the Raspberry pi. We will cover both methods in this guide

### PC Method:

You can now copy the klipper.uf2 file to a directory that you can access via mainsail/fluid by running the following command

```
cp out/klipper.uf2 ~/printer_data/config/klipper.uf2
```
 
After running the above command, you should find the klipper.uf2 file in the config section of your UI (Mainsail/fluidd)

![](./images/Mainsail_klipperuf2_file.png)

Right click and download this (klipper.uf2) file to your PC in order to flash the Skr Pico.

Next, you will connect the Skr Pico to your PC using the USB-C connector, then push the reset button on the Pico.  It should show up just like a flash drive would on your computer.

![](./images/windows_explorer_mounted_drive.png)

The last step is to copy the file you saved above (klipper.uf2) onto the Skr Pico just like you would with any file on a flash drive. As soon as you copy the file over the SKR pico will reboot automatically and it will be flashed with Klipper.

Now, unplug the Pico from the PC, remove the jumpers, plug it into your Raspberry Pi, push the reset button, and check if it’s been flashed properly by running the following command:

```
ls /dev/serial/by-id
```

![](./images/SKR_pico_by-id_output.png)

If it has been flashed properly the result should be similar to the one in the img above. 

* NOTE: your USB-ID will be different, but it should start with usb-Klipper-rp2040


### Raspberry Pi method

With the Pico plugged into the Pi via USB-C and the boot jumper installed, press the reset button.

Next we need to mount the SKR Pico to the Raspi to copy the file (klipper.uf2) over

Run the following commands:

```
sudo mount /dev/sda1 /mnt
sudo cp out/klipper.uf2 /mnt
sudo umount /mnt
```

Next remove the jumpers that were installed earlier and reset the SKR Pico

Run this command to receive the USB-ID for the SKR Pico

```
ls /dev/serial/by-id
```

If it has been flashed properly the result should be similar to the one in the img below. 

![](./images/SKR_pico_by-id_output.png)

* NOTE: your USB-ID will be different, but it should start with usb-Klipper-rp2040


**Important:** If the Pico is not powered with 12-24V, Klipper will be unable to communicate with the TMC drivers via UART and the Pico will automatically shut down.

### Back to [Software Installation](./index.md#klipper-octoprint-configuration)
