import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: '#1180FC',
        dark: '#0B0543',
        yellow: '#FFDC00',
        green: '#8BE613',
      },
      fontFamily: {
        yungothic: ['var(--font-yungothic)'],
        roborobo: ['var(--font-roborobo)'],
      },
    },
  },
  plugins: [],
};
export default config;
