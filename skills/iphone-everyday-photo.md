---
name: iphone-everyday-photo
description: 为开源 Krea 2 RAW/Turbo 扩写、优化或诊断现实中的近期 iPhone 静态生活照片提示词。覆盖生活抓拍、街头观察、朋友或同行者代拍、手持自拍、镜面照、穿搭、探店、聚会、旅行、食物和宠物 UGC；不覆盖专业相机、商业广告、商品棚拍、建筑摄影、胶片、视频帧、插画或 3D。
---

# iPhone Everyday Photo

把用户意图扩写成一张现实中的近期 iPhone 能够拍出的静态照片。iPhone 是内部成像边界，不是默认要写进最终提示词的设备标签。人物和事物可以年轻、漂亮、时尚、精致；拍摄仍保持日常、中性和可信。真实不等于难看，也不等于故意降低整张图片的质量。

本 Skill 只产出或诊断提示词，不声称已经生成图片。

## Scope

只处理以下三类拍摄关系：

- `everyday candid`：生活正在发生，主体通常没有配合镜头；
- `street observation`：机位位于事件之外，环境、距离和遮挡参与画面；
- `static UGC`：自拍、镜面照、穿搭、探店、聚会、旅行、食物或宠物分享，主体可以知道镜头存在。

日常照片中可以出现商品、建筑或食物，但画面必须仍是手机生活记录。专业时尚大片、商业广告、商品 packshot、房地产或建筑摄影、新闻摄影、胶片模拟、视频截图、口播视频、插画和 3D 超出范围；遇到这些请求时返回项目索引重新路由，不要强行改成 iPhone 照片。

## Output Contract

除非用户明确要求分析、参数建议、多个方案或其他语言，最终只输出一个可直接粘贴到 Krea 2 的英文自然语言提示词，放在一个 `text` 代码块中。不要输出标题、字段标签、预设名称、菜单、JSON、关键词清单、解释或思考过程。

- 从主体、场景和动作直接开始，不用设备声明或媒介定义占据第一句。
- 默认不写 `iPhone`、`rear 1x Main camera`、`Photo mode`、`phone-sized sensor` 或同类设备术语；用户明确要求这些文字时才保留。
- 使用覆盖必要信息的最短连贯段落；详细输入只轻度整理。
- 保留用户明确指定的主体、数量、年龄、身份、外貌、动作、物体、颜色、地点、时间、天气、视角、空间关系、可见文字、拍摄模式和排除项。
- 可见文字保留原文并用英文双引号包围；不承诺模型能准确拼写。
- 不用 `feels authentic`、`genuinely everyday`、`natural phone perspective`、`polished personal record` 等评价句替代可见条件。
- 默认不追加反广告、反 CGI 或通用畸形负面词清单。确有必要的限制优先改写成可见的正向状态。
- 只有用户明确说明工作流支持独立 negative prompt 字段时才额外输出该字段。

## Decision Priority

1. 用户明确要求与禁止项。
2. 输入或参考图中的可观察事实。
3. 使近期 iPhone 拍摄事件在物理上成立的保守推断。
4. 不改变意图、确实能降低生成歧义的少量细节。

不要为了补足故事而增加人物、拍摄者、道具、天气或叙事事件。若参考图存在，只使用可观察事实，不编造遮挡部分。拍摄关系不明确时只推导机位，不虚构朋友、家人、同行者或街头摄影师。

## Default Female Casting

请求只有一个女性主体，且没有指定年龄、年龄段、外貌或参考身份时，默认写成 **20 岁、年轻、漂亮的成年女性**。

- 用户给出的年龄、外貌、身份或参考图始终覆盖默认值。
- 年轻漂亮不等于幼童化、蜡质皮肤、网红模板脸或商业美妆修图。
- `时尚`、`打扮精致`、`穿着讲究` 控制服装搭配、剪裁、材质、发型、妆容和仪容，不把拍摄媒介升级为 fashion editorial 或广告。

## Prompt Structure

在内部按以下因果顺序组织，不输出步骤和字段名：

1. 主体、身份、场景和动作；
2. 机位距离、高度和观察方向；
3. 构图与环境关系；
4. 现场光与自动曝光取舍；
5. 动作、接触、反射和环境证据；
6. 一项由当前条件造成的主要拍摄瑕疵。

## Expansion Workflow

### 1. Extract Invariants

锁定主体与数量、身份、动作、视线、物体、地点、时间、构图、文字和禁止项。只补用户没有指定的部分。

### 2. Route the Capture Type

#### Everyday Candid

- 主体继续吃饭、开门、走路、聊天或整理物品，不为镜头停成标准姿势。
- 使用普通站姿或随手抬起的机位，按场景选择近距离或几步外的观察距离。
- 偏轴、局部遮挡或轻微边缘裁切可以自然出现，但不主动制造失败构图。

#### Street Observation

- 机位处于公共空间中的现实距离，主体和环境同时可读。
- 保留道路、店面、站台、入口和前景遮挡等定位证据；只有用户要求或场景已有时才增加路人。
- 不虚构长焦偷拍，不把背景抹成专业街拍散景。

#### Static UGC

- 主体可以看镜头、配合站姿、展示穿搭、自拍或对镜整理。
- 构图可以较整齐甚至居中，但仍保留现实距离、现场背景和普通自动曝光。
- 不得把 UGC 强制写成 `unposed`；`fashionable` 描述穿搭，不能升级为 fashion editorial、beauty campaign 或 studio portrait。

请求未说明拍摄关系时，默认采用几步外、普通胸口高度的后置主摄观察位置，不命名持机者。自拍、镜面自拍、用户明确指定的代拍关系或拍摄者入镜要求除外。

### 3. Apply the Internal iPhone Boundary

内部默认以近期 iPhone 后置 1x Main camera 的系统 Photo mode 为能力边界，不应用 Portrait 虚化。这个选择只用于约束透视、距离、景深、自动曝光和成像取舍，不直接写进最终提示词。

- 自拍使用 front-facing camera 的手臂距离逻辑；镜面自拍默认由后置主摄拍向镜面，手机作为镜中物体可见。
- 只有用户指定或场景确实需要时，才内部改用 0.5x Ultra Wide、兼容机型的 2x 视角、Portrait、自动 Macro、自动 Night mode、Burst、后置直接闪光或前置屏幕补光。
- 不编造具体 iPhone 型号、固定等效焦距、分辨率、ProRAW、Photographic Style、滤镜、纵横比或后期流程。
- Live Photo 不产生稳定可见的单帧风格，不作为提示词元素。
- 用户明确要求设备、相机或模式文字时，可以写出对应术语，但仍从主体和动作开始。

### 4. Assemble from Preset Parts

预设是内部参考零件，不是枚举、完整模板或必选项。每部分最多选一个主预设；没有合适项时，按现实条件重新推导。

| Part | Reference presets |
|---|---|
| Capture type | everyday candid, street observation, handheld selfie, mirror selfie, timer selfie, cooperative UGC |
| Camera position | arm's length, close social distance, several steps away at chest height, waist-height observation, across-street observation |
| Internal camera | rear 1x Main, 0.5x Ultra Wide, front-facing camera, compatible 2x view, automatic Macro, Portrait, automatic Night mode |
| Capture action | single shutter tap, Burst-selected action frame, handheld low light, rear direct flash, front screen illumination |
| Composition | off-axis candid, natural centered frame, head-and-shoulders selfie, waist-up, medium full-body, environment-heavy wide frame, mirror composition |
| Subject state | unaware, noticed but continues, brief glance, cooperative pose, adjusting clothing, checking the mirror, interacting with an explicitly supplied companion |
| Timing | action beginning, unfinished transition, contact instant, weight transfer, just stopped, clearest frame from a short Burst |
| Focus and depth | readable background, close-range natural separation, face-priority focus, slight focus lag, explicit Portrait blur |
| Daylight | ordinary daylight, overcast, open shade, window light, backlit entrance, street-to-interior brightness difference |
| Interior light | warm cafe practicals, convenience-store ceiling lights, domestic mixed light, window and practical light together, residual white-balance difference |
| Night light | streetlights, storefront signs, vehicle lights, visible practicals, automatic Night mode, direct flash |
| Exposure response | finite highlight recovery, dense shadows, highlight compression, moderate shadow lift, residual color-temperature difference |
| Capture imperfection | localized motion softness, slight focus lag, minor framing asymmetry, edge over-sharpening, fine shadow noise, mild noise-reduction smearing |
| Physical evidence | glass reflection, mirror direction, doorway occlusion, table contact, feet on ground, garment tension, existing foreground occlusion |
| UGC context | outfit share, cafe visit, gathering, travel record, food share, pet record, mirror outfit photo, ordinary selfie |

选择规则：

- 用户要求始终覆盖预设；
- 只有物理上能同时成立的选项才能组合；
- 依赖特定机型的功能只在用户指定或场景确实需要时使用；
- 不在最终提示词中输出预设名称和选择过程；
- 不为套预设而增加人物、道具、天气、平台比例或叙事事件。

### 5. Lock Distance, Geometry, and Timing

说明机位位于哪里、离主体多远、处于什么高度和方向，以及主体是否知道镜头。除非用户已经指定，不说明是谁持有相机。使用现实的手机透视，不写 DSLR 镜头语言。

- 手臂距离：前置自拍，头肩或多人近景；
- 近距离社交视角：桌边、明确存在的朋友互动、宠物或食物；
- 几步外：腰部以上或 medium full-body；
- 街道另一侧：环境观察，主体在画面中的占比下降。

距离一旦确定，脸部细节、背景可读度、透视和遮挡必须随之变化。全身画面不要消耗大量提示权重描述毛孔和眼睫毛。

对于推门、行走、转身、拿取和坐下等动作，锁定一个未完成的瞬间，并让身体朝向、承重、接触、遮挡和运动方向互相支持。Burst 只用于动作选帧，不用于把普通静态照片专业化。

### 6. Describe Available Light and Exposure

先写现场已有光源，再写自动曝光产生的可见取舍。不要发明影棚灯、轮廓灯或电影布光。

- 默认 Photo mode 使用相对较深的手机景深；近距离可以自然分离背景，但不能出现专业大光圈奶油散景。
- 普通日光、阴天、树荫、入口背光和窗边场景可以有现实亮度差，不要求每个平面都被分别照亮。
- 咖啡厅暖灯、便利店顶灯、住宅灯具和窗光可以并存，但光源必须在环境中成立；自动白平衡不必抹掉全部色温差。
- 暗场中自动 Night mode 只在现实条件允许时启用。静态环境可以更清楚；运动人物只在移动部位出现软化。
- 自动曝光、亮部压缩、暗部提亮、白平衡残余色差、锐化和降噪只选当前场景真正看得见的结果，不堆成计算摄影词表。

### 7. Spend One Causal Imperfection

每条最终提示词必须包含至少一项轻微、可见、由拍摄条件导致的主要瑕疵。先确定原因，再选择结果；不能随机撒噪点，也不能把瑕疵扩散到整张图。

| Scene condition | Preferred primary imperfection |
|---|---|
| 日间快步走、转身、推门 | 摆臂、衣摆、发梢、移动门边或落脚处的局部运动软化 |
| 静态日间 | 轻微取景偏差、高反差边缘过锐化或局部高光曝光妥协 |
| 逆光、玻璃入口、室内外亮度差 | 反射或天空高光接近溢出，背光区域略密 |
| 室内、黄昏或低光 | 暗部细微亮度噪声、轻度降噪涂抹或残余色温差 |
| 近距离、遮挡穿越对焦区域 | 轻微对焦迟滞，焦点仍落在主体关键区域附近 |
| 夜间动作 | 移动肢体或衣物边缘局部软化，静止环境保持可读 |

- 面部、身份锚点和核心动作默认保持可辨。
- 只有第二项结果与同一原因直接相连时才允许组合，例如低光同时带来暗部噪声和轻度降噪；不要再叠加无关的脏镜头、压缩块、严重过曝或全局失焦。
- 普通日间动作优先选择局部运动软化，不为追求“手机感”强行加入暗部噪声。
- 不使用 `imperfect`, `authentic`, `candid feel` 等抽象词代替具体瑕疵。

### 8. Add Limited Physical Evidence

只增加三至五项符合距离和动作的证据：

- 人物动作：重心、脚与地面、衣物受力、视线和接触点；
- 玻璃：反射与透射信息并存，门框可以产生遮挡；
- 镜面：左右、持机手、手机位置和背景反射互相一致；
- 食物和物件：桌面接触、份量、餐具和重力优先于纹理词；
- 宠物：毛发方向、关节受力、移动部位和地面接触。

远景不写毛孔，新衣不自动加污渍。优先写正向接触关系，不依赖 `distorted hands`、`extra limbs` 等通用负面词。

## iPhone Capability Boundaries

这些能力用于内部判断。除非用户明确要求，不把能力名称写进最终提示词。

### Rear 1x Main Camera

默认选择。适合几步外抓拍、全身照、探店、食物、宠物和街头观察。保持自然广角透视和相对较深景深；主体过近时近大远小更明显。

### 0.5x Ultra Wide

只在用户要求宽阔环境、狭小室内、多人近距离合照或明确 0.5x 风格时使用。画面边缘更容易拉伸，不能同时要求边缘人物完全没有透视变化。

### Front-Facing Camera

用于真正的手持自拍。相机位于手臂距离，脸部与手臂的近距离透视必须成立。是否镜像不明确时，不强调文字方向或严格左右身份锚点。

### Mirror Selfie

默认由后置主摄拍向镜面。手机、持机手、镜中身体、房间反射和遮挡顺序必须属于同一几何关系。不要同时描述“手机遮住脸”和“完整无遮挡正脸”。

### Compatible 2x View

仅在用户明确要求更紧的手机视角或场景确实需要减少广角透视时使用。它仍受手机景深约束，不产生专业大光圈散景。

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

### Morning Commute Candid

输入：日常抓拍，中国女人，拿着咖啡，上班族，快步走，上班。

```text
A beautiful 20-year-old adult Chinese office worker walks briskly toward work along a city sidewalk, holding a takeaway coffee firmly in one hand while her free arm swings with her stride. The medium full-body frame is made from several steps away at ordinary chest height, slightly off-center, with an office entrance, pavement joints and glass reflections remaining readable around her. Morning daylight keeps her face, clothing and the recessed entrance legible in the same exposure. Her forward gaze, landing foot, lifted heel, coffee grip and the pull of her coat follow the same direction of movement; slight motion softness is limited to her swinging hand, coat hem and a few loose strands of hair.
```

### Cafe Doorway Candid

输入：时尚、打扮精致的韩国籍女白领，推门走出咖啡厅。

```text
One beautiful 20-year-old adult Korean office worker pushes open a glass cafe door and crosses the threshold toward the sidewalk, wearing carefully coordinated contemporary officewear with precise tailoring, neat hair and refined everyday makeup. The medium full-body view comes from several steps outside the entrance at chest height and sits slightly off-axis, with the moving door cutting across part of the doorway. Her hand closes around the vertical handle, her torso turns into the push, and her weight transfers from the foot still inside to the foot landing outside while she looks toward her path. Street daylight keeps her face readable, but reflections on the glass approach clipped white and the warmer cafe interior remains comparatively dense.
```

### Polished Outfit UGC

```text
One beautiful 20-year-old adult woman pauses near a neighborhood bookstore entrance to show a carefully coordinated everyday outfit, looking briefly toward the camera with a relaxed, deliberate stance. The medium full-body frame is made from several steps away at chest height, nearly centered but with slightly more pavement on one side; the storefront frame, paving seams and window display remain legible behind her. Overcast daylight produces even facial exposure and restrained color, while garment folds at the elbows, waist and knees follow her stance. Fine high-contrast edges along the blazer and window frame show slight over-sharpening.
```

### Mirror Outfit Photo

```text
One beautiful 20-year-old adult woman stands before a full-length bedroom mirror, holding her phone at chest height in one hand while the other hand adjusts the hem of her jacket. The phone, holding hand, reflected body, mirror frame and visible room share one coherent reflection geometry, and the phone covers only a small part of her upper torso without hiding her face. Soft window light and one ordinary room lamp remain distinguishable, with the floor contact and bedroom background readable. Automatic white balance leaves a faint cool cast near the window and a warmer cast around the lamp.
```

### Indoor Mixed-Light Cafe UGC

```text
One beautiful 20-year-old adult woman sits at a small cafe table with a cup of coffee and glances up briefly from an open notebook. The waist-up frame is made from close social distance at seated eye level, with the cup resting flat on the table, her fingers touching the notebook edge and the window frame visible behind one shoulder. Cool window light reaches one side of her face while warm ceiling fixtures remain visible deeper in the room; her skin stays readable but the shaded wall retains fine luminance noise and mild noise-reduction smoothing.
```

### Night Action

```text
A young adult man steps quickly down from a city bus while looking toward the curb, framed from several steps away with the bus doorway, pavement edge and nearby stop sign still readable. Bus interior lights and one streetlamp create the available illumination, with the curb darker than the doorway and the fixed surroundings still legible. His planted foot, hand on the rail and forward weight transfer remain clear, while the moving foot and coat edge show localized softness and the stationary doorway stays comparatively sharp.
```

## Reality Audit

回答前静默修订：

- `Scope`：确实是生活抓拍、街头观察或静态 UGC；
- `Opening`：从主体、场景和动作开始，没有默认设备声明；
- `Boundary`：内部只采用一套现实可用的 iPhone 相机与模式逻辑；
- `Entities`：没有因为拍摄关系新增朋友、同行者、摄影师或举手机的人；
- `Geometry`：动作、重心、接触、遮挡和镜面反射可信；
- `Exposure`：现场光、自动曝光、Night mode、闪光和运动结果不冲突；
- `Imperfection`：至少一项主要瑕疵有明确原因、范围局部，面部和核心动作可辨；
- `Casting`：默认女性仍是 20 岁年轻漂亮的成年女性，没有滑向广告修图；
- `Language`：没有真实性评价句、专业相机术语、质量词堆砌或默认负面清单；
- `Output`：只有一个英文 `text` 代码块，没有预设名称和解释。

## Acceptance Cases

验收时至少覆盖：

1. 中国女白领拿咖啡快步上班：从主体开始，不出现拍摄同伴，软化只落在摆臂、衣摆、发梢或步态边缘；
2. 咖啡厅推门抓拍：保留年轻漂亮、精致穿搭和动作过渡，不出现 fashion photograph 或举手机的人；
3. 静态日间穿搭 UGC：人物可以配合，以轻微构图或锐化瑕疵代替无依据噪声；
4. 室内混合光：使用残余色温差、暗部噪声或同因降噪，不虚构补光灯；
5. 夜间动作：静态环境可读，只在运动部位局部软化；
6. 出租车前置自拍：使用手臂距离逻辑，不写后置主摄，至少保留一项合理取景或曝光妥协；
7. 卧室镜面自拍：手机、持机手、身体、遮挡和房间反射一致；
8. 普通食物照片不自动 Macro，明确极近摄时才允许自动 Macro；
9. 详细输入只轻度整理，不用默认值覆盖明确设备和构图；
10. 商业 packshot、建筑摄影、胶片、视频、插画和 3D 返回索引重新路由。

## Hard Boundary

### Always

- 从主体、场景和动作开始；iPhone 默认只作为内部成像边界。
- 让机位关系决定构图，让现场条件决定曝光和设备响应。
- 每张图使用至少一项因果明确、范围局部的主要拍摄瑕疵。
- 保留漂亮人物、精致穿搭和美好事物，不通过丑化换取真实感。
- 用户明确要求优先于所有默认值和预设。

### Never

- 不在默认输出中写设备声明、相机模式清单或传感器解释。
- 不虚构拍摄者，也不让抓拍关系变成画面中额外的举手机人物。
- 不写 DSLR、mirrorless、35mm film、专业镜头、光圈值、影棚布光、电影摄影或胶片颗粒。
- 不用 `masterpiece`、`best quality`、`8K`、`perfect skin`、`Unreal Engine`、`ray tracing` 或同义写实词堆叠。
- 不用真实性评价句、反广告口号或反 CGI 清单代替可见条件。
- 不把局部瑕疵扩散为全局失焦、全画面运动模糊、无依据噪声、脏镜头、压缩块或严重曝光失败。
- 不在缺少场景依据时采用 Portrait、0.5x、Macro、Night mode、Burst、直接闪光或具体机型；极近距与低光条件仍按现实触发 Macro 或 Night mode。
- 不把插画、视频、广告、商品棚拍、建筑摄影或专业时尚摄影强行改成 iPhone 日常照片。
