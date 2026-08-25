# Krea 2 Realism Playbook

只在复杂场景或提示词诊断时读取。本参考把“真实”拆成可观察、可推导的摄影事实，不提供固定词库。

## Governing Principle

提示词必须描述一次现实中可以发生的拍摄事件，而不是评价一张图有多好。真实感来自互相支持的证据：环境解释光源，光源解释阴影和反射，构图解释景深，动作解释受力和运动表现，物品状态解释材质与磨损。

推荐用准确媒介开头，例如：

```text
The scene is captured as a candid smartphone photograph.
```

或：

```text
A documentary photograph of...
```

准确媒介名称已经承担“照片感”，不需要再叠加 `photorealistic`、`lifelike` 或 `real photo`。

## Capture Logic

### Smartphone Snapshot

- 使用随手取景、较深景深、有限动态范围和符合情境的轻微曝光妥协。
- 背景保留可识别地点；轻微倾斜、边缘裁切、局部运动模糊、自动闪光或传感器噪点只能按场景选少量使用。
- 不要同时加入 DSLR、35mm film、影棚人像和巨大的光学散景。

### Documentary Digital

- 人物处于任务或事件中，视线通常落在动作、工具或他人身上。
- 现场光、适度处理、中等景深和背景地点证据优先于漂亮布光。
- 允许衣物受力、轻微运动和接触阴影，不要让所有人物按相同姿势看镜头。

### Analog Film

- 只在用户明确要求胶片、年代感或化学成像时使用。
- 选择一种胶片语义即可，如 consumer 35mm film 或 disposable-camera flash。
- 颗粒、色偏、有限动态范围和轻微软化应来自成像条件，不要堆成复古滤镜清单。

### Product and Still Life

- 先保证几何、尺度、底部接触、标签方向和线缆重力，再描述表面。
- 金属、玻璃、塑料、陶瓷、织物和木材必须具有不同的高光宽度、粗糙度与反射行为。
- 新品保持干净；旧物或用户明确要求使用痕迹时，才加入与状态相符的磨损。
- 受控商业摄影可以精致，但不能出现悬浮、无来源边缘光、镜像错误或 CGI 完美表面。

### Interior and Architecture

- 说明相机高度、视角范围、主要消失线和窗户方向；垂直线保持连贯。
- 窗外通常比室内亮，混合光源应有可见色温差。
- 家具落地并产生接触阴影；木材、织物、玻璃和墙面不能共享同一塑料质感。
- 使用痕迹只选少量，如地板磨痕、桌面细纹或窗帘自然褶皱。

### Night and Low Light

- 只使用现场可见光源：街灯、招牌、车灯、手机屏幕、舞台灯或室内灯具。
- 接受过曝实用光源、深阴影、混合白平衡、噪点、慢快门运动和有限对焦。
- 远处不能无故清晰明亮；不要用无来源补光照亮每个表面或人物正脸。

### Practical Fantasy

- 把不现实主体解释为实体服装、假体、模型、道具、机械装置或现场特效被相机拍到。
- 保留重量、接缝、固定结构、演员受力、环境接触和真实灯光限制。
- 若用户明确要求幻想生物在世界中真实存在，则直接描述自然纪录或现场摄影，不擅自降级为 cosplay。

## Subject-Specific Checks

### Portrait

- 近景才可描述细小汗毛、局部毛孔、唇部纹理或眼下细节；中远景转而关注轮廓、衣物、姿势和环境。
- 眼神光必须来自已说明的光源；脸部不自动对称、提亮或磨皮。
- `ordinary`、`unposed`、`mid-action` 用来约束行为与拍摄状态，不用于覆盖用户指定或主规则默认的 `beautiful` casting；避免 `perfect`、`glamorous` 等商业修图倾向。

### Young Attractive Woman without Beauty-Filter Drift

- 单一女性主体未指定年龄和外貌时，按主规则使用 20 岁、年轻、漂亮的成年女性；不要退化成只有 `adult woman` 的宽泛 casting。
- 漂亮可以保留，但应落在个体化五官、自然年轻皮肤、轻微左右差异、真实面部起伏和克制的日常妆容上，而不是蜡质皮肤、网红模板脸、统一大眼小脸或全脸柔焦。
- `时尚、精致` 首先描述搭配、剪裁、材质、发型和妆容。用户没有要求时，不要把媒介写成 fashion photograph、editorial campaign 或 beauty portrait。
- 画面是全身或中远景时，不要用大量脸型和五官词抢占提示权重；把更多信息分配给动作、衣物受力、环境曝光和接触关系。

### Doorway and Walking Transitions

- 抓住动作尚未完成的一刻：门正在转动、一只脚跨过门槛、另一只脚仍在室内、躯干因推门而旋转、视线落在行进方向。
- 相机位于动作路径的侧前方，不在人物正前方。门扇形成斜线并遮挡少量入口，画面保持偏轴和非对称。
- 手指应被门把握持关系自然组织和部分遮挡；不要用 `distorted hands, extra limbs` 替代接触描述。
- 室外曝光正常时，室内通常更暗且偏暖；玻璃应同时保留部分反射与室内信息，而不是变成纯净广告背景或奶油散景。

### Full Body and Groups

- 明确人数、前后或左右关系、每只手属于谁、接触对象、遮挡顺序和承重脚。
- 脚与地面需要接触，坐姿要有座面压力，抓握要符合物体重量。
- 不通过罗列“正确手指、正确腿”保证解剖；用可读动作和空间关系降低歧义。

### Food, Plants, and Animals

- 食物关注份量几何、温度与水分线索、切面、碎屑和餐具接触，避免塑料高光。
- 植物关注叶片朝向、半透明边缘、风或重力；动物关注毛发方向、胡须、关节受力和环境接触。
- 不要把人物皮肤词套到食物、动物或产品上。

### Action

- 说明决定性瞬间、身体力学、运动方向、保持清晰的平面和产生模糊的运动元素。
- 快门冻结动作时需要足够光线；弱光动作更可能出现局部运动模糊或噪点。
- 运动模糊属于运动部分，不是覆盖全画面的涂抹效果。

## Finite Realism Budget

每张图只选三至五项最有解释力的细节：

- 人物：局部肤色变化、少量汗毛、散发、衣物压力、自然不对称；
- 面料：关节褶皱、接缝拉力、自然垂坠、压缩折痕；
- 硬质表面：符合状态的指纹、边缘磨损、水渍、细小划痕或灰尘；
- 环境：使用痕迹、风化、轻微错位、可信反射；
- 拍摄：颗粒、噪点、压缩、局部模糊、曝光妥协。

细节必须符合距离和状态。远景没有可辨毛孔，全新奢侈品没有默认污垢，静止影棚产品没有无缘由运动模糊。

## Corrected Examples

### Candid Documentary Portrait

输入：一个成年女性独自在雨后的社区公交站等车，穿夹克，站在站棚下看向道路，眼平中等全身构图，自然 50mm 透视，阴天自然光。

```text
A candid documentary photograph of an adult woman waiting alone at a neighborhood bus stop just after rain, standing beneath the shelter and looking down the road rather than at the camera. Medium full-body framing at eye level with a natural 50mm perspective; wet pavement, shelter glass and a muted storefront across the road keep the location recognizable. Soft overcast daylight enters from the open street side while the shelter roof leaves a gentle shadow beneath her chin. Damp flyaway hairs cling near her temple, her jacket folds where one arm bends, her weight rests naturally on one leg, and irregular puddles carry restrained street reflections. Neutral-cool white balance, moderate depth of field and soft highlight roll-off. The moment feels ordinarily observed, with no beauty retouching, artificial rim light, HDR gloss or exaggerated bokeh.
```

### Clean Commercial Product

输入：全新的黑色机械键盘平放在有使用痕迹的胡桃木桌上，编织线缆可见，左上方大型柔光窗照明，略微俯拍的三分之四电商构图。

```text
A commercial product photograph of a new black mechanical keyboard resting flat on a used walnut desk, shown in a clean three-quarter view from slightly above with the key layout and braided cable connection clearly readable. A large diffused window at the upper left is the dominant source, producing broad restrained highlights on the frame, soft keycap shadows and a clear contact shadow beneath the keyboard; ambient light reflected by the room keeps shadow detail visible without acting as a second light source. The new matte keycaps remain clean with subtle manufacturing variation in sheen, the cable bends under its own weight, and only the walnut surface carries fine use marks along its grain. Neutral white balance, accurate blacks, controlled reflections, realistic dynamic range and sharp product focus with gentle distance falloff. No floating geometry, CGI-perfect surfaces, glowing edges or excessive HDR polish.
```

### Well-Dressed Korean Office Worker Leaving a Cafe

输入：时尚、打扮精致的韩国籍女白领，推门走出咖啡厅。

```text
An observational street photograph of one beautiful 20-year-old adult Korean office worker at the instant she pushes open a glass cafe door and crosses the threshold toward the sidewalk. She wears carefully coordinated contemporary officewear with precise tailoring, neat styled hair and refined everyday makeup; her youthful face remains individual and naturally textured rather than beauty-filtered. The camera is positioned several steps outside and slightly to one side, creating an off-center medium full-body frame instead of a frontal fashion pose. Her hand wraps around the vertical handle with the fingers partly hidden by the grip, the moving door cuts diagonally across the entrance, her torso turns with the push, and her weight transfers from the foot still inside to the foot landing outside while she looks toward her path. Street daylight is exposed normally, leaving the cafe interior visibly dimmer and warmer through partial reflections and faint handling marks on the glass; tables, a menu board and the sidewalk edge remain readable. Garment folds respond to the turn at her shoulder, waist and hip, with slight motion softness limited to the landing foot and door edge. The moment feels incidental and unperformed, with restrained color, no centered model pose, glossy beauty-campaign finish, waxy skin, CGI surfaces or empty studio-like background.
```

## Failure Patterns

- 空洞质量词：`masterpiece, best quality, 16K, insanely detailed`。
- 媒介冲突：`smartphone + DSLR + 35mm film + cinematic render`。
- 目标冲突：`perfect skin + visible pores + flawless face + gritty realism`。
- 光线冲突：阴天软光却产生正午硬阴影，午夜场景却使用 golden-hour sunlight。
- 光学冲突：同时要求巨大散景与从前景到远景全部锐利。
- 无依据细节：新品默认灰尘划痕，普通房间凭空出现轮廓灯和烟雾。
- 全局模板：每张图都加 cinematic、HDR、teal-orange、volumetric light、grain 和 shallow depth of field。
- Casting 与媒介混淆：人物“时尚精致”被扩写为 fashion photograph，导致正面居中、走秀姿势、商业美妆脸和背景虚化。
- 伪动作：只写 `steps out` 或 `pushes the door`，却没有门扇位置、躯干旋转、承重转移、跨门槛状态和运动方向。
