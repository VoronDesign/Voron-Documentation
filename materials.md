---
layout: default
title: "Materials Selection"
parent: Sourcing Information
---

# Voron Materials Selection

When determining what materials to create the Voron printed parts from, there are a number of criteria that need to be considered.

* The parts have been designed with ABS/ASA shrinkage in mind. This is built in to the parts already, so shrinkage should be set to 100%. Compensating for this is likely to make bearing fits and screw holes too large.
* It is common for the chamber temperatures inside an enclosed Voron printer to reach 55–60 ºC. The material chosen should have a thermal deformation temperature or “glass temperature” that is at least 80 ºC.
* The V2 gantry can become misaligned for a variety of reasons. Since the gantry is 4 points, that misalignment can cause flex in the AB drive units. It is recommended that the material for the AB drive units be able to handle that movement.

## PLA

PLA has a glass temperature of around 55–60 ºC. It is very stiff and has a low ductility (ability of a material to have its shape changed without losing strength or breaking).  It is not recommended for Voron parts.  This is due to both the low temperature tolerance and the low ductility that can occasionally cause unexpected cracking.  The high temperature variant HTPLA is viable for temperature tolerance but is expensive and still has issues with ductility and risk of cracking.  PLA is entirely acceptable for skirts and panel clips as they do not see the same high temperatures or forces.

## PETG

PETG has a glass temperature of around 85 ºC. It has moderate stiffness depending on the additives and typically high ductility.  It is not recommended for Voron parts due to the low temperature tolerance. The thermal properties do not change with additives such as carbon fiber.  Some have successfully built a Voron in PETG and used that to reprint in ABS but the part failure rate in that situation is very high.  PETG is acceptable for skirts and panel clips.

## ABS

ABS has a glass temperature of around 90 ºC. It has moderate stiffness and moderate ductility.  It is the primary recommended material for Voron printers due to the high temperature rating and moderate ductility.  This allows for the parts to hold up in a higher temperature environment well yet endure some flex without cracking.  The variant ASA is also fully supported.

Note on ABS+ and other blended ABS products:  
ABS comes from a well-known basic chemical formula (Acrylonitrile Butadiene Styrene), however manufacturers of ABS+ filament don’t offer us much information on what makes their filaments “Plus”. Some brands claim reduced odor and toxic fumes, which may be related to a lower percentage of styrene. the variability in the chemical composition of ABS+ filaments means that consistency across brands cannot be guaranteed. As such, ABS+ is not recommended for new builds given the unknown mechanical properties.

## Nylon

PA6 nylon has a high glass temperature of 180 ºC. It has moderate stiffness and moderate ductility.  It is not recommended for Voron parts due to the tendency of nylon PA6 to creep (slowly deform) under the constant pressure exerted by the bolts clamping on the parts. PA12 nylon has the same temperature rating and a similar stiffness and ductility, but it is a viable option for Voron parts as it exhibits only minimal creep under pressure. However it is quite expensive and is more commonly found in SLS processes than FDM.

## Polycarbonate

Polycarbonate (PC) and one of the various blends and/or additives (e.g. PC-ABS, PC-CF) have a high glass temperature of close to 150 ºC but have a very high stiffness and low ductility.  Some blends such as PC-ABS have slightly lower stiffness and higher ductility but not by huge amounts.  PC and PC blends are not recommended for Voron parts due to the risk of sudden cracking.  However some have successfully printed and used toolheads made from PC blends as the mechanical loads are low and the need for thermal tolerance is high.

## Resin

While on paper resin printed parts could work for heat resistance depending on the resin type, resin parts typically continue to shrink over time putting them outside of dimensional tolerances. Resin prints also typically exhibit long term creeping under bolt pressure and have a tendency to catastrophically fail after just a few months of use. A viable resin has yet to be found that will sync up to the Voron environment.  Resin is strongly discouraged for use in Voron parts.

## Aluminum

There is a recent trend toward printer parts that are CNC machined out of aluminum. While aluminum has more than sufficient heat tolerance the high stiffness may cause issues with the V2 due the slight flexibility needed in the gantry. It is also very common to machine the aluminum parts to match the dimensions of parts designed to be made in ABS.  Unfortunately due to the differences in raw material weight and the printed parts averaging 50% hollow the aluminum parts are typically around 5X heavier than their ABS printed versions.

## Testimonials

#### @Weaslus

“dissassembling a whole printer to reassemble in ABS, and spending twice on filament, was the worst part. it was a days work I wouldn't wish on anyone.”
