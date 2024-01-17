import type { Column } from "./types";

export const title: string = "frlt.one";
export const description: string = "fourilent's landing page";
export const body: Column[] = [
  {
    title: "Socials",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/fourilent/",
        icon: "mdi:github",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@fourilent/",
        icon: "mdi:youtube",
      },
      {
        name: "X/Twitter",
        url: "https://twitter.com/fourilent/",
        icon: "mdi:twitter",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Upload",
        url: "https://a.frlt.one/",
        icon: "mdi:upload",
      },
      {
        name: "Paste",
        url: "https://b.frlt.one/",
        icon: "mdi:clipboard-text",
      },
      {
        name: "Shorten",
        url: "https://c.frlt.one/",
        icon: "mdi:link",
      },
      {
        name: "Search",
        url: "https://s.frlt.one/",
        icon: "mdi:magnify",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Email",
        url: "mailto:fourilent@frlt.one",
        icon: "mdi:email",
      },
      {
        name: "Discord",
        url: "https://discord.com/users/208539097113821184",
        icon: "mdi:discord",
      },
      {
        name: "XMPP",
        url: "xmpp:fourilent@disroot.org",
        icon: "mdi:chat",
      },
    ],
  },
];
export const footer: Column = {
  title: "Footer",
  links: [
    {
      name: "Status",
      url: "https://status.frlt.one/",
      icon: "mdi:server",
    },
    {
      name: "FAQ",
      url: "/faq",
      icon: "mdi:help",
    },
  ],
};
