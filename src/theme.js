// Glassmorphism Theme Presets - Professional Software Developer & Data Scientist

const lightTheme = {
  name: "light",
  // Gradient backgrounds for glassmorphism
  body: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  bodyAlt: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",

  // Text colors
  text: "#2d3748",
  textBright: "#1a202c",
  dark: "#000000",
  secondaryText: "#4a5568",

  // Accent colors - Tech-focused blue/purple
  accentColor: "#667eea",
  accentBright: "#5a67d8",
  accentGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

  // Glass card properties
  glassBackground: "rgba(255, 255, 255, 0.25)",
  glassBorder: "rgba(255, 255, 255, 0.18)",
  glassBackdropBlur: "blur(20px)",
  glassShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",

  // Card backgrounds with glassmorphism
  projectCard: "rgba(255, 255, 255, 0.15)",
  cardHover: "rgba(255, 255, 255, 0.35)",

  // Avatar colors (keep for compatibility)
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "rgba(255, 255, 255, 0.1)",
  imageClothes: "rgba(102, 126, 234, 0.3)",
  avatarMisc: "rgba(255, 255, 255, 0.2)",
  avatarShoes: "rgba(102, 126, 234, 0.4)",

  // Button styles
  buttonBackground: "rgba(255, 255, 255, 0.3)",
  buttonHover: "rgba(255, 255, 255, 0.5)",

  // Header/Navigation
  headerBackground: "rgba(255, 255, 255, 0.1)",
  headerBlur: "blur(10px)",
};

const darkTheme = {
  name: "dark",
  // Gradient backgrounds - Deep space tech theme
  body: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  bodyAlt: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",

  // Text colors
  text: "#e2e8f0",
  textBright: "#ffffff",
  dark: "#000000",
  secondaryText: "#a0aec0",

  // Accent colors - Vibrant tech colors (cyan/blue/purple)
  accentColor: "#00d4ff",
  accentBright: "#00f5ff",
  accentGradient: "linear-gradient(135deg, #00d4ff 0%, #667eea 100%)",

  // Glass card properties - Dark glassmorphism
  glassBackground: "rgba(255, 255, 255, 0.05)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
  glassBackdropBlur: "blur(25px)",
  glassShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",

  // Card backgrounds
  projectCard: "rgba(255, 255, 255, 0.05)",
  cardHover: "rgba(255, 255, 255, 0.15)",

  // Avatar colors (keep for compatibility)
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "rgba(0, 0, 0, 0.3)",
  imageClothes: "rgba(0, 212, 255, 0.2)",
  avatarMisc: "rgba(255, 255, 255, 0.05)",
  avatarShoes: "rgba(0, 212, 255, 0.3)",

  // Button styles
  buttonBackground: "rgba(255, 255, 255, 0.1)",
  buttonHover: "rgba(0, 212, 255, 0.3)",

  // Header/Navigation
  headerBackground: "rgba(0, 0, 0, 0.2)",
  headerBlur: "blur(15px)",
};

export const themes = { light: lightTheme, dark: darkTheme };
