# Research Notes and Curation Decisions

资料复核日期：2026-08-24。本文件只用于解释依据、审查规则或更新 Skill，不在普通扩写时加载。

## Scope

本 Skill 只面向开源 Krea 2 RAW/Turbo。Krea 托管产品属于另一套产品与参数体系，超出范围；其设置不得写入运行时规则或开源参数建议。

## Evidence Hierarchy

1. Krea 官方开源仓库、提示指南、expansion prompt 和技术报告：确定模型事实、提示形式、默认参数和能力边界。
2. 有完整提示词、参数、对照图或 A/B 过程的社区实验：发现可复现倾向，不升级为普遍事实。
3. 第三方教程、聚合站和无参数画廊：只作为线索；与官方或受控实测冲突时丢弃。

## Accepted Official Findings

### Krea 2 Prompting Guide

Source: https://github.com/krea-ai/krea-2/blob/main/docs/prompting.md

- 使用自然语言；长而具体的提示词通常效果更好。
- Turbo 可在约 1K 至 2K 工作。
- 请求可见文字时用双引号包围。
- 不把“长”机械等同于“好”；信息密度与内部一致性优先。

### Krea 2 Prompt Expander

Source: https://github.com/krea-ai/krea-2/blob/main/docs/expansion.txt

- 先识别主体、情绪、媒介、构图、光线和 grounded details，再输出一个连续段落。
- 忠实保留主体、动作、颜色和空间关系，不擅自添加物体。
- 已详细输入只轻度整理。
- 本 Skill 将情绪降为次要变量，把摄影因果、忠实度和反合成漂移提高到最高优先级。

### Krea 2 Technical Report

Source: https://www.krea.ai/blog/krea-2-technical-report

- 模型训练主要依赖内容丰富的长描述；短用户请求与训练条件之间存在分布差距。
- 官方 prompt expander 是独立组件，本地推理不能默认拥有同等扩写链路。
- 模型目标包含审美多样性与探索，不是单一写实默认分布。
- 官方 expander 对应写实请求加入轻量 photographic-medium bias，同时用约束检查抑制无依据内容。

### Krea 2 Open Repository

Source: https://github.com/krea-ai/krea-2

- RAW：52 steps、CFG 3.5、训练分辨率最高约 1K。
- Turbo：8 steps、CFG 0.0、mu 1.15、支持约 1K 至 2K。
- 官方建议在 RAW 上训练 LoRA，在 Turbo 上应用。

## Conditionally Accepted Community Findings

### Smartphone Realism A/B Tests

Source: https://www.reddit.com/r/StableDiffusion/comments/1v9gj77/nolora_krea_2_turbo_smartphone_realism_in_6ish/

- 明确 smartphone capture、描述背景内容，有助于压制默认影棚感和空洞 bokeh。
- 旧手机噪点、自动闪光、压缩、锐化和不完美取景可以构成设备证据，但不能成为所有手机提示词的模板。
- 9:16 和约 2MP 属于生成参数，不应无条件写进提示词。
- `ultrasharp`、高 HDR、高对比和高饱和经常增加 AI 味，不作为默认。

### Krea 2 Realism Tests

Sources:

- https://www.reddit.com/r/StableDiffusion/comments/1um9ici/krea_2_realism_test/
- https://www.reddit.com/r/StableDiffusion/comments/1ujid04/krea_2_prompt_adherence/

- 真实背景对象与前中后景关系比 `detailed background` 更有解释力。
- deep focus 必须与视角、光圈语义和环境亮度一致。
- 旧设备的噪点、色偏和有限动态范围可以作为可见证据。
- 不从少量 seed 推导某个 sampler 或 RAW/Turbo 必然更真实。

### Realism LoRA Guidance

Sources:

- https://www.reddit.com/r/StableDiffusion/comments/1ulonm8/krea2realismv2_is_finally_here/
- https://huggingface.co/RudySen/Krea2-realism-V2
- https://huggingface.co/inlineresearch/skin-lora-krea-2-raw

- 清晰自然语言段落优于 tag stacking 和神秘 trigger word。
- subtle pores、fine vellus hair 和 natural tonal variation 可确认材质描述方向，但只适用于画面尺度允许的近景。
- 不继承特定 LoRA 的强度、触发词、年龄偏置或人脸构图规则。

## Cross-Model Inspiration

Source: https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide

只迁移不依赖模型实现的通用原则：背景/场景 -> 主体 -> 关键细节 -> 约束；用可观察摄影语言描述自然写实；不要把相机参数当作精确物理模拟或质量咒语。它不是 Krea 2 模型事实的证据。

## Rejected Patterns

- `masterpiece, best quality, 8K, 16K, 32K`：没有建立摄影因果。
- `smartphone + DSLR + 35mm film + 85mm f/1.2`：媒介互相冲突。
- `perfect skin + visible pores + flawless face + gritty realism`：目标互相冲突。
- 默认追加 cinematic、HDR、volumetric light、teal-orange、rim light 和 lens flare：容易滑向广告或概念图。
- 每个人像都加毛孔、汗、灰尘，每张图都加 grain、motion blur 和 shallow DOF：把真实感变成固定滤镜。
- 大段摄影品牌与 EXIF 参数：稀释主体和空间关系，也不能保证严格光学模拟。
- 固定 negative prompt 垃圾桶：Turbo 官方 CFG 0，且官方 CLI 未提供独立字段。
- 把社区高赞、单张好图或 LoRA 演示当成可复现证据：缺少对照和参数时只算灵感。

## Observed Regression Fixture

2026-08-25 的本地案例要求“时尚、打扮精致的韩国籍女白领推门走出咖啡厅”。用户明确偏好未指定女性默认采用 20 岁、年轻、漂亮的成年女性，因此年轻和美貌 casting 本身不是错误。

实际失败来自另外三点：`fashion street photograph` 把时尚人物偷换成时尚摄影；人物正面居中且动作缺少门扇位置、躯干旋转和重心转移，结果像停下摆拍；商业美妆式光滑面部与柔化背景让漂亮滑向标准化 AI 广告脸。修正规则是保留年轻漂亮默认值，同时把媒介改回事件驱动的观察式街拍，用过渡态身体力学和偏轴遮挡破坏模特姿势，并用个体化年轻皮肤与自然面部起伏代替美容滤镜质感。

该单张结果不证明 Krea 2 的普遍规律，只作为扩写器的回归夹具；规则仍以提示词内部因果和后续重复测试为准。

## Update Rule

新增强制规则必须满足至少一个条件：官方明确说明；公开 A/B 对照；跨多个独立实测重复出现。否则只记录为实验项。更新参数建议前必须重新核对官方仓库。
