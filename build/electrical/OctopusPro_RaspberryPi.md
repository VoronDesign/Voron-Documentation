---
nav_exclude: true
---

<button class="btn js-toggle-light-mode">Use voron-light color scheme</button>

## Raspberry Pi

### Power
* The Octopus Pro is capable of providing 5V power to run your Raspberry Pi.  To take advantage of this feature, connect the wires as shown below, from the pi header of the Octopus Pro, to the GPIO header of the Pi.
* Use at least 24awg wire for this connection.  It may be tempting to use the common "Dupont" jumpers found in many electronics kits, however these jumpers typically use very small gauge wire, and will not carry enough current to run the Pi.
* Tie all the DC 0V (typically labelled V-) lines for all the DC power supplies together to ensure that all power supplies have the same voltage reference.

###### ![](./images/v2_octopus_pro_pi_onlyPWR.png) {#v2_octopus_pro_pi_onlyPWR_1}
{:.no_toc}

[Go Back to the Table of Contents](v2_octopus_pro_uartspi_wiring.html#table-of-contents)

[Go Back to the UART Section](v2_octopus_pro_uart_wiring.html#ssr-wiring-for-uart-mode)

[Go Back to the SPI Section](v2_octopus_pro_spi_wiring.html#ssr-wiring-for-spi-mode)

### Connection Using Separate Power Supply
* To reduce the current load on the 5V rail of the Octopus Pro board, the Raspberry Pi can be powered by an independent power supply.
* Use at least 24awg wire for V+ and GND connections to the Pi's power supply
* Tie all the DC 0V (typically labelled V-) lines for all the DC power supplies together to ensure that all power supplies have the same voltage reference.

###### ![](./images/v2_octopus_Pro_to_PI_UART.png) {#v2_octopus_Pro_to_PI_UART_1}
{:.no_toc}

[Go Back to the Table of Contents](v2_octopus_pro_uartspi_wiring.html#table-of-contents)

[Go Back to the UART Section](v2_octopus_pro_uart_wiring.html#ssr-wiring-for-uart-mode)

[Go Back to the SPI Section](v2_octopus_pro_spi_wiring.html#ssr-wiring-for-spi-mode)

### Control
{:.no_toc}
* Voron Design recommends using USB to control the Octopus Pro, which simply requires connecting a USB-A to USB-C cable between the Octopus Pro and Pi.
* The option also exists to use a UART connection from the Pi header, in place of the USB.  If you prefer this option, please see the wiring diagram located above in [Connection Using Separate Power Supply](#connection-using-separate-power-supply) and use the instructions below on the Raspberry Pi.  You will want to perform the instructions below **after Mailsail/Fluidd is installed on the Raspberry Pi.**

###### ![](./images/ConnectPitoMCU-Instructions.png) {#ConnectPitoOctopusPro-Instructions_1}
{:.no_toc}

[Go Back to the Table of Contents](v2_octopus_pro_uartspi_wiring.html#table-of-contents)

[Go Back to the UART Section](v2_octopus_pro_uart_wiring.html#ssr-wiring-for-uart-mode)

[Go Back to the SPI Section](v2_octopus_pro_spi_wiring.html#ssr-wiring-for-spi-mode)
