const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postCssModuleValues = require('postcss-modules-values');

module.exports = {
	plugins: [
		autoprefixer,
		precss,
		postCssModuleValues,
	],
};
