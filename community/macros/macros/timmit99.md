---
layout: default
title: timmit99 macros
nav_exclude: true
---

<!-- {% raw %} -->

## Set range of pixels to single color
   -Set the color of a selection of LED's in a neopixel string. Sets the color of LEDs from position INDEX to INDEX+COUNT to the color submitted.
```
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

## Update Idle_timout with Hours Minutes and Seconds
   -Takes in hours, minutes, and seconds and converts it to seconds for an easy way to update idle_timeout.
```
[gcode_macro UPDATE_IDLE_TIMEOUT]
description: Send `UPDATE_IDLE_TIMEOUT [H=<value>] [M=<value>] [S=<value>] ` to set the Hours, Minutes, and Seconds for Idle_Timout. Passing no paramaters will return it to the config default value.
gcode:
	{% set Hours   = params.H|default(0)|int %}
    {% set Minutes = params.M|default(0)|int %}
    {% set Seconds = params.S|default(0)|int %}
    {% set DEFAULT = printer.configfile.settings.idle_timeout.timeout|int %}

	{% set TIME = ((Hours*3600) + (Minutes*60) + (Seconds))|int %}
	
	{% if TIME == 0 %} # No time was entered
        {% set TIME = DEFAULT %}
	{% endif %}
	set_idle_timeout timeout={TIME|int}
```
## Delay command with hours, minutes, and seconds.
   -Takes in hours, minutes, and seconds and converts it to millisceonds for an easy way to delay an exact time.
   
```
[gcode_macro DELAY]
description: Send `DELAY [H=<value>] [M=<value>] [S=<value>] [P=<value>] ` to set the Hours, Minutes, and Seconds for a delay. Passing no paramaters will not have any delay.
gcode:
	{% set Hours   = params.H|default(0)|int %}
	{% set Minutes = params.M|default(0)|int %}
	{% set Seconds = params.S|default(0)|int %}
	{% set Milliseconds = params.P|default(0)|int %}

	{% set TIME = (((Hours*3600) + (Minutes*60) + (Seconds))*1000)+Milliseconds|int %}
	
	{action_respond_info('Delaying for {} milliseconds'.format(TIME))}
	G4 P{TIME}
```
<!-- {% endraw %} -->
