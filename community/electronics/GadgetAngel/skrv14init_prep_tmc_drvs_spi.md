---
nav_exclude: true
---
## Preparation of TMC2130, TMC5160 or TMC5161 Stepper Motor Drivers

* __<span class="underline-double-trouble color-blind-red">IMPORTANT:</span>__  If using a TMC2130, TMC5160, or TMC5161 stepper motor driver for the **<span class="color-blind-red">extruder motor</span> and you want to use a filament run out sensor**, disable sensorless homing for the extruder driver step stick.

* **The DIAG PIN (E0 or E1) must be disconnected from the SKR board on the <span class="color-blind-red">extruder driver</span> step stick for the filament run out sensor to work properly**, if you are using a TMC2130, TMC5160, or TMC5161.

* There are three methods to disable sensorless homing for the TMC2130, TMC5160 or TMC5161 drivers:

1. Cut off the DIAG pin from the TMC2130, TMC5160 or TMC5161.
2. Use stackable header pins to ensure the DIAG pin does not make an electrical connection to the SKR board.
3. Desolder the DIAG pin from the stepper motor driver step stick.

### Disable Sensorless Homing - Method #1 - Cut Off the DIAG pin:

* **Use a small pair of wire cutters and remove the pin marked in <span class="color-blind-purple">PURPLE</span> (DIAG PIN) from the TMC2130, TMC5160 or TMC5161 stepper motor driver**

###### ![](../../../build/electrical/images/tmc2209-pin-removal.png) {#tmc2209-pin-removal_spi_tri2skr}

### Disable Sensorless Homing - Method #2 - Use Stackable Header pins:

* By not adding the stackable header pin under the DIAG PIN location, the DIAG PIN will not make an electrical connection to the board. The added benefit with stackable header pins is the driver socket will also have more room for air flow to help with dissipation of heat. See the diagram below:

###### ![](../../../build/electrical/images/disable_sensor-less_homing_TMC2209_TMC2226.jpg) {#disable_sensor-less_homing_spi_tri2skr}

* Here is the URL from the above diagram.  You can purchase the [Stackable Header PINS from Amazon](https://www.amazon.com/Glarks-Connector-Assortment-Stackable-Breakaway/dp/B07CWSXY7P){:target="_blank" rel="noopener"}.

### Disable Sensorless Homing - Method #3 - Desolder the DIAG pin:

*  **Desolder the pin, marked in purple (DIAG PIN), from the TMC2130, TMC5160 or TMC5161 stepper motor driver step stick** at the location shown [here](#tmc2209-pin-removal_spi_tri2skr)

* If you need help with desoldering, please [consult this guide](https://www.instructables.com/The-Ultimate-Guide-to-Desoldering/){:target="_blank" rel="noopener"}