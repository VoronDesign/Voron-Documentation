---
layout: default
title: CNC Startup
parent: Voron CNC Build
nav_order: 2
has_children: false
---

# Startup and Tests

Apply 24V to the controller and 48V to the motor drivers.


Connect to the controller (see the grblHAL guide).  Run the `?` command to get status information.  A common response on a brand new machine is (An alarm state on first startup is completely normal):
```
<Alarm|MPos:0.000,0.000,0.000|Bf:128,1023|FS:0,0|Pn:PYHSDE|A:>
```

## Input Testing

The field that starts with Pn: is the pin states. Each letter indicates a “triggered” input pin.

* `X` `Y` `Z` are the endstops for each axis
* `P` is the probe pin, used for both the tool setter and the part locating probe
* `D` `H` `R` `S` are the door, feed hold, soft reset, and cycle start
* `E` is the Estop input, otherwise referred to as “halt”.
If no pins are listed then no inputs are triggered.

Test each of the inputs to ensure they are changing.  Press the buttons, take the cover on and off, and hold pliers up to the endstops.  On each change run `?` again to see if the value changes.

*Note: On the FlexiHAL, there are LED indicators for each of those inputs to assist with verification of the input functionality.*

Once the inputs are verified as working, change registers $5 (endstops) or $14 (inputs) to invert the selected inputs.  In a normal state with the door in place, no endstops triggered, and no buttons pushed, no pins should be activated.

Once all of the inputs are cleared, run the command `$X` to reset the alarm state.  Querying the status again with `?` should indicate an Idle state and ready for movement.

## Motor Setup and Testing
Choose the desired microsteps.  If using external drivers such as the DM542T set the jumpers on the drivers.  *(Note: Whenever the jumpers are changed, be sure to power down the drivers first.)*. Take the microsteps value and multiply by the number of full steps in the motor.  This is commonly 200 for bipolar motors.  Then divide that number by the mm per revolution of the ball screw.  For example: 20 microsteps x 200 full steps = 4000 microsteps per revolution / 4 mm per revolution = 1000 microsteps / mm.

Use that value and assign it for X, Y, and Z (respectively) as follows:

```
$100=1000
$101=1000
$102=1000
```

Set the baseline travel distances for X, Y, and Z (respectively) as follows:

```
$130=280
$131=200
$132=85
```

Manually move the worktable, X carriage, and Z carriage to the middle of their travels.  Starting with X, execute `G0 X10`.  The X carriage should move 10mm to the right (towards the electronics).  If the X axis moves the wrong direction, invert the direction bit in register `$3`.  If the X axis moves the wrong amount, double check the configured microsteps and total microsteps per revolution.  Once X is moving correctly do the same with Y and with Z.  Keep in mind that when worktable for Y is moving in the positive direction, the table will move closer to the front.

Once all axis are moving the appropriate direction and quantity mmove to the homing setup.

## Homing Setup
All endstops are adjustable and need to be checked before continuing.

Measure the distance from the far left edge of the X carriage to the top of the bolts in the X ballscrew nut housing.  Then measure the distance from the X ballscrew mount to the gantry upright.  Subtract the first value from the second to determine clearance. Change the commands to relative mode with `G91`.  Move the X carriage close to the left side, then bring it closer by 0.5mm at a time until the X carriage is approximately 1mm larger than the calculated clearance number.  Once that is in place, adjust the X endstop to just trigger in that position and tighten.

Carefully raise the Z carriage until the linear rail carriages are flush with the top of the linear rail.  Once in that position, adjust the Z endstop to just trigger in that position and tighten.

Slighly loosen the Y endstop mount and slide it all the way to the back of the 3030 extrusion.  Mount a small endmill into the spindle and move Z down until it is about 5mm above the worktable.  Move the worktable in the Y axis until the center of the endmill is at or just in front of the edge of the worktable.  Slide the Y endstop into place until if just triggers in that position.  Move the worktable positive in Y to allow access to tighten the endstop.

Move the worktable, X carriage, and Z carriage to be near the middle of their travels.  Change the endstop positions in the configuration by running `$23=3`.  This will configure grblHAL to search for the homing endstop in the negative direction for X and Y and the positive direction in Z.  Then enable homing with options by setting `$22=1` *Need to verify*

Once configured it will be ready to test.  Have a hand near the emergency stop button in case things go wrong.  Run the command `$H` to home the machine.  It should home Z first followed by X and Y simultaneously.  If any of the homing goes in the wrong direction, immediately stop the machine to prevent damage.  After restarting and clearing errors, change the bit value of `$23` for the given axis.

Once homing is completed successfully, enable soft limits by setting `$20=1`.  This will not allow the machine to go further than the configured maximum travel after being homed.

## Spindle Setup
By default the spindle will use RS485 for communications, which is explained here.


## Mist Testing
No air or mist is usually needed for this test as the noise of the solenoid should be suficient.

## Lighting Enable
Since the light will always be on when the machine is on, the easiest way is to switch Aux 3 to be always on.  This is done by changing the aux default with `$9999=1024` *Need to verify*

---

