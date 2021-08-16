import { Colors } from "./types";

export const baseColors = {
  failure: "#732020",
  // primary: "#732020",
  // primaryBright: "#D94141",
  // primaryDark: "#0E232E",
  // secondary: "#71AED9",
  success: "#71AED9",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#7a2a2a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#732020",
  primaryBright: "#D94141",
  primaryDark: "#0E232E",
  secondary: "#71AED9",
  background: "#F2E8DF",
  backgroundDisabled: "#F2E8DF",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#261313",
  invertedContrast: "#F2BC79",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#732020",
  textDisabled: "#BDC2C4",
  textSubtle: "#71AED9",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#D94141",
  primaryBright: "#71AED9",
  primaryDark: "#0E232E",
  secondary: "#F2E8DF",
  background: "#313235", // "#343135",
  backgroundDisabled: "#2c2626",
  backgroundAlt: "#070c12", // 27262c
  cardBorder: "#323e41",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#b55555",
  input: "#422c2c",
  inputSecondary: "#302121",
  tertiary: "#1c1c1c", //141414 0f0f0f
  text: "#F4EEFF",
  textDisabled: "#716161",
  textSubtle: "#F2BC79",
  disabled: "#634b4b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #314e5c 0%, #542a2a 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #542a2a 0%, #314e5c 100%)",
    cardHeader: "linear-gradient(166.77deg, #2a2e3b 0%, #453030 100%)",
    blue: "linear-gradient(210.73deg, #22292e 0%, #71AED9 100%)",
    violet: "linear-gradient(160.73deg, #291010 0%, #732020 100%)",
    violetAlt: "linear-gradient(180deg, #140a0a 0%, #b31414 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
