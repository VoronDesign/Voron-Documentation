---
layout: default
title: VoronStats Privacy Policy
parent: Community Documentation
nav_order: 7
---

# VoronStats Privacy Policy

Last updated: 18 August 2026

VoronStats is a private analytics bot run by the VORON Design moderation team. It
works in the VORON Design Discord server and turns activity into aggregate
statistics. This page describes what it records.

## What we do not collect

The bot does not request the Message Content intent, so it never receives or stores
the text of your messages. It also does not collect:

- message text, attachments, embeds or links
- direct messages
- presence, online status or activity ("playing…") information
- voice or video audio
- email addresses, IP addresses or payment information

## What we collect

The bot records metadata about public activity in the server. Every record is tied to
your numeric Discord user ID. Message-related records also store the Discord ID of the
message, which identifies it without revealing its text.

### Activity metadata

| Data | What is stored |
|:-----|:---------------|
| Messages | Message ID, channel, timestamp, word count, and whether the message had attachments, embeds, or was a reply. Never the text. |
| Message lifecycle | Edits, deletions, pins and unpins. Event and timestamp only. |
| Reactions | Which emoji, added or removed, and when |
| Voice activity | Channel, event type (join, leave, mute, deafen, stream) and timestamp |
| Threads and forum posts | Creation, archival and participation, including the thread title |
| Invites | Invite code, who created it and who joined through it |

### Membership metadata

- Joins, leaves and role changes, with timestamps
- Moderation actions taken in the server (bans, unbans, kicks, timeouts), including
  which moderator performed them

### Display name cache

So that statistics show names instead of raw numeric IDs, we cache your username,
global display name, server nickname and avatar hash, refreshed when you change them.
This cache also records when you joined and when you were last seen active.

### Aggregates

Daily per-channel and per-user counts derived from the data above.

Bot accounts are not tracked. The bot runs only in the VORON Design server and ignores
events from anywhere else.

## Why we collect it

So the moderation team can see how the community is doing: which channels get used,
whether members stay, how much moderation work there is. We do not sell the data,
share it with anyone else, use it for advertising, or use it to profile people outside
the server.

## Who can access it

The database is private. Only the VORON Design administrators who run the bot can
reach it. Any statistics we publish are aggregate.

## Retention

Individual event records are deleted 24 months after they are recorded. That covers
messages, reactions, voice activity, membership events, role changes, moderation
actions, thread activity and invites.

Daily statistics are also kept per user for 24 months. After that we roll them up into
per-channel totals that no longer reference individual users, and we keep those
totals indefinitely.

The display name cache holds only your current values, overwritten whenever you change
them, alongside when you joined and when you were last seen active.

We keep encrypted database backups for 7 days. A deletion request is applied to the
live database straight away, and any copy of your records inside an existing backup
ages out within that week.

## Where the data is stored

The data leaves Discord. We store it in a private PostgreSQL database on a server run
by the VORON Design team and hosted with Amazon Web Services in the United States. The
database sits on an encrypted disk, and the backups are encrypted too. We do not send
the data to any outside analytics or advertising service.

## Your choices

You can ask for a copy of the data we hold about your user ID, or ask us to delete it,
by emailing [operations@vorondesign.com](mailto:operations@vorondesign.com) or by
contacting the VORON Design moderation team on Discord. Please include your Discord
user ID so we can find your records.

Deleting your records does not remove you from the server. Per-channel totals that no
longer identify you may be kept.

## Changes

If what we collect changes in a way that matters, we update this page and announce it
in the server.

## Contact

Questions about this policy, or about the data we hold about you, go to
[operations@vorondesign.com](mailto:operations@vorondesign.com).
