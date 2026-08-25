---
name: krea2-iphone-everyday-photo-expander
description: 将简短或不均衡的想法扩写、改写、优化或诊断成面向开源 Krea 2 RAW/Turbo 的近期 iPhone 日常照片提示词。只处理静态的生活抓拍、街头观察和照片型 UGC，包括朋友随拍、同行者代拍、自拍、镜面照、穿搭、探店、聚会、旅行、食物与宠物记录；当用户要求 iPhone 拍摄感、手机生活照、自然抓拍、街头观察、UGC、去 AI 感或 prompt expansion 时使用。不用于专业相机摄影、商业广告、商品棚拍、房地产或建筑摄影、胶片、视频帧、插画、3D、托管版 Krea 2 参数或直接调用模型生图。
---

# Krea 2 iPhone Everyday Photo Expander

把用户意图扩写成一张现实中的近期 iPhone 能够拍出的静态照片。人物和事物可以年轻、漂亮、时尚、精致；拍摄仍保持日常、中性和可信。真实不等于难看，iPhone 也不等于低画质。

本 Skill 只产出或诊断提示词，不声称已经生成图片。

## Scope

只接管以下三类照片：

- `everyday candid`：生活正在发生，主体通常没有配合镜头；
- `street observation`：拍摄者位于事件之外，环境、距离和遮挡参与叙事；
- `static UGC`：自拍、镜面照、同行者代拍、穿搭、探店、聚会、旅行、食物或宠物分享，主体可以知道镜头存在。

日常照片中可以出现商品、建筑或食物，但画面必须仍是手机生活记录。专业时尚大片、商业广告、商品 packshot、房地产或建筑摄影、新闻摄影、胶片模拟、视频截图、口播视频、插画和 3D 超出范围；不要把这些请求强行改成 iPhone 照片。

## References

普通扩写直接使用本文件，不要自动加载所有资料。

- 遇到自拍、镜面反射、多人关系、极弱光、快速动作、Macro、Burst、直接闪光或复杂诊断时，读取 [references/iphone-photography-playbook.md](references/iphone-photography-playbook.md)。
- 用户询问开源 RAW/Turbo 参数、分辨率、LoRA 或 negative conditioning 时，读取 [references/model-settings.md](references/model-settings.md)。
- 只有在解释依据、审查规则或更新 Skill 时，读取 [references/research-notes.md](references/research-notes.md)。
- 只有在更新或验收 Skill 时，读取 [references/acceptance-cases.md](references/acceptance-cases.md)。

## Output Contract

除非用户明确要求分析、参数建议、多个方案或其他语言，最终只输出一个可直接粘贴到 Krea 2 的英文自然语言提示词，放在一个 `text` 代码块中。不要输出标题、字段标签、预设名称、菜单、JSON、关键词清单、解释或思考过程。

- 每条提示词都要显式写出 iPhone 拍摄身份。
- 使用覆盖必要信息的最短连贯段落；详细输入只轻度整理。
- 保留用户明确指定的主体、数量、年龄、身份、外貌、动作、物体、颜色、地点、时间、天气、视角、空间关系、可见文字、拍摄模式和排除项。
- 可见文字保留原文并用英文双引号包围；不承诺模型能准确拼写。
- 只有用户明确说明工作流支持独立 negative prompt 字段时才额外输出；否则仅在段末保留一句题材相关的短约束。

## Decision Priority

1. 用户明确要求与禁止项。
2. 输入或参考图中的可观察事实。
3. 使 iPhone 拍摄事件在物理上成立的保守推断。
4. 不改变意图、确实能降低生成歧义的少量细节。

不要为了“真实”增加人物、道具、污垢、坏天气、噪点或叙事事件。若参考图存在，只使用可观察事实，不编造遮挡部分。

## Default Female Casting

请求只有一个女性主体，且没有指定年龄、年龄段、外貌或参考身份时，默认写成 **20 岁、年轻、漂亮的成年女性**。

- 用户给出的年龄、外貌、身份或参考图始终覆盖默认值。
- 年轻漂亮不等于幼童化、蜡质皮肤、网红模板脸或商业美妆修图。
- `时尚`、`打扮精致`、`穿着讲究` 控制服装搭配、剪裁、材质、发型、妆容和仪容，不把拍摄媒介升级为 fashion editorial 或广告。

## Expansion Workflow

在内部执行，不输出步骤。

### 1. Extract Invariants

锁定主体与数量、身份、动作、视线、物体、地点、时间、构图、文字和禁止项。只补用户没有指定的部分。

### 2. Route the Capture Relationship

- `everyday candid`：朋友或同行者在近距离随手拍，主体继续原动作；
- `street observation`：拍摄者与事件保持现实距离，公共环境保持可读；
- `static UGC`：主体可以主动看手机、摆姿、自拍或对镜整理。

不得把 UGC 强制写成 `unposed`，也不得把生活抓拍写成正面站定的广告模特。请求未说明关系时，默认由同行者使用后置主摄记录一个生活中的自然瞬间。

### 3. Establish the iPhone Anchor

默认采用：`a handheld photo taken on a recent iPhone using the rear 1x Main camera in the default Photo mode, with no applied Portrait-mode blur`。

- 自拍改用 front-facing camera；镜面自拍默认仍由后置 1x Main camera 拍向镜面。
- 只有用户指定或场景确实需要时，才改用 0.5x Ultra Wide、兼容机型的 2x 视角、Portrait、自动 Macro、自动 Night mode、Burst、后置直接闪光或前置屏幕补光。
- 不编造具体 iPhone 型号、固定等效焦距、分辨率、ProRAW、Photographic Style、滤镜、纵横比或后期流程。
- Live Photo 不产生稳定可见的单帧风格，不作为默认提示词元素。

### 4. Assemble from the Preset Parts

预设是参考零件，不是枚举、模板或必选项。每部分最多选一个主预设；没有合适项时，按现实条件重新推导。

| Part | Reference presets |
|---|---|
| Capture relationship | friend candid, companion-shot photo, street observer, handheld selfie, mirror selfie, timer selfie, cooperative UGC |
| iPhone camera | rear 1x Main, 0.5x Ultra Wide, front-facing camera, compatible 2x view, automatic Macro, Portrait, automatic Night mode |
| Capture action | single shutter tap, Burst-selected action frame, handheld low light, rear direct flash, front screen illumination |
| Distance | arm's length, close social distance, several steps away for waist-up or full-body, across-street observation |
| Composition | off-axis candid, natural centered frame, head-and-shoulders selfie, waist-up, medium full-body, environment-heavy wide frame, mirror composition |
| Subject state | unaware, noticed but continues, brief glance, cooperative pose, adjusting clothing, checking the mirror, interacting with companions |
| Timing | action beginning, unfinished transition, contact instant, weight transfer, just stopped, clearest frame from a short Burst |
| Focus and depth | ordinary phone depth, close-range natural separation, subject autofocus, slight focus compromise, explicit Portrait blur |
| Daylight | ordinary daylight, overcast, open shade, window light, backlit entrance, street-to-interior brightness difference |
| Interior light | warm cafe practicals, convenience-store ceiling lights, domestic mixed light, window and practical light together, residual auto-white-balance color difference |
| Night light | streetlights, storefront signs, vehicle lights, visible practicals, automatic Night mode, direct flash, localized motion softness |
| iPhone response | auto exposure, finite highlight and shadow recovery, restrained phone sharpening, noise reduction, highlight compression, moderate shadow lift |
| Physical evidence | glass reflection, mirror direction, doorway occlusion, table contact, feet on ground, garment tension, foreground passerby or object occlusion |
| UGC context | outfit share, cafe visit, gathering, travel record, food share, pet record, mirror outfit photo, ordinary selfie |

### 5. Lock Distance, Geometry, and Timing

说明手机由谁持有、位于哪里、离主体多远、主体是否知道镜头。使用现实的手机透视，不写 DSLR 镜头语言。

对于推门、行走、转身、拿取和坐下等动作，锁定一个未完成的瞬间，并让身体朝向、承重、接触、遮挡和运动方向互相支持。Burst 只用于明示动作选帧，不用于把普通静态照片专业化。

### 6. Describe Available Light and iPhone Response

先写现场已有光源，再写 iPhone 自动曝光产生的可见结果。不要发明影棚灯、轮廓灯或电影布光。

- 默认 Photo mode 使用相对较深的手机景深；近距离可以自然分离背景，但不能出现专业大光圈奶油散景。
- 暗场中自动 Night mode 只在现实条件允许时启用。静态环境可以更清楚；运动人物只在运动部位出现合理软化。
- 自动曝光、亮部压缩、暗部提亮、白平衡残余色差、锐化和降噪只选场景能看见的一两项，不堆成计算摄影词表。
- iPhone 真实感不等于主动降低画质，不自动加入噪点、压缩、脏镜头、严重过曝或拙劣构图。

### 7. Add Limited Physical Evidence

只增加三至五项符合距离和动作的证据，例如门把接触、脚与地面、衣物受力、玻璃反射或前景遮挡。远景不写毛孔，新衣不自动加污渍。

优先写正向接触关系，不依赖 `distorted hands`、`extra limbs` 等通用负面词。

### 8. Reality Audit

回答前静默修订：

- `Scope`：确实是生活抓拍、街头观察或静态 UGC；
- `Anchor`：明确写出一套现实可用的 iPhone 相机与模式；
- `Compatibility`：没有同时混用前后摄、冲突镜头或不兼容拍摄状态；
- `Relationship`：拍摄者、手机、主体、距离和主体知情状态一致；
- `Geometry`：动作、重心、接触、遮挡和镜面反射可信；
- `Exposure`：现场光、自动曝光、Night mode、闪光和运动结果不冲突；
- `Casting`：默认女性仍是 20 岁年轻漂亮的成年女性，没有滑向广告修图；
- `Restraint`：没有专业相机术语、质量词堆砌、虚构缺陷或平台参数；
- `Output`：只有一个英文 `text` 代码块，没有预设名称和解释。

## Hard Boundary

### Always

- 明确写 `recent iPhone` 和实际使用的相机、视角或模式。
- 让拍摄关系决定构图，让现场条件决定曝光和设备响应。
- 保留漂亮人物、精致穿搭和美好事物，不通过丑化换取真实感。
- 用户明确要求优先于所有默认值和预设。

### Never

- 不写 DSLR、mirrorless、35mm film、专业镜头、光圈值、影棚布光、电影摄影或胶片颗粒。
- 不用 `masterpiece`、`best quality`、`8K`、`perfect skin`、`Unreal Engine`、`ray tracing` 或同义写实词堆叠。
- 不在缺少场景依据时采用 Portrait、0.5x、Macro、Night mode、Burst、直接闪光或具体机型；极近距与低光条件仍按现实触发 Macro 或 Night mode。
- 不把插画、视频、广告、商品棚拍、建筑摄影或专业时尚摄影强行改成 iPhone 日常照片。
