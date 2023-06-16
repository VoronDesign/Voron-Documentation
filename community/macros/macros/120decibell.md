---
layout: default
title: 120decibell macros
nav_exclude: true
---

<!-- {% raw %} -->
```
# Conditional G28 (home if not already homed)
[gcode_macro CG28]
gcode:
    {% if "x" not in printer.toolhead.homed_axes or "y" not in printer.toolhead.homed_axes or "z" not in printer.toolhead.homed_axes %}
    G28
    {% endif %}

[gcode_macro M141]
default_parameter_S: 0
default_parameter_P: 0
gcode:
    SET_TEMPERATURE_FAN_TARGET temperature_fan="chamber" target={S}

[gcode_macro G32]
gcode:
    BED_MESH_CLEAR
    CG28                      ; Home if not homed to get everything turned on
    QUAD_GANTRY_LEVEL         ; Level
    #G28 X Y                  ; Home the X and Y
    G0 X130 Y355 Z2 F9000     ; Move to brush
    G0 X75 F750               ; Move across the brush
    G0 X130 F750              ; Move across the brush
    G28 Z                     ; Home the Z now that nozzle is clean
    G0 X175 Y175 Z20 F6000    ; Return to center of bed

[gcode_macro PURGE_BUCKET]
gcode:
    SAVE_GCODE_STATE NAME=PURGE
    G90                    ; absolute
    G0 X75 Y355 Z2         ; go to purge bucket
    G1 X25 E10 F500        ; purge some filament into bucket
    G1 X75 E3 F500         ; purge some filament into bucket
    G0 X120 Y355 F750      ; move across purge brush
    G1 E-2 F500            ; Retract a little
    G1 Z3                  ; Raise and return
    RESTORE_GCODE_STATE NAME=PURGE

[gcode_macro PRINT_START]
#   Use PRINT_START for the slicer starting script - please customise for your slicer of choice
gcode:
#    default_parameter_BED: 60 #target bed temperature
#    default_parameter_EXTRUDER: 210 #target extruder temperature

    SAVE_GCODE_STATE NAME=start

    M117 Starting warmup
    G1 Z20 F3000                       ; move nozzle away from bed
    M117 Warmup
    M190 S{BED}                        ; set bed temp and wait for it reach temp
    M109 S{EXTRUDER|int}               ; M109 heat and wait for it to reach temp
    G32                                ; Home XYZ and do QGL

    BED_MESH_PROFILE LOAD=default

    G1 Z5 F5000                        ; move head 5mm from bed surface
    M83                                ; Make the E relative independant of other axis
    M117 Purging
    PURGE_BUCKET
    G1 E2 F1500 # unretract
    M117 Starting Print
    RESTORE_GCODE_STATE NAME=start

[gcode_macro PRINT_END]
#   Use PRINT_END for the slicer ending script - please customise for your slicer of choice
gcode:
    M400                           ; wait for buffer to clear
    G92 E0                         ; zero the extruder
    G1 E-10.0 F3600                ; retract filament
    G91                            ; relative positioning
    G0 Z1.00 X20.0 Y20.0 F20000    ; move nozzle to remove stringing
    TURN_OFF_HEATERS
    M107                           ; turn off fan
    G1 Z2 F3000                    ; move nozzle up 2mm
    G90                            ; absolute positioning
    G0 X125 Y250 F3600            ; park nozzle at rear
    BED_MESH_CLEAR

[gcode_macro test_speed_fast]
gcode:
        G28 X0 Y0
        GET_POSITION
        G1 X0 Y0     F27000
        G1 X350 Y350 F27000
        G1 X0 Y0     F27000
        G1 X350 Y350 F27000

        G1 X0 Y350 F36000

        G1 X350 Y0 F27000
        G1 X0 Y350 F27000
        G1 X350 Y0 F27000
        G1 X0 Y350 F27000

        G1 X0 Y0 F36000
        G1 X350 Y0 F36000
        G1 X350 Y350 F36000
        G1 X0 Y350 F36000
        G1 X0 Y0 F36000
        G28 X0 Y0
        GET_POSITION
```
<!-- {% endraw %} -->
