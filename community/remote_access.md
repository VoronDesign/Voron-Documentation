---
layout: default
title: Remote Access
parent: Community Documentation
nav_order: 9
---

## OctoEverywhere

[OctoEverywhere.com](https://octoeverywhere.com/?s=v) is a 3D printing community project to empower makers with powerful cloud tools, including:

- Free & unlimited full web portal remote access
- Free & unlimited AI print failure detection
- Free full frame rate webcam streaming
- Mobileraker (and other community apps) remote access integration.
- Real-time print notifications via Push Notifications, Discord, Telegram, SMS, email, and more
- Spoolman filament manager remote access
- Live streaming, shared access, and more

OctoEverywhere is easy to set up via the [Linux CLI](https://octoeverywhere.com/getstarted?target=cli) or [Kiauh,](https://github.com/dw-0/kiauh)  and creates a secure remote connection with no configuration. OctoEverywhere has a strong "no disclosure of private data" [privacy policy](https://octoeverywhere.com/privacy) and is also built with [user security as a top priority.](https://blog.octoeverywhere.com/lets-talk-security/)

## Tailscale

For advanced users, [Tailscale](https://tailscale.com/) is a great remote access solution.  It's an overlay network that creates a secure remote connection between your devices and has many other great features. Tailsacle must be installed on all of your devices and active. You can then access the full Klipper web portal from anywhere.

When properly set up, Tailscale can provide full remote access with webcam streaming, which is fully encrypted and secure.

## VPN

VPNs are the classic gold standard for remote access, but require more knowledge to set up and ensure security. [OpenVPN](https://openvpn.net/) is a commonly used VPN server that can be set up on any device running in your local LAN. You must port forward from your router to the OpenVPN server to allow remote access.

Once your VPN is configured on your phone, you will have a secure and private connection to devices on your LAN network, including your 3D printer.

## Discord

The [Mooncord](https://github.com/eliteSchwein/mooncord) Klipper plugin from GitHub user `eliteSchwein` is a bot that sends you status messages over Discord.

## Telegram

The [Moonraker-Telegram-Bot](https://github.com/nlef/moonraker-telegram-bot) for Klipper from GitHub user `nlef` that allows interaction with your 3D printer via Telegram.

## Warning - Do Not Port Forward Directly

**DO NOT** directly expose your 3D printer to the public Internet via port forwarding or other methods. This will put your 3D printer and LAN network at risk. Klipper/Moonraker/Fluidd/Mainsail are not designed to be hosted on the public Internet and thus are not secured for it.