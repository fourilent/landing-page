import type { Column, QNA } from "./types";

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
export const faq: QNA[] = [
  {
    question: "Who am I?",
    answer: `A random individual on the Internet obsessed with all 
    things technology. Specifically DevOps, Cloud Native Computing, 
    and Cybersecurity.`,
  },
  {
    question: "What is this site?",
    answer: `A landing page for my various socials, public services 
    and other things. I do all this because I enjoy it.`,
  },
  {
    question: "This website looks cool, how did you make it?",
    answer: `Thanks! It's built with <a href="https://astro.build/">
    Astro</a> and <a href="https://svelte.dev/">Svelte</a>. It's 
    actually quite simple. You can find the source code 
    <a href="https://github.com/fourilent/landing-page">here</a>.`,
  },
  {
    question: "Can you add a new service?",
    answer: `Most of the public services I provide are <i>ephemeral</i>
    , meaning I don't plan to store their data permanently. I do not 
    have the infrastructure to provide 100% uptime forever, but if you 
    have a service that fits this criteria, feel free to contact me!`,
  },
  {
    question: "How are you hosting all your stuff?",
    answer: `Everything runs on a single server in my home, traffic is 
    proxied by a VPS<sup>mostly</sup>. I use Docker to containerize 
    all my services.`,
  },
];
