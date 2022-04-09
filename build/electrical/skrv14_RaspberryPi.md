---
nav_exclude: true
---
## Raspberry Pi

### Connection Using Separate Power Supply
* Since the BTT SKR V1.4/Turbo board does not produce enough amps to power the Raspberry Pi directly, the Raspberry Pi can be powered by an independent power supply.
* Use at least 24awg wire for V+ and GND connections to the Pi's power supply
* Tie all the DC 0V (typically labelled V-) lines for all the DC power supplies together to ensure that all power supplies have the same voltage reference.

###### ![](./images/SKRV1.4T_to_Pi_UART.png) {#SKRV1.4T_to_Pi_UART}

### Control

* Voron Design recommends using USB to control the SKR V1.4/Turbo, which simply requires connecting a USB-A to USB-A type B cable between the SKR V1.4/Turbo and Pi.
* The option also exists to use a UART connection from the Pi header, in place of the USB.  If you prefer this option, please see the wiring diagram located above in [Connection Using Separate Power Supply](#connection-using-separate-power-supply) and use the instructions below on the Raspberry Pi.  You will want to perform the instructions below **after Mailsail/Fluidd is installed on the Raspberry Pi.**

###### ![](./images/ConnectPitoMCU-Instructions.png) {#ConnectPitoOctopusPro-Instructions_10}