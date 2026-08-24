# Krea 2 Photoreal Prompt Expander

A Codex Skill that turns a short idea into a natural-language prompt for Krea 2 RAW or Turbo, with one hard goal: generate images that read as real photographs rather than polished AI renders.

It targets people, smartphone snapshots, documentary scenes, environmental portraits, product photography, interiors, low-light images, and practical-fantasy photography. It does not generate images itself.

## What It Enforces

- One plausible capture mode per image rather than mixed camera jargon.
- Physically consistent lighting, depth of field, materials, movement, and contact shadows.
- Concrete foreground, midground, and background evidence instead of empty bokeh.
- Natural human texture and ordinary behavior without default beauty retouching.
- Rejection of cargo-cult terms such as `masterpiece`, `16K`, `perfect skin`, and `Unreal Engine`.

## Install

Copy this directory to your Codex skills folder, then run the first-run check:

```powershell
node scripts/self-check.mjs
```

## Use

```text
$krea2-photoreal-prompt-expander A delivery rider eating instant noodles outside a convenience store after a night shift, as if a passerby caught the moment on a phone.
```

The Skill returns one paste-ready English prompt by default. Its detailed operating rules are in [SKILL.md](SKILL.md); evidence curation and source decisions are documented in [references/research-notes.md](references/research-notes.md).

## Validation

```powershell
node scripts/self-check.mjs
```

The check verifies the package layout and confirms that a causally grounded photography prompt passes while a contradictory quality-word stack fails.

