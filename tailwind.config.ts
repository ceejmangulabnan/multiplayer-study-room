import type { Config } from "tailwindcss";

export default {
        darkMode: ["class"],
        content: [
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
        	extend: {
        		colors: {
        			background: 'hsl(var(--background))',
        			foreground: 'hsl(var(--foreground))',
        			sunset: {
        				'50': '#fdf7ef',
        				'100': '#fbedd9',
        				'200': '#f7d8b1',
        				'300': '#f1bd80',
        				'400': '#eb984c',
        				'500': '#e67b29',
        				'600': '#df6620',
        				'700': '#b34b1b',
        				'800': '#8e3d1e',
        				'900': '#73331b',
        				'950': '#3e180c'
        			},
        			card: {
        				DEFAULT: 'hsl(var(--card))',
        				foreground: 'hsl(var(--card-foreground))'
        			},
        			popover: {
        				DEFAULT: 'hsl(var(--popover))',
        				foreground: 'hsl(var(--popover-foreground))'
        			},
        			primary: {
        				DEFAULT: 'hsl(var(--primary))',
        				foreground: 'hsl(var(--primary-foreground))'
        			},
        			secondary: {
        				DEFAULT: 'hsl(var(--secondary))',
        				foreground: 'hsl(var(--secondary-foreground))'
        			},
        			muted: {
        				DEFAULT: 'hsl(var(--muted))',
        				foreground: 'hsl(var(--muted-foreground))'
        			},
        			accent: {
        				DEFAULT: 'hsl(var(--accent))',
        				foreground: 'hsl(var(--accent-foreground))'
        			},
        			destructive: {
        				DEFAULT: 'hsl(var(--destructive))',
        				foreground: 'hsl(var(--destructive-foreground))'
        			},
        			border: 'hsl(var(--border))',
        			input: 'hsl(var(--input))',
        			ring: 'hsl(var(--ring))',
        			chart: {
        				'1': 'hsl(var(--chart-1))',
        				'2': 'hsl(var(--chart-2))',
        				'3': 'hsl(var(--chart-3))',
        				'4': 'hsl(var(--chart-4))',
        				'5': 'hsl(var(--chart-5))'
        			},
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
        		borderRadius: {
        			selector: '0.25rem',
        			field: '0.25rem',
        			box: '0.5rem',
        			lg: 'var(--radius)',
        			md: 'calc(var(--radius) - 2px)',
        			sm: 'calc(var(--radius) - 4px)'
        		},
        		borderWidth: {
        			DEFAULT: '1.5px'
        		}
        	}
        },
        plugins: [require("tailwindcss-animate")],
} satisfies Config;
