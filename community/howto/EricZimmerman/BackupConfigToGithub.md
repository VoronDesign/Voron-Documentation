---
layout: default
title: Backing up printer configuration files to GitHub
nav_exclude: true
---

# Backing up printer configuration files to GitHub

Having working backups is a good idea for just about everything, and for our printers,
even more so! Configuration files are often changed when tuning or experimentation, 
but how can you keep track of those changes and be able to find previous values? 
In some cases, adding the old value as a comment can be useful, but long term, this becomes tedious.

Additionally, sometimes SD cards just fail, or some other unforeseen circumstances arise that prevent
things from working or accessing configuration files on your printer.

Let's solve both of these problems by setting up a simple backup/change tracking methodology to GitHub!

## Sign into GitHub and create a new repository

**NOTE**: If you do not have a GitHub account, create one by clicking <a href="https://github.com/signup" target="_blank">here</a> and filling out all the details

1. Sign into your GitHub account
2. Create a new repository by clicking on the New button

![CreateNewRepo](img/newRepo.png)

3. Update details for the new repository
    a. If you plan on having more than one printer some day, use a repository name that is specific to that printer
    b. Description is optional, but nice to have, especially for other people that may reference your config
    c. Public or Private is up to you.
    d. License is optional too, but best to specify something. I usually do MIT for all my stuff, but your mileage may vary

![NewRepoDetails](img/newRepoDetails.png)

4. You now have a new git repository! The next thing to do is make a note of the URL to this repository. Click the green `Code` button, then copy the `HTTPS` url to the clipboard via the button to the right of the URL.

![](img/CopyUrl.png)

5. Open up your favorite text editor and paste this URL into it for later use

![](img/NotePad.png)

## Generate an access token

Next up, we need to generate a token that can be used to authenticate against our newly created repository.

1. Click <a href="https://github.com/settings/tokens" target="_blank">here</a> to access your `Personal Access Tokens` settings. You will, of course, need to be signed in to get to this.

2. Ensure `Tokens (classic)` is selected on the leftmost side, then create a new token via the `Generate new token` menu. Be sure to select the `classic option`

NOTE: If you are prompted to reauthenticate, do so. This is a safety measure as you are about to create a sensitive credential

![](img/newToken.png)

3. Give your token a meaningful name, set the **Expiration** date to `No expiration`, and check the `workflow` and `read:org` under `admin:org` section

:warning: If you prefer to set an expiration date for your token, feel free to do so, but be aware you will have to regenerate a new token as things expire, as well as update some other settings that we have not got to yet :warning:

![](img/tokenSettings.png)

4. Scroll to the bottom of the page, and click `Generate token`

![](img/generateToken.png)

5. You now have a new access key! Protect it well, like you would any other password! Click on the `Copy` button to copy the token to the clipboard, then paste it into the same place you saved your HTTPS URL from the previous step. 
   This is your ONE AND ONLY chance to copy this key, so make sure you record it before leaving this screen.

NOTE: The image below has the key redacted. Yours will of course not look like that

![](img/copyToken.png)

### Combine our HTTPS URL with our token

We can now put the pieces together we have created so far. To make this easier, I will be working with these pieces, but you should of course use the values you generated above.

- **URL**: https://github.com/EricZimmerman/Voron24Configs.git
- **Token**: ghp_dKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

1. Insert the token into the URL following this pattern:  

```
https://<Token>@github.com/EricZimmerman/Voron24Configs.git
```

which for my values, would end up looking like:

```
https://ghp_dKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX@github.com/EricZimmerman/Voron24Configs.git
```

Note that you do not want the <> symbols, as that's just a placeholder so you can see the pattern easier.

2. Copy this newly crafted URL to your text editor. This is the URL we will be using in a later step.

:warning: :warning: :warning: **NEVER EVER** put the token you generated in any of the files that will be committed to GitHub! If you do so, GitHub will see it and (rightly) revoke your token! :warning: :warning: :warning:


## Connect to your printer via SSH

1. Open up a PowerShell window, or use whatever program you usually use to connect to your printer via SSH, and connect to your printer

![](img/InitialSsh.png)

2. Change directories into your `klipper_config` directory, which is where all of your configuration files live

```bash
cd ~/klipper_config
```
3. Using nano, or your favorite text editor (its nano, right?), create new file named `autocommit.sh` in your `klipper_config` directory

```bash
nano autocommit.sh
```

4.  Paste the contents below into the file:

NOTE: This script originates from <a href="https://github.com/th33xitus/kiauh/blob/master/resources/autocommit.sh" target="_blank">here</a> but I tweaked the pull command and added a comment for reference later.

```bash
#!/bin/bash

#####################################################################
### Please set the paths accordingly. In case you don't have all  ###
### the listed folders, just keep that line commented out.        ###
#####################################################################
### Path to your config folder you want to backup
config_folder=~/klipper_config

### Path to your Klipper folder, by default that is '~/klipper'
klipper_folder=~/klipper

### Path to your Moonraker folder, by default that is '~/moonraker'
moonraker_folder=~/moonraker

### Path to your Mainsail folder, by default that is '~/mainsail'
mainsail_folder=~/mainsail

### Path to your Fluidd folder, by default that is '~/fluidd'
#fluidd_folder=~/fluidd

#####################################################################
#####################################################################


#####################################################################
################ !!! DO NOT EDIT BELOW THIS LINE !!! ################
#####################################################################
grab_version(){
  if [ ! -z "$klipper_folder" ]; then
    cd "$klipper_folder"
    klipper_commit=$(git rev-parse --short=7 HEAD)
    m1="Klipper on commit: $klipper_commit"
    cd ..
  fi
  if [ ! -z "$moonraker_folder" ]; then
    cd "$moonraker_folder"
    moonraker_commit=$(git rev-parse --short=7 HEAD)
    m2="Moonraker on commit: $moonraker_commit"
    cd ..
  fi
  if [ ! -z "$mainsail_folder" ]; then
    mainsail_ver=$(head -n 1 $mainsail_folder/.version)
    m3="Mainsail version: $mainsail_ver"
  fi
  if [ ! -z "$fluidd_folder" ]; then
    fluidd_ver=$(head -n 1 $fluidd_folder/.version)
    m4="Fluidd version: $fluidd_ver"
  fi
}

# To fully automate this and not have to deal with auth issues, generate a legacy token on Github
# then update the command below to use the token. Run the command in your base directory and it will
# handle auth. This should just be executed in your shell and not committed to any files or
# Github will revoke the token. =)
# git remote set-url origin https://XXXXXXXXXXX@github.com/EricZimmerman/Voron24Configs.git/
# Note that that format is for changing things after the repository is in use, vs initially

push_config(){
  cd $config_folder
  git pull origin master
  git add .
  current_date=$(date +"%Y-%m-%d %T")
  git commit -m "Autocommit from $current_date" -m "$m1" -m "$m2" -m "$m3" -m "$m4"
  git push origin master
}

grab_version
push_config
```

5. Edit the file for your particular use case. For example, if you use fluidd, uncomment the `fluidd_folder` line, comment out `mainsail_folder` and so on.

6. Save the file. If using nano, press `Ctrl-o` (o, not zero), verify the name of the file in the bottom left, and press `Enter`

![](img/nanoSave.png)

7. Exit your editor. In nano, press `Ctrl-x`. You should now be back in your shell.

![](img/shellAfterNano.png)

8. Next, we need to change the permissions on the file so that it can be executed easily. Type the following command, followed by `Enter`

```bash
chmod 755 autocommit.sh
```

9. Type `ls -la autocommit.sh` and verify the new permissions. Note the `x` for user, group, and other.

![](img/chmodDone.png)

### Initialize git

1. Right now our config files are not being tracked by git. Run the following command to initialize git:

```bash
git init
```

which results in something like this:

![](img/gitInit.png)

2. Recall earlier that we generated an access token and crafted a special URL to our repository. Now we need to tell git to use this URL. Using the URL we generated in the last step of our GitHub work, run the following command:

NOTE: Be sure to use YOUR URL and not type what you see below or you will be disappointed with the results =)

```bash
git remote add origin https://ghp_dKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX@github.com/EricZimmerman/Voron24Configs.git/
```

3. Verify things by running `git remote -v` which should look similar to this (your URLs will be different)

![](img/remoteVerify.png)

4. At this point we are ready to commit (at least manually)! Run the following command:

```bash
sh autocommit.sh
```

which should result in a lot of activity, ending with something like this:

![](img/initialCommit.png)

If you see something similar to what is shown in the image above, congratulations! You are now backed up to GitHub! Rerunning the previous command `sh autocommit.sh` should result in the following:  
  
![](img/noChanges.png)

However, if you change any file in Mainsail, via nano, etc. and then rerun the `sh autocommit.sh` command, you will see it found your changes and sent them upstream! Here is an example after I edited `printer.cfg`:

![](img/fileChangeCommit.png)

If you go to your GitHub repository, you can also see these changes by clicking on the commits, which is on the right side:

![](img/commitHistory.png)

You are now looking at all the commits to your repository. Clicking the top one shows all the files and their changes!

![](img/commitList.png)

Here you can see what actually changed. In my simple example, I just removed a blank line from the end of my `printer.cfg` file. Also of note is the exact versions of other software being used with these configs, which is shown in the commit message.

![](img/CommitChanges.png)

# Adding the backup to a macro

Now that things are working at the shell, lets create a macro that lets us back up on demand in Mainsail or Fluidd.

1. In your terminal window, use nano to create a new file in the location of your choosing under `~/klipper_config` named `config_backup.cfg`

2. Paste the following content into the editor:

```bash
[gcode_shell_command backup_cfg]
command: /home/pi/klipper_config/autocommit.sh
timeout: 30
verbose: True

[gcode_macro BACKUP_CFG]
description: Backs up config directory GitHub
gcode:
    RUN_SHELL_COMMAND CMD=backup_cfg
```

The first section is used for running our autocommit.sh file we created earlier, and the second is the macro that will show up in your interface. If you use a different user other than `pi`, update the path accordingly.

3. Save the file via `Ctrl-o` and exit via `Ctrl-x`

4. Edit `printer.cfg` and add an `[include path/to/config_backup.cfg]`, then save and exit. Adjust your path as necessary to wherever you created your cfg file.

5. Finally, execute the following to download the latest version of the `gcode_shell_command` script

```bash
wget -O /home/pi/klipper/klippy/extras/gcode_shell_command.py https://raw.githubusercontent.com/th33xitus/kiauh/master/resources/gcode_shell_command.py
```

You can optionally use `kiauh`, via option `4`, then option `8` to accomplish this. For more info on kiauh, go <a href="https://github.com/th33xitus/kiauhhttps://github.com/th33xitus/kiauh" target="_blank">here</a>

## Running things from Mainsail

1. Connect to your printer, then look in the **Macros** section for our newly minted macro, named `BACKUP CFG`

![](img/newMacro.png)

2. Click on the `BACKUP CFG` button and the console will report the output from the command:

![](img/macroConsole.png)

3. You can click this button manually any time you want to create a backup

### Editing files on GitHub and updating your printer

In some cases, it is useful to edit files on GitHub and then have those changes show up on your printer. Because we have set things up to both pull FROM GitHub and push TO GitHub, this is now possible.

Be warned though that if you edit files on your printer and do not back them up, then edit the same files on GitHub, and THEN do a backup, you may run into issues where git cannot automatically merge these changes together.

Do not worry too much about this though, because git is usually very good at merges, but if you get stuck, feel free to ask in Discord!

Enjoy your new backups and never worry again about your config files being unavailable!


## Automating via crontab (OPTIONAL)

If you want to maintain a backup via cron, visit <a href="https://crontab-generator.org/https://crontab-generator.org/" target="_blank">this</a> site and select the appropriate options.

Script to execute: `/home/pi/klipper_config/autocommit.sh`

This results in a crontab entry similar to:

```bash
0 */6 * * * /home/pi/klipper_config/autocommit.sh >/dev/null 2>&1
```

which can then be added to your crontab file via the `crontab -e` command by pasting it in at the bottom:

![](img/cronExample.png)
