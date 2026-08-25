# Krea 2 Photography Prompt Skills

A multi-skill repository for Krea 2 photography prompt writing. The root [SKILL.md](SKILL.md) is only an index and router. Every concrete photography skill is one self-contained, clearly named document under `skills/`.

## Skills

| Skill | Purpose | Document |
|---|---|---|
| `iphone-everyday-photo` | Static everyday candids, street observation, selfies, mirror photos, and photo-based UGC constrained by recent iPhone capture behavior; device labels are omitted by default | [skills/iphone-everyday-photo.md](skills/iphone-everyday-photo.md) |

## Structure

```text
SKILL.md                         # index and router only
skills/
  iphone-everyday-photo.md      # one complete skill in one document
references/
  model-settings.md             # shared Krea 2 RAW/Turbo facts
```

## Install

Copy this repository to the Codex skills folder as `krea2-photography-prompt-skills`.

## Use

```text
$krea2-photography-prompt-skills A well-dressed young Korean office worker pushes open a cafe door and steps onto the sidewalk in an everyday candid.
```

When another capture type is added, create another self-contained Markdown document under `skills/` and add one routing row to the root index.
