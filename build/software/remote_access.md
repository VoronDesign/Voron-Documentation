---
layout: default
title: Remote access your printer
parent: The Build
nav_exclude: false
---

# Securely Accessing Your Klipper 3D Printer Remotely: Best Practices and Risks

With the increasing popularity of Voron printers using Klipper and its WebUIs (Mainsail, Fluidd, etc.), many users enjoy the convenience of remote access. However, this practice can expose your printer and your home to significant risks if not properly secured. It's important to realize that a "secret" URL does not guarantee safety. Automated bots continually scan the internet for such open devices, often discovering them within less than 30 minutes.

This article aims to inform Klipper 3D printer users about these risks and guide them in securing remote access.


## Why Remote Access?

First thing that you need to ask yourself is: do you really need remote access to your Klipper 3D printer?

This can offers several benefits:

- Convenience: Monitor and control your prints from anywhere at any time.
- Efficiency: Adjust settings remotely during long prints or check your printer's camera to ensure everything is running smoothly.
- Collaboration: Share your printer's status or utilize notification plugins remotely.

While remote access is convenient, it also comes with risks:

- Unauthorized Control: Hackers could gain control of your printer, potentially causing damage or initiating unauthorized prints.
- Safety Hazards: A malicious actor could disable Klipper's safety features, such as heater controls, risking overheating or fire.
- Privacy Breaches: Accessing your 3D printer also means accessing a device that is in your private home network. This is like letting someone connect to your private WiFi and is an entry point that could lead to data theft from other machines of the network (like your personal computer or your local NAS if you have one).

We invite you to look at [this report](https://isc.sans.edu/diary/3D+Printers+in+The+Wild+What+Can+Go+Wrong/24044) for an example of how can someone maliciously use this access.


## Securing Your Remote Access

To securely access your Klipper 3D printer remotely, consider these options:

1. First one is by using a VPN for optimal security. A VPN like [Tailscale](https://tailscale.com/), [Wireguard](https://www.wireguard.com/) or [ZeroTier](https://www.zerotier.com/) ensures that your printer is not directly exposed to the internet but through an encrypted tunnel that you are the only one to have access to. To proceed with a VPN installation, you can follow [this dedicated guide](../../community/howto/jade/RemoteAccessToYourVoron.md).
2. Second option is by running [OctoEverywhere](https://octoeverywhere.com/) that is a dedicated solution to access your printer interface outside of you home network.
3. Alternatively, if a VPN is not an option, the following methods are more complex than setting up a VPN and should be considered only if you're comfortable with the technical aspects:

   - **Do not just forward ports from your ISP router directly to your printer.** Instead, use a reverse proxy to handle remote connections securely and incorporate credentials.
   - Limit SSH access to your printer, permitting only the web interface through the reverse proxy. Distant SSH access is not needed and a significant security risk.
   - Regularly update your printer’s OS, software, and firmware.
   - Use solutions like [fail2ban](https://github.com/fail2ban/fail2ban) to monitor the access and ban suspect connections.
   - If possible, isolate your printer on a separate network segment to contain any potential breaches.


## Additional ressources

- [Mainsail documentation](https://docs.mainsail.xyz/overview/quicktips/remote-access) also has a good coverage of this topic
