// The tailwind CSS config: https://tailwindcss.com/docs/configuration
// Update the config and extend it with custom value and variables
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      // Add wayfair colors
      colors: {
        'wf-gray': '#BBBBBF',
        'wf-yellow': '#F8CF1C',
        'wf-purple': '#7F187F',
      },
      fontSize: {
        // Add SVG icon sizing
        'wf-icon': '18px',
      },
      spacing: {
        // Common widths which are not available in tailwind CSS
        'wf-icon': '18px',
        'wf-menu': '200px',
      }
    },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
