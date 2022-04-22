---
layout: default
title: "Voron V0.1 - SKR Pico v1.0 Wiring"
nav_exclude: true
---
# Voron V0.1 - SKR Pico Wiring

## Initial Removal of Jumpers

* The BTT SKR Pico will arrive without any jumpers being set.

## Initial Preparation - Set Jumpers

* **All** Jumpers should be **removed** from the SKR Pico board.

###### ![](./images/SKR_PICO_V1.0_PREP.png) {#SKR_PICO_V1.0_PREP_v2}

* If you want to open the above picture, in a new tab of your web browser, then [click here](./images/SKR_PICO_V1.0_PREP.png){:target="_blank" rel="noopener"}

## Voltage Selection Header and Other Headers

* Ensure the **removal of the SW_USB 5V power supply jumper ("SW_USB header, shown in the <span class="color-blind-purple">PURPLE box</span>")** which avoids the interaction between the USB 5V of Raspberry Pi and the DC-DC 5V of the motherboard.

* In the diagram below, ensure **all of "DIAG Jumpers" (shown in the <span class="color-blind-orange">ORANGE boxes</span>) are removed** to avoid the influence of TMC2209 DIAG on the endstops.

* Ensure the **removal of the SELECT-PROXIMITY-I/O-PIN jumper (shown in the <span class="color-blind-yellow">YELLOW box</span>).**  This SELECT-PROXIMITY-I/O-PIN jumper selects which connector uses IO22 pin (either connector PS or PROBE). Since the Voron printer does not use a proximity sensor (inductive probe), remove the jumper.

* Ensure the **removal of the SELECT-PROXIMITY-STYLE jumper (shown in the <span class="color-blind-red">RED box</span>).** Since the Voron printer does not use a probe device, ensure this header is empty.

__<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__ **Double check all the** __<span class="color-blind-green">GREEN</span>__ **jumpers are removed, especially the headers called out by the _COLORED BOXES_, BEFORE the power supply is connected.**

###### ![](./images/SKR_PICO_V1.0_voltageselect.png) {#SKR_PICO_V1.0_voltageselect}

* If you want to open the above picture, in a new tab of your web browser, then [click here](./images/SKR_PICO_V1.0_voltageselect.png){:target="_blank" rel="noopener"}

## MCU

* - [ ] Plug in stepper motors for X positions X (motor connector)
* - [ ] Plug in stepper motors for Y in positions Y (motor connector)
* - [ ] Plug in stepper motors for Z in positions Z1 (motor connector)
* - [ ] Plug in stepper motors for E in positions E (motor connector)
* - [ ] Plug Hot End thermistor to thermistor TH0 (IO27)
* - [ ] Plug Hot End heater in to HE (IO23)
* - [ ] Plug Hot End Fan Signal in to FAN2 (IO18)
* - [ ] Plug Hot End Fan V+ (+5VDC) in to LASER connector's 5V PIN
* - [ ] Plug Part Cooling Fan in to FAN1 (IO17)
* - [ ] Plug Bed Thermistor in to THB (IO26)
* - [ ] Connect The DC bed to HB (IO21)
* - [ ] Connect X end stop to X-STOP connector (IO4)
* - [ ] Connect Y end stop to Y-STOP connector (IO3)
* - [ ] Connect Z end stop to Z-STOP connector (IO25)
* - [ ] Wire 24V and -V from DC power supply to POWER
* if using USB to communicate with Pi:
    1. - [ ] Connect USB Cable to the SKR Pico board, but do not connect it yet to your Raspberry Pi
* if using UART (3-wire communication) with Pi:
    1. - [ ] [complete the steps for setting up UART Serial communications with the Raspberry Pi](./skr_pico_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}
    2. - [ ] Move Hot End Fan V+ (+5VDC) in to SERVOS connector's 5V PIN
    3. - [ ] Connect UART cable (3-wire communication) to the SKR Pico board's "Raspberry Pi" connector, but do not connect it yet to your Raspberry Pi

### MCU Diagram

###### ![](.images/../images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg) {#Voron0.1_Wiring_Diagram_SKR_PICO}

* <span class="fs_percent_110">If you want to open the above diagram, in a new tab of your web browser, and have the ability to zoom and download the diagram in JPG format then [click here](./images/Voron0.1_Wiring_Diagram_SKR_PICO_V1.0.jpg){:target="_blank" rel="noopener"}</span>

## Powering the Raspberry Pi & Setting up UART Serial Communications with the Raspberry Pi

* see [the SKR Pico's Raspberry Pi Section](./skr_pico_RaspberryPi#raspberry-pi){:target="_blank" rel="noopener"}

### The Klipper Configuration file for SKR Pico board
<span> <br> </span>
The Klipper Configuration file from VoronDesign/Voron-0 GitHub Repo, Voron0.1 branch for SKR Pico board is [located here](https://raw.githubusercontent.com/VoronDesign/Voron-0/Voron0.1/Firmware/skr-pico-v1.0.cfg){:target="_blank" rel="noopener"}

## URL Resources Links for the SKR Pico (PIN Diagrams and Repo)

* see [The SKR Pico Resource Section](./skr_pico_Resources#color-pin-diagram-for-skr-pico){:target="_blank" rel="noopener"}

## After I have Wired up the MCU Board, What Comes Next?

1. Once the MCU board is wired up and wire management has been performed, the next step is to install Mainsail/Fluidd or Octoprint, please see [The Build ═► Software Installation](../../build/software/index#software-installation){:target="_blank" rel="noopener"}

2. Once Mainsail/Fluidd or Octoprint has been installed, the next step is to **compile and install** the Klipper Firmware, please use the [ Color Pin Diagram, look for "Klipper Building Options"](./images/SKR_PICO_V1.0_Color_PIN_diagram.pdf){:target="_blank" rel="noopener"}; an alternative source of information on how to build and install the Klipper firmware for the SKR Pico is [located here](https://github.com/bigtreetech/SKR-Pico/blob/master/Klipper/README.md#build-firmware-image){:target="_blank" rel="noopener"} or the [picture of the menu config screen for Klipper](https://raw.githubusercontent.com/bigtreetech/SKR-Pico/master/Klipper/Images/klipper_menuconfig.png){:target="_blank" rel="noopener"}


3. Once the MCU board has the Klipper Firmware Installed, the next step is to **create/edit** the Klipper Config file (skr-pico-v1.0.cfg rename it to printer.cfg) to ensure your Voron build matches your Klipper Config file, please see [the file located here](https://raw.githubusercontent.com/VoronDesign/Voron-0/Voron0.1/Firmware/skr-pico-v1.0.cfg){:target="_blank" rel="noopener"};

    * Please use the Color PIN Diagrams, [displayed here](./skr_pico_Resources#color-pin-diagram-for-skr-pico){:target="_blank" rel="noopener"}, as a source of information.

    * Please consult [The Build ═► Software Configuration](../../build/software/configuration#software-configuration){:target="_blank" rel="noopener"} on how to edit the Klipper Config file.

4. After **creating/editing** the Klipper Config file (skr-pico-v1.0.cfg renamed to printer.cfg), the next step is to check all the motors and the mechanics of the Voron printer, please see [The Build ═► Initial Startup Checks](../../build/startup/index#initial-startup-checks){:target="_blank" rel="noopener"}

<script>
    window.onload = function v01_skr_pico_enable_checkboxes(){
    const v01_skr_pico_checkboxes = document.getElementsByClassName('task-list-item-checkbox');
    Array.prototype.forEach.call(v01_skr_pico_checkboxes, function (e) {
        e.removeAttribute('disabled');
    });
    }
</script>