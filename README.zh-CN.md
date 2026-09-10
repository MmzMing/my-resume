<div align="center">

# ✨ Magic Resume ✨

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![TanStack Start](https://img.shields.io/badge/TanStack_Start-latest-black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-purple)

<a href="https://trendshift.io/repositories/13077" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13077" alt="Magic Resume | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>


简体中文 | [English](./README.md)

</div>

Magic Resume 是一个现代化的在线简历编辑器，让创建专业简历变得简单有趣。基于 TanStack Start 和 Motion 构建，支持实时预览和自定义主题。

## 📸 项目截图

<img width="1920" height="1440" alt="85_1x_shots_so" src="https://github.com/user-attachments/assets/4667e49a-7bf2-4379-9390-725e42799dc7" />


## ✨ 特性

- 🚀 基于 TanStack Start 构建
- 💫 流畅的动画效果 (Motion)
- 🎨 自定义主题支持
- 🌙 深色模式
- 📤 导出为 PDF
- 🔄 实时预览
- 💾 自动保存
- 🔒 硬盘级存储

## 🛠️ 技术栈

- TanStack Start
- TypeScript
- Motion
- Tiptap
- Tailwind CSS
- Zustand
- Shadcn/ui
- Lucide Icons

## 🚀 快速开始

1. 克隆项目

```bash
git clone git@github.com:JOYCEQL/magic-resume.git
cd magic-resume
```

2. 安装依赖

```bash
pnpm install
```

3. 启动开发服务器

```bash
pnpm dev
```

4. 打开浏览器访问 `http://localhost:3000`

## 📦 构建打包

```bash
pnpm build
```

### AI 厂商网络配置

Cloudflare Workers 使用平台原生 `fetch`，无需配置应用层代理。Node.js 或 Docker 部署在无法直连 OpenAI、Gemini、Anthropic 的地区时，可以设置 `AI_PROXY_URL`；同时兼容 `HTTPS_PROXY` 和 `HTTP_PROXY`。

```bash
AI_PROXY_URL=http://127.0.0.1:7890
```

DeepSeek、通义千问和豆包保持直连。

## 🐳 Docker 部署

### Docker Compose

1. 确保你已经安装了 Docker 和 Docker Compose

2. 在项目根目录运行：

```bash
docker compose up -d
```

这将会：

- 自动构建应用镜像
- 在后台启动容器



## 🌐 门户介绍（Rhine Lab 终端）

本项目的首页不是传统营销落地页，而是一座可交互的 **Rhine Lab 三维档案终端**：从白底开场进入五列循环档案阵列，抽取模板、观察玻璃解密与文档揭示，再从右上角工作台入口进入简历编辑功能。

该门户基于开源项目 **[RhineLabUI](https://github.com/LBEILC/RhineLabUI)** 移植并接入本应用：

- 原项目是对《明日方舟》特别映像「莱茵生命：访问」终端界面的非官方复刻
- 原作者 / 版权署名：**LBEILC**（Copyright (c) 2026 LBEILC）
- 原项目在线演示：[rhine.lubeiluchen.cc](https://rhine.lubeiluchen.cc/)
- 原参考 PV：[BV1rr4y1b7sz](https://www.bilibili.com/video/BV1rr4y1b7sz/)

本仓库中的门户代码位于 `src/rhine/`，在保留开场、阵列浏览、模板详情与 360° 模型查看等能力的同时，将「进入工作台」等操作改为路由到本应用的简历管理、模板库、AI 服务商与通用设置页面。

## 📚 参考与资源说明

- **参考作品**：《明日方舟》特别映像「莱茵生命：访问」。本项目与官方制作方无隶属关系；原 PV、相关名称、标志与设定的权利归各自权利人所有。原片未展示的档案摘要、演示数据等属于移植扩展内容。
- **RhineLabUI**：门户三维终端、开场动画、档案阵列与模型查看器主要来自 [LBEILC/RhineLabUI](https://github.com/LBEILC/RhineLabUI)（MIT）。模型为原项目重新制作；实时折射、灯光与细节与原 PV 仍有差异。身份验证画面是演示状态机，不连接真实身份服务。
- **字体**：门户界面使用 MiSans 等字体文件时，继续遵循小米官方字体许可及原项目附带的版权说明。
- **第三方依赖**：Rolling Number、Three.js 等各自遵循原有许可证。

## 📝 许可协议与使用限制

本项目源代码基于 **Apache 2.0** 协议发布，并附带**仅限非商业使用**的额外限制：

- **个人免费**：仅限个人非商业目的（如个人学习交流、制作个人简历）免费使用。
- **禁止商用**：不得将本项目用于任何商业目的，包括将其作为收费或营利性服务（如 SaaS/PaaS）对外提供、用于企业商业运营、转售或进行二次商业化开发，**无论是否修改源代码**。

详情请查看 [LICENSE](LICENSE) 文件。

### 门户相关开源许可

本项目移植的 Rhine Lab 门户终端部分，其原项目 [RhineLabUI](https://github.com/LBEILC/RhineLabUI) 中自行编写且有权授权的程序代码、建模脚本及配套技术文档采用 **MIT License**，版权署名为 **Copyright (c) 2026 LBEILC**。

MIT 授权不覆盖第三方权利：

- 《明日方舟》及莱茵生命相关名称、标志、设定、原 PV 和原作视觉设计，不因开源而获得额外授权。
- Blender / GLB 模型、图像等非代码资产未另行声明为 MIT。
- MiSans、Rolling Number 及其他第三方依赖继续遵循各自许可证。

复用门户代码时，请同时保留上述版权声明，并按用途处理涉及的第三方素材与标志。Magic Resume 本体仍适用本仓库的 Apache 2.0 + 非商业使用限制。

## 🗺️ 路线图

- [x] AI 辅助编写
- [x] 多语言支持
- [ ] 支持更多简历模板
- [x] 更多格式导出
- [x] 自定义模型
- [x] 自动一页纸
- [x] 导入 PDF, Markdown 等
- [ ] 在线简历托管

## 📈 Star History

<a href="https://star-history.com/#JOYCEQL/magic-resume&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=JOYCEQL/magic-resume&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=JOYCEQL/magic-resume&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=JOYCEQL/magic-resume&type=Date" />
 </picture>
</a>

## 📞 联系方式

可以通过以下方式关注最新动态:

- 作者：SiYue
- X: @GuangzhouY81070
- Discord: 欢迎加入群组 https://discord.gg/9mWgZrW3VN
- 邮箱：18806723365@163.com
  

- 项目主页：https://github.com/JOYCEQL/magic-resume

## 🌟 支持项目

<img src="https://github.com/JOYCEQL/picx-images-hosting/raw/master/pintu-fulicat.com-1741081632544.26lmg2uc2m.webp" width="320"  alt="图片描述">

## ❤️ 赞助名单

<div align="center">
  <h3>Sponsors</h3>
  <p>如果您赞助了本项目，但没展示在这里，请联系我。</p>
  <p>
    <a href="https://github.com/yj147">
      <img src="https://github.com/yj147.png?size=40" width="40" height="40" alt="@yj147" />
    </a>
    <a href="https://github.com/someone1128">
      <img src="https://github.com/someone1128.png?size=40" width="40" height="40" alt="@someone1128" />
    </a>
    <!-- 在这里继续添加赞助者：
    <a href="https://github.com/<username>">
      <img src="https://github.com/<username>.png?size=40" width="40" height="40" alt="@<username>" />
    </a>
    -->
  </p>
</div>
