---
layout: default
title: "Trident - SKR V1.3 in SPI Mode - Wiring"
nav_exclude: true
---

# Trident - SKR V1.3 in SPI Mode - Wiring

## Initial Removal of Jumpers

Remove **all** the <span style="color: #e6e114;">YELLOW</span> on-board jumpers, located at the positions as shown below.

![](./images/SKR_V1.3_PREP-Removal_150.png)

## Initial Preparation - Set Jumpers

* Set the on-board jumpers, located at the positions as shown by the <span style="color: #5ce75a;">GREEN</span> jumpers in the below diagram:

![](./images/SKR_V1.3_in_SPI_mode_PREP_150.png)

## MCU X/Y/E, Hot End in SPI Mode

* Place stepper drivers for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, and E</span> in positions <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, and E0</span>
* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, and E</span> in positions <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, and E0</span>
* Plug <span style="text-shadow: 2px 2px 5px #dcc623; font-size: 125%;">Hot End thermistor</span> to <span style="text-shadow: 2px 2px 5px #00ff00; font-size: 125%;">thermistor TH0 (P0.24)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End heater</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">HE0 (P2.7)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">HE1 (P2.4)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Part Cooling Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">Fan (P2.3)</span>
* Connect <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X end stop</span> to <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X+ connector (P1.28)</span>
* Connect <span style="text-shadow: 2px 2px 5px #e45223; font-size: 125%;">Y end stop</span> to <span style="text-shadow: 2px 2px 5px #71b05f; font-size: 125%;">Y+ connector (P1.26)</span>
* Wire <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">24V and 0V</span> from DC power supply to <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">Power/DCIN</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">USB Cable</span> to your SKR V1.3, <span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">but do not connect it yet to your Raspberry Pi</span>

### MCU X/Y/E, Hot End in SPI Mode Diagram

![](./images/Trident_Wiring_Diagram_BTT_SKRV1.3_XYE_in_SPI_mode_150.jpg)

* <span style="text-shadow: 0 0 3px #FF0000; font-size: 110%;">Downloadable BTT SKR 1.3's "MCU X/Y/E, Hot End" Wiring Diagram in .jpg format is [located here](./images/Trident_Wiring_Diagram_BTT_SKRV1.3_XYE_in_SPI_mode_150.jpg)</span>

## MCU Z, Bed, Exhaust Fan in SPI Mode

* Place stepper drivers for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Z2, Z1, and Z0</span> into positions <span style="text-shadow: 2px 2px 5px #700aea; font-size: 125%;">X, Z, and E1</span>
* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Z2, Z1, and Z0</span> into positions <span style="text-shadow: 2px 2px 5px #700aea; font-size: 125%;">X, Z, and E1</span>
* Plug <span style="text-shadow: 2px 2px 5px #a286c0; font-size: 125%;">Bed Thermistor</span> in to <span style="text-shadow: 2px 2px 5px #0c7b84; font-size: 125%;">TB (P0.23)</span>
* Plug in <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Exhaust Fan</span> in to <span style="text-shadow: 2px 2px 5px #0e7a86; font-size: 125%;">H-BED (P2.5)</span>
* Plug in <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Controller Fans</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN (P2.3)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">SSR Control for Heated Bed</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">HE1 (P2.4)</span>
* Plug <span style="text-shadow: 2px 2px 5px #d38aa8; font-size: 125%;">Z Endstop Switch</span> into <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Z- (P1.25)</span>
* Plug <span style="text-shadow: 2px 2px 5px #6c6b69; font-size: 125%;">Probe Signal (with BAT85 diode)</span> in to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Z+ (P1.24)</span>
* Plug <span style="text-shadow: 2px 2px 5px #6c6b69; font-size: 125%;">Probe GND</span> and <span style="text-shadow: 2px 2px 5px #6c6b69; font-size: 125%;">Probe Voltage</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">"DC OUT" connector</span> next to X motor connector
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">display wires</span> in to <span style="text-shadow: 2px 2px 5px #2bb5e3; font-size: 125%;">EXP1 and EXP2</span>
* Wire <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">24V and 0V</span> from DC power supply to <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">Power/DCIN</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">USB Cable</span> to your SKR 1.3, <span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">but do not connect it yet to your Raspberry Pi</span>

### MCU Z, Bed, Exhaust Fan in SPI Mode Diagram

![](./images/Trident_Wiring_Diagram_BTT_SKRV1.3_Z_in_SPI_mode_150.jpg)

* <span style="text-shadow: 0 0 3px #FF0000; font-size: 110%;">Downloadable BTT SKR 1.3's "Z, Bed, Exhaust Fan" Wiring Diagram in .jpg format is [located here](./images/Trident_Wiring_Diagram_BTT_SKRV1.3_Z_in_SPI_mode_150.jpg)</span>

## Please Ensure the Heat Sinks are Installed Before Use

### MCU X/Y/E, Hot End with Heat Sinks Installed
<span> <br> </span>
![](./images/SKR_V1.3_In_SPI_mode_Heatsinks1_150.png)

### MCU Z, Bed, Exhaust Fan with Heat Sinks Installed
<span> <br> </span>

![](./images/SKR_V1.3_In_SPI_mode_Heatsinks1_150.png))

## SSR Wiring

* Wire colors will vary depending on your location.

![](./images/btt-SKRV1.3inSPI-ssr-wiring.png)

* Downloadable SSR Wiring Diagram for the BTT SKR V1.3 board in SPI mode (.jpg format) is [located here](./images/btt-SKRV1.3inSPI-ssr-wiring.png)
<span> <br> </span>
## mini 12864 Display

* See [the mini12864 guide](./mini12864_klipper_guide.md)

<div> 

<!--### The Klipper Configuration file for SKR V1.3 board 

The Klipper Configuration file from VoronDesign/Voron-2 GitHub Repo for SKR V1.3 board is [located here](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/firmware/klipper_configurations/SKR_1.3/Voron2_SKR_13_Config.cfg)
--> 
</div>

## Color PIN Diagram for SKR V1.3
<span> <br> </span>
For reference, here is the Color PIN diagram for the SKR V1.3
<span> <br> </span>

![](./images/SKRV1.3_Colored_PIN_Diagram_300.jpg)

* Downloadable BTT SKR V1.3 Color PIN diagram in .pdf format is [located here](./images/SKRV1.3_Colored_PIN_Diagram.pdf)

* Downloadable BTT SKR V1.3 Color PIN diagram in .jpg format is [located here](./images/SKRV1.3_Colored_PIN_Diagram_300.jpg)

{% comment %} 
    The .PDF file will not receive a public URL until web page is deployed.

    The public Jupyter Notebook's "nbviewer" process only accepts 

    "public URLs" for .pdf files as an input parameter.

    Only call the Jupyter Notebook's nbviewer process when you are not running this web page locally.

{% endcomment %}

{% assign colorfilename = "/build/electrical/images/SKRV1.3_Colored_PIN_Diagram.pdf" %}

{% assign nbviewer_url = "https://nbviewer.org/github/VoronDesign/Voron-Documentation/" %}

{% if site.url == "http://localhost:4000" %}

* Downloadable and LOCAL ZOOM capable web display for BTT SKR V1.3 Color PIN diagram is [located here]({{ "/build/electrical/images/SKRV1.3_Colored_PIN_Diagram.pdf" | prepend:site.url }}) 

{% else %}

* Downloadable and ZOOM capable web display for BTT SKR V1.3 Color PIN diagram is [located here]({{ nbviewer_url | append: "blob/main" | append: colorfilename }}) 

{% endif %}

## Original SKR V1.3 Pinout
<span> <br> </span>
For reference, here is the original pinout of the SKR V1.3

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR V1.3 schematic diagram](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/blob/master/BTT%20SKR%20V1.3/hardware/SKR-V1.3-SCH.pdf)
<span> <br> </span>

![](./images/original-SKR-V1.3-PIN_150.jpg)

### The BTT's GitHub Repo for the SKR V1.3 board

* BigTreeTech documentation for SKR V1.3 board is [located here](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/tree/master/BTT%20SKR%20V1.3) 

* Downloadable and ZOOM capable web display for BTT's SKR V1.3 original pinout is [located here](http://nbviewer.jupyter.org/github/bigtreetech/BIGTREETECH-SKR-V1.3/blob/master/BTT%20SKR%20V1.3/hardware/SKR-V1.3-PIN.pdf)
