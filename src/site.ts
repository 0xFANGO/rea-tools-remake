/**
 * Configuration layer for the remake.
 *
 * The requirements brief asks that brand name, repository, community links and
 * the install command live in configuration rather than being repeated inside
 * each template, so a future fork can be rebranded without editing markup.
 */
export const site = {
  locale: "zh-CN",
  dir: "ltr",
  brand: { name: "REA", caption: "Reverse Engineer Anything" },
  title: "REA — 和编程助手一起做逆向工程",
  description:
    "和编程助手一起分析应用、二进制文件和浏览器行为。跟着清晰的指南，体验 REA 的交互示例。",
  socialCardAlt: "REA-了解软件的工作原理。 逆向工程与你的编程助手.",
  install: { command: "npx rea-agents@latest setup" },
  links: {
    repository: "https://github.com/morluto/rea",
    license: "https://github.com/morluto/rea/blob/main/LICENSE",
    discord: "https://discord.gg/GkcryMnJDM",
    x: "https://x.com/reatools",
  },
  /**
   * The reference site this remake studies. Kept explicit so every page can
   * link back to the original instead of implying the remake is the real thing.
   */
  reference: { name: "rea.tools", home: "https://rea.tools/zh-CN/" },
} as const;

/** The reference site's locale list, used for the language menu. */
export const locales = [
  { code: "en", name: "English", dir: "ltr", href: "https://rea.tools/" },
  { code: "zh-CN", name: "简体中文", dir: "ltr", href: "https://rea.tools/zh-CN/" },
  { code: "zh-TW", name: "繁體中文", dir: "ltr", href: "https://rea.tools/zh-TW/" },
  { code: "ja", name: "日本語", dir: "ltr", href: "https://rea.tools/ja/" },
  { code: "ko", name: "한국어", dir: "ltr", href: "https://rea.tools/ko/" },
  { code: "tr", name: "Türkçe", dir: "ltr", href: "https://rea.tools/tr/" },
  { code: "ru", name: "Русский", dir: "ltr", href: "https://rea.tools/ru/" },
  { code: "vi", name: "Tiếng Việt", dir: "ltr", href: "https://rea.tools/vi/" },
  { code: "th", name: "ไทย", dir: "ltr", href: "https://rea.tools/th/" },
  { code: "de", name: "Deutsch", dir: "ltr", href: "https://rea.tools/de/" },
  { code: "es", name: "Español", dir: "ltr", href: "https://rea.tools/es/" },
  { code: "fr", name: "Français", dir: "ltr", href: "https://rea.tools/fr/" },
  { code: "uk", name: "Українська", dir: "ltr", href: "https://rea.tools/uk/" },
  { code: "pl", name: "Polski", dir: "ltr", href: "https://rea.tools/pl/" },
  { code: "pt-BR", name: "Português (Brasil)", dir: "ltr", href: "https://rea.tools/pt-BR/" },
  { code: "ar", name: "العربية", dir: "rtl", href: "https://rea.tools/ar/" },
  { code: "fa", name: "فارسی", dir: "rtl", href: "https://rea.tools/fa/" },
  { code: "id", name: "Bahasa Indonesia", dir: "ltr", href: "https://rea.tools/id/" },
  { code: "it", name: "Italiano", dir: "ltr", href: "https://rea.tools/it/" },
  { code: "el", name: "Ελληνικά", dir: "ltr", href: "https://rea.tools/el/" },
] as const;

/**
 * Homepage table of contents. The reference site lists the first seven
 * anchors here and leaves the support section out.
 */
export const homeToc = [
  { id: "setup", label: "安装与配置 REA" },
  { id: "what-is-re", label: "如何工作" },
  { id: "dinosaur", label: "恐龙游戏" },
  { id: "calculator", label: "计算器" },
  { id: "showcases", label: "案例展示" },
  { id: "try-rea", label: "试试REA " },
  { id: "analyze", label: "更深入" },
] as const;

export const navigation = [
  { href: "get-started/", label: "开始使用", className: "nav-start" },
  { href: "showcase/", label: "案例展示" },
  { href: "blog/", label: "博客" },
  { href: "guides/", label: "指南" },
  { href: "faq/", label: "FAQ" },
  { href: "contributors/", label: "贡献者" },
] as const;
