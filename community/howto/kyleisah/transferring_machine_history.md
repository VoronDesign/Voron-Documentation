---
layout: default
title: Transferring machine history to a new Pi
nav_exclude: true
---

# Transferring machine history to a new Pi? 

This quick guide will help you through the process.

## What all do I need?

This guide assumes you have 2 or more **WORKING** Raspberry Pi SBCs and are simply trying to transfer your Moonraker DB (filament usage, hours printed, e-stop count, etc) to a new Raspberry Pi running Klipper, Moonraker, and Mainsail/Fluidd. This is typically done because you have sourced a better/newer/faster SBC and want to **retain** your machine's history after migration.

### Got my 2 Pi's working, now what?

First, it's helpful to be either at a standalone computer (slicing computer, laptop, whatever) that's on the same networks as both of your SBCs.

I will be referring to the old machine as **OLD.local** and the new machine as **NEW.local**. ".local" addresses are used if you have a network setup that uses the Bonjour service. If .local addresses do not typically work for you, you'll need to know the IP address for each SBC we are working with. Assume **OLD.local** is **OLD.IP** and **NEW.local** is **NEW.IP**. (IP addresses can be found for each machine by running `ifconfig` in the command line and looking for the number next to `inet` under `wlan0` or `eth0`, depending on if you're connected wirelessly or via ethernet cable.)

Now we can begin.

By default, the Moonraker database is located in `~/.moonraker_database` and typically contains 2 files. Be sure to check **OLD.local**'s moonraker.cfg file to see if you have it defined as something else with `database_path:`. If you do have a different path defined, use that instead.

SSH into **OLD.local** with `ssh USER@OLD.local` where `USER` is the username you've set it to (username is `pi` by default).

By default, `.moonraker_database` is hidden, but located in the "Home" directory (`~`). If you're not sure you're in the right directory, use the `cd` command to **c**hange **d**irectory to where the database would be located. e.g. `cd ~`

Before we continue, it's a good idea to **stop Moonraker on both devices** using `sudo service moonraker stop` so the database files aren't being written to during transfer.

On **NEW.local**, it would be wise to remove the database folder entirely, as we will be transferring the database from **OLD.local**. Be sure you are SSH'd into **NEW.local** have Moonraker stopped, and use `rm -rf .moonraker_database` to delete the database folder.

Using SCP, we will now transfer the database from **OLD.local** to **NEW.local** with `scp -r .moonraker_database USER@NEW.local:~`. This will use the secure transfer protocol to transfer the files from the old SBC to the new one. You will need to provide the password for USER (default is `raspberry`) for the transfer to take place.

Be sure to check that the transfer was successful by looking for `.moonraker_database` on **NEW.local** with `ls -a` in the home directory (`~`).

If everything transferred, go ahead and bring up the Moonraker service again with `sudo service moonraker restart` and check if Moonraker is back up and running by opening Mainsail/Fluidd in your browser.

Assuming everything went well, congrats! That's all there is to it.

## Something went wrong, Moonraker isn't coming back up!

If Moonraker is failing to load, that most likely means it's not recognizing **OLD.local**'s database as a database. There is a "working" fix for this.

You'll need to stop the Moonraker service on both machines (see above) and install a tool called `lmdb-utils` with `sudo apt install lmdb-utils` on both machines.

Once you've got that, on **OLD.local** use the command `mdb_dump -f backup.txt -a .moonraker_database` to backup the database as a text file named `backup.txt`.

Still using **OLD.local** use SCP again to transfer `backup.txt` to **NEW.local** with `scp backup.txt USER@NEW.local:~` The file will now be in **NEW.local**'s home directory (`~`).

SSH into **NEW.local** and remove the files inside `.moonraker_database` by using `cd .moonraker_database` to move into the folder and use `rm -rf data.mdb` and `rm -rf lock.mdb` to delete the files. Now, use `cd ~` to move back into the home directory and run the command `mdb_load -f backup.txt -s -T ~/.moonraker_database` to forcefully load the database file into Moonraker. After that's done, use `sudo service moonraker restart` and check everything is working in Mainsail/Fluidd.

This is a fix that worked for me, I'm not responsible for any lost data that may occur while following this guide.

Special thanks to Arksine, as well as Th33xitus, who helped me figure this out. 
