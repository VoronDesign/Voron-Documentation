<div class="WordSection1">

**<span style="font-size:22.0pt">Z Height Adjustment: Fine Tuning</span>**

**<span style="font-size:10.0pt">by: <span class="SpellE">Ayerlock</span> v2.507</span>**

<span style="font-size:10.0pt"></span>

Congratulations, you have (mostly) completed your <span class="SpellE">Voron</span> printer. <span style="mso-spacerun:yes"></span> You have done your initial configuration and it is now spitting out plastic items that, for the most part, look like you expect them to. <span style="mso-spacerun:yes"></span> However, you might be seeing what look to be compression artifacts

<span style="mso-no-proof:yes">![](images/image002.jpg)![](images/image004.jpg)</span>

Sometimes these issues can be caused by a poor STL design, belts that are too loose/tight, Agatha Harkness + <span style="font-size:10.5pt;
line-height:107%;font-family:Roboto;color:#4D5156;background:white">Ralph </span><span class="SpellE">_<span style="font-size:10.5pt;line-height:107%;font-family:
Roboto;mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;
color:#5F6368;background:white;font-style:normal">Bohner</span>_</span>, etc. <span style="mso-spacerun:yes"></span> Most often I have found that these issues are related to poor bed adhesion. <span style="mso-spacerun:yes"></span> If your print has risen off the bed, even if it is just a little on a corner or edge, it will be reflected all the way up the print. <span style="mso-spacerun:yes"></span> 3D printers do not self-correct for that (yet?).<span style="mso-spacerun:yes"></span>

Having a proper Z height set for your buildplate, interchangeable plate (spring steel), etc. can greatly reduce adhesion issues. <span style="mso-spacerun:yes"></span> For instance, I have four different spring steel plates with various finishes on them to make my parts look better. <span style="mso-spacerun:yes"></span> One shiny PEI from <span class="SpellE">CSHyde</span> with a textured finish on the other side. <span style="mso-spacerun:yes"></span> One matte PEI spray on one side with a matte PEI sheet on the other. <span style="mso-spacerun:yes"></span> One <span class="SpellE">Ultistik</span> lightly textured on both sides. <span style="mso-spacerun:yes"></span> And yet another for messing around/testing other finishes with. <span style="mso-spacerun:yes"></span> Because each of these finishes are of differing thickness, each plate requires a slightly different Z height adjustment from that of the configuration file. <span style="mso-spacerun:yes"></span> Forgetting to set that for any of the build plates causes the issues circled in the pictures above. <span style="mso-spacerun:yes"></span> Those were cause by printing parts on the <span class="SpellE">Ultistik</span> buildplate with the settings of the matte-finish buildplate.

Even without multiple <span class="SpellE">buildplates</span> just getting the Z height set on your printer initially can be problematic. <span style="mso-spacerun:yes"></span> People have differing methods, it is not documented well, using <span class="SpellE">Klippers</span> <span style="font-size:11.5pt;line-height:107%">Z_ENDSTOP_CALIBRATE method can be extremely time consuming and might make you give up with a good-enough effort that will leave your prints wanting. <span style="mso-spacerun:yes"></span> My goal here is to help you utilize your printers web interface to quickly and reliably set the Z height **_<u>EXACTLY</u>_** where it needs to be for your printer, to help your printing efforts.</span>

<span style="font-size:11.5pt;line-height:107%">In this guide I will be using <span class="SpellE">FluidD</span> for my web interface, but there the same exact tools are available in Mainsail and <span class="SpellE">Octoprint</span>. <span style="mso-spacerun:yes"></span> They may look slightly <span class="GramE">different</span> but the results are the same.</span>

<span style="font-size:11.5pt;line-height:107%"></span>

<span style="font-size:11.5pt;line-height:107%"></span>

<span style="font-size:11.5pt;line-height:107%">In my <span class="SpellE">printer.cfg</span> file I have the following set for my Z endstop:  

</span>

<span style="font-size:10.0pt;font-family:&quot;Lucida Console&quot;;
mso-bidi-font-family:&quot;Lucida Console&quot;;color:black">#*#</span>

<span style="font-size:10.0pt;font-family:&quot;Lucida Console&quot;;
mso-bidi-font-family:&quot;Lucida Console&quot;;color:black">#*# [<span class="SpellE">stepper_z</span>]</span>

<span style="font-size:10.0pt;font-family:&quot;Lucida Console&quot;;
mso-bidi-font-family:&quot;Lucida Console&quot;;color:black">#*# <span class="SpellE">position_endstop</span>: 1.685</span>

<span style="font-size:10.0pt;font-family:&quot;Lucida Console&quot;;
mso-bidi-font-family:&quot;Lucida Console&quot;;color:black">#*#</span>

Imagine this is the default setting after you finish your initial Z_ENDSTOP_CALIBRATE from <span class="SpellE">Klipper</span>. <span style="mso-spacerun:yes"></span> The most reliable method I have found for fine tuning this is to print a single layer box, numerous times, which is used to calibrate the height. <span style="mso-spacerun:yes"></span> The box prints in less than five minutes per print and can help you rapidly hone your Z setting.

<span class="SpellE">**<span style="font-size:16.0pt">SuperSlicer</span>**</span>** <span style="font-size:16.0pt">Setup:</span>**

_<span style="font-size:8.0pt">You might want to save a Print Settings profile for this in the event you need to repeat this in the future (you **<u>WILL</u>** repeat this in the future (new PEI sheet, new spring steel, new buildplate, etc.)).</span>_

Under **Perimeters & Shell -> Quality** make sure that **_Only one perimeter on Top surfaces_** is checked. <span style="mso-spacerun:yes"></span> Since this is a <span class="GramE">one layer</span> print this will make the Vertical/Horizontal shells settings (and pretty much all the other settings on this tab) obsolete.

<span style="mso-no-proof:yes">![](images/image006.jpg)</span>

Under **Slicing** set your layer height to 0.2mm

<span style="mso-no-proof:yes">![](images/image007.png)</span>

Under **Infill** set:

<span style="font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol"><span style="mso-list:Ignore"><span style="font:7.0pt &quot;Times New Roman&quot;"></span> </span></span>Solid: <span style="mso-tab-count:1"></span> <span style="mso-tab-count:1"></span>Monotonic -> Connected

<span style="font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol"><span style="mso-list:Ignore"><span style="font:7.0pt &quot;Times New Roman&quot;"></span> </span></span>Top: <span style="mso-tab-count:1"></span> <span style="mso-tab-count:1"></span>Monotonic (filled) -> Connected

<span style="font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol"><span style="mso-list:Ignore"><span style="font:7.0pt &quot;Times New Roman&quot;"></span> </span></span>Bottom: <span style="mso-tab-count:1"></span> Monotonic (filled) -> Connected

<span style="mso-no-proof:yes">![](images/image009.png)</span>

Under **Skirt & Brim** make sure you have no brim set. <span style="mso-spacerun:yes"></span> If you have a good purge line set <span class="GramE">up</span> you may not need a skirt but it might be advisable to use one just to make sure that the <span class="SpellE">hotend</span> is primed with plastic the second it starts the box.

Under **Speed** make sure that it is printing relatively slow for the first layer. <span style="mso-spacerun:yes"></span> I use the following settings:

<span style="mso-no-proof:yes">![](images/image011.png)</span>

Under **Width & Flow** use something like the following settings keeping in mind that we want the top solid infill settings to take precedence. <span style="mso-spacerun:yes"></span> More thinner lines will help here.

<span style="mso-no-proof:yes">![](images/image012.png)</span>

Once that is finished head to the **Plater** tab.

Right click in the Parts/Modifiers box on the right and Add Shape -> Box

<span style="mso-no-proof:yes">![](images/image013.png)</span>

Make sure the Scale factors: & Size padlock (lower right) is UNLOCKED (just click the padlock if it is set to locked). <span style="mso-spacerun:yes"></span> Set the X, Y, Z settings under size to 75/75/0.2. <span style="mso-spacerun:yes"></span> It should look like this:

<span style="mso-no-proof:yes">![](images/image015.png)</span>

Slice now and upload the resulting GCODE file to your printer.

**<span style="font-size:18.0pt;line-height:107%">Using the Z Offset in your Web Interface:</span>**

In <span class="SpellE">FluidD</span> I configured my Z Offset settings to allow me to raise/lower the offset in 0.005/0.01/0.05/0.1mm increments. <span style="mso-spacerun:yes"></span> This allows for <span class="GramE">fairly rapid</span> adjustment of the offset. <span style="mso-spacerun:yes"></span> It should look <span class="GramE">similar to</span> this:

<span style="mso-no-proof:yes">![](images/image017.jpg)</span>

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%"></span>**

**<span style="font-size:18.0pt;line-height:107%">Printing and Tuning:</span>**

Print the GCODE file you made in <span class="SpellE">SuperSlicer</span> using your default settings.

If your Z height is tuned close to correct you will get a print <span class="GramE">similar to</span> this:

<span style="mso-no-proof:yes">![](images/image019.jpg)</span>

It should look relatively flat with no noticeable artifacts in it.

If your Z <span class="SpellE"><span style="font-size:10.0pt;
line-height:107%;font-family:&quot;Lucida Console&quot;;mso-bidi-font-family:&quot;Lucida Console&quot;;
color:black">position_endstop</span></span> is set too close to the bed it will look something like this:<span style="mso-no-proof:yes">![](images/image021.jpg)</span>

Notice all the lines moving from the lower right to the upper left of the buildplate. <span style="mso-spacerun:yes"></span> You may have more or fewer. <span style="mso-spacerun:yes"></span> These are caused by pushing too much plastic into a hard defined geographic area. <span style="mso-spacerun:yes"></span> This can cause your print to push off the bed due to thermal expansion later in the print. <span style="mso-spacerun:yes"></span> <span class="GramE">Its</span> bad, you DO NOT want this. <span style="mso-spacerun:yes"></span> You will need to raise your Z Offset in <span class="SpellE">FluidD</span>, Mainsail, or <span class="SpellE">Octoprint</span> in small increments and reprint the box until the lines are all gone. <span style="mso-spacerun:yes"></span> The first setting where you have no lines appearing in the print is where you want to permanently set your Z axis.

If your Z <span class="SpellE"><span style="font-size:10.0pt;
line-height:107%;font-family:&quot;Lucida Console&quot;;mso-bidi-font-family:&quot;Lucida Console&quot;;
color:black">position_endstop</span></span> is set too far off the plate your print will look like this when you lift it off.

<span style="mso-no-proof:yes">![](images/image023.jpg)![](images/image025.jpg)</span>

You will need to lower your Z Offset in <span class="SpellE">FluidD</span>, Mainsail, or <span class="SpellE">Octoprint</span> in small increments until you get a print with lines in it like above. <span style="mso-spacerun:yes"></span> Then you will raise your Z axis back up to the first setting where you do not have any lines in the print.

It is a good idea to mark the Z Offset on each <span class="GramE">print</span> so you have a relative reference of where you started as to where you are in your calibration. <span style="mso-spacerun:yes"></span> It usually takes ~3 prints to get honed in. <span style="mso-spacerun:yes"></span> The first few times you do this will likely take more as you figure it out.

<span style="mso-no-proof:yes">![](images/image027.jpg)</span>

Once you have really dialed in the Z height you should notice that the square looks almost glued to the plate. <span style="mso-spacerun:yes"></span> This is a good example.

<span style="mso-no-proof:yes">![](images/image028.jpg)</span>

Using the final value of your Z Offset, you might want to permanently update your <span class="SpellE">printer.cfg</span> file with and adjust the <span class="SpellE"><span style="font-size:10.0pt;line-height:107%;
font-family:&quot;Lucida Console&quot;;mso-bidi-font-family:&quot;Lucida Console&quot;;color:black">position_endstop</span></span> value by whatever final Z Offset value you settled on.

<span class="GramE">Hopefully</span> you found this guide helpful. <span style="mso-spacerun:yes"></span> If you have any questions, feel free to let me know.

Thanks,

<span class="SpellE">Ayerlock</span> v2.507

</div>
