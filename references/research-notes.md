# Research Notes and Curation Decisions

资料复核日期：2026-08-25。本文件只用于解释依据、审查规则或更新 Skill。

## Scope

本 Skill 只面向开源 Krea 2 RAW/Turbo，并只扩写现实中的近期 iPhone 静态生活照片。Krea 托管产品、专业相机摄影和视频超出范围。

## Evidence Hierarchy

1. Krea 官方仓库、提示指南、expansion prompt 和技术报告：确定模型与提示形式。
2. Apple 官方 iPhone User Guide：确定现实中存在的相机、模式和条件行为。
3. 有完整提示词、参数和对照过程的社区实验：发现可能倾向，不升级为设备或模型事实。

## Krea 2 Official Findings

Sources:

- https://github.com/krea-ai/krea-2
- https://github.com/krea-ai/krea-2/blob/main/docs/prompting.md
- https://github.com/krea-ai/krea-2/blob/main/docs/expansion.txt
- https://www.krea.ai/blog/krea-2-technical-report

- 使用自然语言；长而具体通常优于极短标签，但信息密度和内部一致性比长度重要。
- 官方扩写器强调主体、媒介、构图、光线和 grounded details，并要求保留主体、动作、颜色和空间关系。
- 训练中的丰富长描述与短用户请求存在分布差距，因此本地开源工作流需要独立扩写层。
- RAW/Turbo 参数只记录在 `model-settings.md`，不得写进普通图像提示词。

## Apple Official Findings

### Camera Modes and Zoom

Source: https://support.apple.com/guide/iphone/camera-basics-iph263472f78/26/ios/26

- Camera 默认可使用 Photo，并按机型提供不同相机和缩放选项。
- 因不同机型能力不同，规则使用 `recent iPhone` 和功能名称，不默认编造具体型号。

### Main Camera

Source: https://support.apple.com/en-gb/guide/iphone/iph72395b28f/ios

- 不同近期机型的 1x Main camera 默认等效视角并不完全一致。
- 因此默认写 `rear 1x Main camera`，不统一硬编码 24mm 或 26mm。

### Portrait

Source: https://support.apple.com/en-mide/guide/iphone/iphd7d3a91a2/ios

- Portrait 使用深度信息产生前后景虚化，并可应用 Portrait Lighting。
- 默认 Photo mode 不应被扩写成明显 Portrait blur；只有用户要求时使用。

### Night Mode

Source: https://support.apple.com/guide/iphone/take-night-mode-photos-iph1a3c5b4c3/26/ios/26

- 支持的机型会在低光中自动启用 Night mode，并自动决定曝光时间。
- 手持移动主体不应同时具有长时间多帧合成和绝对冻结的结果。

### Burst

Source: https://support.apple.com/guide/iphone/take-burst-mode-shots-ipha42c55cd0/26/ios/26

- Burst 用于移动主体或从连续照片中选择一帧，前后摄均可使用。
- 它是动作选择方式，不是普遍质量增强词。

### Macro

Source: https://support.apple.com/en-asia/guide/iphone/iphfaacf2eb0/ios

- 支持的机型在极近距离会切换到 Ultra Wide 实现 Macro。
- Macro 只用于近摄，不能与完整环境同尺度清晰的要求混用。

### Selfie

Source: https://support.apple.com/en-gb/guide/iphone/iph1b88429a6/26/ios/26

- 自拍使用前置相机，可在 Photo 或 Portrait 中拍摄；是否镜像受设置影响。
- 未知镜像设置时，不应编造文字方向和严格左右身份锚点。

## Conditionally Accepted Community Finding

Source: https://www.reddit.com/r/StableDiffusion/comments/1v9gj77/nolora_krea_2_turbo_smartphone_realism_in_6ish/

- 明确 smartphone capture 和具体背景内容，有助于压制影棚感和空洞 bokeh。
- 旧手机噪点、压缩和自动闪光只适用于相应场景，不能成为近期 iPhone 的统一模板。
- `ultrasharp`、夸张 HDR、高对比和高饱和容易增加合成感，不作为默认。

## Observed Regression Fixture

2026-08-25 的案例要求“时尚、打扮精致的韩国籍女白领推门走出咖啡厅”。年轻漂亮 casting 本身不是错误；失败来自 `fashion street photograph` 将时尚人物偷换成时尚摄影、正面居中摆拍、动作过渡缺少重心和门扇几何，以及商业美妆式面部和背景虚化。

修正后保留 20 岁年轻漂亮的成年女性默认值，用同行者的近期 iPhone 后置 1x Main camera 建立现实锚点，并通过拍摄距离、跨门槛状态、玻璃反射、普通 Photo mode 景深和现场自动曝光限制广告漂移。

该结果只作为扩写规则的回归案例，不证明某个词或 seed 的普遍效果。

## Rejected Patterns

- `shot on iPhone` 作为孤立质量咒语；
- iPhone 与 DSLR、胶片、光圈值、影棚灯和专业镜头混用；
- 默认追加噪点、压缩、污镜头、严重过曝或坏构图；
- 每张图都使用 Portrait、Night mode、0.5x、Macro、Burst 或直接闪光；
- 把人物漂亮、服装精致和广告摄影绑定；
- 固定 negative prompt 垃圾桶或托管 Krea 控制项；
- 把社区单张高赞结果当成可复现模型事实。

## Update Rule

新增 iPhone 能力必须能由 Apple 官方资料确认；新增 Krea 强制规则必须来自官方说明、公开 A/B 对照或多个独立实测。否则只记录为实验项。
