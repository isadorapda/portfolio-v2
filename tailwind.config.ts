import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimaryColor: '#383838',
        darkContrastPrimaryColor: '#FCFCFD',

        primaryColor: '#FCFCFD',
        contrastPrimaryColor: '#383838',

        primaryBackground: '#EDFBED',
        secondaryBackground: '#FCFCFD',
        darkPrimaryBackground: '#383838',
        darkSecondaryBackground: '#313030',
        tertiaryColor: '#57A743',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        exo: ['var(--font-exo)'],
        michroma: ['var(--font-michroma)'],
      },
      fontSize: {
        textBody: '16px',
        textBodyMobile: '14px',
        textHeaderSmall: '20px',
        textHeadersLarge: '10vw',
      },
    },
  },
  plugins: [],
}
export default config
