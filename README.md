## Setup prettier and Eslint for Javascript

https://github.com/prettier/eslint-config-prettier

## configuring NodeJs environemnt

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

Theses settings will automatecally format code by tslint and prettier rulls.

### Webstorm

see [this](https://prettier.io/docs/en/webstorm.html) for more details.

Recomended to be in js, to allow comments.
