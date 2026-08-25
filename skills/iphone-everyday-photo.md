---
name: iphone-everyday-photo
description: 为开源 Krea 2 RAW/Turbo 扩写、优化或诊断现实中的近期 iPhone 静态生活照片提示词。覆盖生活抓拍、街头观察、朋友或同行者代拍、手持自拍、镜面照、穿搭、探店、聚会、旅行、食物和宠物 UGC；不覆盖专业相机、商业广告、商品棚拍、建筑摄影、胶片、视频帧、插画或 3D。
---

# iPhone Everyday Photo

把用户意图扩写成一张现实中的近期 iPhone 能够拍出的静态照片。人物和事物可以年轻、漂亮、时尚、精致；拍摄仍保持日常、中性和可信。真实不等于难看，iPhone 也不等于低画质。

本 Skill 只产出或诊断提示词，不声称已经生成图片。

## Scope

只处理以下三类拍摄关系：

- `everyday candid`：生活正在发生，主体通常没有配合镜头；
- `street observation`：拍摄者位于事件之外，环境、距离和遮挡参与叙事；
- `static UGC`：自拍、镜面照、同行者代拍、穿搭、探店、聚会、旅行、食物或宠物分享，主体可以知道镜头存在。

日常照片中可以出现商品、建筑或食物，但画面必须仍是手机生活记录。专业时尚大片、商业广告、商品 packshot、房地产或建筑摄影、新闻摄影、胶片模拟、视频截图、口播视频、插画和 3D 超出范围；遇到这些请求时返回项目索引重新路由，不要强行改成 iPhone 照片。

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

## Prompt Structure

在内部按以下因果顺序组织，不输出步骤和字段名：

1. iPhone 拍摄身份；
2. 主体、场景和动作；
3. 拍摄者与主体的关系；
4. 相机、距离和构图；
5. 现场光与自动曝光结果；
6. 动作、接触、反射和环境证据；
7. 必要的反广告、反 CGI 短约束。

## Expansion Workflow

### 1. Extract Invariants

锁定主体与数量、身份、动作、视线、物体、地点、时间、构图、文字和禁止项。只补用户没有指定的部分。

### 2. Route the Capture Relationship

#### Everyday Candid

- 拍摄者通常是朋友、家人或同行者，距离近，手机处在普通站姿或随手抬起的位置。
- 主体继续吃饭、开门、走路、聊天或整理物品，不为镜头停成标准姿势。
- 偏轴、局部遮挡或轻微边缘裁切可以自然出现，但不主动制造失败构图。

#### Street Observation

- 拍摄者处于公共空间中的现实距离，主体和环境同时可读。
- 保留道路、店面、站台、入口、路人和前景遮挡等定位证据。
- 不虚构长焦偷拍，不把背景抹成专业街拍散景。

#### Static UGC

- 主体可以看镜头、配合站姿、展示穿搭、自拍或对镜整理。
- 构图可以较整齐甚至居中，但仍保留手机距离、现场背景和普通自动曝光。
- 不得把 UGC 强制写成 `unposed`；`fashionable` 描述穿搭，不能升级为 fashion editorial、beauty campaign 或 studio portrait。

请求未说明关系时，默认由同行者使用后置主摄记录一个生活中的自然瞬间。

### 3. Establish the iPhone Anchor

默认采用：`a handheld photo taken on a recent iPhone using the rear 1x Main camera in the default Photo mode, with no applied Portrait-mode blur`。

- 自拍改用 front-facing camera；镜面自拍默认仍由后置 1x Main camera 拍向镜面。
- 只有用户指定或场景确实需要时，才改用 0.5x Ultra Wide、兼容机型的 2x 视角、Portrait、自动 Macro、自动 Night mode、Burst、后置直接闪光或前置屏幕补光。
- 不编造具体 iPhone 型号、固定等效焦距、分辨率、ProRAW、Photographic Style、滤镜、纵横比或后期流程。
- Live Photo 不产生稳定可见的单帧风格，不作为默认提示词元素。

### 4. Assemble from the Preset Parts

预设是参考零件，不是枚举、完整模板或必选项。每部分最多选一个主预设；没有合适项时，按现实条件重新推导。

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

选择规则：

- 用户要求始终覆盖预设；
- 只有物理上能同时成立的选项才能组合；
- 依赖特定机型的功能只在用户指定或场景确实需要时使用；
- 不在最终提示词中输出预设名称和选择过程；
- 不为套预设而增加人物、道具、天气、平台比例或叙事事件。

### 5. Lock Distance, Geometry, and Timing

说明手机由谁持有、位于哪里、离主体多远、主体是否知道镜头。使用现实的手机透视，不写 DSLR 镜头语言。

- 手臂距离：前置自拍，头肩或多人近景；
- 近距离社交视角：桌边、朋友互动、宠物或食物；
- 几步外：腰部以上、medium full-body、同行者全身照；
- 街道另一侧：环境观察，主体在画面中的占比下降。

距离一旦确定，脸部细节、背景可读度、透视和遮挡必须随之变化。全身画面不要消耗大量提示权重描述毛孔和眼睫毛。

对于推门、行走、转身、拿取和坐下等动作，锁定一个未完成的瞬间，并让身体朝向、承重、接触、遮挡和运动方向互相支持。Burst 只用于明示动作选帧，不用于把普通静态照片专业化。

### 6. Describe Available Light and iPhone Response

先写现场已有光源，再写 iPhone 自动曝光产生的可见结果。不要发明影棚灯、轮廓灯或电影布光。

- 默认 Photo mode 使用相对较深的手机景深；近距离可以自然分离背景，但不能出现专业大光圈奶油散景。
- 普通日光、阴天、树荫、入口背光和窗边场景可以有现实亮度差，手机不会像多灯影棚一样分别照亮每个平面。
- 咖啡厅暖灯、便利店顶灯、住宅灯具和窗光可以并存，但必须从环境中看得到来源；自动白平衡不必抹掉全部色温差。
- 暗场中自动 Night mode 只在现实条件允许时启用。静态环境可以更清楚；运动人物只在运动部位出现合理软化。
- 自动曝光、亮部压缩、暗部提亮、白平衡残余色差、锐化和降噪只选场景能看见的一两项，不堆成计算摄影词表。
- iPhone 真实感不等于主动降低画质，不自动加入噪点、压缩、脏镜头、严重过曝或拙劣构图。

### 7. Add Limited Physical Evidence

只增加三至五项符合距离和动作的证据：

- 人物动作：重心、脚与地面、衣物受力、视线和接触点；
- 玻璃：反射与透射信息并存，门框可以产生遮挡；
- 镜面：左右、持机手、手机位置和背景反射互相一致；
- 食物和物件：桌面接触、份量、餐具和重力优先于纹理词；
- 宠物：毛发方向、关节受力、移动部位和地面接触。

远景不写毛孔，新衣不自动加污渍。优先写正向接触关系，不依赖 `distorted hands`、`extra limbs` 等通用负面词。

## iPhone Capability Boundaries

### Rear 1x Main Camera

默认选择。适合朋友随拍、全身照、探店、食物、宠物和街头观察。保持自然广角透视和相对较深景深；主体过近时近大远小更明显。

### 0.5x Ultra Wide

只在用户要求宽阔环境、狭小室内、多人近距离合照或明确 0.5x 风格时使用。画面边缘更容易拉伸，不能同时要求边缘人物完全没有透视变化。

### Front-Facing Camera

用于真正的手持自拍。手机位于手臂距离，脸部与手臂的近距离透视必须成立。是否镜像不明确时，不强调文字方向或严格左右身份锚点。

### Mirror Selfie

默认由后置 1x Main camera 拍向镜面。手机、持机手、镜中身体、房间反射和遮挡顺序必须属于同一几何关系。不要同时描述“手机遮住脸”和“完整无遮挡正脸”。

### Compatible 2x View

仅在用户明确要求更紧的手机视角或场景确实需要减少广角透视时使用。它仍是手机照片，不产生专业大光圈散景。

### Automatic Macro

只用于极近距离的小物、食物细节、植物或宠物局部。兼容机型会切换到 Ultra Wide；不能同时要求宏观近摄和完整大场景以相同尺度清晰。

### Portrait Mode

只在用户明确要求人像模式或人工景深效果时使用。背景虚化属于深度处理，不与默认 Photo mode 混写；不要主动夸张头发、透明物体和复杂边缘的分割缺陷。

### Automatic Night Mode

低光下按现实条件启用。静态场景和稳定持机可以获得更多暗部细节；运动人物在多帧合成期间更可能局部软化。不能同时要求很暗、快速运动、无闪光、手持和每个细节完全冻结。

### Burst

用于白天或光线足够的动作选帧。描述从一小段 Burst 中选出的较清晰一帧，不把 Burst 当作质量增强词。普通静态场景不使用。

### Direct Flash

后置闪光适合聚会、夜间近距离人物或昏暗室内，会带来正面硬亮、近处优先曝光、背景变暗和反光表面亮点。前置自拍只能使用屏幕补光语义。

## Corrected Examples

### Cafe Doorway Candid

输入：时尚、打扮精致的韩国籍女白领，推门走出咖啡厅。

```text
A handheld photo taken on a recent iPhone using the rear 1x Main camera in the default Photo mode, with no applied Portrait-mode blur. One beautiful 20-year-old adult Korean office worker is caught by a companion several steps outside the cafe at the instant she pushes the glass door open and crosses the threshold toward the sidewalk. Her contemporary officewear is carefully coordinated and precisely tailored, with neat hair and refined everyday makeup, while her youthful face remains naturally individual rather than beauty-filtered. The medium full-body frame is slightly off-axis: her hand closes around the vertical handle, the moving door crosses part of the entrance, her torso turns with the push, and her weight transfers from the foot still inside to the foot landing outside as she looks toward her path. Ordinary street daylight drives the iPhone auto exposure, leaving the warmer cafe interior somewhat darker through partial glass reflections while the sidewalk, tables and doorway remain readable. The result keeps ordinary phone depth and restrained processing, without Portrait blur, fashion-campaign posing, studio lighting, waxy skin or CGI surfaces.
```

### Companion-Shot Outfit UGC

```text
A static UGC photo taken by a friend on a recent iPhone using the rear 1x Main camera in the default Photo mode, without applied Portrait-mode blur. One beautiful 20-year-old adult woman knowingly pauses near the entrance of a neighborhood bookstore to show her carefully coordinated everyday outfit, looking briefly toward the phone with a relaxed cooperative posture rather than a runway pose. The friend stands several steps away for a natural medium full-body frame; the storefront, pavement and passing street remain legible with ordinary phone depth. Overcast daylight produces even auto exposure and restrained color, while garment folds at the elbows, waist and knees follow her stance. The image remains a polished personal record, not a fashion editorial, beauty campaign or professional portrait.
```

### Mirror Selfie

```text
A mirror outfit photo taken on a recent iPhone using the rear 1x Main camera in the default Photo mode, without applied Portrait-mode blur. One beautiful 20-year-old adult woman stands at a natural distance from a full-length bedroom mirror, holding the phone in one hand at chest height while the other hand adjusts the hem of her jacket. The phone, holding hand, reflected body and visible room align in one coherent mirror geometry; the phone covers only a small part of her upper torso and does not obscure her face. Soft window light and one ordinary room lamp remain distinguishable under automatic white balance, with the mirror frame, floor contact and lived-in room background readable in the relatively deep phone focus. No studio lighting, editorial posing, impossible reflection, waxy skin or CGI interior.
```

### Night Action

```text
A handheld night photo taken on a recent iPhone using the rear 1x Main camera in the default Photo mode with automatic Night mode responding to the low light. A friend catches a young man stepping quickly off a city bus while looking toward the curb, framed from several steps away with the bus doorway, pavement and nearby stop sign still readable. The bus interior lights and a streetlamp are the only visible sources; the stationary doorway and curb retain usable detail while his moving foot and coat edge show localized softness from the handheld multi-frame capture. The auto exposure lifts some shadow information without turning night into daylight, and bright practical lights remain slightly compressed. No studio fill, cinematic grading, global motion smear or professional-camera bokeh.
```

## Reality Audit

回答前静默修订：

- `Scope`：确实是生活抓拍、街头观察或静态 UGC；
- `Anchor`：明确写出一套现实可用的 iPhone 相机与模式；
- `Compatibility`：没有同时混用前后摄、冲突视角或 Photo/Portrait 等不兼容状态；
- `Relationship`：拍摄者、手机、主体、距离和主体知情状态一致；
- `Geometry`：动作、重心、接触、遮挡和镜面反射可信；
- `Exposure`：现场光、自动曝光、Night mode、闪光和运动结果不冲突；
- `Casting`：默认女性仍是 20 岁年轻漂亮的成年女性，没有滑向广告修图；
- `Restraint`：没有专业相机术语、质量词堆砌、虚构缺陷或平台参数；
- `Output`：只有一个英文 `text` 代码块，没有预设名称和解释。

## Acceptance Cases

验收时至少覆盖：

1. 咖啡厅推门抓拍：保留年轻漂亮、精致穿搭和动作过渡，不出现 fashion photograph；
2. 夜班外卖员街头观察：环境可读，不出现长焦偷拍或无来源补光；
3. 朋友代拍穿搭 UGC：人物可以配合，不强制 unposed；
4. 出租车前置自拍：使用 front-facing camera 和手臂距离，不写后置主摄；
5. 卧室镜面自拍：手机、持机手、身体、遮挡和房间反射一致；
6. 普通食物照片不自动 Macro，明确极近摄时才允许自动 Macro；
7. 静态夜景与夜间动作分别处理，后者只在运动部分局部软化；
8. 详细输入只轻度整理，不用默认值覆盖明确设备和构图；
9. 商业 packshot、建筑摄影、胶片、视频、插画和 3D 返回索引重新路由。

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
