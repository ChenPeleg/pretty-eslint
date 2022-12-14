# Prettier and ESLint

## Motivation

Biggest reason for adopting Prettier is to stop all the ongoing debates over styles[^whyprettier].
ESLint is a static code analyzer. On some cases they collide. This happens mostly in spacing and line breaks:

comma-spacing, block-spacing, no-multi-spaces, object-curly-newline
and more.

## Solution

So the solution is:
1. to disable all the ESLint rules that are conflicting with Prettier with  ``eslint-config-prettier`` package.
2. Set the Prettier rules in the ESLint configuration, so every lint also include the prettier rules. 

That way you can run (preferably automatic by the IDE) both of them without confilcting. 

## Setup

Important note: these setups are for projects without initial setup. Projects that were created with CRA or Angular Cli ect. They will usually have some ESLint configuration in them, but not prettier. In addition, they might need some mode packages installed for framework specific rules like JSX ect.

## Setup prettier and Eslint for Javascript

https://github.com/prettier/eslint-config-prettier

## configuring NodeJs environment

install:

```
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier
```

## Using via Cli

```
npx eslint-config-prettier
```

## configuring IDE

### Vscode

`prettier-vscode` can be installed using the extension sidebar – it’s called “Prettier - Code formatter.” [Check its repository for configuration and shortcuts](https://github.com/prettier/prettier-vscode).

If you’d like to toggle the formatter on and off, install vscode-status-bar-format-toggle.

setting default formatter and eslint fixes:

```
// my-project.code-worspace
{
	"settings": {
			"editor.defaultFormatter": "esbenp.prettier-vscode",
			"editor.formatOnPaste": true,
			"editor.formatOnSave": true,
			"editor.codeActionsOnSave": {
				"formatOnSave" : true,
				"source.fixAll.eslint": true,

				"source.organizeImports": true
			  },

	}
}
```

Theses settings will automatically format code by tslint and prettier rules.

### Webstorm

see [this](https://prettier.io/docs/en/webstorm.html) for more details.

Recommended to be in js, to allow comments.
also recomended to use the [save actions](https://plugins.jetbrains.com/plugin/7642-save-actions) addon, so that the files would be linted and prettified on each save.

### Recommended reading

[How to use Prettier with ESLint](https://www.robinwieruch.de/prettier-eslint/)
https://prettier.io/docs/en/integrating-with-linters.html

[^whyprettier] https://prettier.io/docs/en/why-prettier.html
