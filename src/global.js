import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    transition: background 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Apple-style card base */
  .apple-card {
    background: ${({ theme }) => theme.projectCard};
    border-radius: 18px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    box-shadow: ${({ theme }) => theme.glassShadow};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .apple-card:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.hoverShadow};
    background: ${({ theme }) => theme.cardHover};
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection color - Apple blue */
  ::selection {
    background: ${({ theme }) => theme.accentColor};
    color: white;
  }

  /* Minimal scrollbar - Apple style */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondaryText};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.text};
  }

  /* Clean focus styles */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accentColor};
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Typography helpers */
  .headline {
    font-size: 56px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .body-large {
    font-size: 21px;
    line-height: 1.5;
    font-weight: 400;
  }

  /* Smooth animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in {
    animation: fadeIn 0.8s ease-out;
  }
`;
