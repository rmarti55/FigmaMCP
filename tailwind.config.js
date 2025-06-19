/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      // Design Token Foundation - 4px/8px system
      spacing: {
        'xs': '4px',    // 0.25rem
        'sm': '8px',    // 0.5rem  
        'md': '16px',   // 1rem
        'lg': '24px',   // 1.5rem
        'xl': '32px',   // 2rem
        '2xl': '48px',  // 3rem
        '3xl': '64px',  // 4rem  
        '4xl': '96px',  // 6rem
        '5xl': '128px', // 8rem
        '6xl': '192px', // 12rem
      },
      // Grid System Foundation
      maxWidth: {
        'grid': '1440px',
        'container-sm': '640px',
        'container-md': '768px', 
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1440px',
      },
      // Enhanced breakpoints for better responsive control
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px', 
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      // Grid template areas for dashboard layouts
      gridTemplateAreas: {
        'dashboard': '"header" "filters" "main" "footer"',
        'dashboard-lg': '"header header" "filters filters" "sidebar main" "footer footer"',
      },
      gridTemplateColumns: {
        'dashboard': '280px 1fr',
        'auto-fit-cards': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fill-cards': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      gridTemplateRows: {
        'dashboard': 'auto auto 1fr auto',
      },
      // Container queries support
      containers: {
        'xs': '20rem',
        'sm': '24rem', 
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  },
  plugins: [
    // Add container queries plugin
    require('@tailwindcss/container-queries'),
  ],
}