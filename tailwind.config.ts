import type { Config } from 'tailwindcss';

const config = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   prefix: '',
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            champagne: {
               DEFAULT: '#f1e0c5',
               100: '#473211',
               200: '#8d6422',
               300: '#cf9538',
               400: '#e0bb7f',
               500: '#f1e0c5',
               600: '#f4e7d1',
               700: '#f7eddd',
               800: '#f9f3e8',
               900: '#fcf9f4',
            },
            khaki: {
               DEFAULT: '#c9b79c',
               100: '#2e2619',
               200: '#5c4c33',
               300: '#8a714c',
               400: '#af956e',
               500: '#c9b79c',
               600: '#d4c5b0',
               700: '#ded4c4',
               800: '#e9e2d8',
               900: '#f4f1eb',
            },
            reseda_green: {
               DEFAULT: '#71816d',
               100: '#171a16',
               200: '#2e342c',
               300: '#444e42',
               400: '#5b6858',
               500: '#71816d',
               600: '#8e9c8a',
               700: '#aab4a7',
               800: '#c6cdc5',
               900: '#e3e6e2',
            },
            bistre: {
               DEFAULT: '#342a21',
               100: '#0b0907',
               200: '#15110e',
               300: '#201a14',
               400: '#2a221b',
               500: '#342a21',
               600: '#695443',
               700: '#9c7e64',
               800: '#bda998',
               900: '#ded4cb',
            },
            blush: {
               DEFAULT: '#da667b',
               100: '#340d14',
               200: '#671927',
               300: '#9b263b',
               400: '#ce3350',
               500: '#da667b',
               600: '#e28596',
               700: '#e9a4b1',
               800: '#f0c2cb',
               900: '#f8e1e5',
            },
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         keyframes: {
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
