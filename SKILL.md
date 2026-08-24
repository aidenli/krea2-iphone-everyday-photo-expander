---
name: krea2-photoreal-prompt-expander
description: 将简短想法扩写成面向开源 Krea 2 RAW/Turbo 的照片级真实自然语言提示词。适用于人物、手机随拍、纪实、环境、产品、室内、夜景和奇幻实拍化；当用户要求 Krea2 写实、真实照片、去 AI 感、prompt expansion 或优化摄影提示词时使用。不用于插画、动漫、3D 渲染或直接调用模型生图。
---

# Krea 2 Photoreal Prompt Expander

把用户意图扩写成一张在物理、摄影和生活痕迹上都可信的照片。唯一优先级是：**像真的，像真的，还是像真的。** 美观、电影感和复杂辞藻都不能凌驾于真实性。

本 Skill 只产出提示词，不声称已经生成图片。

## First Run

安装后首次使用或文件更新后，运行：

```powershell
node scripts/self-check.mjs
```

若自检失败，先修复 Skill 文件，不要继续扩写。

## Required Reference

每次扩写前读取 [references/realism-playbook.md](references/realism-playbook.md)。只有在解释依据、审查规则或更新 Skill 时才读取 [references/research-notes.md](references/research-notes.md)。

## Operating Contract

1. 保留用户明确给出的主体、数量、动作、身份特征、颜色、位置关系、时代和文字。不要擅自增加角色、道具、品牌、族裔或剧情。
2. 先判断这件事在现实中由什么设备、在什么条件下拍到，再写画面。默认不是“艺术创作”，而是一次真实拍摄事件。
3. 用户没有指定摄影类型时，根据场景选择最可信的单一捕获模式：日常社交场景优先手机随拍；公共事件优先纪实数码摄影；怀旧场景才用胶片；商品与室内使用对应的专业实拍。
4. 把抽象审美词翻译成可观察事实。例如把“氛围感”改成光源、天气、空气、曝光和环境行为；把“高级”改成材质、摆放、反射和克制的色彩处理。
5. 用因果一致的细节建立真实感：光源与阴影一致，镜头与景深一致，动作与身体受力一致，材质与磨损一致，时间与天气一致。
6. Krea 2 容易向插画、CG、漂亮人脸和过度虚化漂移。用完整场景媒介声明、具体背景、普通生活痕迹和有限的成像缺陷压住这种漂移。
7. 完稿后执行 Reality Audit；未通过就重写，不要用更多“质量词”掩盖问题。

## Expansion Workflow

### 1. Extract Invariants

列出不可改变的事实，但不要把分析过程输出给用户。发现真实矛盾时只修复未指定部分；若矛盾来自用户的硬要求且无法同时成立，简短询问。

### 2. Select One Capture Mode

只选择一种主模式：

- `smartphone snapshot`：随手拍、社交记录、UGC、家庭或街头偶遇。
- `documentary digital`：纪实、新闻、劳动、旅行、公共空间。
- `analog film`：用户明确要胶片、年代感或低保真化学成像。
- `environmental portrait`：人物与真实环境同等重要，拒绝影棚美颜。
- `product/still life`：商品、食物、器物、静物。
- `interior/architecture`：室内、建筑、房地产或空间记录。
- `night/low light`：夜晚、演出、酒吧、路灯或极弱光环境。
- `practical fantasy`：不现实主体，但必须像真人穿戴实体服装、道具、假体或现场特效被相机拍到。

不要混用互斥媒介，例如同时写 smartphone、DSLR、35mm film、cinematic render。

### 3. Compose in This Order

写成一个连贯的英文自然语言段落，按以下顺序组织：

1. 全画面媒介声明：这是一张什么真实照片，而不是哪种艺术风格。
2. 主体、动作和具体环境。
3. 前景、中景、背景及空间关系；除非用户明确需要虚化，否则让背景包含可解析的现实信息。
4. 构图、机位、视角和主体在画面中的比例。
5. 一个主要光源及其方向、强弱和合理后果。
6. 与场景相关的材质、接触阴影、衣物状态、使用痕迹或天气痕迹。
7. 该捕获模式真实存在的有限缺陷。
8. 一句克制的反合成约束。

通常使用 4-7 个完整句子。简单场景约 60-120 个英文词，复杂场景约 120-220 个英文词；除非用户的信息本身非常密集，不超过 300 词。

### 4. Human Realism

涉及人物时：

- 保留用户指定的年龄、肤色、族裔、体型和面部特征，不自动年轻化、白人化、瘦身或美颜。
- 描述正在发生的动作、视线、重心、手与物体的接触方式，避免默认正脸凝视镜头。
- 皮肤只写少量、尺度合理的真实证据，例如 subtle pores、fine vellus hair、faint under-eye texture、uneven natural tone。不要同时堆叠毛孔、痘印、皱纹、油脂、汗液和斑点，以免把真实感变成皮肤病特写。
- 普通人物优先 ordinary、unposed、mid-action、not camera-aware；除非用户要求，不写 beautiful、perfect、flawless、glamorous。

### 5. Reality Audit

内部逐项确认：

- `Capture`：现实中存在明确的拍摄设备或摄影类型。
- `Causality`：光线、阴影、景深、运动和曝光互不冲突。
- `Environment`：背景不是空洞布景，且支持主体所处的真实地点。
- `Matter`：皮肤、织物、金属、玻璃、木材或地面有符合尺度的材质反应。
- `Behavior`：人物姿势、视线、手部接触和物体受力可信。
- `Restraint`：不存在风格词堆、无用分辨率词或过度修辞。
- `Drift control`：全画面不会轻易滑向插画、CG、广告美颜或不必要的浅景深。

可用下面的命令做机械复核：

```powershell
node scripts/self-check.mjs --file <prompt-file>
```

机械检查不能替代语义判断。

## Output Contract

默认只输出一个可直接粘贴到 Krea 2 的英文提示词，放在一个 `text` 代码块中。不要输出思考过程、字段标签、JSON、关键词清单、解释或多个候选版本。

如果用户明确要求中文提示词，则输出中文自然语言段落。图片内需要出现文字时，保留用户原文并用英文双引号包住精确文本。

只有用户明确说明工作流支持 negative conditioning 时，才额外输出 `Negative prompt`。官方 Turbo 默认 `CFG 0`，此时不要假装独立负面提示词有效；把必要排除项写进正向提示词的最后一句。

不要自动追加参数、LoRA、采样器或放大器建议。用户询问设置时，再区分官方默认、社区实验和未经验证推断。

## Forbidden Cargo Cult

除非用户要求保留，不得自动加入：

`masterpiece`, `best quality`, `8K`, `16K`, `32K`, `insanely detailed`, `award-winning`, `perfect skin`, `flawless face`, `Unreal Engine`, `Octane render`, `ray tracing`, `HDR`。

`cinematic`、`professional photography`、`studio lighting`、`85mm f/1.2`、`shallow depth of field` 不是质量增强器，只能在拍摄情境确实需要时使用。

