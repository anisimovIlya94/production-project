module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:i18next/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"i18next",
		"react-hooks"
	],
	"rules": {
		"indent": [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"react/react-in-jsx-scope": ["off"],
		"@typescript-eslint/ban-ts-comment": ["off"],
		"i18next/no-literal-string": ["error", { markupOnly: true, ignoreAttribute: ["data-testid", "to"] }],
		"linebreak-style": ["off"],
		"react/display-name": ["off"],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "error", // Checks effect dependencies
		"@typescript-eslint/no-var-requires": ["off"]
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__ : true
	},
	overrides: [
		{
			files: ["**/src/**/*.test.{ts,tsx}"],
			rules: {
				"i18next/no-literal-string": ["off"]
			}
		}
	]
}
