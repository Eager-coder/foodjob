module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	mode: "jit",
	theme: {
		fontFamily: {
			sans: ["Inter"],
		},
		extend: {
			colors: {
				primary: "#FF5555",
				background: "#FAFAFA",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
