import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://xiaozhangtx.vercel.app", // replace this with your deployed domain
  author: "xiaozhangtx",
  desc: "分享小张日常的生活博客.",
  title: "小张的生活馆",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/xiaozhangtx0307",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:2446159171@qq.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
