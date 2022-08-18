---
layout: default
title: timmit99 macros
nav_exclude: true
---

<!-- {% raw %} -->
```ini
# set the color of a selection of LED's in a neopixel string. Sets the color of LEDs from position INDEX to INDEX+COUNT to the color submitted.
[gcode_macro SET_LED_LENGTH]
description: SET_LED_LENGTH LED=<config_name> RED=<value> GREEN=<value> BLUE=<value> WHITE=<value> INDEX=<indexToStart> COUNT=<numberOfPixels>
gcode: 
    {% set ledName= params.LED|default(0)|string %}
    {% set colorRed= params.RED|default(0)|float %}
    {% set colorGreen= params.GREEN|default(0)|float %}
    {% set colorBlue= params.BLUE|default(0)|float %}
    {% set colorWhite= params.WHITE|default(0)|float %}
    {% set indexCount= params.INDEX|default(0)|int %}
    {% set pixelCount= params.COUNT|default(0)|int %}
    
    {% for index in range(indexCount,indexCount + pixelCount) %}
        SET_LED LED={ledName} RED={colorRed} GREEN={colorGreen} BLUE={colorBlue} WHITE={colorWhite} INDEX={index} TRANSMIT={ '1' if index==(indexCount+pixelCount-1) else '0' }
    {% endfor %}
```
<!-- {% endraw %} -->
