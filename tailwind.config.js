module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#1C1C27',
  			secondary: '#E27625',
  			sub: '#8488AC',
  			DFprimary: '#FFFFFF',
  			DFsecondary: '#8488AC',
  			LFprimary: '#000000',
  			LFsecondary: '#5F5F5F',
  			card: '#333447',
  			green: '#00BD58',
  			red: '#BF3A19',
  			orange500: '#E27625',
  			orange600: '#d46222',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			'saira-stencil': [
  				'Saira Stencil One',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
