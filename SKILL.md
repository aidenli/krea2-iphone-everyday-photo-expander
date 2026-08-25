---
name: krea2-photography-prompt-skills
description: Krea 2 摄影提示词项目的索引与路由入口。根据用户要求选择一个明确命名的拍摄类型 Skill 文档，完整读取后再执行；当前包含近期 iPhone 生活抓拍、街头观察和静态 UGC，后续可继续加入其他互不混用的摄影类型。用于用户要求 Krea 2 摄影提示词扩写、优化、诊断或选择拍摄类型时。不直接承载任何具体拍摄类型的提示规则。
---

# Krea 2 Photography Prompt Skills

本文件只负责索引和路由。具体拍摄规则必须写在 `skills/` 下一个名称明确的独立文档中；一个 Skill 对应一个文档，不把同一 Skill 拆到多个 playbook、preset 或 acceptance 文件。

## Routing Contract

1. 根据用户的目标媒介和拍摄关系，从下表选择一个且仅一个 Skill。
2. 完整读取所选文档后，严格执行其中的范围、默认值、输出契约和验收规则。
3. 不从未选中的 Skill 拼接镜头、光线、风格或负面约束。
4. 没有匹配文档时，明确说明当前项目尚不支持该拍摄类型；不要用相近 Skill 强行改写。
5. 用户明确要求比较多个拍摄类型时，可以分别读取对应文档，但必须保持方案分离。

## Skill Index

| Skill | Use when | Do not use when | Document |
|---|---|---|---|
| `iphone-everyday-photo` | 以近期 iPhone 能力为内部边界的静态生活抓拍、街头观察、自拍、镜面照和照片型 UGC | 专业相机、商业广告、商品棚拍、建筑摄影、胶片、视频帧、插画或 3D | [skills/iphone-everyday-photo.md](skills/iphone-everyday-photo.md) |

## Shared Reference

只有用户询问开源 Krea 2 RAW/Turbo 参数、分辨率、LoRA 或 negative conditioning 时，读取 [references/model-settings.md](references/model-settings.md)。共享参考不包含任何具体拍摄类型的提示规则。

## Adding Another Skill

新增拍摄类型时：

- 在 `skills/` 中新增一个完整、自包含、名称明确的 Markdown 文档；
- 在索引表增加一行，并写清触发范围和排除范围；
- 不修改现有 Skill 的规则来兼容新类型；
- 不为新 Skill 再拆分运行时参考、预设或验收文档。
