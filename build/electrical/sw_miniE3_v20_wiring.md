---
layout: default
title: "Voron Switchwire - SKR mini E3 V2.0 Wiring"
nav_exclude: true
---

# Voron Switchwire - SKR mini E3 V2.0 Wiring

## Initial Removal of Jumpers

* There is only one jumper on the SKR mini E3 V2.0 board.  This jumper is will be set in the next step.

## Initial Preparation

* Set the on-board jumpers, located at the positions as shown by the <span style="color: #5ce75a;">GREEN</span> jumpers in the below diagram:

![](./images/PREP_SKR_mini_E3_V2.0_150.png)

## MCU

* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, Z, and E</span> in positions <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Xm, Ym, ZAm, and Em</span>
* Plug <span style="text-shadow: 2px 2px 5px #dcc623; font-size: 125%;">Hot End thermistor</span> to <span style="text-shadow: 2px 2px 5px #00ff00; font-size: 125%;">thermistor TH0</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End heater</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">E0</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN1</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Part Cooling Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN0</span>
* Plug <span style="text-shadow: 2px 2px 5px #a286c0; font-size: 125%;">Bed Thermistor</span> in to <span style="text-shadow: 2px 2px 5px #0c7b84; font-size: 125%;">THB</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Bed Heater</span> to <span style="text-shadow: 2px 2px 5px #0e7a86; font-size: 125%;">HB connector</span>
* Connect <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X end stop</span> to <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X-STOP connector</span>
* Connect <span style="text-shadow: 2px 2px 5px #e45223; font-size: 125%;">Y end stop</span> to <span style="text-shadow: 2px 2px 5px #71b05f; font-size: 125%;">Y-STOP connector</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Probe GND and Signal (with BAT85 diode)</span> in to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Z-STOP</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Probe +V (Probe Voltage)</span> to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">VIN in terminal on the "DCOUT" connector</span> next to HB
* Wire <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">24V and -V</span> from DC power supply to VIN and GND terminals in corner on the "DCIN (Power In)" connector</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">USB Cable</span> to your SKR mini E3, <span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">but do not connect it yet to your Raspberry Pi</span>

### MCU Diagram

![](./images/SW_Wiring_Diagram_SKR_mini_E3_V2.0_150.jpg)

* <span style="text-shadow: 0 0 3px #FF0000; font-size: 110%;">Downloadable BTT SKR mini E3 V2.0 Wiring Diagram in .jpg format is [located here](./images/SW_Wiring_Diagram_SKR_mini_E3_V2.0_150.jpg)</span>

## Please Ensure the Heat Sinks are Installed Before Use

![](./images/SKR_mini_E3_V2.0_heatsinks_150.png)

### The Klipper Configuration file for SKR mini E3 V2.0 board
<span> <br> </span>
The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for SKR mini E3 V2.0 board is [located here](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/skr_mini_e3_v2_config.cfg)

## Color PIN Diagram for SKR Mini E3 V2.0

For reference, here is the Color PIN diagram for the SKR mini E3 V2.0

![](./images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.jpg)

* Downloadable BTT SKR Mini E3 V2.0 Color PIN diagram in .pdf format is [located here](./images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.pdf)

* Downloadable BTT SKR Mini E3 V2.0 Color PIN diagram in .jpg format is [located here](./images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.jpg)

{% comment %} 

    The .PDF file will not receive a public URL until web page is deployed.

    The public Jupyter Notebook's "nbviewer" process only accepts 

    "public URLs" for .pdf files as an input parameter.

    Only call the Jupyter Notebook's nbviewer process when you are not running this web page locally.

{% endcomment %}

{% assign colorfilename = "/build/electrical/images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.pdf" %}

{% assign nbviewer_url = "https://nbviewer.org/github/VoronDesign/Voron-Documentation/" %}

{% if site.url == "http://localhost:4000" %}

* Downloadable and LOCAL ZOOM capable web display for BTT SKR Mini E3 V2.0 Color PIN diagram is [located here]({{ "/build/electrical/images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.pdf" | prepend:site.url }}) 

{% else %}

* Downloadable and ZOOM capable web display for BTT SKR Mini E3 V2.0 Color PIN diagram is [located here]({{ nbviewer_url | append: "blob/main" | append: colorfilename }}) 

{% endif %}

## Original SKR Mini E3 V2.0 Pinout

For reference, here is the original pinout of the SKR mini E3 V2.0

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR mini E3 V2.0 schematic diagram](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/blob/master/hardware/BTT%20SKR%20MINI%20E3%20V2.0/Hardware/BTT%20SKR%20MINI%20E3%20V2.0SCHpdf.PDF)
<span> <br> </span>

![](./images/miniE3-v20-pinout.png)

### The BTT's GitHub Repo for the SKR mini E3 V2.0

* BigTreeTech documentation for SKR mini E3 V2.0 board is [located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V2.0)

* Downloadable and ZOOM capable web display for BTT's SKR mini E3 V2.0 original pinout is [located here](http://nbviewer.jupyter.org/github/bigtreetech/BIGTREETECH-SKR-mini-E3/blob/master/hardware/BTT%20SKR%20MINI%20E3%20V2.0/Hardware/BTT%20SKR%20MINI%20E3%20V2.0-PIN.pdf)