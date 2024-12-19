module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		quotes: ['error', 'single'],
		'prefer-const': 'error',
		indent: ['warn', 'tab'],
		semi: 'off',
		'no-template-curly-in-string': 'error',
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		camelcase: ['error'],
		'max-depth': ['error', 3],
		'no-alert': ['error'],
		'no-var': ['error'],
	},
	env: {
		browser: true,
		node: true,
	},
}
