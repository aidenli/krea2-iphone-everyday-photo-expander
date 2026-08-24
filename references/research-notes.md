# Research Notes and Curation Decisions

检索日期：2026-08-24。以下资料只用于形成规则，不应在每次扩写时全部加载。

## Evidence Hierarchy

1. Krea 官方仓库、官方技术报告和官方 prompt expander：用于确定模型训练分布、提示形式、RAW/Turbo 默认参数和不可违背的模型事实。
2. 有完整提示词、参数、对照图或 A/B 过程的社区实验：用于发现可复现倾向，但不升级为普遍事实。
3. 第三方教程和聚合站：只作为线索；若与官方或实测冲突则丢弃。

## Accepted Findings

### Official Krea 2 Prompting Guide

Source: https://github.com/krea-ai/krea-2/blob/main/docs/prompting.md

- 接受：自然语言优先；长而具体的提示词通常更好；Turbo 可在 2K 工作。
- 接受：可见文字用双引号包围。
- 不接受任何“长就必然更好”的机械结论。信息密度和内部一致性优先于长度。

### Official Krea 2 Prompt Expander

Source: https://github.com/krea-ai/krea-2/blob/main/docs/expansion.txt

- 接受：先识别主体、情绪、媒介、构图、光线和 grounded details，再输出一个连续段落。
- 接受：忠实保留原始主体、动作、颜色和空间关系，不擅自添加物体。
- 接受：用户提示已经详细时只轻度整理。
- 改进：本 Skill 将“情绪”降为次要变量，把摄影因果和反合成约束提到最高优先级。

### Official Krea 2 Technical Report

Source: https://www.krea.ai/blog/krea-2-technical-report

- 接受：训练主要依赖内容丰富的长描述；短用户请求与模型训练条件之间存在分布差距。
- 接受：Krea 的产品级 prompt expander 是独立组件，本地直接推理不能默认拥有同等扩写链路。
- 接受：模型目标包含审美多样性和探索，不是单一写实默认分布。

### Official OpenAI Image Prompting Guide

Source: https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide

- 接受并迁移到 Krea 2：背景/场景 -> 主体 -> 关键细节 -> 约束的稳定顺序。
- 接受：自然写实应像真实时刻被捕获；使用摄影语言、真实皮肤和材质，避免影棚式抛光。
- 接受：相机参数主要控制高层观感和构图，不应被当作精确物理模拟或质量咒语。

### Community Smartphone Realism A/B Test

Source: https://www.reddit.com/r/StableDiffusion/comments/1v9gj77/nolora_krea_2_turbo_smartphone_realism_in_6ish/

- 接受：明确 smartphone capture，而不是只写 `photo`；描述背景内容有助于压制默认 bokeh。
- 接受：9:16 和约 2MP 对“手机照片”是合理的工作流变量，但它们属于生成参数，不应被 Skill 无条件写进提示词。
- 部分接受：旧手机噪点、自动闪光、压缩、锐化和不完美取景可以制造可信的设备证据。
- 拒绝作为默认：`ultrasharp`、高 HDR、高对比、高饱和。它们只能描述特定现代手机处理风格，而且经常增加 AI 味。
- 拒绝作为通用负面词：`professional photo`、`DSLR photo`、`film photo`。这些只适用于手机模式，不能污染其他摄影类型。

### Community Krea 2 Realism Tests

Sources:

- https://www.reddit.com/r/StableDiffusion/comments/1um9ici/krea_2_realism_test/
- https://www.reddit.com/r/StableDiffusion/comments/1ujid04/krea_2_prompt_adherence/

- 接受：真实背景对象和前中后景关系，比 `detailed background` 更有效。
- 接受：deep focus 需要与视角、光圈语义和环境亮度一致。
- 接受：旧手机的传感器噪点、色偏和有限动态范围是可见证据。
- 拒绝：把长负面提示词当成任何 Krea 2 工作流都适用的固定配方。
- 拒绝：从少量 seed 推导某个 sampler 或 RAW/Turbo 必然更真实。

### Community Realism LoRA Author Guidance

Sources:

- https://www.reddit.com/r/StableDiffusion/comments/1ulonm8/krea2realismv2_is_finally_here/
- https://huggingface.co/RudySen/Krea2-realism-V2

- 接受：清晰自然语言段落优于 tag stacking 和神秘 trigger word。
- 接受：4-5 句是有用的起点，不是硬性长度。
- 限制：这些经验来自特定 realism LoRA，不可把 LoRA 强度、触发词或人脸偏置规则写成基础 Krea 2 的普遍事实。

### Physical Skin Evidence

Source: https://huggingface.co/inlineresearch/skin-lora-krea-2-raw

- 接受：subtle pores、fine vellus hair、natural tonal variation 和未磨皮细节比 `perfect skin` 更可信。
- 重要修正：皮肤细节应随构图尺度变化；远景人物不应要求毛孔。不要过量堆皮肤缺陷。
- 限制：这是专用 LoRA 的模型卡，只用来确认材质描述方向，不继承其年龄偏置或使用设置。

## Rejected Internet Patterns

- `masterpiece, best quality, 8K, 16K, 32K`：没有建立任何摄影因果。
- 同时写 `smartphone + DSLR + 35mm film + 85mm f/1.2`：媒介互相冲突。
- `perfect skin + visible pores + flawless face + gritty realism`：目标互相冲突。
- `cinematic`、`HDR`、`volumetric light`、`teal and orange` 全部默认追加：会把现实照片推向广告或概念图。
- 大段摄影品牌和 EXIF 参数：模型不会做严格光学模拟，且会稀释主体与空间关系。
- 固定负面提示词模板：Turbo 官方默认 CFG 0；负面条件是否有效依赖具体工作流。
- 把社区高赞、单张好图或 LoRA 演示当成可复现证据：没有对照和参数时只算灵感。

## Update Rule

更新本 Skill 时，新增互联网规则必须满足至少一个条件：官方明确说明；公开 A/B 对照；跨多个独立实测重复出现。否则记录为实验项，不写入强制流程。

