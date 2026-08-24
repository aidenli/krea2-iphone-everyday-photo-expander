# Krea 2 Photoreal Prompt Expander

A Codex Skill that converts short or uneven ideas into faithful, physically coherent photography prompts for the open Krea 2 RAW and Turbo checkpoints.

It targets people, smartphone snapshots, documentary scenes, products, interiors, architecture, food, low-light scenes, action, and practical-effects fantasy. It does not generate images and does not cover hosted Krea 2 product controls.

## Core Behavior

- Preserves explicit subjects, counts, identities, actions, colors, spatial relationships, text, and exclusions.
- Uses one plausible capture mode and one causally coherent lighting setup.
- Adds only a few scale-appropriate material or human details.
- Rejects mixed camera media, contradictory optics, cargo-cult quality words, and default beauty retouching.
- Returns one paste-ready English prompt in a `text` code block by default.

## Install

Copy this directory to your Codex skills folder, then run:

```powershell
node scripts/self-check.mjs
```

## Use

```text
$krea2-photoreal-prompt-expander A delivery rider eating instant noodles outside a convenience store after a night shift, caught casually by a passerby on a phone.
```

The operating contract is in [SKILL.md](SKILL.md). Detailed scene guidance is loaded selectively from [references/realism-playbook.md](references/realism-playbook.md), while verified RAW/Turbo settings live in [references/model-settings.md](references/model-settings.md).

## Validate a Prompt

```powershell
node scripts/self-check.mjs --file prompt.txt
```

The linter catches structural contradictions and known cargo-cult patterns. It does not replace semantic review.

