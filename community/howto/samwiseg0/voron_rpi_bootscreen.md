---
layout: default
title: Voron Raspberry Pi Boot Screens
nav_exclude: true
---

# Voron Raspberry Pi Boot Screens
![](./Images/boot_tile.png)

Source PSD and images can be found in my [GitHub repo](https://github.com/samwiseg0/misc_3dprinting/tree/main/guides/voron_rpi_bootscreen)! Feel free to [reach out to me on Discord (Samwiseg0#4034)](https://discord.com/users/210122378317922308). I will be happy to customize the serial number on any of the splash screens.

## NOTE:
**This guide will only work on Raspberry Pi OS LITE images. If you are using FluiddPi or MainsailOS those images will work. The following procedure has been verified on buster and bullseye.**

Start by removing all the default screens and also the Raspberry images. Also, disable all the bootup lines.

Edit `/boot/config.txt` to remove the color test/rainbow screen.

```cmd
sudo nano /boot/config.txt
```

Add:
```cmd
disable_splash=1
```
Press **Ctrl+X, Y** for save and **Enter** to return to the command line.

Edit `/boot/cmdline.txt`
 ```cmd
sudo nano /boot/cmdline.txt
```
Add the following to the end of the first line

```cmd
logo.nologo consoleblank=0 loglevel=1 quiet vt.global_cursor_default=0
```

* `logo.nologo` - Remove the Raspberry logo.
* `consoleblank=0 loglevel=1 quiet` - Disable the commands and various bits of the kernel
* `vt.global_cursor_default=0`- Removes the blinking cursor before the image loads.

Press **Ctrl+X, Y** for save and **Enter** to return to the command line.

Remove the login prompt by running
```cmd
sudo systemctl disable getty@tty3
```

## Add the new splash screen

To make the image readable install `fbi`. `fbi` is a frame-buffer image viewer.

Install `fbi`
```cmd
sudo apt install fbi
```

It will take a few seconds to install. After this we have to create a file by

```cmd
sudo nano /etc/systemd/system/splashscreen.service
```

Add the following:

```
[Unit]
Description=Splash screen
DefaultDependencies=no
After=local-fs.target

[Service]
#ExecStartPre is to workaround a race condition with bullseye. It can be removed in most cases. If an error appears on the screen that says it "cannot open /dev/fb0" then make sure ExecStartPre is used.
ExecStartPre=/usr/bin/sleep 2
ExecStart=/usr/bin/fbi -d /dev/fb0 --noverbose -a /home/pi/boot-image.png
StandardInput=tty
StandardOutput=tty

[Install]
WantedBy=sysinit.target
```
 * `-d/dev/fb0` - Tells `fbi` which framebuffer to use for displaying

 * `--noverbose` - Suppresses `fbi` ‘status bar’ at the bottom.

 * `-a` - If the selected image is in the proper measurements then no editing is required; if not, then “-a” will act as editor.

 * `StandardInput`/`StandardOutput`  - Allows `fbi` get access to tty.

 * `DefaultDependencies` -  will override the systemd’s default behavior.

 * `fbi` will be loaded in the boot process when `WantedBy` is accessed, not before the file system (and hence image) are ready, through the `After` option.

Place the image on the Pi and name it `boot-image.png`. The image should live in the main home directory for the `pi` user. The full path for the image is `/home/pi/boot-image.png` **You may use another name but you must change it in the systemd file above.**

You can find a basic guide on how to connect to the Pi and transfer a file [here](https://howchoo.com/pi/how-to-transfer-files-to-the-raspberry-pi). Note that when you connect to your Pi via any of these methods the default location is `/home/pi/`. You should be able to just drop the file into the default directory after connecting.

Enable the service by running
```cmd
sudo systemctl enable splashscreen
```

Now reboot the Raspberry Pi and verify your image by

```cmd
sudo reboot
```

fin.
