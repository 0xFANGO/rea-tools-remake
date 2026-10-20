# rea-tools-remake

[rea.tools 简体中文首页](https://rea.tools/zh-CN/)的学习性复刻。**非官方项目，与 REA 作者无关。**

在线预览：<https://0xfango.github.io/rea-tools-remake/>

首页按参考站 1:1 复刻：八个区块、深浅主题、复制反馈、页内目录、两个可运行的演示、响应式断点与 SEO 结构。其余 18 条路由不在本次范围内，点进去会看到一页说明，并链接回参考站的真实页面——不做空壳页，也不做假按钮。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:4321/rea-tools-remake/ 。构建产物用 `npm run build`，预览用 `npm run preview`。无需任何后端或密钥。

推送到 `main` 后由 [Actions 工作流](.github/workflows/deploy.yml) 自动构建并发布到 GitHub Pages。

## 参数出处

视觉与行为不是照着截图目测的，全部来自 2026-10-20 对参考站公开资源的抓取与浏览器实测（REA 静态分析 + ego-browser 交互记录）。

| 参数 | 取值 | 出处 |
|---|---|---|
| 配色 token | `#ffffff` / `#1e1e2e`、`#20252b` / `#cdd6f4`、`#294f82` / `#89b4fa` 等 | 公开 `styles.css`，并与浏览器计算样式核对 |
| 容器宽度 | 最大 1080px，默认 `calc(100% - 3.5rem)`，≤640px 为 `calc(100% - 2.5rem)` | 公开 CSS |
| 桌面 H1 | 67.2px / weight 650 / 中文行高 1.35 | 1492px 视口实测 |
| 手机 H1 | 40.8px | 390px 视口实测 |
| 区块 H2 / 安装卡标题 | 38.4px / 20.8px | 桌面实测 |
| 正文 | 16px / 1.65 | 公开 CSS |
| 断点 | 1440 / 1279 / 1100 / 850 / 640 / 400px | 公开 CSS 媒体查询 |
| 恐龙速度规则 | 起始 6，低于 13 时每次 +0.001 | 还原自 Chromium 系小恐龙游戏 |
| 计算器 | 固定 200 与 10，加法/乘法两套规则 | 对 Windows 计算器 `%` 分支的分析 |

CSS 与 6 个 JS 模块（`theme` `main` `home` `dino-demo` `i18n` `dino-speed`）取自参考站公开发布的文件，逐字节保留，SHA256 与抓取清单一致。页面结构由参考站公开 HTML 移植，品牌、导航、链接与安装命令抽到了 `src/site.ts`。

## 还原程度

**已还原并实测通过：**

- 首页八区块结构、页头页脚、`.container` 12 处——与参考站 HTML 元素计数逐项一致
- 桌面浅色 / 深色、390px 手机三种呈现；390px 下横向溢出元素 0 个
- 主题切换：写入 localStorage、刷新保留、按钮可访问名与 `theme-color` 同步、首屏无闪白
- 计算器加法路径 `10 → 20 → 220`、乘法路径 `10 → 0.1 → 20`，重置保留当前模式，`=` 仅在 percent 阶段可用
- 恐龙滑块 2–18 / 步长 0.1 / 初值 6；拖动即取消自动加速；重新勾选自动回到 6.0
- 速度规则回放 0 / 1,000 / 4,000 / 10,000 次 = 6.000 / 7.000 / 10.000 / **13.001**，与参考记录四项全中
- 桌面关键尺寸：H1 67.2px、H2 38.4px、容器列宽 512px、header 89px、右侧目录 132px、默认折叠态页高 4777px
- 19 个页面共 221 条站内链接，断链 0

**有意的偏差：**

- `favicon.svg`、`social-card.svg`、`analyst-thinking.svg` 是本项目新画的替代品。参考站的这三个文件没有进抓取样本，这里不伪造原图。
- canonical、Open Graph 与站内链接全部指向本项目，不指向 `rea.tools`，避免复刻品和原站抢索引。
- 速度规则保留 `< 13` 再相加的写法，10,000 次后为 13.001。参考站就是这个精度边界，**没有**改成严格钳制到 13。

**未还原：** 其余 18 条内容路由、其他 19 种语言、RTL、贡献者搜索与恐龙实验室页。这些在参考站是真实存在的页面，本项目只给出说明页与原站链接。

## 来源与许可

- 参考站：<https://rea.tools/zh-CN/> ，源码仓库 <https://github.com/morluto/rea>（MIT）
- 恐龙速度规则源自 Chromium 系小恐龙游戏，BSD 3-Clause，全文见 [`public/assets/licenses/dinosaur.txt`](public/assets/licenses/dinosaur.txt)
- 文案、品牌名与安装命令沿用参考站，仅用于复刻对照；要做成自有站点，请先替换 `src/site.ts` 中的品牌、仓库与命令，并换掉正文内容。
