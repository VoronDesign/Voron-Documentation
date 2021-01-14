---
layout: default
title: "Notepad++ Configuration Editor (Windows)"
nav_exclude: true
---

# Notepad++ Configuration Editor (Windows)

1.  Install [Notepad++](https://notepad-plus-plus.org)
2.  Under the “Plugins” tab, select “Plugins Admin”
3.  Search for “NppFTP”, select the check box, and click “Install” 
4.  Restart Notepad++ if necessary
5.  On the right, there will be a new section. Click the gear icon and select “Profile Settings” 
6.  In the bottom left, select “Add New” and name the profile as you wish
7.  In the Hostname dialog, enter the IP address of your Raspberry Pi
8.  In Connection Type, select SFTP
9.  Port: 22 
10.  Username: pi
11.  Password: *** (default is raspberry)
12.  Close the dialog box, select the blue symbol, and select the name of the profile you create
13.  Notepad++ will connect to your Raspberry Pi and display the file structure
14.  Navigate to /home/pi and open printer.cfg
15.  Make any applicable edits and then save the file

Remember to restart klipper from the Octoprint terminal to see your changes take affect!
