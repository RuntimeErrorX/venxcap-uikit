import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   status: status.LIVE,
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Factory",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "Router V2",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "Master Chef",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "The Wolf",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "(vXc) Venetian X",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "(vChip) vChip",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "(Bank) Bank",
        href: "https://bscscan.com/token/[contract%20address]",
      },
      {
        label: "(JKR) Jokers Rewards",
        href: "https://bscscan.com/token/[contract%20address]",
      },
    ],
  },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Contact',
      //   href: 'https://docs.venetianxcapital.finance/contact-us',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      {
        label: 'Github',
        href: 'https://github.com/venetianxcapital',
      },
      {
        label: 'Docs',
        href: 'https://docs.venetianxcapital.finance',
      },
      {
        label: 'Blog',
        href: 'https://venetianxcapital.medium.com',
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/VenetianXCapital",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/PancakeSwapAnn",
      // },
      // {
      //   label: "Whale Alert",
      //   href: "https://t.me/PancakeSwapWhales",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/capitalvenetian",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
