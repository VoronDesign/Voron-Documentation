# Writing Klipper Macros
The following guide is my attempt at explaining how Klipper[^1] macros work and how
write macros. It's mostly based on my knowledge from reading the Klipper
documentation, experimentation, and information from the Klipper Discord.

## What Are Macros?
Macros are a collection of GCode commands[^2] that Klipper executes as a unit when the
macro is executed. Macros can contain any valid GCode commands and when triggered the
entire macro is executed to completion.

Since Klipper is effectively single-threaded, only one macro can be executed at a time
(see `delayed_gcode` for more on this).

Macros are a convenient way to run an arbitrary number of GCode commands with a single click.

## Structure of a Macro
### A Little Bit on Sections
Klipper's configuration files are divided into sections. Each section has a section header
that starts the section. Sections end when a different section is defined or the file ends.

Sections contain multiple key/value pairs separated by ':' or '='. Values can span multiple
lines as long as all lines are indented deeper than the original line. This is especially
important for macros since they are usually comprised of multiple GCode commands, each on a
separate line.

### Macros
Macros are defined with the `[gcode_macro]` section. You can see the full Klipper documentation
for the `gcode_macro` section [here](https://www.klipper3d.org/Config_Reference.html#gcode_macro).

Normally, a macro will take the following form:
```gcode
[gcode_macro <MACRO_NAME>]
gcode:
    <GCode command>
    ...
```

`<MACRO_NAME>` can be any name that you want. Valid characters are alphanumerics and underscore.
Usually, the macro name is written in all caps but that's required. Numbers can only appear at
the end of the macro names. Macro names that start with underscore ('_') are "hidden". They are
still defined and callable but are not shown in frontends like Mainsail or Fluidd.

Macros are called/triggered either from the frontend or from other macros. To trigger a macro
from another macro call it at the appropriate time. For example:

```gcode
[gcode_macro MACRO1]
gcode:
    G28 ; home all axis

[gcode_macro MACRO2]
gcode:
    # Home the printer first
    MACRO1
    G0 X0 Y0
```

In the above example, `MACRO2` triggers `MACRO1` as the first command executed. This will cause
`MACRO1` to be executed entirely before `MACRO2` continuing to the next GCode command.

### Variables
Macro variables (the `variable_<name>` key/value pair) are persistent variables assigned to the
macro. Their values can be used/set within the macro or even from another macro. You can think
of them as macro-specific global variables.

Variables defined by a macro can be referenced from within the macro directly:

```gcode
[gcode_macro MACRO2]
variable_var1: 0
gcode:
    M117 Var1 is equal to {var1}
```

Referencing macro variables from a different macro requires the look up of the macro object that
defines the desired variables:

```gcode
[gcode_macro MACRO3]
gcode:
    {% set macro2 = printer["gcode_macro MACRO2"] %}
    M117 Var1 from MACRO2 is set to {macro2.var1}
```

Changing variable values at runtime is done with the `SET_GCODE_VARIABLE` command:

```gcode
[gcode_macro MACRO4]
gcode:
    SET_GCODE_VARIABLE MACRO=MACRO2 VARIABLE=var1 VALUE=10
```

Please note that the `SET_GCODE_VARIABLE` command has to be used regardless if the variable is
being changed from the defining macro or another one.

## Organizing Configuration Files
Macros are generally placed in configuration files - files with the `.cfg` extension located in
the configuration directory (usually _/home/pi/printer_data/config_). Macros can be placed all in
a single, large file or split into multiple files, each containing macros and configuration
specific to a particular function/configuration.

Normally, Klipper looks for a files called _printer.cfg_ in the configuration directory. That file
serves as the top-level configuration file. Many users just place all their configuration and
macros in that single file.

If the configuration is spread into multiple files, the configuration files have to be included
into _printer.cfg_. This is done with the `[include]` directive. This directive instructs Klipper
to include the specified file into its configuration. `[include]` directives can be placed in
any file and Klipper will include the specified file as it's processing the current configuration
file. This allows for the creation of nested configuration.

Even if macros are split into multiple configuration files, Klipper creates a singular configuration
for the printer. What this means is that all macros defined in all configuration files are defined
and available. Therefore, any defined macro can called/triggered from any other macro.

## Macro Templates
Macro templates[^3] are a way to dynamically change what a macro does based on some conditions or logic.
Klipper provides a way to alter the GCode commands executed by wrapping sets of commands with
control statements based on the Jinja2 template language[^4].

Macro templates can be a bit confusing because it looks like they offer the ability to created
non-static macros (macros that change what they do based on some condition). This is only partially
true.

Klipper evaluates the macro when the macro is triggered/called. The evaluation processes the
conditions at that time and generates the body of the macro (the set of commands that the macro will
execute). Once evaluated, the set of commands executed by the macro cannot be changed until the
macro is triggered/called again. What this means is that there is no way to have the macro content
change based on changing printer conditions.

Going through the Jinja2 template language is beyond the scope of this guide. However, below are
a few examples with descriptions:

### Setting Internal Variables
```gcode
[gcode_macro EXAMPLE1]
gcode:
    {% set var1 = printer.toolhead.axis_maximum.x %}
    G0 X{var1}
```
In the example above, the template creates a variable called `var1` and assigns the maximum
position of the X axis[^5]. The it uses the variable to move the toolhead to that position along
the X axis.

### Conditions
```gcode
[gcode_macro EXAMPLE1]
gcode:
    {% set var1 = printer.toolhead.axis_maximum.x %}
    {% set var2 = printer.toolhead.position.x %}

    {% if var2 < var1 %}
        G0 X{var1}
    {% endif %}
```
In the example above, the template creates one variable (`var1`) to hold the maximum position of
the X axis and another (`var2`) to hold the current position of the toolhead along the X axis.
It then check if the current position is less than the maximum and if so, moves the toolhead to
the maximum position.

### Loops
Since macro templates are evaluated only once, prior to the execution of any GCode commands from the
macro, the template language provides a limited abilities to loop (execute a set of commands
repeatedly). For example, the template language does not provide a `while` loop since such a loop
would depend on evaluating changing conditions, which is not possible.

```gcode
[gcode_macro EXAMPLE3]
gcode:
    {% set var1 = 10 %}
    {% set var2 = printer.toolhead.axis_maximum.x %}
    {% set var3 = printer.toolhead.axis_maximum.y %}

    G28
    G0 X0 Y0 Z10
    {% for i in range(var1) %}
        G0 X{var2} Y{var3}
        G0 X0 Y0
    {% endfor %}
```
This example uses 3 variables:
1. `var1`, which holds the value "10".
2. `var2`, which holds the maximum position of the X axis.
3. `var3`, which holds the maximum position of the Y axis.

After defining the variables, the printer is homed (`G28`) and the toolhead is moved to the
origin, 10mm above the build plate (`G0 X0 Y0 Z10`).

Then the macro repeats the commands
```gcode
G0 X{var2} Y{var3}
G0 X0 Y0
```
10 times (the value of `var1`), which moves the toolhead to the opposite corner and back to
the origin.

### Macro Template Parameters
Klipper provides a way for callers (frontends or other macros) to pass parameters to macros. The
Klipper documentation already includes a pretty good section on passing macro parameters. It can
be found at https://www.klipper3d.org/Command_Templates.html?h=params#macro-parameters.

Parameters are passed through the `params` object that is automatically provided and populated
by Klipper. If a macro requires parameters, it can make use of the `params` object like below:

```gcode
[gcode_macro EXAMPLE4]
gcode:
    {% set var1 = params.VALUE1 %}
```

Then callers can trigger the macro as such:

```gcode
EXAMPLE1 VALUE1=<value>
```

The value set for the `VALUE1` parameter will automatically be available from `params.VALUE1`.

Parameter values are always stored as strings. Therefore, it may be necessary to perform a
conversion to a more appropriate type (integer, float, list, etc.). This can be done through the
use of Jinja's filters[^6]. Filters are applied to values through the pipe (`|`) operator.
While a full discussion on filters is beyond the scope of this guide, common filters are
`int`, `float`, `split`.

```gcode
[gcode_macro EXAMPLE5]
gcode:
    {% set var_int = params.INT_VALUE|int %}
    {% set var_float = params.FLOAT_VALUE|float %}
    {% set var_list = params.LIST_VALUE|split(",") %}
```

Another useful filter is the `default()` filter, which will assign a default value to a
parameter:

```gcode
[gcode_macro EXAMPLE6]
gcode:
    {% set var_int = params.INT_VALUE|default(5)|int %}
    {% set var_float = params.FLOAT_VALUE|default(2.5)|float %}
```

The difference between `EXAMPLE5` and `EXAMPLE6` is that `EXAMPLE5` requires the parameters
be set when triggering the macro. Otherwise, Klipper will generate an error due to the
missing parameters. On the other hand, `EXAMPLE6` can be called without using any parameters,
in which case, the default values provided by the `default()` filter will be used.

As you can see, filters can be chained one after the other to provide fuller control over
parameter values and types.

## Delayed GCode
Delayed GCode[^7] macro are a way to schedule a macro to be executed at a later time. They are
mostly the same as normal macros with the following exceptions:
  * The only key/value pairs that are valid are `gcode` and `initial_duration`.
  * They cannot define variables.
  * They do not accept parameters.

Unfortunately, this makes them a bit less flexible than normal macros, although there is a work-
around for passing parameters to delayed macros.

To define a delayed GCode macro, use the `[delayed_gcode]` section:

```gcode
[delayed_gcode DELAYED_GCODE_MACRO1]
gcode:
    M117 Delayed GCode macro triggered.
```

Scheduling the delayed GCode macro is done with the `UPDATE_DELAYED_GCODE` command:

```gcode
UPDATE_DELAYED_GCODE ID=<delayed GCode macro name> DURATION=<delay before execution>
```

The `DURATION` value is in seconds. It specifies the number of seconds from the execution of the
`UPDATE_DELAYED_GCODE` command to when the delayed GCode macro will be triggered. For example, to
schedule the `DELAYED_GCODE_MACRO1` macro to trigger 5 seconds in the future, the command would be:

```gcode
UPDATE_DELAYED_GCODE ID=DELAYED_GCODE_MACRO1 DURATION=5
```

Cancelling a delayed GCode that has already been schedule can be done by setting the `DURATION`
value to 0. It is not an error to attempt to cancel a delayed GCode macro that had not been already
scheduled.

### Passing Parameters to Delayed GCode
While it is not possible to pass variables and/or parameters to delayed GCode macros directly, there
is an indirect way to do this - by using variables defined by another macro:

```gcode
[gcode_macro __PARAMETERS]
variable_var1: 0
variable_var2: 10

[delayed_gcode DELAYED_GCODE_MACRO2]
gcode:
    {% set parameters = printer["gcode_macro __PARAMETERS] %}
    M117 var1 = {var1}, var2 = {var2}

[gcode_macro SCHEDULE_DELAYED]
gcode:
    SET_GCODE_VARIABLE MACRO=__PARAMETERS VARIABLE=var1 VALUE=20
    SET_GCODE_VARIABLE_MACRO=__PARAMETERS VARIABLE=var2 VALUE=40
    UPDATE_DELAYED_GCODE ID=DELAYED_GCODE_MACRO2 DURATION=10
```

The above example makes uses of several feature of Klipper macros:

  1. "Hidden" macros, which are not shown in frontends.
  2. Macro variables.
  3. Ability to reference macro variables from other macros.
  4. Ability to set macro variables from other macros.

### Background Macros
One of the more common uses of delayed GCode macros is to create "background" macros - macros that
execute somewhat asynchronously in the background. This is done by creating the delayed GCode macro
in such a way that it repeatedly schedules itself based on current conditions. This is possible
because Klipper updates the current state of the printer just prior to executing the macro. Below
is a simple example of this:

```gcode
[delayed_gcode DELAYED_GCODE_MACRO3]
gcode:
    {% set current_temp = printer[printer.toolhead.extruder].temperature %}
    {% set target_temp = printer[printer.toolhead.extruder].target %}

    {% if current_temp < target_temp> %}
        M117 Still heating...
        UPDATE_DELAYED_GCODE ID=DELAYED_GCODE_MACRO3 DURATION=1
    {% else %}
        M117 Target temperature reached
        UPDATE_DELAYED_GCODE ID=DELAYED_GCODE_MACRO3 DURATION=0
    {% endif %}

[gcode_macro HEAT_EXTRUDER]
gcode:
    M104 S240
    UPDATE_DELAYED_GCODE ID=DELAYED_GCODE_MACRO3 DURATION=1
```

The above example shows how delayed GCode macros can be used to implement a pseudo `while` loop.
When triggered, the `HEAD_EXTRUDER` macro will set the extruder temperature to 240 degrees and
schedule the `DELAYED_GCODE_MACRO3` to execute in 1 second.

When the `DELAYED_GCODE_MACRO3` executes, it will look up the current and target temperature of
the extruder. If the current temperature is less than the target, it will re-schedule itself to
run again after 1 second. Otherwise, it will cancel itself.

> **Warning** Be careful when using the above mechanism to create background macros. In most case,
> it is difficult to implement the exact desired behavior due to the limitations imposed by Klipper
> and delayed GCode macros.

## Saving and Restoring GCode State
Klipper GCode state is the current state of the GCode parser. The state includes the following
settings:
* GCode coordinate mode (absolute vs relative).
* Extrude mode (absolute vs relative).
* Origin.
* Z offset.
* Speed and extrude overrides.
* Move speed.
* Current nozzle position.
* Relative extruder position.

Saving the GCode state allows other macros to perform actions without interfering with the state of
previous macros. This is especially useful for macros like `PAUSE` and `RESUME` - the `PAUSE` macro saves
the GCode state when the print was paused and the `RESUME` macro restores it. This prevents any GCode that 
is executed between the `PAUSE` and `RESUME` macros (like change filament macros, clean nozzle macros, etc.)
from interfering or destroying the state the printer was in when it paused.

Saving and restoring GCode state is done with the `SAVE_GCODE_STATE`[^8] and `RESTORE_GCODE_STATE`[^9]
commands. When saving a state, the `SAVE_GCODE_STATE` command takes in a `NAME` argument. The saved state can
then be referenced using that name. This allows nesting of these commands.

Upon execution of the `SAVE_GCODE_STATE NAME=<name>` command, the current GCode state is saved under the
name "<name>". When the `RESTORE_GCODE_STATE NAME=<name>` command is executed, the state saved as "<name>" is
restored. Any changes to the settings listed above done between the `SAVE_GCODE_STATE` and `RESTORE_GCODE_STATE`
commands is lost (unless saved under a different name).

> **Warning** The use of the save/restore commands should be done carefully and intentionally. Due to state
> that is changed between the too commands being lost, it could lead to unexpected results. One common example
> of this is using save/restore in `PRINT_START` macros. In most cases, virtually all actions done by `PRINT_START`
> macro examples are wrapped by a set of `SAVE_GCODE_STATE/RESTORE_GCODE_STATE` commands. This includes homing,
> bed leveling, bed mesh generation, etc.
>
> If one of the things that a `PRINT_START` macro could do is adjust the Z offset for a particular filament
> type or print surface. If that is done between the save and restore commands, the newly set Z offset will be
> lost when the `PRINT_START` macro ends.
## References
  [^1]: Klipper Documentation: https://www.klipper3d.org/
  [^2]: Klipper GCode command reference: https://www.klipper3d.org/G-Codes.html
  [^3]: Klipper Command Templates: https://www.klipper3d.org/Command_Templates.html
  [^4]: Jinja Documentation: https://jinja.palletsprojects.com/en/2.10.x/templates/#
  [^5]: https://www.klipper3d.org/Command_Templates.html?h=printer#the-printer-variable
  [^6]: https://jinja.palletsprojects.com/en/3.1.x/templates/#filters
  [^7]: https://www.klipper3d.org/Command_Templates.html?h=delayed#delayed-gcodes
  [^8]: https://www.klipper3d.org/G-Codes.html?h=save_gc#save_gcode_state
  [^9]: https://www.klipper3d.org/G-Codes.html?h=save_gc#restore_gcode_state