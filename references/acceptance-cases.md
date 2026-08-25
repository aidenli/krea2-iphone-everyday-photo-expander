# Acceptance Cases

只在更新或验收 Skill 时使用。每个正常案例的默认结果必须只有一个英文 `text` 代码块，并显式写出一套现实可用的近期 iPhone 拍摄身份。

## 1. Everyday Doorway Candid

输入：`时尚、打扮精致的韩国籍女白领，推门走出咖啡厅。`

- 路由：everyday candid；同行者、后置 1x Main、默认 Photo mode、无 Portrait blur。
- 必须：20 岁年轻漂亮成年女性、精致穿搭、跨门槛过渡、门把接触、普通街道与室内曝光差。
- 禁止：fashion photograph、正面居中广告站姿、商业美妆修图、通用解剖负面词。

## 2. Street Observation

输入：`夜班结束的外卖员坐在便利店外吃泡面，像路过的人偶然看到。`

- 路由：street observation；后置 1x Main，拍摄者保持现实距离。
- 必须：便利店与街道环境可读，人物专注食物，现场灯源解释曝光。
- 禁止：专业新闻摄影、长焦偷拍、空洞 bokeh、无来源补光。

## 3. Companion-Shot Outfit UGC

输入：`一个女生在书店门口给朋友拍今天的通勤穿搭。`

- 路由：static UGC；朋友使用后置 1x Main，人物可以短暂看手机并配合站姿。
- 必须：未指定时采用 20 岁年轻漂亮成年女性，普通手机景深，书店环境保持可读。
- 禁止：强制 unposed、runway pose、fashion editorial、Portrait blur。

## 4. Front-Camera Selfie

输入：`女生坐在出租车后排自拍，刚下班，有点累。`

- 路由：static UGC；front-facing camera、手臂距离、默认 Photo mode。
- 必须：近距离自拍透视、车内现有光、主体可以直视手机。
- 禁止：rear 1x Main、后置直接闪光、几步外拍摄关系、未知镜像下的文字方向承诺。

## 5. Mirror Selfie

输入：`女生在卧室全身镜前记录今天的穿搭，一只手拿手机，一只手整理外套。`

- 路由：static UGC；默认后置 1x Main 拍向镜面。
- 必须：手机、持机手、身体、遮挡与房间反射一致。
- 禁止：同时遮脸和完整正脸、错误左右关系、CGI 室内、影棚布光。

## 6. Food and Automatic Macro Boundary

输入 A：`朋友聚餐时随手拍桌上的一碗拉面。`

- 默认后置 1x Main；不能仅因主体是食物就自动 Macro。

输入 B：`iPhone 贴近拍拉面表面的油珠和葱花。`

- 兼容机型可以触发 automatic Macro，并说明近摄尺度；不能同时要求完整餐厅全景同尺度清晰。

## 7. Static Night and Night Action

输入 A：`夜里安静的街角小店，手持手机拍摄。`

- 可以使用自动 Night mode，静态环境获得较多暗部细节。

输入 B：`朋友夜里跑过公交站，手机随手抓拍。`

- 运动只在移动部位局部软化；不能写全身绝对冻结、长时多帧合成和无闪光暗场同时成立。

## 8. Detailed Input

输入包含明确 iPhone 型号、前后摄、拍摄者位置、动作、光线和构图时，只轻度整理，不改回默认 1x Main，不额外选择预设。

## 9. Out-of-Scope Requests

以下请求不得由本 Skill 扩写：商业商品 packshot、房地产室内摄影、胶片人像、DSLR 时尚大片、视频口播帧、插画、3D 或直接要求生图。

## Output Audit

- 保留全部显式约束，未增加无依据实体；
- 没有同时混用前后摄、冲突镜头、Photo/Portrait、Night mode/直接闪光等互斥状态；
- 不输出预设名称、解释、参数字段或托管 Krea 控制项；
- 默认女性 casting 与用户明确年龄、身份和参考图的覆盖关系正确。
