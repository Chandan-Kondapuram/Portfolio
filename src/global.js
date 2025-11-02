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
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.4;
    transition: background 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Netflix-style card */
  .netflix-card {
    background: ${({ theme }) => theme.projectCard};
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.glassShadow};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    position: relative;
  }

  .netflix-card:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.hoverShadow};
    z-index: 10;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection color - Netflix red */
  ::selection {
    background: ${({ theme }) => theme.accentColor};
    color: white;
  }

  /* Dark scrollbar - Netflix style */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #141414;
  }

  ::-webkit-scrollbar-thumb {
    background: #4d4d4d;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6d6d6d;
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accentColor};
    outline-offset: 2px;
  }

  /* Netflix Typography */
  .hero-title {
    font-size: 72px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.01em;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
  }

  .section-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 20px;
    line-height: 1.4;
    font-weight: 400;
    color: ${({ theme }) => theme.secondaryText};
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  .scale-in {
    animation: scaleIn 0.4s ease-out;
  }

  /* Full-screen sections */
  .full-height {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
