// Netflix-Inspired Hero Theme - Cinematic, Bold, Dark

const lightTheme = {
  name: "light",
  // Netflix light mode (rarely used, but available)
  body: "#f3f3f3",
  bodyAlt: "#ffffff",

  // Text colors
  text: "#000000",
  textBright: "#000000",
  dark: "#141414",
  secondaryText: "#564d4d",

  // Accent color - Netflix red
  accentColor: "#E50914",
  accentBright: "#f40612",
  accentGradient: "linear-gradient(135deg, #E50914 0%, #f40612 100%)",

  // Card properties
  glassBackground: "#ffffff",
  glassBorder: "rgba(0, 0, 0, 0.1)",
  glassBackdropBlur: "none",
  glassShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",

  // Card backgrounds
  projectCard: "#ffffff",
  cardHover: "#f8f8f8",

  // Avatar colors (keep for compatibility)
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#f3f3f3",
  imageClothes: "#e0e0e0",
  avatarMisc: "#f3f3f3",
  avatarShoes: "#d0d0d0",

  // Button styles - Netflix red
  buttonBackground: "#E50914",
  buttonHover: "#f40612",

  // Header/Navigation
  headerBackground: "rgba(255, 255, 255, 0.95)",
  headerBlur: "blur(10px)",

  // Additional properties
  borderColor: "rgba(0, 0, 0, 0.08)",
  hoverShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
  divider: "#e0e0e0",
};

const darkTheme = {
  name: "dark",
  // Netflix dark theme - Signature look
  body: "#141414",
  bodyAlt: "#181818",

  // Text colors - Netflix style
  text: "#ffffff",
  textBright: "#ffffff",
  dark: "#000000",
  secondaryText: "#b3b3b3",

  // Accent color - Netflix red
  accentColor: "#E50914",
  accentBright: "#f40612",
  accentGradient: "linear-gradient(135deg, #E50914 0%, #f40612 100%)",

  // Card properties - Dark Netflix cards
  glassBackground: "#2f2f2f",
  glassBorder: "rgba(255, 255, 255, 0.05)",
  glassBackdropBlur: "none",
  glassShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",

  // Card backgrounds
  projectCard: "#2f2f2f",
  cardHover: "#3f3f3f",

  // Avatar colors (keep for compatibility)
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#2f2f2f",
  imageClothes: "#3f3f3f",
  avatarMisc: "#2f2f2f",
  avatarShoes: "#3f3f3f",

  // Button styles - Netflix red
  buttonBackground: "#E50914",
  buttonHover: "#f40612",

  // Header/Navigation - Transparent black that becomes solid on scroll
  headerBackground: "rgba(20, 20, 20, 0.9)",
  headerBlur: "blur(10px)",

  // Additional properties
  borderColor: "rgba(255, 255, 255, 0.1)",
  hoverShadow: "0 8px 24px rgba(0, 0, 0, 0.8)",
  divider: "#3f3f3f",
};

export const themes = { light: lightTheme, dark: darkTheme };
