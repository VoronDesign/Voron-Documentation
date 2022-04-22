---
layout: default
title: "Voron Switchwire - SKR Pico V1.0 Wiring"
nav_exclude: true
---
# Voron Switchwire - SKR Pico V1.0 Wiring

## Initial Removal of Jumpers

* The BTT SKR Pico will arrive without any jumpers being set.

## Initial Preparation - Set Jumpers

* Set the on-board jumper, located at the position as shown by the **<span class="color-blind-green">GREEN</span>** jumper in the diagram below:

###### ![](./images/v2tri_SKR_PICO_V1.0_PREP.png) {#v2tri_SKR_PICO_V1.0_PREP_sw}

* If you want to open the above picture, in a new tab of your web browser, then [click here](./images/v2tri_SKR_PICO_V1.0_PREP.png){:target="_blank" rel="noopener"}

## Voltage Selection Header and Other Headers

* Ensure the **removal of the SW_USB 5V power supply jumper ("SW_USB header, shown in the <span class="color-blind-purple">PURPLE box</span>")** which avoids the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* In the diagram below, ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-orange">ORANGE boxes</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstops.

* **Set the SELECT-PROXIMITY-I/O-PIN jumper (shown in the <span class="color-blind-yellow">YELLOW box</span>).**  This SELECT-PROXIMITY-I/O-PIN jumper selects which connector uses IO22 pin (either connector PS or PROBE). Even tho the Voron printer does not use the dedicated PROBE connector for its proximity sensor (inductive probe), set this jumper for the PROBE connector.

* Ensure the **removal of the SELECT-PROXIMITY-STYLE jumper (shown in the <span class="color-blind-red">RED box</span>).** Since the Voron printer does not use the dedicated probe connector, ensure this header is empty.

__<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **Double check the** __<span class="color-blind-green">GREEN</span>__ **jumper is set appropriately (and the other jumpers are removed), especially the headers called out by the _COLORED BOXES_, BEFORE the power supply is connected.**

###### ![](./images/v2tri_SKR_PICO_V1.0_voltageselect.png) {#v2tri_SKR_PICO_V1.0_voltageselect_sw}

* If you want to open the above picture, in a new tab of your web browser, then [click here](./images/v2tri_SKR_PICO_V1.0_voltageselect.png){:target="_blank" rel="noopener"}

## MCU

* - [ ] Connect 24V and GND (V+ and V-) from the PSU to POWER/DCIN
* - [ ] Plug in stepper motors for X positions X (motor connector)
* - [ ] Plug in stepper motors for Y in positions Y (motor connector)
* - [ ] Plug in stepper motors for Z in positions Z1 (motor connector)
* - [ ] Plug in stepper motors for E in positions E (motor connector)
* - [ ] Plug Hot End thermistor to thermistor TH0 (IO27)
* - [ ] Plug Hot End heater in to HE (IO23)
* - [ ] Plug part cooling fan in to FAN1 (IO17)
* - [ ] Plug hot end fan in to FAN2 (IO18)
* - [ ] Plug Bed Thermistor in to THB (IO26)
* - [ ] Connect The DC bed to HB (IO21)
* - [ ] Connect X end stop to X-STOP connector (IO4)
* - [ ] Connect Y end stop to Y-STOP connector (IO3)
* - [ ] Connect the Probe Signal (with&nbsp;**BAT85 diode**) to Z-STOP connector (IO25)
* - [ ] Connect the V+ an 0V wires of the probe to LASER connector
* if using USB to communicate with Pi:
    1. - [ ] Connect USB Cable to the SKR Pico board, but do not connect it yet to your Raspberry Pi
* if using UART (3-wire communication) with Pi:
    1. - [ ] [complete the steps for setting up UART communications with the Raspberry Pi](./skr_pico_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}
    2. - [ ] Connect UART cable to the SKR Pico board, but do not connect it yet to your Raspberry Pi

BAT85
: a Schottky barrier diode. BAT85 is needed to protect the SKR board (MCU board) from being fried.  An Inductive Probe device (Omron TL-Q5MC2; Omron TL-Q5MC2-Z or Panasonic GX-HL15BI-P) communicates at a much higher voltage level (10V - 30V) then the MCU board.  The BAT85 is used to protect the input signal PIN of the MCU board; without the BAT85 the MCU board will be damaged.  If two BAT85s are used in series, the circuit will protect the MCU board and still allow the inductive probe to function properly. [For more information, click here](./index#bat85-diode){:target="_blank" rel="noopener"}

### MCU Diagram

###### ![](.images/../images/SW_Wiring_Diagram_BTT_SKR_PICO_V1.0.jpg) {#SW_Wiring_Diagram_BTT_SKR_PICO_V1.0}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/SW_Wiring_Diagram_BTT_SKR_PICO_V1.0.jpg){:target="_blank" rel="noopener"}</span>

## Powering the Raspberry Pi & Setting up UART Communications with the Raspberry Pi

* see [the SKR Pico's Raspberry Pi Section](./skr_pico_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

<div>

<!--### The Klipper Configuration file for SKR Pico board
<span> <br> </span>
The Klipper Configuration file from VoronDesign/Voron-Switchwire GitHub Repo for SKR Pico board is [located here](https://github.com/VoronDesign/Voron-Switchwire/blob/master/Firmware/xxxxxxxskr_pico_config.cfg){:target="_blank" rel="noopener"}
-->

</div>

## URL Resources Links for the SKR Pico (PIN Diagrams and Repo)

* see [The SKR Pico Resource Section](./skr_pico_Resources#color-pin-diagram-for-skr-pico){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please use the [ Color Pin Diagram, look for "Klipper Building Options"](./images/SKR_PICO_V1.0_Color_PIN_diagram.pdf){:target="_blank" rel="noopener"}; an alternative source of information on how to build and install the Klipper firmware for the SKR Pico is [located here](https://github.com/bigtreetech/SKR-Pico/blob/master/Klipper/README.md#build-firmware-image){:target="_blank" rel="noopener"} or the [picture of the menu config screen for Klipper](https://raw.githubusercontent.com/bigtreetech/SKR-Pico/master/Klipper/Images/klipper_menuconfig.png){:target="_blank" rel="noopener"}

3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create** the Klipper Config file (create a printer.cfg file);

    * Please use the Color PIN Diagrams, [displayed here](./skr_pico_Resources#color-pin-diagram-for-skr-pico){:target="_blank" rel="noopener"}, as a source of information.

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After **creating** the Klipper Config file (printer.cfg), the next step is to check all the Motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}

<script>
    window.onload = function sw_skr_pico_enable_checkboxes(){
    const sw_skr_pico_checkboxes = document.getElementsByClassName('task-list-item-checkbox');
    Array.prototype.forEach.call(sw_skr_pico_checkboxes, function (e) {
        e.removeAttribute('disabled');
    });
    }
</script>