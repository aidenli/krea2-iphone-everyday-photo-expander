# Open Krea 2 RAW/Turbo Settings

资料复核日期：2026-08-24。只在用户询问开源 Krea 2 设置、LoRA、分辨率或 negative conditioning 时读取。

本 Skill 不覆盖 Krea 托管产品、网页控制项或其 API 参数；不要把两套设置混用。

## Official RAW Recipe

来源：https://github.com/krea-ai/krea-2

- Checkpoint: `oss_raw`
- Steps: `52`
- CFG: `3.5`
- 训练分辨率最高约 `1K`
- 定位：未蒸馏基础模型，适合微调、后训练研究和 LoRA 训练

RAW 不是“必然更写实”的质量档位。它更可塑，但需要完整采样和 classifier-free guidance。

## Official Turbo Recipe

来源：https://github.com/krea-ai/krea-2

- Checkpoint: `oss_turbo`
- Steps: `8`
- CFG: `0.0`
- Mu: `1.15`
- 推荐示例尺寸：`2048 x 2048`
- 支持约 `1K` 至 `2K`，非 16 倍数尺寸会向上填充
- 定位：8 步蒸馏模型，用于快速高质量推理

不要把 RAW 的 `CFG 3.5` 套到 Turbo，也不要因为更多 steps 看起来“更高级”就擅自提高 Turbo steps。

## LoRA

官方建议：在 RAW 上训练 LoRA，在 Turbo 上应用和推理。不要自动替用户添加 LoRA 名称、权重或触发词；只有用户提供具体 LoRA 与工作流时才讨论。

## Prompting Facts

来源：https://github.com/krea-ai/krea-2/blob/main/docs/prompting.md

- 优先使用自然语言。
- 长而具体的提示词通常表现更好，但信息密度和内部一致性比长度重要。
- 可见文字用双引号包围。
- Turbo 可生成最高约 2K 图像。

## Negative Conditioning

官方 CLI 没有公开独立 negative prompt 参数，Turbo 官方配方又使用 `CFG 0.0`。因此默认不要输出独立负面提示词字段；必要冲突优先改写成可见的正向状态并融入主提示词。

若用户明确使用的第三方节点或封装提供 negative conditioning 字段，可按该实现的实际语义输出，但必须明确这是第三方工作流能力，不是 Krea 2 官方通用配方。普通提示词不默认追加通用负面词清单。
