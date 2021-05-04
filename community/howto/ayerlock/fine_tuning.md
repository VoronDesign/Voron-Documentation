# Z Height Adjustment: Fine Tuning
by: Ayerlock v2.507

Congratulations, you have (mostly) completed your Voron printer. You have done your initial configuration and it is now spitting out plastic
items that, for the most part, look like you expect them to. However, you might be seeing what look to be compression artifacts.
![Compression Artifact Image 01](images/image002.jpg)![Compression Artifact Image 02](images/image004.jpg)

Sometimes these issues can be caused by a poor STL design, belts that are too loose/tight, Agatha Harkness + Ralph Bohner, etc. Most often
I have found that these issues are related to poor bed adhesion. If your print has risen off the bed, even if it is just a little on a corner
or edge, it will be reflected all the way up the print. 3D printers do not self-correct for that (yet?).

Having a proper Z height set for your buildplate, interchangeable plate (spring steel), etc. can greatly reduce adhesion issues. For instance,
I have four different spring steel plates with various finishes on them to make my parts look better. One shiny PEI from CSHyde with a textured
finish on the other side. One matte PEI spray on one side with a matte PEI sheet on the other. One Ultistik lightly textured on both sides. And
yet another for messing around/testing other finishes with. Because each of these finishes are of differing thickness, each plate requires a
slightly different Z height adjustment from that of the configuration file. Forgetting to set that for any of the build plates causes the issues
circled in the pictures above. Those were cause by printing parts on the Ultistik buildplate with the settings of the matte-finish buildplate.

Even without multiple buildplates just getting the Z height set on your printer initially can be problematic. People have differing methods, it
is not documented well, using Klippers Z_ENDSTOP_CALIBRATE method can be extremely time consuming and might make you give up with a good-enough
effort that will leave your prints wanting. My goal here is to help you utilize your printers web interface to quickly and reliably set the Z
height EXACTLY where it needs to be for your printer, to help your printing efforts.

In this guide I will be using FluidD for my web interface, but there the same exact tools are available in Mainsail and Octoprint. They may look
slightly different but the results are the same.

In my printer.cfg file I have the following set for my Z endstop:

```
#*#
#*# [stepper_z]
#*# position_endstop: 1.685
#*#
```

Imagine this is the default setting after you finish your initial Z_ENDSTOP_CALIBRATE from Klipper. The most reliable method I have found for
fine tuning this is to print a single layer box, numerous times, which is used to calibrate the height. The box prints in less than five minutes per
print and can help you rapidly hone your Z setting.

## SuperSlicer Setup:
You might want to save a Print Settings profile for this in the event you need to repeat this in the future (you WILL repeat this in the future (new
PEI sheet, new spring steel, new buildplate, etc.)).

Under `Perimeters & Shell -> Quality` make sure that `Only one perimeter on Top surfaces` is checked. Since this is a one layer print this will
make the Vertical/Horizontal shells settings (and pretty much all the other settings on this tab) obsolete.
![SS-Perimeters & Shell Settings](images/image006.jpg)


Under `Slicing` set your layer height to 0.2mm.
![SS-Slicing Settings](images/image007.png)

Under `Infill` set:
- Solid: Monotonic -> Connected
- Top: Monotonic (filled) -> Connected
- Bottom: Monotonic (filled) -> Connected

![SS-Infill Settings](images/image009.png)

Under `Skirt & Brim` make sure you have no brim set. If you have a good purge line set up you may not need a skirt but it might be advisable to
use one just to make sure that the hotend is primed with plastic the second it starts the box.

Under `Speed` make sure that it is printing relatively slow for the first layer. I use the following settings:
![SS-Speed Settings](images/image011.png)

