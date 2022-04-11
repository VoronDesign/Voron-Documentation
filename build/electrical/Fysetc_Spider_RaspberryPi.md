---
nav_exclude: true
---
## Raspberry Pi

### Power
* The spider is capable of providing 5V power to run your Raspberry pi.  To take advantage of this feature, connect the wires shown below, from the pi header of the spider, to the GPIO header of the pi.
* Use at least 24awg wire for this connection.  It may be tempting to use the common "Dupont" jumpers found in many electronics kits, however these jumpers typically use very small gauge wire, and will not carry enough current to run the pi.
* Tie all the DC 0V (typically labelled V-) lines for all the DC power supplies together to ensure that all power supplies have the same voltage reference.

###### ![](./images/v2_spider_pi.png) {#v2_spider_pi}
<span> <br> </span>

### Control
* Voron Design recommends using USB to control the Spider, which simply requires connecting a USB-A to USB-C cable between the Spider and Pi.
* The option does also exist to use a UART connection from the Pi header, in place of the USB.  If you prefer this option, please see the [Fysetc documentation](https://github.com/FYSETC/FYSETC-SPIDER/blob/main/firmware/Klipper/Connect%20RPI%20uart.md){:target="_blank" rel="noopener"}

For convenience, here are the instructions to execute on the Raspberry Pi. When using UART serial communications, choose "SERIAL" when compiling the Klipper firmware.  You will want to perform the instructions below **after Mailsail/Fluidd is installed on the Raspberry Pi.**

###### ![](./images/ConnectPitoMCU-Instructions.png) {#ConnectPitoOctopusPro-Instructions_5}