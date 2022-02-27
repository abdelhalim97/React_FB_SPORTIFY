// import { createTheme } from '@mui/material/styles';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,

  theme: {
    extend: {
      textColor:{
          'base':({opacityValue})=>`rgba(var(--color-text-base),${opacityValue})`,
          'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,

          // sec:'var(--color-text-sec)',
          third:'var(--color-text-third)',

      },
      backgroundColor:{
        'base':({opacityValue})=>`rgba(var(--color-text-base),${opacityValue})`,
        // base:'var(--color-base)',
        'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,
        
        // sec:'var(--color-sec)',
        third:'var(--color-third)',


      }
    },
  },
  plugins: [],
}