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

This can offer several benefits:

- Convenience: Monitor and control your prints from anywhere at any time.
- Efficiency: Adjust settings remotely during long prints or check your printer's camera to ensure everything is running smoothly.
- Collaboration: Share your printer's status or utilize notification plugins remotely.

While remote access is convenient, it also comes with risks:

- Unauthorized Control: A malicious actor could gain control of your printer, potentially causing damage or initiating unauthorized prints.
- Safety Hazards: A malicious actor could disable Klipper's safety features, such as heater controls, risking overheating or fire.
- Privacy: Exposing any device to the web has risks. Once a threat actor has access they will often exploit it to dig deeper into your network gaining access to your other personal devices, NAS, cameras, baby monitors, etc... Just in case this isn't bad enough they often leave behind malicious payloads they can exploit later to get back in should you block the original vulnerability.

We invite you to look at [this report](https://isc.sans.edu/diary/3D+Printers+in+The+Wild+What+Can+Go+Wrong/24044) for an example of how can someone maliciously use this access.


## Securing Your Remote Access

To securely access your Klipper 3D printer remotely, consider one of these two options:

1. The easiest option is by running [Obico](https://www.obico.io/) or [OctoEverywhere](https://octoeverywhere.com/) that are dedicated solutions to monitor and access your printer interface outside of you home network.
2. The other solution, that is more flexible, is by running a VPN. A VPN such as [Tailscale](https://tailscale.com/), [Wireguard](https://www.wireguard.com/) or [ZeroTier](https://www.zerotier.com/) ensures that your printer is not directly exposed to the internet but through an encrypted tunnel that you are the only one to have access to. To proceed with a VPN installation, you can follow [this dedicated guide](../../community/howto/jade/RemoteAccessToYourVoron.md).


## Additional ressources

- [Mainsail documentation](https://docs.mainsail.xyz/overview/quicktips/remote-access) also has a good coverage of this topic
