---
layout: default
title: "Voron V0.1 - SKR Pico v1.0 Wiring"
nav_exclude: true
---
<div>

<!--
To be able to supply the Voron user and Voron Helper staff with an easy access LINK for all diagrams, I tested
a couple of different methods.  I found one method that allowed the user to left-click on the diagram
and it would open the diagram up in the web browser. I choose to not use this method because ther would be
a lot of Voron users who probably would activate this by accident and then not beable to get themselves back.

The method I choose was one that will display the LINK symbol to the left of the diagram and without adding
any title text. I ended up using header 6 with a blank title and then I use a Kramdown Syntax for specifying
a Header ID.

If I use the GFM Parser for creating a header anchor with an empty title the static web page produced
DOES NOT show the LINK symbol to the left of the diagram. The Link is setup but only I can use it in the 
web page code. An outside Voron Helper could not access the Link Address.  The GFM Parser syntax for "header anchors" forces you to use a text in the title.  If you use a title text then the LINK symbol will be generated.

But with further reading I found that Kramdown Parser does allow a "title text of empty" which produces the LINK symbol to the left of the diagram and generates the LINK address that Voron Users and Voron Helpers can access by right-clicking on the LINK symbol. The documentation for this can be found at https://kramdown.gettalong.org/syntax.html#headers ; look for "Specifying a Header ID"
-->

</div>

# Voron V0.1 - SKR Pico Wiring

## Initial Removal of Jumpers

* The BTT SKR Pico will arrive without any jumpers being set.

## Initial Preparation - Set Jumpers

* **All** Jumpers should be removed from the SKR Pico board.

## MCU

{% comment %}

    For Admin of Voron DOCs site:

    In this page the Boolean variable "UseColorText_forSKRPicoV10_1" if set to 1 then the static web page will use the colorized text for the MCU descirption.

    If you set "UseColorText_forSKRPicoV10_1" to anything other than 1, like 0 then the static web page will use regular text for the MCU descirption

{% endcomment %}

{% assign UseColorText_forSKRPicoV10_1 = 0 %}

{% capture Color_MCU_Text_forSKRPicoV10_1 %}

* Plug in stepper motors for <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, Z, and E</span> in positions <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">X, Y, Z1, and E</span>
* Plug <span style="text-shadow: 2px 2px 5px #dcc623; font-size: 125%;">Hot End thermistor</span> to <span style="text-shadow: 2px 2px 5px #00ff00; font-size: 125%;">thermistor TH0 (IO27)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End heater</span> in to <span style="text-shadow: 2px 2px 5px #00ff01; font-size: 125%;">HE (IO23)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan Signal</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN2 (IO18)</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Hot End Fan V+ (+5VDC)</span> in to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">"LASER" connector's 5V PIN</span>
* Plug <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">Part Cooling Fan</span> in to <span style="text-shadow: 2px 2px 5px #b8754b; font-size: 125%;">FAN1 (IO17)</span>
* Plug <span style="text-shadow: 2px 2px 5px #a286c0; font-size: 125%;">Bed Thermistor</span> in to <span style="text-shadow: 2px 2px 5px #0c7b84; font-size: 125%;">THB (IO26)</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">The DC bed</span> to <span style="text-shadow: 2px 2px 5px #0e7a86; font-size: 125%;">HB (IO21)</span>
* Connect <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X end stop</span> to <span style="text-shadow: 2px 2px 5px #58b946; font-size: 125%;">X-STOP connector (IO4)</span>
* Connect <span style="text-shadow: 2px 2px 5px #e45223; font-size: 125%;">Y end stop</span> to <span style="text-shadow: 2px 2px 5px #71b05f; font-size: 125%;">Y-STOP connector (IO3)</span>
* Connect <span style="text-shadow: 2px 2px 5px #d38aa8; font-size: 125%;">Z end stop</span> to <span style="text-shadow: 2px 2px 5px #710aef; font-size: 125%;">Z-STOP connector (IO25)</span>
* Wire <span style="text-shadow: 2px 2px 5px red; font-size: 125%;">24V and -V</span> from DC power supply to <span style="text-shadow: 2px 2px 5px #4c959c; font-size: 125%;">POWER</span>
* Connect <span style="text-shadow: 2px 2px 5px #cc9900; font-size: 125%;">USB Cable</span> to your SKR Pico, **<span style="text-shadow: 0 0 3px #FF0000; font-size: 125%;">but do not connect it yet to your Raspberry Pi</span>**

{% endcapture %}

{% capture Plain_MCU_Text_forSKRPicoV10_1 %}

* Plug in stepper motors for X, Y, Z, and E in positions X, Y, Z1, and E
* Plug Hot End thermistor to thermistor TH0 (IO27)
* Plug Hot End heater in to HE (IO23)
* Plug Hot Hot End Fan Signal in to FAN2 (IO18)
* Plug Hot End Fan V+ (+5VDC) in to "LASER" connector's 5V PIN
* Plug Part Cooling Fan in to FAN1 (IO17)
* Plug Bed Thermistor in to THB (IO26)
* Connect The DC bed to HB (IO21)
* Connect X end stop to X-STOP connector (IO4)
* Connect Y end stop to Y-STOP connector (IO3)
* Connect Z end stop to Z-STOP connector (IO25)
* Wire 24V and -V from DC power supply to POWER
* Connect USB Cable to your SKR Pico, but do not connect it yet to your Raspberry Pi

{% endcapture %}

{% if UseColorText_forSKRPicoV10_1 == 1 %}

{{ Color_MCU_Text_forSKRPicoV10_1 }}

{% else %}

{{ Plain_MCU_Text_forSKRPicoV10_1 }}

{% endif %}

### MCU Diagram

###### ![](.images/../images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg) {#Voron0.1_Wiring_Diagram_SKR_PICO}

* <span style="text-shadow: 0 0 3px #FF0000; font-size: 110%;">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg){:target="_blank" rel="noopener"}</span>

### The Klipper Configuration file for SKR Pico board
<span> <br> </span>
The Klipper Configuration file from VoronDesign/Voron-0 GitHub Repo, Voron0.1 branch for SKR Pico board is [located here](https://github.com/VoronDesign/Voron-0/blob/Voron0.1/Firmware/skr-pico-v1.0.cfg){:target="_blank" rel="noopener"}

## Color PIN Diagram for SKR Pico

For reference, here is the Color PIN diagram for the SKR Pico
<span> <br> </span>

###### ![](./images/SKR_PICO_V1.0_Color_PIN_diagram.jpg) {#SKR_PICO_V1.0_Color_PIN_diagram}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](./images/SKR_PICO_V1.0_Color_PIN_diagram.pdf){:target="_blank" rel="noopener"}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SKR_PICO_V1.0_Color_PIN_diagram.jpg){:target="_blank" rel="noopener"}

## Original SKR Pico Pinout
<span> <br> </span>
For reference, here is the original pinout of the SKR Pico

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR Pico schematic diagram](<./images/BTT SKR Pico V1.0-SCH.pdf>){:target="_blank" rel="noopener"}
<span> <br> </span>

###### ![](./images/skr-pico-pinout.png) {#skr-pico-pinout}

### The BTT's GitHub Repo for the SKR Pico Board

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](<./images/BTT SKR Pico V1.0-PIN.pdf>){:target="_blank" rel="noopener"}

* BigTreeTech documentation for SKR Pico board is [located here](https://github.com/bigtreetech/SKR-Pico){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?<span> <br> </span>
<span> <br> </span>

![](./images/VoronHex_Number_1_small.png)   Once the MCU board is wired up and wire management has been performed, the next step is to compile and install the Klipper Firmware, please see [The Build ═► Software Installation](../../build/software/index.md#software-installation)

![](./images/VoronHex_Number_2_small.png)   Once the MCU board has the Klipper Firmware Installed, the next step is to edit the Klipper Config file (skr-pico-v1.0.cfg) to ensure your Voron build matches your Klipper Config file, please see [The Build ═► Software Configuration](../../build/software/configuration.md#software-configuration).  Please use the Color PIN Diagrams, [displayed above](#color-pin-diagram-for-skr-pico), as a source of information. 

![](./images/VoronHex_Number_3_small.png)   After editing the Klipper Config file (skr-pico-v1.0.cfg), the next step is to check all the motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index.md#initial-startup-checks)