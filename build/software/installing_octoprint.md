---
layout: default
title: Installing Octoprint
parent: Software Installation
grand_parent: The Build
nav_order: 3
---

# Installing Octoprint

Install OctoPrint on the Raspberry Pi by following the instructions found at [OctoPrint Download](https://octoprint.org/download/)

Once installed, ssh to your Raspberry Pi (Using PuTTY on Windows or the terminal on MacOS) at the address `pi@octopi.local`.  The default password is 'raspberry'.  It is highly recommended to change the default password using the following process:

* Login to Raspberry Pi
* `sudo raspi-config` (password may be requested again)
* Select "Change User Password" to change the password

### Klipper Installation

Once at the command line of the Raspberry Pi, run the following commands to download and install the latest version of Klipper:

```
cd
git clone https://github.com/KevinOConnor/klipper
./klipper/scripts/install-octopi.sh
```

### Klipper Octoprint Configuration

_Make sure to only do the testing after Klipper is installed_

The OctoPrint web server needs to be configured to communicate with the Klipper host software. Using a web browser, login to the OctoPrint web page and then configure the following items:

1. Navigate to the Settings tab (the wrench icon at the top of the page)
2. Under "Serial Connection" in "Additional serial ports" add "/tmp/printer" then click "Save"
3. Open Settings tab and under "Serial Connection" change the "Serial Port" setting to "/tmp/printer"
4. In the Settings tab, navigate to the "Behavior" sub-tab and select the "Cancel any ongoing prints but stay connected to the printer" option, then click “Save”
5. From the main page, under the "Connection" section (at the top left of the page) make sure the "Serial Port" is set to "/tmp/printer" and click "Connect". (If "/tmp/printer" is not an available selection then try reloading the page)
6. Once connected, navigate to the "Terminal" tab and type "status" (without the quotes) into the command entry box and click "Send". The terminal window will likely report there is an error opening the config file - that means OctoPrint is successfully communicating with Klipper.


## Recommended OctoPrint Plugins
* OctoKlipper
* Themeify
* TerminalCommands
* Bed Level Visualizer
* Print Time Genius

---
### Back: [Software Installation](./index.md)
