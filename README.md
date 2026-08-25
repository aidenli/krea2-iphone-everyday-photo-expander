# Krea 2 iPhone Everyday Photo Expander

A Codex Skill that turns short or uneven ideas into faithful prompts for static everyday photos that a recent iPhone could realistically capture with the open Krea 2 RAW and Turbo checkpoints.

It covers everyday candids, street observation, friend-shot photos, selfies, mirror photos, outfit and cafe UGC, gatherings, travel, food, and pet records. It does not cover professional-camera photography, commercial ads, studio packshots, architecture photography, film simulation, video frames, illustration, 3D, or hosted Krea 2 controls.

## Core Behavior

- Makes the recent-iPhone capture system explicit in every prompt.
- Defaults to the rear 1x Main camera in Photo mode without applied Portrait blur.
- Routes separately between everyday candid, street observation, and static UGC.
- Uses a flexible parts library for capture relationship, camera, distance, composition, timing, light, and phone response.
- Preserves beautiful subjects and polished styling without turning the image into an ad campaign.
- Returns one paste-ready English prompt in a `text` code block by default.

## Install

Copy this directory to your Codex skills folder as `krea2-iphone-everyday-photo-expander`.

## Use

```text
$krea2-iphone-everyday-photo-expander A well-dressed young Korean office worker pushes open a cafe door and steps onto the sidewalk.
```

The operating contract is in [SKILL.md](SKILL.md). Complex iPhone capture guidance is in [references/iphone-photography-playbook.md](references/iphone-photography-playbook.md), while verified RAW/Turbo settings are in [references/model-settings.md](references/model-settings.md).
