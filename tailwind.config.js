module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      colors: {
        'wf-gray': '#BBBBBF',
        'wf-yellow': '#F8CF1C',
        'wf-purple': '#7F187F',
      },
      fontSize: {
        'wf-icon': '18px',
      },
      spacing: {
        'wf-icon': '18px',
      }
    },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
