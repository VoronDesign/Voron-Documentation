---
layout: default
title: "Voron V2 - BTT SKR V1.3 Wiring"
nav_exclude: true
has_children: true
---

# Voron V2 - BTT SKR V1.3 Wiring

## What is the difference between UART mode and SPI mode?

* This stuff refers to the way the hardware communicates. SPI is significantly faster than UART. In some cases, an SPI solution can be three times faster than a UART solution.

* So, how do you know which mode to pick? It depends on the stepper motor drivers you choose to buy with the SKR V1.3 board.  The list below shows which stepper motor drivers are UART mode and which are SPI mode.
<span> <br> </span>
<span> <br> </span>

{% if site.uartspi_article == true %}

 {% if site.url == "http://localhost:4000" %}

<iframe
    id="uartspipdf"
    src="{{ site.url }}/build/electrical/images/What_is_the_Difference_Between_SPI_vs_UART.pdf#toolbar=1&page=1" type="application/pdf"
    width="100%"
    height="550"
    style="border:5px outset #dd2e2e;">
</iframe>

 {% else %}

 {% capture myurlpdf %} https://drive.google.com/viewerng/viewer?embedded=true&url={{ site.url }}/build/electrical/images/What_is_the_Difference_Between_SPI_vs_UART.pdf#toolbar=1&page=1 {% endcapture %}

<iframe
    id="uartspipdf"
    src="{{ myurlpdf }}"
    type="application/pdf"
    width="100%"
    height="550"
    style="border:5px outset #dd2e2e;"
></iframe>

 {% endif %}

{% endif %}

## UART Mode TMC Driver List

### UART Mode TMC Drivers That Use 24 VDC:

1.  TMC2208
2.  TMC2209
3.  TMC2225
4.  TMC2226


## SPI Mode TMC Driver List

### SPI Mode TMC Drivers That Use 24 VDC:

1.  TMC2100
2.  TMC2130
3.  TMC5160
4.  TMC5161

### SPI Mode TMC Drivers That Use 48 VDC or Higher:

1. TMC5160HV
2. TMC5160_PRO