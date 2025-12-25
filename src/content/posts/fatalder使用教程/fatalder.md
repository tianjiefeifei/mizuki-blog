---
# 必需字段
title: "Fatalder 导入导出工具使用教程"                # 【必需】文章标题，用于页面标题和文章显示
description: "介绍的Fatalder的详细使用方法"          # 【必需】文章描述，用于SEO和文章摘要

# 发布相关
published: 2025-12-18          # 文章发布日期，格式为YYYY-MM-DD
date: 2025-01-20               # 文章创建日期，用于内部排序
draft: false                   # 是否为草稿，true=草稿（不公开），false=正式发布
permalink: "fatalder"        # 固定链接，自定义文章URL路径

# 内容分类
tags: [Fatalder, 教程, 导入器]           # 文章标签数组，用于标记文章主题
category: "Fatalder"           # 文章分类，用于组织文章
pinned: true                   # 是否置顶，true=置顶显示在列表前面

# 作者信息
author: "天劫飛飛"             # 文章作者姓名

# 图片设置
image: "./fatalder.png"          # 文章封面图片路径
---
## Fatalder 导入导出工具使用教程

**Fatalder** 是一款功能强大的多格式建筑导入/导出工具，支持 
>   `Schem` | `Schematic` | `BDX` | `KBDX` | `MCStructure` | `MCWorld` | `Litematic` | `IBImport`

>   `浮鸿JSON` | `绵阳JSON` | `钢板JSON` | `情绪JSON` | `跑路JSON` | `TimeBuilder` | `Construction` | `MCFunction` | `AxiomBP`

可在 `Android` `Windows` `Linux` 操作系统上运行。

##  使用前须知

### 收费模式说明
Fatalder 采用**额度计费**与**面板订阅**两种模式：
- **额度计费**：适用于单次或低频导入
  - 10 元 = 400 万额度
  - 计费标准：
    - 普通方块：0.6 额度/个
    - 命令方块：2000 额度/个
    - NBT 方块：2500 额度/个
- **面板订阅**：适用于高频或长期使用
  - 普通面板：3 元/天、10 元/周、20 元/月、68 元/长期有效
  - 商业面板：10 元/小时、35 元/天、90 元/周、205 元/月

> 💡 **提示**：联机大厅导入功能**完全免费**。
>
> 购买面板后可直接使用，无需复杂配置。如需购买，请访问：[官方商店](https://store.flyshop.icu/)

### 简化版本选择
如果您认为命令行版本操作复杂，可选择图形界面版本：[Fatalder-FFF (UI版本)](https://github.com/Yeah114/Fatalder-FFF)

### 所需基础技能
为了顺利使用本工具，建议您具备以下能力：
- ✅ 完整阅读教程后再进行操作
- ✅ 能使用搜索引擎查找信息
- ✅ 了解基本的文件路径概念
- ✅ 具备基础的英文理解能力（或会使用翻译工具）
- ✅ 能识别并描述遇到的错误信息

> 🔍 **重要提醒**：
> 本教程已涵盖工具的主要使用流程。如果您在仔细阅读后仍无法解决问题：
> 1. 可加入我们QQ群咨询 [点击加群 185706357](https://qm.qq.com/q/9ln2BgyaHe)
> 2. 可添加客服QQ一对一解答(请附带错误截图和问题描述) [点击添加 2679159026](https://qm.qq.com/q/g1I9YRikSs)

---

## 🚀 开始使用

### 第一步：下载程序

根据您的操作系统选择对应的版本下载：

| 来源 | 链接 |
|------|------|
| QQ 群文件 (推荐) | [点击加群 185706357](https://qm.qq.com/q/9ln2BgyaHe) |
| 官方网站 | [https://fatalder.yeah114.top/](https://fatalder.yeah114.top/) |
| GitHub Releases | [https://github.com/Yeah114/Fatalder-Release/releases/latest](https://github.com/Yeah114/Fatalder-Release/releases/latest) |

> ⚠️ **网络说明**：首次启动时会检查更新，若您的网络环境无法访问 GitHub，请配置代理（俗称“梯子”）。

### 第二步：启动程序

#### 📱 Android 系统
**需提前安装**：
1. **MT管理器**：[下载地址](https://mt2.cn/download/)
2. **Termux**：[下载地址 (v0.118.3)](https://github.com/termux/termux-app/releases/tag/v0.118.3)

**配置步骤**：
1. 在系统设置中，授予 MT管理器和 Termux **文件访问权限**。
   ![](./1.jpg)
2. 使用 MT管理器 找到下载的 Fatalder 文件，**记录其完整路径**。
   - 例如：`/storage/emulated/0/Fatalder/Fatalder-cli_android_aarch64.bin`
   - ⚠️ 您的路径和文件名可能不同，请勿直接复制示例。
3. 打开 Termux，依次执行以下命令：

```bash
# 1. 将文件复制到 Termux 当前目录（请替换为您的实际路径）
cp /storage/emulated/0/Fatalder/Fatalder-cli_android_aarch64.bin ./

# 2. 授予执行权限（请替换为您的实际文件名）
chmod +x Fatalder-cli_android_aarch64.bin

# 3. 启动程序
./Fatalder-cli_android_aarch64.bin