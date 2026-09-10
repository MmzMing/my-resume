<div align="center">

# ✨ Magic Resume ✨

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![TanStack Start](https://img.shields.io/badge/TanStack_Start-latest-black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-purple)

<a href="https://trendshift.io/repositories/13077" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13077" alt="Magic Resume | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[简体中文](./README.zh-CN.md) | English

</div>

Magic Resume is a modern online resume editor that makes creating professional resumes simple and enjoyable. Built with TanStack Start and Framer Motion, it supports real-time preview and custom themes.

## 📸 Screenshots

<img width="1920" height="1440" alt="336_1x_shots_so" src="https://github.com/user-attachments/assets/18969a17-06f8-4a4b-94eb-284ba8442620" />


## ✨ Features

- 🚀 Built with TanStack Start
- 💫 Smooth animations (Framer Motion)
- 🎨 Custom theme support
- 📱 Responsive design
- 🌙 Dark mode
- 📤 Export to PDF
- 🔄 Real-time preview
- 💾 Auto-save
- 🔒 Local storage

## 🛠️ Tech Stack

- TanStack Start
- TypeScript
- Motion
- Tiptap
- Tailwind CSS
- Zustand
- Shadcn/ui
- Lucide Icons

## 🚀 Quick Start

1. Clone the project

```bash
git clone git@github.com:JOYCEQL/magic-resume.git
cd magic-resume
```

2. Install dependencies

```bash
pnpm install
```

3. Start development server

```bash
pnpm dev
```

4. Open browser and visit `http://localhost:3000`

## 📦 Build and Deploy

```bash
pnpm build
```

### AI provider networking

Cloudflare Workers use the platform's native `fetch` and do not need an application-level proxy. For Node.js or Docker deployments in regions that cannot directly reach OpenAI, Gemini, or Anthropic, set `AI_PROXY_URL`. `HTTPS_PROXY` and `HTTP_PROXY` are also supported as fallbacks.

```bash
AI_PROXY_URL=http://127.0.0.1:7890
```

DeepSeek, Qwen, and Doubao continue to use a direct connection.


## 🐳 Docker Deployment

### Docker Compose

1. Ensure you have Docker and Docker Compose installed

2. Run the following command in the project root directory:

```bash
docker compose up -d
```

This will:

- Automatically build the application image
- Start the container in the background


## 🌐 Portal (Rhine Lab Terminal)

The app homepage is not a classic marketing landing page. It is an interactive **Rhine Lab 3D archive terminal**: a white-screen boot sequence opens into a looping five-column archive array, where you can pick a template, watch glass decryption and document reveal, then enter the resume workbench from the top-right navigation.

This portal is adapted from the open-source project **[RhineLabUI](https://github.com/LBEILC/RhineLabUI)**:

- The original is an unofficial recreation of the *Arknights* special feature “Rhine Lab: Access” terminal UI
- Original author / copyright: **LBEILC** (Copyright (c) 2026 LBEILC)
- Original demo: [rhine.lubeiluchen.cc](https://rhine.lubeiluchen.cc/)
- Reference PV: [BV1rr4y1b7sz](https://www.bilibili.com/video/BV1rr4y1b7sz/)

Portal code in this repo lives under `src/rhine/`. Boot, archive browsing, template detail, and the 360° model viewer are retained, while workbench actions route into this app’s resumes, templates, AI providers, and settings pages.

## 📚 References and Resources

- **Reference work**: *Arknights* special feature “Rhine Lab: Access”. This project is not affiliated with the official creators. Rights to the original PV, related names, logos, and settings remain with their respective owners. Archive summaries and demo data added for this integration are extensions, not original PV content.
- **RhineLabUI**: The 3D portal, boot animation, archive array, and model viewer are primarily adapted from [LBEILC/RhineLabUI](https://github.com/LBEILC/RhineLabUI) (MIT). Models were rebuilt in that project; real-time refraction, lighting, and details still differ from the original PV. The authorization screen is a demo state machine and does not connect to real identity services.
- **Fonts**: When MiSans or similar font files are used by the portal, they remain subject to Xiaomi’s official font license and the copyright notes shipped with the original project.
- **Third-party dependencies**: Rolling Number, Three.js, and others keep their own licenses.

## 📝 License and Usage Restrictions

The source code of this project is released under the **Apache 2.0** license with an additional **non-commercial use restriction**:

- **Free for Personal Use**: Free to use purely for personal, non-commercial purposes (e.g., personal learning, creating your own resume).
- **Commercial Use Prohibited**: The project may not be used for any commercial purpose, including providing it as a paid or profit-generating service (such as SaaS/PaaS), enterprise commercial operations, resale, or secondary commercial development, **regardless of whether the source code has been modified**.

Please see the [LICENSE](LICENSE) file for detailed terms.

### Portal open-source license

Program code, modeling scripts, and accompanying technical documentation in the original [RhineLabUI](https://github.com/LBEILC/RhineLabUI) project that the author had the right to license are released under the **MIT License**, with copyright attributed to **Copyright (c) 2026 LBEILC**.

The MIT grant does not cover third-party rights:

- *Arknights* and Rhine Lab related names, logos, settings, the original PV, and original visual design are not granted additional rights by open-sourcing this project.
- Blender / GLB models, images, and other non-code assets are not separately declared MIT.
- MiSans, Rolling Number, and other third-party dependencies remain under their own licenses.

When reusing portal code, keep the copyright notice above and handle third-party assets and marks according to your use case. Magic Resume itself remains under this repository’s Apache 2.0 license with the non-commercial restriction.

## 🗺️ Roadmap

- [x] AI-assisted writing
- [x] Multi-language support
- [ ] Support for more resume templates
- [x] Support for more export formats
- [x] Import PDF, Markdown, etc.
- [x] Custom model
- [x] Auto one page
- [ ] Online resume hosting

## 📈 Star History

<a href="https://star-history.com/#JOYCEQL/magic-resume&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=JOYCEQL/magic-resume&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=JOYCEQL/magic-resume&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=JOYCEQL/magic-resume&type=Date" />
 </picture>
</a>

## 📞 Contact

You can follow the latest updates via:

- Author: Siyue
- X: @GuangzhouY81070
- Discord: Join our community https://discord.gg/9mWgZrW3VN
- Email: 18806723365@163.com


- Project Homepage: https://github.com/JOYCEQL/magic-resume

## 🌟 Support

If you find this project helpful, please give it a star ⭐️

## ❤️ Sponsors

<div align="center">
  <h3>Sponsors</h3>
  <p>If you sponsored this project but are not listed here, please contact me.</p>
  <p>
    <a href="https://github.com/yj147">
      <img src="https://github.com/yj147.png?size=40" width="40" height="40" alt="@yj147" />
    </a>
    <a href="https://github.com/someone1128">
      <img src="https://github.com/someone1128.png?size=40" width="40" height="40" alt="@someone1128" />
    </a>
    <!-- Add more sponsors here:
    <a href="https://github.com/<username>">
      <img src="https://github.com/<username>.png?size=40" width="40" height="40" alt="@<username>" />
    </a>
    -->
  </p>
</div>
