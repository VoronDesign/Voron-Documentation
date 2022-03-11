---
layout: default
title: "Voron V0.1 - SKR Pico v1.0 Wiring"
nav_exclude: true
---

# Voron V0.1 - SKR Pico Wiring

## Initial Removal of Jumpers

* The BTT SKR Pico will arrive without any jumpers being set.

## Initial Preparation - Set Jumpers

* **All** Jumpers should be removed from the SKR Pico board.

## MCU

* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, Z, and E</span> in positions <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, Z1, and E</span>
* Plug <span style="text-shadow: 2px 2px 5px #dcc623; font-size: 125%;">Hot End thermistor</span> to <span style="text-shadow: 2px 2px 5px #00ff00; font-size: 125%;">thermistor TH0</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End heater</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">HE</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan Signal</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN2</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan V+ (+5VDC)</span> to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">"LASER" connector's 5V PIN</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Part Cooling Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN1</span>
* Plug <span style="text-shadow: 2px 2px 5px #a286c0; font-size: 125%;">Bed Thermistor</span> in to <span style="text-shadow: 2px 2px 5px #0c7b84; font-size: 125%;">THB</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">The DC bed</span> to <span style="text-shadow: 2px 2px 5px #0e7a86; font-size: 125%;">HB</span>
* Connect <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X end stop</span> to <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X-STOP connector</span>
* Connect <span style="text-shadow: 2px 2px 5px #e45223; font-size: 125%;">Y end stop</span> to <span style="text-shadow: 2px 2px 5px #71b05f; font-size: 125%;">Y-STOP connector</span>
* Connect <span style="text-shadow: 2px 2px 5px #d38aa8; font-size: 125%;">Z end stop</span> to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Z-STOP connector</span>
* Wire <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">24V and -V</span> from DC power supply to <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">POWER</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">USB Cable</span> to your SKR Pico, **<span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">but do not connect it yet to your Raspberry Pi</span>**

### MCU Diagram

###### ![](.images/../images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg) {#Voron0.1_Wiring_Diagram_SKR_PICO}

* <span style="text-shadow: 0 0 3px #FF0000; font-size: 110%;">Downloadable BTT SKR Pico's MCU Wiring Diagram in .jpg format is [located here](./images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg)</span>

### The Klipper Configuration file for SKR Pico board
<span> <br> </span>
The Klipper Configuration file from VoronDesign/Voron-0 GitHub Repo, Voron0.1 branch for SKR Pico board is [located here](https://github.com/VoronDesign/Voron-0/blob/Voron0.1/Firmware/skr-pico-v1.0.cfg)

## Color PIN Diagram for SKR Pico

For reference, here is the Color PIN diagram for the SKR Pico
<span> <br> </span>

###### ![](./images/SKR_PICO_V1.0_Color_PIN_diagram.jpg) {#SKR_PICO_V1.0_Color_PIN_diagram}

* Downloadable BTT SKR Pico Color PIN diagram in .pdf format is [located here](./images/SKR_PICO_V1.0_Color_PIN_diagram.pdf)

* Downloadable BTT SKR Pico Color PIN diagram in .jpg format is [located here](./images/SKR_PICO_V1.0_Color_PIN_diagram.jpg)

{% comment %} 

    The .PDF file will not receive a public URL until web page is deployed.

    The public Jupyter Notebook's "nbviewer" process only accepts 

    "public URLs" for .pdf files as an input parameter.

    Only call the Jupyter Notebook's nbviewer process when you are not running this web page locally.

{% endcomment %}

{% assign colorfilename = "/build/electrical/images/SKR_PICO_V1.0_Color_PIN_diagram.pdf" %}

{% assign nbviewer_url = "https://nbviewer.org/github/VoronDesign/Voron-Documentation/" %}

{% if site.url == "http://localhost:4000" %}

* Downloadable and LOCAL ZOOM capable web display for BTT BTT SKR Pico Color PIN diagram is [located here]({{ colorfilename | prepend:site.url }}) 

{% else %}

* Downloadable and ZOOM capable web display for BTT BTT SKR Pico Color PIN diagram is [located here]({{ nbviewer_url | append: "blob/main" | append: colorfilename }}) 

{% endif %}

## Original SKR Pico Pinout
<span> <br> </span>
For reference, here is the original pinout of the SKR Pico

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR Pico schematic diagram](https://github.com/bigtreetech/SKR-Pico/blob/master/Hardware/BTT%20SKR%20Pico%20V1.0-SCH.pdf)
<span> <br> </span>

###### ![](./images/skr-pico-pinout.png) {#skr-pico-pinout}

### The BTT's GitHub Repo for the SKR Pico Board

* BigTreeTech documentation for SKR Pico board is [located here](https://github.com/bigtreetech/SKR-Pico)

* Downloadable and ZOOM capable web display for BTT's SKR Pico original pinout is [located here](http://nbviewer.jupyter.org/github/bigtreetech/SKR-Pico/blob/master/Hardware/BTT%20SKR%20Pico%20V1.0-PIN.pdf)