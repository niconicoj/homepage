export interface LinkCategory {
  label: string;
  headerColor: string;
  links: Link[];
}

export interface Link {
  label: string;
  url: string;
}

export const categories: LinkCategory[] = [
  {
    label: "~/dev",
    headerColor: "#7fbbb3",
    links: [
      {
        label: "github",
        url: "https://github.com",
      },
      {
        label: "personal gitlab",
        url: "https://gitlab.niconico.io",
      },
      {
        label: "stackoverflow",
        url: "https://stackoverflow.com",
      },
      {
        label: "Archwiki",
        url: "https://wiki.archlinux.org/",
      },
      {
        label: "awesome-rust",
        url: "https://github.com/rust-unofficial/awesome-rust",
      },
      {
        label: "Udemy",
        url: "https://udemy.com",
      },
    ],
  },
  {
    label: "~/news",
    headerColor: "#d699b6",
    links: [
      {
        label: "This Week in Rust",
        url: "https://this-week-in-rust.org",
      },
      {
        label: "ithout.boats",
        url: "https://without.boats",
      },
      {
        label: "Baby steps",
        url: "https://smallcultfollowing.com/babysteps/",
      },
      {
        label: "Archlinux",
        url: "https://archlinux.org",
      },
      {
        label: "Lwn",
        url: "https://lwn.net/",
      },
      {
        label: "Phoronix",
        url: "https://phoronix.com/",
      },
    ],
  },
  {
    label: "~/social",
    headerColor: "#a7c080",
    links: [
      {
        label: "Twitter",
        url: "https://twitter.com",
      },
      {
        label: "Bluesky",
        url: "https://bsky.app",
      },
      {
        label: "Reddit",
        url: "https://reddit.com",
      },
      {
        label: "Linkedin",
        url: "https://linkedin.com",
      },
      {
        label: "Gmail",
        url: "https://mail.google.com",
      },
    ],
  },
  {
    label: "~/fun",
    headerColor: "#dbbc7f",
    links: [
      {
        label: "Youtube",
        url: "https://youtube.com",
      },
            {
        label: "Netflix",
        url: "https://netflix.com",
      },
      {
        label: "Twitch",
        url: "https://twitch.tv",
      },
      {
        label: "Chess",
        url: "https://chess.com",
      },
    ],
  },
];
