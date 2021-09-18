import { Language } from "../LangSelector/types";
import { FlexProps } from "../Box";

export type FooterLinkType = {
  label: string;
  items: { label: string; href?: string; isHighlighted?: boolean }[];
};

export type FooterProps = {
  items: FooterLinkType[];
  buyVXCLabel: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  vxcPriceUsd?: number;
  vchipPriceUsd?: number;
  bankPriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
} & FlexProps;
