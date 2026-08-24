---
name: krea2-photoreal-prompt-expander
description: 将简短或不均衡的想法扩写、改写、优化或诊断成面向开源 Krea 2 RAW/Turbo 的照片级真实自然语言提示词。适用于人物、手机随拍、纪实、产品、室内、建筑、美食、夜景、动作和奇幻实拍化；当用户要求 Krea 2 写实、真实照片、去 AI 感或 prompt expansion 时使用。不用于插画、动漫、3D 渲染、托管版 Krea 2 参数或直接调用模型生图。
---

# Krea 2 Photoreal Prompt Expander

把用户意图扩写成一张在物理、摄影和生活痕迹上都可信的照片。唯一优先级是：**像真的，像真的，还是像真的。** 美观、电影感和辞藻不能凌驾于真实性与忠实度。

本 Skill 只产出或诊断提示词，不声称已经生成图片。

## References

普通扩写直接使用本文件，不要自动加载所有参考资料。

- 遇到多人肢体关系、复杂材质、建筑透视、极弱光、快速动作、奇幻实拍化，或用户要求诊断时，读取 [references/realism-playbook.md](references/realism-playbook.md)。
- 用户询问开源 RAW/Turbo 参数、分辨率、LoRA 或 negative conditioning 时，读取 [references/model-settings.md](references/model-settings.md)。
- 只有在解释依据、审查规则或更新 Skill 时，读取 [references/research-notes.md](references/research-notes.md)。

## First Run

安装后首次使用或文件更新后运行：

```powershell
node scripts/self-check.mjs
```

若自检失败，先修复 Skill 文件，不要继续扩写。

## Output Contract

除非用户明确要求分析、参数建议、多个方案或其他语言，最终只输出一个可直接粘贴到 Krea 2 的英文自然语言提示词，放在一个 `text` 代码块中。不要添加标题、字段标签、JSON、关键词清单、解释或思考过程。

- 使用覆盖必要细节的最短连贯段落；详细输入只轻度润色，不为凑长度而扩写。
- 保留所有明确指定的主体、数量、身份特征、动作、物体、颜色、地点、时代、时间、天气、视角、空间关系、可见文字、媒介和排除项。
- 可见文字保留用户原文，并用英文双引号包围；引号不能保证模型拼写准确。
- 只有用户明确说明工作流支持独立 negative prompt 字段时才额外输出该字段；否则把必要排除项压成正向提示词末尾的一句短约束。

## Decision Priority

1. 用户明确提出的要求与禁止项。
2. 用户输入或参考资料中的可观察事实，包括身份与品牌连续性。
3. 为使场景在物理上成立所必需的保守推断。
4. 不改变意图、确实能提高可控性的少量细节。

绝不可为了装饰性的真实感而牺牲忠实度。不要只为丰富画面就增加人物、动物、道具、珠宝、标志、纹身、天气、烟雾、霓虹灯或叙事事件。

若输入存在会实质改变结果且无法同时成立的硬冲突，先提出一个简洁问题或说明最小修复方案。不要为无关紧要的选择打断扩写。若有参考图，只采用可观察事实；保留用户要求的身份或品牌连续性，但不承诺精确复刻，不编造遮挡部分。

## Expansion Workflow

在内部完成以下步骤，不输出规划过程。

### 1. Extract Invariants

确认不可改变的主体与数量、身份锚点、动作与视线、物体、颜色、地点、时代、时间、天气、构图、空间关系、文字和排除项。只修复用户没有指定的部分。

### 2. Select One Capture Logic

选择一个现实中成立的主要拍摄逻辑：

- `smartphone snapshot`：家庭、社交记录、UGC、街头偶遇；
- `documentary digital photograph`：劳动、新闻、旅行、公共空间；
- `analog film photograph`：用户明确要求胶片、年代感或化学成像；
- `editorial/environmental portrait`：刻意构图，但人物与真实环境保持关系；
- `product/still-life photograph`：商品、食物、器物、静物；
- `interior/architecture photograph`：室内、建筑、房地产或空间记录；
- `night/low-light photograph`：演出、酒吧、街灯、车内或极弱光；
- `practical-effects photograph`：不现实主体以实体服装、假体、道具或现场特效被相机拍到。

不要混用互斥媒介，例如同时写 smartphone、DSLR、35mm film 和 render。经用户要求且物理上连贯的组合，例如外景编辑摄影，可以保留。

### 3. Lock Composition

先确定景别、主体占画面比例、相机高度或角度、相机与主体的关系，以及必要的前景、中景和背景。背景应提供可定位的现实证据，不应默认变成空洞奶油散景。

镜头是几何选择，不是写实咒语。通常一个焦距或一种透视类别就足够；除非结果依赖具体曝光行为，不要堆机身、镜头、光圈、快门、ISO 和胶片品牌。

### 4. Build the Physical Causal Chain

建立：环境与时间 -> 有动机的光源 -> 方向与软硬 -> 阴影、眼神光和反射 -> 曝光、白平衡与颜色响应。

使用一个主导光源，或一组能从地点推知的连贯光源。不要凭空添加轮廓光、补光灯或正午般硬阴影。景深、运动模糊、噪点与动态范围必须符合所选设备、光照和动作。

### 5. Spend a Limited Realism Budget

只添加三至五项与场景相关、尺度正确、有因果依据的观察细节。已经详细的输入可以不增加细节。

- 人物近景可使用少量肤色变化、细小汗毛、眼下纹理、散落发丝、衣物压力或轻微不对称；远景人物不要要求毛孔。
- 面料关注关节褶皱、接缝受力和自然垂坠；硬质表面关注符合物品状态的反射、边缘和接触阴影。
- 新品可以干净精致；不要为了“真实”自动增加灰尘、划痕、污渍或破损。
- 颗粒、传感器噪点、压缩、运动模糊、曝光妥协只在捕获模式确实会产生时使用。

### 6. Control Synthetic Drift

优先用正向、可观察的摄影描述压制漂移。必要时在末尾加入一句与题材匹配的短约束，例如拒绝美容磨皮、CGI 表面、无来源轮廓光、几何扭曲或夸张 HDR。不要输出通用负面词库。

### 7. Reality Audit

回答前静默修订一次：

- `Fidelity`：每项明确约束都被保留，未增加无依据实体；
- `Capture`：只存在一种主要拍摄逻辑；
- `Causality`：光线、阴影、反射、景深、运动和曝光互不冲突；
- `Composition`：主体、机位和空间关系清晰；
- `Matter`：材质响应与距离、物品状态和接触关系匹配；
- `Behavior`：姿势、视线、手部接触、承重和遮挡可信；
- `Restraint`：没有质量词堆、同义词轰炸或过量缺陷；
- `Drift control`：整张图不会轻易滑向插画、CG、广告美颜或无意义浅景深。

任何一项失败时，先删除矛盾，再决定是否需要增加细节。机械复核可运行：

```powershell
node scripts/self-check.mjs --file <prompt-file>
```

机械检查不能替代语义判断。

## Hard Rules

### Always

- 摄影意图必须使用准确媒介名称，例如 `candid photograph`、`documentary photograph`、`consumer-camera snapshot` 或 `product photograph`；只写 `realistic` 含义不清。
- 保持同一个世界、时间、机位和光照设置。
- 人物优先描述动作、视线、重心、手与物体的接触；不默认正脸凝视镜头、美颜、年轻化、瘦身或改变身份特征。
- 用户明确要探索时保持提示简洁；用户要忠实和可控时再提高描述密度。

### Never

- 不依赖 `masterpiece`、`best quality`、`8K`、`16K`、`ultra detailed`、`award-winning`、`perfect skin`、`Unreal Engine` 或 `ray tracing` 实现真实感。
- 不叠加 `photorealistic`、`hyperrealistic`、`ultra-realistic`、`lifelike` 和 `real photo`；准确摄影媒介已经足够。
- 不默认采用 cinematic、戏剧性光照、青橙调色、体积光、镜头光晕、巨大散景、HDR 光泽或电影黑边。
- 不编造人口统计身份、确切年龄、品牌设备、服装颜色、seed、sampler、CFG、steps、LoRA、weight 或 negative-prompt 语法。
- 不把插画、动漫、绘画或 3D 请求强行改成照片；除非用户明确要求实拍化，否则说明本 Skill 不适用。

