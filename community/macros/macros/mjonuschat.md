---
layout: default
title: mjonuschat macros
nav_exclude: true
---

<!-- {% raw %} -->

## Adjust the case light brightness in 10% steps through the MINI12864 LCD

This works for LED strips/case lighting that is controlled through a single
output pin in Klipper which are usually a single color/white.

A config snippet/macro for a LED strip with individually adresseable pixels
(WS2812/SK6812) is included further down in the document.

This is based on the [default configuration](https://github.com/Klipper3d/klipper/blob/342d3f1414f905fc85ea14a125463ff2df4e9b51/klippy/extras/display/menu.cfg#L297)
included with Klippy, only the input step size has been increased to 10%.

```
[menu __main __control __caselightpwm]
type: input
enable: {'output_pin caselight' in printer}
name: Lights: {'%3d' % (menu.input*100)}%
input: {printer['output_pin caselight'].value}
input_min: 0.0
input_max: 1.0
input_step: 0.10
gcode:
    SET_PIN PIN=caselight VALUE={menu.input}
```

## Controlling a Neopixel-based case light

This is a set of macros to control Neopixel (WS2812/SK6812) based LED strips
that are being used as a case light. The `SET_LED_LENGTH` macro can be found
here: [timmit99 macros](./timmit99.md).

This setup assumes a Neopixel strip of 42 LEDs (21 per side) with a white
channel (SK6812) called `case_leds`. Adjust the name and length in the
`_SET_CASE_LEDS` and `CASELIGHT` macros and the MINI12864 config if needed.
If you only have R/G/B channels you'll need to set all three to 1.0 for
full-brightness white. The LCD config will probably need to read a different
channel as well to determine if the strip is currently on.

### Macros

```
[gcode_macro _SET_CASE_LEDS]
description: Helper: Set the color for a segment of the case led strip.
gcode:
    {% set r = params.R|default(0)|float %}
    {% set g = params.G|default(0)|float %}
    {% set b = params.B|default(0)|float %}
    {% set w = params.W|default(0)|float %}
    {% set idx = params.IDX|default(1)|int %}
    {% set cnt = params.CNT|default(42)|int %}

    SET_LED_LENGTH LED=case_leds RED={r} GREEN={g} BLUE={b} WHITE={w} INDEX={idx} COUNT={cnt}
```

```
[gcode_macro _CASELIGHT_ON]
description: Helper: Light on
gcode:
  _SET_CASE_LEDS W=1.0
```

```
[gcode_macro _CASELIGHT_OFF]
description: Helper: Light off
gcode:
  _SET_CASE_LEDS W=0
```

```
[gcode_macro CASELIGHT]
description: Toggle case light
gcode:
    {% set current_brightness = printer["neopixel case_leds"].color_data[0][3]|default(0)|float %}
    {% if current_brightness > 0.0 %}
        _CASELIGHT_OFF
    {% else %}
        _CASELIGHT_ON
    {% endif %}
```

### MINI12864 LCD menu configuration

```
[menu __main __control __caselightpwm]
type: input
enable: {'neopixel case_leds' in printer}
name: Lights: {'%3d' % (menu.input*100)}%
# color_data has information per LED in GRBW format
# Select first LED, grab white value
input: {printer['neopixel case_leds'].color_data[0][3]}
input_min: 0.0
input_max: 1.0
input_step: 0.1
gcode:
    _SET_CASE_LEDS W={menu.input}

[menu __main __control __caselightonoff]
type: input
enable: {'neopixel case_leds' in printer}
name: Lights: {'ON ' if menu.input else 'OFF'}
# color_data has information per LED in GRBW format
# Select first LED, grab white value
input: {printer['neopixel case_leds'].color_data[0][3]}
input_min: 0
input_max: 1
input_step: 1
gcode:
    CASELIGHT
```

## Clear display output after a given duration in seconds

Send `UPDATE_DELAYED_GCODE ID=_CLEAR_DISPLAY DURATION=<seconds>` to clear the
last message after N seconds.

```
[delayed_gcode _CLEAR_DISPLAY]
gcode:
  M117
```

<!-- {% endraw %} -->
