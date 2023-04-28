---
layout: default
title: Remote Access to Your Voron
nav_exclude: true
---

# Remote Access to Your Voron & You
This guide will go over the steps necessary to get secure remote access to your printer from anywhere. 
There are many other alternative methods, such as OpenVPN, WireGuard, and Tailscale - all with their own pros and cons.

### Prerequisites: 

* SSH access to your Pi & basic comfort with Linux CLI (mostly copy-pastable!) 
* An email

## Getting Started with Tailscale
1. [Create an account](https://login.tailscale.com/start) with Tailscale.
2. Install Tailscale on your Pi - the way to do this depends on your device. The commands below will cover Raspbian Bullseye-based images, but if you're running something else, check Tailscale's instructions, [here](https://tailscale.com/download).
```
sudo apt-get install apt-transport-https
curl -fsSL https://pkgs.tailscale.com/stable/raspbian/bullseye.noarmor.gpg | sudo tee /usr/share/keyrings/tailscale-archive-keyring.gpg > /dev/null
curl -fsSL https://pkgs.tailscale.com/stable/raspbian/bullseye.tailscale-keyring.list | sudo tee /etc/apt/sources.list.d/tailscale.list
sudo apt-get update
sudo apt-get install tailscale
sudo tailscale up
```
3. Copy the link from running `sudo tailscale up`, approve the device, and you should now be able to see the device in your [admin console](https://login.tailscale.com/admin/machines)! You can also acquire the Tailscale IP using the command `tailscale ip -4`
    ![](images/RemoteAccessToYourVoron/Tailscale/step3-1.png)
    ![](images/RemoteAccessToYourVoron/Tailscale/step3-2.png)
4. Install Tailscale on your client device(s), such as your laptop or phone. Once again, see the instructions](https://tailscale.com/download) provided by Tailscale.
5. Once you have the client and logged in on two devices, if you navigate (or SSH) to the VPN IP address, you should be able to access the web interface!
    ![](images/RemoteAccessToYourVoron/Tailscale/step5.png)

## Getting Started with ZeroTier
A (very quick) video equivalent of these steps is available [on YouTube](https://www.youtube.com/watch?v=T6L9Kx5R8BE).
1. Create an account on the ZeroTier website, you can do so [here](https://my.zerotier.com/login).
2. Download & install the ZeroTier client on your client devices (phone, laptop - any device you want remote access to your printer from). You can find links & information about all the available clients [here](https://www.zerotier.com/download/).
3. In the [ZeroTier admin console](https://my.zerotier.com/network), select "Create a Network". Copy down the network ID. If you wish, you can name the network. In this instance, the network ID is `8286ac0e475621c6`. 
    ![](images/RemoteAccessToYourVoron/ZeroTier/step3.png)
4. Select the ZeroTier tray icon (may be different on other clients!), then Join a Network. Enter the network ID we obtained in the last step, and hit enter.   
    ![](images/RemoteAccessToYourVoron/ZeroTier/step4-1.png) ![](images/RemoteAccessToYourVoron/ZeroTier/step4-2.png)
5. In the ZeroTier admin console, click on your network, then scroll towards the bottom. You will see a new device there that needs authentication. Click the authentication checkbox near the left-hand side. 
    ![](images/RemoteAccessToYourVoron/ZeroTier/step5.png)
6. Switch to your Pi SSH session and run the following commands... 
   1. To install the ZeroTier client on your Pi, run the command: `curl -s https://install.zerotier.com | sudo bash` 
    ![](images/RemoteAccessToYourVoron/ZeroTier/step6-1.png)
   2. If prompted, enter your sudo password & say yes to installing packages. 
   3. Once complete, if the installation was successful you should get an output alone the lines of: `Success! You are ZeroTier address [ YOURADDRESS ].` 
   4. To join the network, run the following command: `sudo zerotier-cli join YOUR_NETWORK_ID` 
    ![](images/RemoteAccessToYourVoron/ZeroTier/step6-2.png)
7. As we did in step 5, authenticate the new, second client that needs authentication. You may want to add a name, in case you need to find the IP again in the future. Wait a few moments, and you should now be able to see the IP in the admin console (and in `ip addr` on SSH)
    ![](images/RemoteAccessToYourVoron/ZeroTier/step7.png)
8. Copy down the Pi's IP address, toss it in your web browser (works for SSH, too!), and you should have remote access to your printer! 
    ![](images/RemoteAccessToYourVoron/ZeroTier/step8.png)


