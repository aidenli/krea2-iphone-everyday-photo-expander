# Krea 2 Realism Playbook

本参考页用于把“真实”拆成可执行的摄影因果。选择与当前场景最接近的一节；不要把所有词汇装进同一条提示词。

## Governing Principle

提示词必须描述**一次现实拍摄事件**，而不是评价一张图有多好。真实感来自相互支持的证据：环境解释光线，光线解释材质，镜头解释构图和景深，动作解释姿势与接触。

推荐的开头句式：

```text
The entire scene is captured as a real [capture type] photograph, not an illustration or rendering.
```

这句话适合 Krea 2 容易风格漂移的题材，尤其是未来城市、奇幻人物、戏服、特殊生物和复杂产品。普通照片不必机械重复 `not an illustration`。

## Mode Recipes

### Smartphone Snapshot

适用：家庭、朋友、街头偶遇、社交媒体、突发事件、普通消费者视角。

优先描述：

- 24-28mm equivalent wide view 或不写焦段；手机离主体的实际距离。
- deep or moderate focus，前后景都有信息；不要默认奶油虚化。
- 手持造成的轻微倾斜、边缘裁切、局部运动模糊或不完美时机。
- 自动曝光的真实代价：亮部轻微溢出、暗部噪点、夜景降噪、边缘锐化或压缩痕迹。
- 环境中的普通杂物、路人、标识、桌面使用痕迹，但只加与场景逻辑相符的内容。

避免：把手机照片同时写成 DSLR、胶片、85mm 人像、专业影棚或极浅景深。不要把 HDR、高饱和、ultrasharp 当成默认真实感；这些只适合明确的现代手机计算摄影外观。

### Documentary Digital

适用：劳动、公共生活、旅行、新闻式场景、真实环境人物。

优先描述：

- candid documentary photograph、available light、eye-level 或现场合理机位。
- 35mm 或 50mm 只作为高层构图线索，不堆机身型号和完整 EXIF。
- 人物处于动作中，视线落在任务或他人身上，不默认看镜头。
- 中等景深，背景足以确认地点；轻微运动、衣物受力和接触阴影。
- 自然白平衡、克制对比度、没有商业磨皮。

避免：所有人物像时装模特一样站定、完美布光、每个表面都闪亮、全画面橙青调色。

### Environmental Portrait

适用：人物肖像，但环境必须解释其身份、职业或当下状态。

优先描述：

- medium close-up 或 waist-up；说明人物与桌面、门窗、工具或街道的距离关系。
- 一个可定位的光源，例如左侧窗光、头顶荧光灯或门外阴天散射光。
- 细微皮肤纹理、发丝、衣物褶皱、真实表情和不对称性。
- 背景保留辨识度；浅景深只能轻度使用，不能把环境融成无意义色块。

皮肤安全写法：

```text
natural skin texture with subtle pores, fine vellus hair and slight tonal variation, never waxy or over-retouched
```

只在脸占画面较大时使用。远景人物无需强求毛孔。

### Analog Film

适用：用户明确要求胶片、年代记录、一次性相机或化学成像。

优先描述：

- 一种胶片语义即可：35mm consumer film、disposable-camera flash、muted documentary film。
- 细颗粒或粗颗粒、有限动态范围、轻微欠曝、柔和高光晕染、颜色偏移。
- 让缺陷来自光线和冲印条件，而不是堆“vintage aesthetic”。

避免：同时写数字 HDR、无噪点超清晰、手机计算摄影和多种胶片品牌。

### Product and Still Life

适用：商品、食品、工具、器物、包装。

真实锚点：

- 物体重量通过台面形变、稳定摆放和接触阴影体现。
- 金属、玻璃、塑料、陶瓷和织物拥有不同的高光宽度、粗糙度和反射。
- 透明物体必须折射和透出背景；液体遵循重力与容器边界。
- 商品不是悬浮的，除非用户明确要求悬浮装置。
- 商业摄影可以干净，但仍保留接触阴影、边缘微尘、指纹或包装细微折痕中的少量一项。

避免：不可能的多方向高光、没有环境来源的反射、标签随曲面错误变形、所有边缘发光。

### Interior and Architecture

适用：住宅、商店、办公室、建筑记录。

真实锚点：

- 说明视点高度、广角程度和主要消失线；建筑垂直线保持合理。
- 窗外亮度通常高于室内；混合光源应有轻微色温差。
- 家具落地并产生一致接触阴影；织物、木材和墙面不共享同一塑料质感。
- 加入少量使用痕迹：椅子轻微错位、地板磨痕、桌面线缆、窗帘自然褶皱。

避免：所有表面像 3D 样板房一样零瑕疵、室内外同时完美曝光、宽角但没有透视变化。

### Night and Low Light

适用：夜街、酒吧、演出、车内、室内弱光。

真实锚点：

- 只选可见的 practical lights：路灯、招牌、手机屏幕、车灯、吊灯或闪光灯。
- 接受有限动态范围：灯牌局部过曝、阴影噪点、黑位压缩、颜色污染和移动物体轻微拖影。
- 光只能照亮它实际够得到的区域，远处不能无故清晰明亮。

避免：夜晚同时拥有金色日光、无来源轮廓光、所有暗部完全干净、所有霓虹都照亮人物正脸。

### Practical Fantasy

适用：精灵、怪物、科幻服装、未来城市等容易滑向概念图或 CGI 的内容。

把幻想对象改写成现实制作与拍摄证据：

- prosthetic makeup、silicone appliance、hand-painted costume、machined prop、practical creature suit。
- real location、on-set production still、documentary photograph of a practical-effects shoot。
- 道具重量、接缝、磨损、固定结构、演员受力和与环境接触。
- 真实相机的曝光、焦点和运动限制仍然存在。

不要擅自把用户要的真实生物降级成“演员穿戏服”。如果用户要求世界内真实存在的幻想生物，写成现场自然摄影，但仍用皮肤、毛发、重量、呼吸、足迹和环境交互建立可信度。

## Background Is Evidence

Krea 2 社区测试反复显示，明确描述中景与远景，比单独写 `sharp background` 更能减少默认背景虚化。选择 1-3 个能证明地点的背景元素，说明它们的位置和可见状态。

有效：

```text
Across the road, a small grocery storefront, two parked bicycles and the wet bus shelter remain recognizable in the midground.
```

无效：

```text
extremely detailed background, everything perfect, 8K
```

若用户明确要求浅景深，仍需让背景保持空间和光线逻辑，只是降低细节，而不是变成均匀奶油色。

## Optical Consistency

- `deep focus / everything sharp` 对应较小光圈、较宽视角、较亮环境或计算摄影，不应再写 `f/1.2` 和强 bokeh。
- `shallow depth of field` 需要近距离主体、较长焦段或较大光圈；背景必须沿深度逐渐失焦。
- 快速动作若完全凝固，需要足够快快门和足够光线；弱光下更可能出现噪点或运动模糊。
- 强烈逆光会压暗正面或需要可解释的补光；不要让逆光人物面部自动完美曝光。
- 微距景深天然很浅，不能同时要求从镜头前到无限远全部清晰。

相机型号不是真实性证明。只在型号会改变可见成像行为时使用；否则描述 `older smartphone snapshot`、`modern consumer phone photo` 或 `documentary digital photograph` 更稳。

## Anti-Synthetic Ending

最后一句只排除最可能发生的漂移，不要列二十项负面词。例如：

```text
It should feel ordinary and observed rather than staged, with no beauty retouching, plastic skin, CGI surfaces or dramatic commercial color grading.
```

产品图可以排除浮空和 CGI；室内图可以排除样板房渲染感；手机图可以排除专业影棚、奶油虚化和胶片颗粒。排除项必须服务于所选捕获模式。

## Negative Conditioning

官方 Krea 2 Turbo 推荐 CFG 为 `0.0`，因此默认工作流不要输出独立 negative prompt。部分社区工作流在 CFG 约 `1.2` 时报告负向条件开始产生影响，但同时可能增加饱和、重复和伪影；这是实验性配置，不是本 Skill 的默认假设。

当用户明确启用 negative conditioning 时，负面提示词应短且针对本次漂移，例如手机随拍可使用：

```text
illustration, CGI render, studio portrait, artificial bokeh, plastic skin, beauty retouching
```

不要把正向提示词中的核心摄影媒介也放进负面提示词。

## Final Compression

删除不承担以下任一职责的词句：主体事实、空间关系、拍摄行为、光照因果、材质证据、动作可信度或漂移控制。真实感来自信息互锁，不来自字数。

