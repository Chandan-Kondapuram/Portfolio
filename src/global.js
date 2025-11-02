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
    background-attachment: fixed;
    background-size: cover;
    color: ${({ theme }) => theme.text};
    display: flex;
    min-height: 100vh;
    font-family: 'Inter', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-x: hidden;
  }

  /* Glassmorphism base styles */
  .glass-card {
    background: ${({ theme }) => theme.glassBackground};
    backdrop-filter: ${({ theme }) => theme.glassBackdropBlur};
    -webkit-backdrop-filter: ${({ theme }) => theme.glassBackdropBlur};
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.glassBorder};
    box-shadow: ${({ theme }) => theme.glassShadow};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
    background: ${({ theme }) => theme.cardHover};
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection color */
  ::selection {
    background: ${({ theme }) => theme.accentColor};
    color: white;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accentColor};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accentBright};
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accentColor};
    outline-offset: 2px;
  }
`;
