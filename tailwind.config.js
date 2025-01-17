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
          'third':({opacityValue})=>`rgba(var(--color-text-third),${opacityValue})`,
          // third:'var(--color-text-third)',
      },
      backgroundColor:{
        'base':({opacityValue})=>`rgba(var(--color-text-base),${opacityValue})`,
        'sec':({opacityValue})=>`rgba(var(--color-text-sec),${opacityValue})`,
        'third':({opacityValue})=>`rgba(var(--color-text-third),${opacityValue})`,
        // third:'var(--color-third)',
      }
    },
  },
  plugins: [],
}