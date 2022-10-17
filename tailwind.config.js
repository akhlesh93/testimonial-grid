/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			xl: { max: '1535px' },
			lg: { max: '1279px' },
			md: { max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '479px' },
		},
		extend: {
			fontFamily: {
				sans: ['Barlow Semi Condensed', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
