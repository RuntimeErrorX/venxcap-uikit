import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
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

export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/swap",
    icon: "Swap",
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
    label: "Earn",
    href: "/",
    icon: "Earn",
    items: [
      {
        label: "Earn",
        href: "/",
      },
      {
        label: "Farms",
        href: "/",
      },
      {
        label: "Pools",
        href: "/",
      },
    ],
  },
  {
    label: "Win",
    href: "/",
    icon: "Trophy",
    items: [
      {
        label: "Win",
        href: "/",
      },
      {
        label: "Predictions",
        href: "/",
      },
      {
        label: "Lottery",
        href: "/",
      },
    ],
  },
  {
    label: "",
    href: "/",
    icon: "More",
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
      {
        label: "Info & Analytics",
        href: "/",
      },
      // {
      //   label: "IFO Token Sales",
      //   href: "/",
      //   status: status.SOON,
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: "NFT Collectibles",
      //   href: "/",
      // },
      // {
      //   label: "Team Leaderboard",
      //   href: "/",
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      {
        label: "Blog",
        href: "https://venetianxcapital.medium.com",
      },
      {
        label: "Docs & Guides",
        href: "/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://venetianxcapital.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 56;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
