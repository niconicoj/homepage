export interface LinkCategory {
  label: string;
  headerColor: string;
  links: Link[]
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
        url: "https://github.com"
      },
      {
        label: "personal gitlab",
        url: "https://gitlab.niconico.io"
      },
      {
        label: "stackoverflow",
        url: "https://github.com"
      },
      {
        label: "archwiki",
        url: "https://wiki.archlinux.org/"
      }

    ]
  },
  {
    label: "~/news",
    headerColor: "#d699b6",
    links: [
      {
        label: "this week in rust",
        url: "https://this-week-in-rust.org"
      },
      {
        label: "medium",
        url: "https://github.com"
      },
      {
        label: "baby steps",
        url: "https://smallcultfollowing.com/babysteps/"
      },
      {
        label: "archlinux",
        url: "https://archlinux.org"
      }
    ]
  },
  {
    label: "~/social",
    headerColor: "#a7c080",
    links: [
      {
        label: "twitter",
        url: "https://twitter.com"
      },
      {
        label: "reddit",
        url: "https://reddit.com"
      },
      {
        label: "linkedin",
        url: "https://linkedin.com"
      },
      {
        label: "gmail",
        url: "https://mail.google.com"
      }
    ]
  },
  {
    label: "~/fun",
    headerColor: "#dbbc7f",
    links: [
      {
        label: "youtube",
        url: "https://youtube.com"
      },
      {
        label: "twitch",
        url: "https://twitch.tv"
      },
      {
        label: "chess",
        url: "https://chess.com"
      }
    ]
  }
];
