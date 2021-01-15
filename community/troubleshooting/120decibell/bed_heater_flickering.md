# Lights Flickering with Bed Heater

This is caused by crappy wiring in your house + the bed heater being on. By default the heater is using a PID algorithm to keep its temperature at the set value -- this switches the heater on and off quickly (a bigger VORON has 700W+ mains heater; a 300mm V2 can pull 6-8 Amps at peak load, which can overload a circuit if there is too much else going on), this causes the flicker in your home electrical network.

In the `[heater_bed]` section make the following changes:

* If line power is 60Hz, add a line `pwm_cycle_time: 0.0166`
* If line power is 50Hz, add a line `pwm_cycle_time: 0.02`

