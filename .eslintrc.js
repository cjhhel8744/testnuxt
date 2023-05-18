module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		// "babelOptions": { "configFile": "./.babelrc", }
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		// 'plugin:vue/recommended',
		// 'plugin:vue/essential',
		//'@nuxtjs',
		'prettier',
		// 'prettier/vue',
		'plugin:nuxt/recommended',
	],
	// required to lint *.vue files
	plugins: ['prettier', 'vue'],
	// add your custom rules here
	rules: {
		//'prettier/prettier': ['error'],
		'vue/singleline-html-element-content-newline': 0,
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'vue/valid-v-slot': [
			'error',
			{
				allowModifiers: true,
			},
		],
		'vue/multi-word-component-names': 'off',
		'vue/no-reserved-component-names': 'off',
		'nuxt/no-cjs-in-config': 'off',
		'no-unused-vars': 'off',
		semi: ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'generator-star-spacing': 'off',
		'brace-style': ['error', '1tbs'],
	},
}
