#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const skillDir = path.resolve(scriptDir, "..");

const REQUIRED_FILES = [
  "SKILL.md",
  "agents/openai.yaml",
  "references/model-settings.md",
  "references/realism-playbook.md",
  "references/research-notes.md",
  "scripts/self-check.mjs",
];

const PATTERNS = {
  capture: /\b(photo|photograph|snapshot|camera|smartphone|documentary|film)\b/i,
  composition: /\b(close-up|medium shot|wide-angle|eye-level|low-angle|high-angle|waist-up|full-body|foreground|midground|background|frame|view)\b/i,
  lighting: /\b(daylight|window light|overcast|sunlight|flash|fluorescent|practical light|streetlight|neon|shadow|underexpos|backlight|diffused light)\b/i,
  environment: /\b(background|midground|foreground|street|room|workshop|kitchen|station|storefront|window|road|wall|floor|table|weather)\b/i,
  matter: /\b(texture|pores|vellus|wrinkle|worn|scratch|dust|moisture|wet|grain|noise|compression|reflection|contact shadow|fabric|cotton|folds?|creases?|seams?|metal|glass|wood)\b/i,
  restraint: /\b(not staged|unposed|ordinary|observed|no beauty retouching|not an illustration|not a rendering|no cgi|never waxy|natural color|restrained contrast)\b/i,
  cargoCult: /\b(masterpiece|best quality|8k|16k|32k|insanely detailed|award[- ]winning|unreal engine|octane render|ray tracing|perfect skin|flawless face)\b/i,
  shallow: /\b(shallow depth of field|strong bokeh|background blur|f\/1\.[0-8])\b/i,
  deep: /\b(deep focus|deep depth of field|everything sharp|whole frame sharp|sharp from front to back)\b/i,
  redundantRealism: /\b(photorealistic|hyperrealistic|ultra-realistic|lifelike|realistic)\s+(?:candid\s+|commercial\s+)?(?:documentary\s+|product\s+)?photograph\b/i,
  hostedControl: /\b(krea 2 medium|krea 2 large|creativity (?:raw|low|medium|high)|intensity slider|complexity slider|movement slider)\b/i,
};

const CAPTURE_MEDIA = {
  smartphone: /\b(smartphone|phone camera|mobile phone (?:photo|snapshot)|phone photograph)\b/i,
  digitalCamera: /\b(DSLR|mirrorless|digital camera|documentary digital)\b/i,
  analogFilm: /\b(35mm film|medium format film|analog film|film photograph|disposable-camera)\b/i,
  rendered: /\b(3D render|cinematic render|Octane render|Unreal Engine)\b/i,
};

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function lintPrompt(prompt) {
  const categories = {
    capture: PATTERNS.capture.test(prompt),
    composition: PATTERNS.composition.test(prompt),
    lighting: PATTERNS.lighting.test(prompt),
    environment: PATTERNS.environment.test(prompt),
    matter: PATTERNS.matter.test(prompt),
    restraint: PATTERNS.restraint.test(prompt),
  };

  const issues = [];
  const warnings = [];
  const words = wordCount(prompt);
  const captureModes = Object.entries(CAPTURE_MEDIA)
    .filter(([, pattern]) => pattern.test(prompt))
    .map(([name]) => name);

  for (const [name, present] of Object.entries(categories)) {
    if (!present) issues.push(`missing-${name}`);
  }

  if (PATTERNS.cargoCult.test(prompt)) issues.push("cargo-cult-quality-language");
  if (PATTERNS.redundantRealism.test(prompt)) issues.push("redundant-realism-medium");
  if (PATTERNS.hostedControl.test(prompt)) issues.push("hosted-krea-setting-out-of-scope");
  if (PATTERNS.shallow.test(prompt) && PATTERNS.deep.test(prompt)) {
    issues.push("contradictory-depth-of-field");
  }
  if (/\b(midnight|night scene|at night)\b/i.test(prompt) && /\b(golden hour|midday sunlight)\b/i.test(prompt)) {
    issues.push("contradictory-time-and-light");
  }
  if (/\bovercast\b/i.test(prompt) && /\b(hard midday shadows?|hard noon shadows?|razor-sharp sun shadows?)\b/i.test(prompt)) {
    issues.push("contradictory-weather-and-shadow");
  }
  if (captureModes.length > 1) {
    issues.push("mixed-capture-media");
  }
  if (words < 45) warnings.push("prompt-may-be-under-specified");
  if (words > 300) warnings.push("prompt-may-be-over-specified");

  const passedCategories = Object.values(categories).filter(Boolean).length;
  let score = Math.round((passedCategories / Object.keys(categories).length) * 100);
  score -= issues.filter((item) => item.startsWith("contradictory") || item === "mixed-capture-media").length * 20;
  if (issues.includes("cargo-cult-quality-language")) score -= 20;
  if (issues.includes("redundant-realism-medium")) score -= 10;
  if (issues.includes("hosted-krea-setting-out-of-scope")) score -= 20;
  score = Math.max(0, Math.min(100, score));

  return {
    ok: issues.length === 0 && score >= 80,
    score,
    word_count: words,
    capture_modes: captureModes,
    categories,
    issues,
    warnings,
  };
}

function runInstallCheck() {
  const missingFiles = REQUIRED_FILES.filter((relativePath) => !fs.existsSync(path.join(skillDir, relativePath)));

  const skillText = fs.readFileSync(path.join(skillDir, "SKILL.md"), "utf8");
  const settingsPath = path.join(skillDir, "references/model-settings.md");
  const settingsText = fs.existsSync(settingsPath) ? fs.readFileSync(settingsPath, "utf8") : "";

  const goodPrompt = `The scene is captured as a candid smartphone photograph, not an illustration or rendering. A tired baker carries two trays through a narrow neighborhood bakery just after sunrise, looking toward the counter rather than the camera. The handheld eye-level frame is slightly tilted; flour sacks, a metal rack and the open storefront remain recognizable in the background. Cool window daylight mixes with one warm fluorescent ceiling fixture, leaving natural uneven shadows. Fine flour dust clings to the worn cotton apron, the trays show small scratches, and the darker corners contain mild phone-sensor noise. The moment feels ordinary and unposed, with no beauty retouching, plastic surfaces or dramatic commercial color grading.`;
  const cleanProductPrompt = `A commercial product photograph of a new black mechanical keyboard resting flat on a walnut table, framed in a three-quarter view from slightly above. A large diffused window at the upper left creates soft keycap shadows and a clear contact shadow beneath the frame. The clean matte keys show restrained variation in sheen, the braided cable bends under its own weight, and the wood grain remains visible in the background. Neutral white balance, controlled reflections and realistic dynamic range, with no CGI surfaces or glowing edges.`;
  const badPrompt = "masterpiece, best quality, 16K, perfect skin, cinematic, Unreal Engine";
  const mixedMediaPrompt = "A smartphone snapshot shot on 35mm film with a DSLR.";
  const depthConflictPrompt = "A documentary photograph with shallow depth of field and deep focus, sharp from front to back.";
  const timeConflictPrompt = "A documentary photograph at midnight under golden hour sunlight.";
  const weatherConflictPrompt = "A documentary photograph in soft overcast daylight with razor-sharp sun shadows.";
  const redundantMediumPrompt = "A photorealistic candid documentary photograph of a commuter.";
  const hostedSettingPrompt = "A product photograph using Krea 2 Large with creativity high.";

  const goodResult = lintPrompt(goodPrompt);
  const cleanProductResult = lintPrompt(cleanProductPrompt);
  const badResult = lintPrompt(badPrompt);
  const mixedMediaResult = lintPrompt(mixedMediaPrompt);
  const depthConflictResult = lintPrompt(depthConflictPrompt);
  const timeConflictResult = lintPrompt(timeConflictPrompt);
  const weatherConflictResult = lintPrompt(weatherConflictPrompt);
  const redundantMediumResult = lintPrompt(redundantMediumPrompt);
  const hostedSettingResult = lintPrompt(hostedSettingPrompt);
  const tests = {
    required_files_present: missingFiles.length === 0,
    documentary_fixture_passes: goodResult.ok,
    clean_product_fixture_passes: cleanProductResult.ok,
    cargo_cult_fixture_fails: !badResult.ok && badResult.issues.includes("cargo-cult-quality-language"),
    mixed_media_fixture_fails: mixedMediaResult.issues.includes("mixed-capture-media"),
    depth_conflict_fixture_fails: depthConflictResult.issues.includes("contradictory-depth-of-field"),
    time_conflict_fixture_fails: timeConflictResult.issues.includes("contradictory-time-and-light"),
    weather_conflict_fixture_fails: weatherConflictResult.issues.includes("contradictory-weather-and-shadow"),
    redundant_medium_fixture_fails: redundantMediumResult.issues.includes("redundant-realism-medium"),
    hosted_setting_fixture_fails: hostedSettingResult.issues.includes("hosted-krea-setting-out-of-scope"),
    output_contract_declared: /英文自然语言提示词[^\n]*`text`\s*代码块/.test(skillText),
    raw_settings_verified: /Steps:\s*`52`/.test(settingsText) && /CFG:\s*`3\.5`/.test(settingsText),
    turbo_settings_verified: /Steps:\s*`8`/.test(settingsText) && /CFG:\s*`0\.0`/.test(settingsText) && /Mu:\s*`1\.15`/.test(settingsText),
    hosted_controls_excluded: !/\b(creativity|intensity|complexity|movement)\b/i.test(settingsText),
  };

  const ok = Object.values(tests).every(Boolean);
  return {
    ok,
    mode: "install-self-check",
    skill_dir: skillDir,
    tests,
    missing_files: missingFiles,
  };
}

function readPromptFromArgs(args) {
  const fileIndex = args.indexOf("--file");
  if (fileIndex >= 0) {
    const filePath = args[fileIndex + 1];
    if (!filePath) throw new Error("--file requires a path");
    return fs.readFileSync(path.resolve(filePath), "utf8");
  }

  const textIndex = args.indexOf("--text");
  if (textIndex >= 0) {
    const value = args[textIndex + 1];
    if (!value) throw new Error("--text requires a prompt string");
    return value;
  }

  return null;
}

try {
  const prompt = readPromptFromArgs(process.argv.slice(2));
  const result = prompt === null ? runInstallCheck() : { mode: "prompt-lint", ...lintPrompt(prompt) };
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  process.exitCode = result.ok ? 0 : 1;
} catch (error) {
  process.stderr.write(`${JSON.stringify({ ok: false, error: error.message }, null, 2)}\n`);
  process.exitCode = 2;
}
