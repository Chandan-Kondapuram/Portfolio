// Apple-Style Minimalist Theme - Clean, Professional, Spacious

const lightTheme = {
  name: "light",
  // Clean backgrounds - Pure white, no gradients
  body: "#ffffff",
  bodyAlt: "#f5f5f7",

  // Text colors - Apple-style hierarchy
  text: "#1d1d1f",
  textBright: "#000000",
  dark: "#000000",
  secondaryText: "#6e6e73",

  // Accent color - Apple blue
  accentColor: "#0071e3",
  accentBright: "#0077ed",
  accentGradient: "#0071e3",

  // Card properties - Clean with subtle shadows
  glassBackground: "#ffffff",
  glassBorder: "rgba(0, 0, 0, 0.04)",
  glassBackdropBlur: "none",
  glassShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",

  // Card backgrounds
  projectCard: "#ffffff",
  cardHover: "#f5f5f7",

  // Avatar colors (keep for compatibility)
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#f5f5f7",
  imageClothes: "#e8e8ed",
  avatarMisc: "#f5f5f7",
  avatarShoes: "#d2d2d7",

  // Button styles - Clean Apple style
  buttonBackground: "#0071e3",
  buttonHover: "#0077ed",

  // Header/Navigation - Minimal, clean
  headerBackground: "rgba(255, 255, 255, 0.8)",
  headerBlur: "blur(20px)",

  // Additional Apple-style properties
  borderColor: "rgba(0, 0, 0, 0.1)",
  hoverShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
  divider: "#d2d2d7",
};

const darkTheme = {
  name: "dark",
  // Clean dark backgrounds - Apple dark mode style
  body: "#000000",
  bodyAlt: "#1d1d1f",

  // Text colors - Apple dark mode
  text: "#f5f5f7",
  textBright: "#ffffff",
  dark: "#000000",
  secondaryText: "#a1a1a6",

  // Accent color - Apple blue for dark mode
  accentColor: "#2997ff",
  accentBright: "#409cff",
  accentGradient: "#2997ff",

  // Card properties - Dark with subtle shadows
  glassBackground: "#1d1d1f",
  glassBorder: "rgba(255, 255, 255, 0.1)",
  glassBackdropBlur: "none",
  glassShadow: "0 2px 12px rgba(0, 0, 0, 0.5)",

  // Card backgrounds
  projectCard: "#1d1d1f",
  cardHover: "#2d2d2f",

  // Avatar colors (keep for compatibility)
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#1d1d1f",
  imageClothes: "#2d2d2f",
  avatarMisc: "#1d1d1f",
  avatarShoes: "#2d2d2f",

  // Button styles
  buttonBackground: "#2997ff",
  buttonHover: "#409cff",

  // Header/Navigation
  headerBackground: "rgba(0, 0, 0, 0.8)",
  headerBlur: "blur(20px)",

  // Additional properties
  borderColor: "rgba(255, 255, 255, 0.1)",
  hoverShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
  divider: "#424245",
};

export const themes = { light: lightTheme, dark: darkTheme };
