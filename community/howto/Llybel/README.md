<h1>Llybel’s v2.4 Voron Guides</h1>


This is a github version of my guides. I wrote these to provide information that is either not covered, or out of date in the official manual. If you have any feedback or comments you can usually find me on the VoronDesign discord server.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?hosted_button_id=2JCKSHQ37T86L)

---

<h1>Table of contents</h1>



 [Llybel’s V2.4 Recommended BoM Changes](#llybel’s-v2-4-recommended-bom-changes)
-  [Necessary changes from BoM](#necessary-changes-from-bom)
-  [Strongly recommended changes](#strongly-recommended-changes)
-  [Popular changes or additions](#popular-changes-or-additions)
-  [Recommended Spares](#recommended-spares)
-  [Recommended Tools](#recommended-tools)
-  [Changes involved with Octopus / Spider boards](#changes-involved-with-octopus-spider-boards)
-  [My recommended Mods](#my-recommended-mods)
- -  [Exceptions to the stock first rule](#exceptions-to-the-stock-first-rule)
- - [Build stock first](#build-stock-first)

<br><br>

[Llybel’s v2.4 Sourcing Notes](#llybel’s-v2-4-sourcing-notes)
- [Filament and Printer Parts](#filament-and-printer-parts)
- [Fasteners](#fasteners)
- [Motion](#motion)
- [Electronics](#electronics)
- [Controller](#controller)
- [Frame](#frame)
- [Misc](#misc)
- [Cables](#cables)
- [Buildplate](#buildplate)

<br><br>

[Llybel’s v2.4 Pre Build guide (WIP)](#llybel’s-v2-4-pre-build-guide-wip)
- [Read the Manual and Doc site](#read-the-manual-and-doc-site)
- [Cleaning rails](#cleaning-rails)
- [Apply Bed Heater and magnet](#apply-bed-heater-and-magnet)
- [Test Probe](#test-probe)
- [Double check you have ordered everything](#double-check-you-have-ordered-everything)
- [Wash your PEI plate](#wash-your-pei-plate)
- [Make sure you have spares](#make-sure-you-have-spares)
- [Join the VD discord and join your local channel](#join-the-vd-discord-and-join-your-local-channel)
- [Check Tools](#check-tools)
- [Practice Crimping](#practice-crimp)
- [Set up your raspberry Pi](#set-up-your-raspberry-pi)
- [Read up on klipper - look at printer.cfg’s](#read-up-on-klipper-look-at-printer-cfg’s)
- [Prepare your work space](#prepare-your-work-space)
- [Watch youtube guides](#watch-youtube-guides)
- [Find / Read documentation on your MCU board](#find-read-documentation-on-your-mcu-board)
- [If you are getting a kit - make sure you know what it comes with / any changes from stock](#if-you-are-getting-a-kit-make-sure-you-know-what-it-comes-with-any-changes-from-stock)



---

<h1 id="llybel’s-v2-4-recommended-bom-changes">Llybel’s V2.4 Recommended BoM Changes</h1>


_Last updated: 15/11/2021_

<h2 id="necessary-changes-from-bom">Necessary changes from BoM</h2>




* Single sided foam tape, 1-3mm thick, sold in most hardware stores to seal gaps around doors and windows - Goes between the panels and the frame to insulate them, stop vibrations and stop the belts rubbing against them (Fixed in the latest BoM).
* SKR v1.4 is no longer being manufactured and is difficult to find. Current alternatives are the Fysetc Spider or BTT Octopus. Advantage of these are that you only need the one board and no 5v PSU
* BoM lists 14 m3x16 screws when you actually need 20 - you should be buying spares of all fasteners however.

<h2 id="strongly-recommended-changes">Strongly recommended changes</h2>




* 16 - 18awg gauge wire for mains - 20awg is not rated for mains current. Does not need to be PTFE/Silicone (Fixed in the latest Sourcing guide)
* Don’t get silicone wiring, get PTFE/FEP instead - It is more expensive but will last a lot longer (Fixed in the latest sourcing guide)
* Swap 24awg for 22awg if buying PTFE/FEP wire from aliexpress - the 24awg from aliexpress does not have enough strands to withstand constant bending (Fixed in the latest sourcing guide)
* Kapton tape or Reflect-a-GOLD (protect probe from heat of hotend)
* I consider the purge bucket mod to be essential - see below in the mod section
* If printing yourself - the din mounts for electronics from the Trident are a lot better than the v2 ones
* The Tessa tape in the BoM is no longer needed but I found it useful for tidying up the wiring in the electronics bay,

<h2 id="popular-changes-or-additions">Popular changes or additions</h2>




* Wago or terminal blocks to make wiring easier
* Magnetic sheet and Spring Steel flexplate
* Dragon ~~or Mosquito~~ hotends instead of the V6. Due to Slice’s bullying of small vendors I can no longer recommend their products.
* Omron probe instead of the pl08 (requires you are using flexplate) - Klicky probe mod is very popular but definitely not a mod I would install until you have a working printer
* Addition of butt connector to bom for connecting the thermal fuse
* Aluminium composite panels to replace the coroplast panels. Stronger, looks nicer and warps less however needs special tools to cut (lots of vendors selling them precut)
* Some people like to go with thicker (e.g. ½” ) build plates. Less likely to warp but can be harder to source predrilled.
* Ring connectors - some people prefer them for grounding bed and frame
* Cheap/ heavy paver to sit the printer on - reduces vibrations
* RTV High temp to glue the temp fuse to the bed
* Small SD card for flashing your MCU

<h2 id="recommended-spares">Recommended Spares</h2>




* All fasteners, especially heat inserts (you will lose some)
* Magnets (used by a lot of mods)
* Inductive probe (Lots of them have been DOA recently)
* Belts (especially 6mm belts) - Even the devs occasionally route the belts wrong / cut them too short
* Spare fuses (inlets often don’t come with them)
* Connectors (especially the pins) - Crimping is easy to screw up and even the experienced sometimes get it wrong. Connectors are also needed for a lot of mods.
* Nozzles
* PEI sheet / Plate - you will almost certainly end up scratching it with your nozzle. Formbot has shipped fake PEI plates several times recently as well

<h2 id="recommended-tools">Recommended Tools</h2>




* Wire stripper. Automatic ones often don’t like PTFE wires but otherwise any old one should do
* Decent crimper. Popular ones are the IWISS 2820m or Engineer PA09 or Engineer PA-21
* Soldering Iron (for inserting the heat inserts)
* Good ventilation (for ABS fumes when adding heat inserts)
* Heat source for heat shrink (hot air gun or lighter)
* Dremel or grinder (even kits usually don’t come with the notch cut for the z endstop)
* Vice or clamps for holding the z endstop pin whilst grinding the notch
* Ball end, metric, allen/hex keys
* Calipers for measuring printed parts, some people also like needle files to clean up prints
* Fine steel wool (000 or 0000) for roughing up PEI sheets (fine sand paper also works but more likely to damage it) A Scotch Brite works too
* Machinist square or tape measure for squaring the frame
* Needle nose Pliers. some people also like curved hemostats
* Multimeter
* Flush cutters or a decent pair of snippers
* Isopropanol/Isopropyl Alcohol (IPA) for cleaning the rails and bed
* Decent sized cutting mat

<h2 id="changes-involved-with-octopus-spider-boards">Changes involved with Octopus / Spider boards</h2>




* No longer need the 5v Meanwell PSU to power the Pi (boards have a 5v supply), However may still want it if planning on install a lot of LEDs
* You only need one board (both boards have 8 stepper slots vs the 5 of the old skr boards)
* Mounts for the Octopus and Spider can be found in the trident repository - [https://github.com/VoronDesign/Voron-Trident/tree/main/STLs/ElectronicsBay/Controller_Mounts](https://github.com/VoronDesign/Voron-Trident/tree/main/STLs/ElectronicsBay/Controller_Mounts)

<h2 id="my-recommended-mods">My recommended Mods</h2>


These are the mods I highly recommend; different people have different opinions on the mods so it can be a good idea to ask around. I also only include them here so that you can order the parts now and don’t later have to wait. Please **<span style="text-decoration:underline;">BUILD STOCK FIRST!!! </span>**and get your printer running well before installing most of these. Mods add a lot of things that can go wrong whilst limiting the people who can help you.

<h3 id="exceptions-to-the-stock-first-rule">Exceptions to the stock first rule</h3>




* Panzerchain - Printable alternative to Igus cable chains ([https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Slidr/PanzerChain2.4](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Slidr/PanzerChain2.4))
* AB-BN - better cooling than the stock afterburner (there is a new afterburner coming out soon which may change this) -  [https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Badnoob/AB-BN](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Badnoob/AB-BN)
* Extrusion backers - reduce bending of the extrusions due to the bimetal effect - [https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/whoppingpochard/extrusion_backers](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/whoppingpochard/extrusion_backers)
* MGN12 mod reduces the risk of having rail alignment issues - **Only if you are printing your own parts**. [https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/arkeet/mgn12](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/arkeet/mgn12)

<h3 id="build-stock-first">Build stock first</h3>




* Z-drive tension mod - ([https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/edwardyeeks/V2.4_z_drive_motor_tensioner_mod](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/edwardyeeks/V2.4_z_drive_motor_tensioner_mod))
* Purge bucket and nozzle scrubber - **essential for ensuring consistent z homing** - [https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_&_Nozzle_Scrubber](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/edwardyeeks/Decontaminator_Purge_Bucket_&_Nozzle_Scrubber)
* Nevermore Micro - a lot better filtering than stock - [https://github.com/0ndsk4/VoronUsers/tree/0ndsk4/printer_mods/0ndsk4/Nevermore_Air_Filter/Nevermore_Micro](https://github.com/0ndsk4/VoronUsers/tree/0ndsk4/printer_mods/0ndsk4/Nevermore_Air_Filter/Nevermore_Micro)
* Klicky Probe - More accurate than the stock inductive probe but a lot more complex to set up - [https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/JosAr/Klicky-Probe](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/JosAr/Klicky-Probe)
* MGN12 mod if you have alignment issues with dual mgn9 - [https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/arkeet/mgn12](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/arkeet/mgn12) (


---

<h1 id="llybel’s-v2-4-sourcing-notes">Llybel’s v2.4 Sourcing Notes</h1>


_Last Updated: 16/11/2021_

Note that this is not intended as a replacement for the sourcing guide or to be a list of local suppliers. Like my BoM recommendation doc, this is intended to provide info on anything that has changed since it was created and to answer common questions asked on discord. 

<h2 id="filament-and-printer-parts">Filament and Printer Parts</h2>




* **ABS, ABS+ or ASA only for parts inside the chamber** - PETG and PLA will melt, Nylon and carbon fiber blends have been known to crack and Aluminium is too heavy and inflexible.
* **PLA, PETG or anything else can be used for parts outside the chamber**
* **Local channels are a great place to ask for brand recommendations.**
* **Don’t buy printed parts from EBAY or Aliexpress -** If the PiF queue is too long, people sell sets in the #flea_market channel and you can usually find people happy to print in the local channels. Ebay and Aliexpress have been known to send parts that are printed in low quality filaments.

<h2 id="fasteners">Fasteners</h2>




* **Misumi extrusion don’t like aliexpress post insert t-slot nuts -** They can be pre-inserted but will need to be sanded slightly to be rotated in. LDO frames seem to only have problems with the occasional nut. Some people have had luck with POLISI3D nuts (amazon) with Misumi frames.
* **Black fasteners can rust -** This is usually only an issue in places with high humidity.
* **Knurled Nuts are used as spacers** - Hence why they are m4, so the m3 bolts can pass through to the m3 t nut.
* **Buy Spares** - And buy extra M3x16 spares. The amount listed on the BOM might still be a little low
* **Fastener kits can make things easier BUT MAKE SURE THEY HAVE SPARES -** It is worth finding a local supplier as well

<h2 id="motion">Motion</h2>




* **Get POWGE or GATES belts, pulleys and idlers** - There have been a couple people lately with unbranded belts that have snapped. Bad quality belts, pulleys and idlers can directly result in worse prints with vertical visual artifacts.
* **CNA, RobotDigg and LDO all make decent rails**
* **Motion kits are a good way to simplify ordering -** Buy from POWGE (aliexpress) or one of the vendors from the VD discord to ensure you get good quality though.

<h2 id="electronics">Electronics</h2>




* **Buy microswitches and anything that touches mains from a supplier you trust (digikey)-** Cheap chinese mains components can cause fires, and cheap microswitches can cause inconsistent homing.
* **Most of the Omron D2F switches are a good choice** - However the D2f-01L is not recommended as they will wear out faster.
* **Go with PL-08N2 probe if planning to upgrade to klicky later**
* **B stock Omron work just as well as A stock**
* **SSR is the component most likely to cause a fire -** Please buy quality (like Omron for a reputable source)
* **Combined inlet / switch is no longer supported -** People have had issues with cheap ones from china shorting.
* **There are a number of different switches / inlets that will fit -** If the ones recommended in the guide are out of stock, note the dimensions. Digikey and Mouser will allow you to use those to filter for others that will work.
* **Most inlets do not come with fuses -** make sure to order some at the same time. The non-medical filtered inlets are just as good as the medical ones when it comes to a printer.
* **Bat85 diode is not needed with the spider -** The Octopus technically doesn’t need on either but due to issues with the optocoupler I recommend still buying one so you can use an endstop port instead.
* **Sunon and Delta make better fans than the GDSTIME ones** - Sunon Maglev don’t always like PWM though so I recommend against using them for the part cooling blower
* **Don’t use Noctuas fans inside the chamber -** They don’t have enough static pressure. They are fine for the skirt fans though.
* **Get a 5015 blower for when you upgrade to the AB-BN mod for part cooling -** They are often easier to source than 4020s as well
* **Phaetus and Triangle labs Dragon hotends are equally as good -** The only difference is the shape of the heater block.
* **The Standard Dragon is enough for most people** - and is slightly easier to calibrate as well.

<h2 id="controller">Controller</h2>




* **Raspberry Pi 3 are more than good enough** - Klipper does not need a lot of ram either.

<h2 id="frame">Frame</h2>




* **LDO frames are just as good as Misumi** - and easier to source.

<h2 id="misc">Misc</h2>




* **Make sure you get a bowden tube with ID 3mm -** 2mm internal diameter will have too much friction for the reverse bowden.This friction can cause extrusion issues
* **You will also need a small piece of ID 1.9mm -** or 2mm or 1.75mm, this is to go between the clockwork and the hotend. Widing the top end can make it easier to insert filament
* **Foam tape for panels can be brought in hardware stores -** It is sold to seal gaps around windows and doors.
* **You can cannibalise a BMG extruder for parts**
* **EP 1 or 2 grease is best for the rails -** any thick (NLGI 1 or 2) lithium grease with no solid particles (e.g. graphite) will work.
* **Clean your linear rails before greasing and installing them** - Rails come in machine oil and can have metal particles in the carriages from the machining process. Pour some IPA into the carriage, move the carriage around, wipe the rail down with paper towels and repeat 3-4 times.

<h2 id="cables">Cables</h2>




* **JST SM connectors can be used instead of Micro-Ffit3** - They are larger however and won’t fit underneath the stock cable cover. These are not rated for the upcoming Revo or Rapido hotends.
* **Ryans Electrical Wire Store on aliexpress is good for PTFE/FEP wire**
* **Remmington in the US for PTFE/FEP wire**

<h2 id="buildplate">Buildplate</h2>




* **Avoid Aliexpress -** You won’t save much but will have a 50% chance of getting something almost unusable.
* **Lecktor, Fermio Labs, West3D and Mandela Rosework all sell great beds -** The bed is the one thing, more than any other that you do not want to take a risk on
* **Energetic (aliexpress, powder coated), Mueller (EU) and KB3D make good PEI flex plates**


---

<h1 id="llybel’s-v2-4-pre-build-guide-wip">Llybel’s v2.4 Pre Build guide (WIP)</h1>


_Last Updated: 16/11/2021_

This is a list of things that I advise doing that are not covered by the build manual and can be done before you start the main build.

<h2 id="read-the-manual-and-doc-site">Read the Manual and Doc site</h2>


[https://docs.vorondesign.com/](https://docs.vorondesign.com/)

https://vorondesign.com/voron2.4

Pre reading these will make the build a lot easier for you. A good 50% of the questions we get are answered in these documents and we direct people back to them multiple times a day.

<h2 id="cleaning-rails">Cleaning rails</h2>


Firstly - **do not** remove the carriages from the rails unless you have to - it's a quick way to lose bearings. 

Cleaning and lubing the rails is essential to ensure they last. My preferred method is to soak them in IPA or degreaser for a couple hours (if using degreaser, ensure that it is plastic friendly and wipe with IPA after) and then wipe down with paper towels. 

If your rails have a grease port you can use that to grease the carriages. Otherwise put EP2 grease into either a syringe or ziplock bag (with the corner cut off) and use it to apply the grease directly to the bearing balls on the bottom of the carriage (do not remove the carriage from the rails). Move the carriage up and down the rail, stop somewhere other than where you started (to expose balls that weren’t exposed before) and apply more grease. Do this a couple times then wipe off the excess grease.

Finally check that the carriages move smoothly over the whole length of the rails. Note that the Grease is very thick and it will make the carriages harder to move - I use the point where they no longer move under gravity as the point where they have enough grease. If they feel crunchy then you may need to remove the carriages after all, if so Nero has a good video on it (https://www.youtube.com/watch?v=i_F7D4UgkWY) but only do this if you need to.

Finally sort your rails. You want your best (smoothest) on X and your worst on Z. 

<h2 id="apply-bed-heater-and-magnet">Apply Bed Heater and magnet</h2>


The adhesive used to attach the heater mat and magnets takes 24 hours to fully set. It is also essential for the heater; to apply plenty of weight (say 10kg, old textbooks work great) whilst it is curing to ensure that any air is pushed out. Any air trapped between the plate and the heater can cause serious heater issues. 

<h2 id="test-probe">Test probe</h2>


The inductive probes seem to have gone down in quality lately and a number of them have been DOA. I still strongly recommend starting with the stock inductive probe before changing to klicky but it is an issue. Testing is also easier to do when it is not wired into a fully built printer. To test the probe, connect the GND and V+ wires to a power source between 5 and 36v. Use a multimeter to measure the voltage between the signal wire and ground. You should see 0V when touching metal and _Vin_ when away from metal. If it is the opposite you have a normally open probe which is not recommended (a normally closed probe will ‘trigger’ if a wire breaks - a normally open probe will not lead to a nozzle crash) but will work for printing the parts to klicky. If you see nothing then there is something wrong with the probe.

<h2 id="double-check-you-have-ordered-everything">Double check you have ordered everything</h2>


Should be pretty obvious - you don’t want to have to stop and wait a month for something to ship from china.

<h2 id="check-and-sort-your-printed-parts">Check and sort your printed parts</h2>


Should be pretty obvious again but make sure you have the right parts for things that vary. We get a number of people that will, for example, have the part for microswitch endstops when they have gone with the hall effect sensors instead. 

I like to sort my parts via the folder they are in in the git repository - it matches the order you will need them in. 

<h2 id="wash-your-pei-plate">Wash your PEI plate</h2>


While IPA is good to wipe the plate with between prints, when new PEI needs a proper clean with dish washing liquid. If parts stop sticking it is time to wash again.

<h2 id="make-sure-you-have-spares">Make sure you have spares</h2>


Again, it should be obvious but a lot of people seem to forget. Fasteners are particularly important. 

<h2 id="join-the-vd-discord-and-join-your-local-channel">Join the VD discord and join your local channel</h2>


I learnt a huge amount by just hanging out in the Voron discord whilst waiting for parts to arrive. And if you have a local channel there, they can be a great source for info, local suppliers, people willing to print parts and even group buys sometimes. 

<h2 id="check-tools">Check tools</h2>


Again, should be obvious - make sure you have a good crimper for jst and microfit. 

<h2 id="practice-crimp">Practice Crimping </h2>


This is especially important if you are not using a premade harness. Bad crimps are the number one cause of hardware issues in the VD discord. If you don’t know how to crimp there are lot of guides on the internet  / youtube

<h2 id="set-up-your-raspberry-pi">Set up your raspberry Pi</h2>


You do not need to do this before your build but if you are bored and have time there is no reason not to. You can also set up the MCU.

<h2 id="read-up-on-klipper-look-at-printer-cfg’s">Read up on klipper - look at printer.cfg’s</h2>


Again, not essential but if you are new to klipper, and have some time, it's a good chance to start getting your head around it. 

<h2 id="prepare-your-work-space">Prepare your work space</h2>


You will want a very flat surface to assemble your frame on to help get it square. Once you have it square, a cutting mats or a towel or similar will save you from damaging your bench / table and building a voron takes space.

<h2 id="watch-youtube-guides">Watch youtube guides</h2>


If you are more of a visual learner, then there are plenty of videos on the build and configuration, sourcing, kit reviews etc on youtube. A good place to start is Nero3DP videos linked in the #Help_guides channel on the VoronDesign discord. 

<h2 id="find-read-documentation-on-your-mcu-board">Find / Read documentation on your MCU board</h2>


Most current boards should be covered on the docs site but for newer boards you might need to locate their github. Make sure you know where to find their pinout, stock printer.cfg and wiring diagram if they exist. Also check to make sure there are no notes about any issues (e.g. Spider boards you need to discharge the capacitors before adding / removing stepper drivers).

<h2 id="if-you-are-getting-a-kit-make-sure-you-know-what-it-comes-with-any-changes-from-stock">If you are getting a kit - make sure you know what it comes with / any changes from stock</h2>


We aren’t going to be much help if you don’t know what probe you have. Some kits have also started including parts that are technically mods and not covered by the build manual. Knowing that and locating the instructions for the mod will make your life a lot less confusing.
