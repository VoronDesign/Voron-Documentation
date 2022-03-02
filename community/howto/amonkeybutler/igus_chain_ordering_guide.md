---
layout: default
title: IGUS Chain Length Ordering Guide
nav_exclude: true
---

# IGUS Chain Length Ordering Guide

PLEASE NOTE THAT THE BOM VARIES FROM THE SOURCING GUIDE ON THIS. FOR THE X&Y CHAINS YOU WANT TO USE E2i CHAINS AND NOT THE E2 CHAINS. E2i CHAINS OPEN TO THE INSIDE OF THE CURVE RADIUS AND WILL BE ACCESSIBLE WHERE AS THE E2 CHAINS THE OPENING SIDE WILL LAY AGAINST THE EXTRUSIONS.

When ordering IGUS chains, you need to cross reference your BOM with the Sourcing Guide. The BOM will give you the length of chain whereas the Sourcing Guide will give you a count of links. IGUS's site isn't exactly intuitive as to what number you should enter. The BOM and Sourcing Guide give you the resultant CALCULATED values on the IGUS website and NOT the numbers you enter in the IGUS Configurator.

My examples will show what to spec (as of 9/9/2020) for a Voron 2.4 but the general principles apply across all models.

For a 2.4 350^3 model, the BOM calls out IGUS E2i-10-10-018-0 Chain (405mm [1.33ft]) for x/y and IGUS E2-15-10-028-0 Chain (545mm [1.79ft]) for z. The Sourcing Guide calls out for 21 links and 28 links respectively.

In the IGUS Configurator you need to adjust the TRAVEL DISTANCE until you reach the number of links specified in the Sourcing Guide. In the case of the E2i-10-10-018-0 Chain, I had to set the TRAVEL DISTANCE to 2.0 ft which resulted in a CHAIN LENGTH of 1.3825 ft. That length corresponds to a count of 21 links as noted in the Sourcing Guide. Going any smaller on the TRAVEL DISTANCE length would give us fewer than 21 links. 

Note that the resultant CHAIN LENGTH is longer than specified in your BOM. You want to have those two numbers as close as possible while maintaining the number of links specified in the sourcing guide.

For the IGUS E2-15-10-028-0 You will need to set the TRAVEL DISTANCE to 2.8 ft resulting in a CHAIN LENGTH of 1.8433 ft. Again, this will be longer than the specified 1.79 ft but the link count will be 28 which matches the Sourcing Guide.
