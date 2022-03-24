---
layout: default
title: "Voron Switchwire - SKR mini E3 V2.0 Wiring"
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

# Voron Switchwire - SKR mini E3 V2.0 Wiring

## Initial Removal of Jumpers

* There is only **one jumper** on the SKR mini E3 V2.0 board.  This jumper will be set in the next step.

## Initial Preparation

* Set the on-board jumper, located at the position as shown by the **<span class="color-blind-green">GREEN</span>** jumper in the diagram below:

###### ![](./images/PREP_SKR_mini_E3_V2.0_150.png) {#PREP_SKR_mini_E3_V2.0}

## MCU

* Plug in stepper motors for X, Y, Z, and E in positions Xm, Ym, ZAm, and Em
* Plug Hot End thermistor to thermistor TH0 (PA0)
* Plug Hot End heater in to E0 (PC8)
* Plug Hot End Fan in to FAN1 (PC7)
* Plug Part Cooling Fan in to FAN0 (PC6)
* Plug Bed Thermistor in to THB (PC3)
* Connect Bed Heater to HB connector (PC9)
* Connect X end stop to X-STOP connector (PC0)
* Connect Y end stop to Y-STOP connector (PC1)
* Plug Probe GND and Signal (with BAT85 diode) in to Z-STOP (PC2)
* Connect Probe +V (Probe Voltage) to VIN in terminal on the "DCOUT" connector next to HB
* Wire 24V and -V from DC power supply to VIN and GND terminals in corner on the "DCIN (Power In)" connector
* Connect USB Cable to your SKR mini E3, **but do not connect it yet to your Raspberry Pi**

### MCU Diagram

###### ![](./images/SW_Wiring_Diagram_SKR_mini_E3_V2.0_150.jpg) {#SW_Wiring_Diagram_SKR_mini_E3_V2.0}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SW_Wiring_Diagram_SKR_mini_E3_V2.0_150.jpg){:target="_blank" rel="noopener"}</span>

## Please Ensure the Heat Sinks are Installed Before Use

###### ![](./images/SKR_mini_E3_V2.0_heatsinks_150.png) {#SKR_mini_E3_V2.0_heatsinks}

### The Klipper Configuration file for SKR mini E3 V2.0 board

The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for SKR mini E3 V2.0 board is [located here; Select "SW SKR mini e3 V2.0"](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"}

## Color PIN Diagram for SKR Mini E3 V2.0

For reference, here is the Color PIN diagram for the SKR mini E3 V2.0

###### ![](./images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.jpg) {#skr_mini_E3_V2.0_Color_PIN_diagram}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](./images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.pdf){:target="_blank" rel="noopener"}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SKR_mini_E3_V2.0_Color_PIN_diagram_300.jpg){:target="_blank" rel="noopener"}


## Original SKR Mini E3 V2.0 Pinout

For reference, here is the original pinout of the SKR mini E3 V2.0

* Note: If you see a conflict between the original pinout and any other source, please refer back to the [BigTreeTech SKR mini E3 V2.0 schematic diagram](<./images/BTT SKR MINI E3 V2.0SCHpdf.PDF>){:target="_blank" rel="noopener"}


###### ![](./images/miniE3-v20-pinout.png) {#miniE3-v20-pinout}

* If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in PDF format then [click here](<./images/BTT SKR MINI E3 V2.0-PIN.pdf>){:target="_blank" rel="noopener"}


### The BTT's GitHub Repo for the SKR mini E3 V2.0

*  BTT's documentation for SKR mini E3 V2.0 board is [located here](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V2.0){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please see [The Build ═► Software Installation -> Firmware Flashing(Header) -> SKR mini e3 V2.0](../../build/software/miniE3_v20_klipper#skr-mini-e3-v20-klipper-firmware){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to edit the Klipper Config file (skr_mini_e3_v2_config.cfg) to ensure your Voron build matches your Klipper Config file, please see [located here; Select "SW SKR mini e3 V2.0"](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed above](#skr_mini_E3_V2.0_Color_PIN_diagram), as a source of information;

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.


4. After editing the Klipper Config file (skr_mini_e3_v2_config.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}