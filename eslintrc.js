const OFF = 0,
    WARN = 1,
    ERROR = 2;

module.exports = exports = {
    env: {
        es6: true,
    },

    ecmaFeatures: {
        // env=es6 doesn't include modules, which we are using
        modules: true,
    },

    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],

    rules: {
        /** These are rules that you never need to enable when using Prettier. */

        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-element-newline': 'off',
        'arrow-parens': 'off',
        'arrow-spacing': 'off',
        'block-spacing': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'comma-style': 'off',
        'computed-property-spacing': 'off',
        'dot-location': 'off',
        'eol-last': 'off',
        'func-call-spacing': 'off',
        'function-call-argument-newline': 'off',
        'function-paren-newline': 'off',
        'generator-star': 'off',
        'generator-star-spacing': 'off',
        'implicit-arrow-linebreak': 'off',
        indent: 'off',
        'jsx-quotes': 'off',
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'linebreak-style': 'off',
        'multiline-ternary': 'off',
        'newline-per-chained-call': 'off',
        'new-parens': 'off',
        'no-arrow-condition': 'off',
        'no-comma-dangle': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'off',
        'no-floating-decimal': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-multi-spaces': 'off',
        'no-multiple-empty-lines': 'off',
        'no-reserved-keys': 'off',
        'no-space-before-semi': 'off',
        'no-trailing-spaces': 'off',
        'no-whitespace-before-property': 'off',
        'no-wrap-func': 'off',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'one-var-declaration-per-line': 'off',
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'quote-props': 'off',
        'rest-spread-spacing': 'off',
        semi: 'off',
        'semi-spacing': 'off',
        'semi-style': 'off',
        'space-after-function-name': 'off',
        'space-after-keywords': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-before-function-parentheses': 'off',
        'space-before-keywords': 'off',
        'space-in-brackets': 'off',
        'space-in-parens': 'off',
        'space-infix-ops': 'off',
        'space-return-throw-case': 'off',
        'space-unary-ops': 'off',
        'space-unary-word-ops': 'off',
        'switch-colon-spacing': 'off',
        'template-curly-spacing': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',
        '@babel/object-curly-spacing': 'off',
        '@babel/semi': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-blocks': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/space-infix-ops': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        'babel/object-curly-spacing': 'off',
        'babel/semi': 'off',
        'flowtype/boolean-style': 'off',
        'flowtype/delimiter-dangle': 'off',
        'flowtype/generic-spacing': 'off',
        'flowtype/object-type-curly-spacing': 'off',
        'flowtype/object-type-delimiter': 'off',
        'flowtype/quotes': 'off',
        'flowtype/semi': 'off',
        'flowtype/space-after-type-colon': 'off',
        'flowtype/space-before-generic-bracket': 'off',
        'flowtype/space-before-type-colon': 'off',
        'flowtype/union-intersection-spacing': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-wrap-multilines': 'off',
        'standard/array-bracket-even-spacing': 'off',
        'standard/computed-property-even-spacing': 'off',
        'standard/object-curly-even-spacing': 'off',
        'unicorn/empty-brace-spaces': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/number-literal-case': 'off',
        'vue/array-bracket-newline': 'off',
        'vue/array-bracket-spacing': 'off',
        'vue/arrow-spacing': 'off',
        'vue/block-spacing': 'off',
        'vue/block-tag-newline': 'off',
        'vue/brace-style': 'off',
        'vue/comma-dangle': 'off',
        'vue/comma-spacing': 'off',
        'vue/comma-style': 'off',
        'vue/dot-location': 'off',
        'vue/func-call-spacing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-end-tags': 'off',
        'vue/html-indent': 'off',
        'vue/html-quotes': 'off',
        'vue/key-spacing': 'off',
        'vue/keyword-spacing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/no-extra-parens': 'off',
        'vue/no-multi-spaces': 'off',
        'vue/no-spaces-around-equal-signs-in-attribute': 'off',
        'vue/object-curly-newline': 'off',
        'vue/object-curly-spacing': 'off',
        'vue/object-property-newline': 'off',
        'vue/operator-linebreak': 'off',
        'vue/quote-props': 'off',
        'vue/script-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/space-in-parens': 'off',
        'vue/space-infix-ops': 'off',
        'vue/space-unary-ops': 'off',
        'vue/template-curly-spacing': 'off',

        /** Possible Errors (overrides from recommended set): */

        'no-unexpected-multiline': ERROR,
        // All JSDoc comments must be valid
        'valid-jsdoc': [
            ERROR,
            {
                requireReturn: false,
                requireReturnDescription: false,
                requireParamDescription: true,
                prefer: {
                    return: 'returns',
                },
            },
        ],

        /** Best Practices */

        // Allowed a getter without setter, but all setters require getters:
        'accessor-pairs': [
            ERROR,
            {
                getWithoutSet: false,
                setWithoutGet: true,
            },
        ],
        'block-scoped-var': WARN,
        'consistent-return': ERROR, // Require return statements to either always or never specify values
        curly: ERROR, //Enforce consistent brace style for all control statements, like if, while
        'default-case': WARN, // inside switch statment

        // the dot goes with the property when doing multiline:

        'dot-notation': WARN,
        eqeqeq: [ERROR, 'smart'], //Require the use of === and !==
        'guard-for-in': WARN, //Require for-in loops to include an if statement (hasOwnProperty)
        'no-alert': ERROR,
        'no-caller': ERROR,
        'no-case-declarations': WARN, //Disallow lexical declarations in case clauses (put variable declerations in scoped brackets)
        'no-div-regex': WARN,
        'no-else-return': WARN, // Disallow else blocks after return statements in if statements
        'no-empty-label': WARN,
        'no-empty-pattern': WARN, //Disallow empty destructuring patterns
        'no-eq-null': WARN,
        'no-eval': ERROR,
        'no-extend-native': ERROR, //Disallow extending native types )monkey patching)
        'no-extra-bind': WARN,

        'no-implicit-coercion': [
            WARN,
            {
                boolean: true,
                number: true,
                string: true,
            },
        ],
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': WARN, //Disallow labeled statements
        'no-lone-blocks': WARN,
        'no-loop-func': ERROR,
        'no-magic-numbers': WARN,

        'no-multi-str': WARN,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR, // Disallow new operators with the String, Number, and Boolean objects
        'no-new': ERROR, //Disallow new operators outside of assignments or comparisons
        'no-octal-escape': ERROR,
        'no-param-reassign': ERROR,
        'no-process-env': WARN,
        'no-proto': ERROR,
        'no-redeclare': ERROR, //Disallow variable redeclaration
        'no-return-assign': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-throw-literal': ERROR,
        'no-unused-expressions': ERROR,
        'no-useless-call': ERROR,
        'no-useless-concat': ERROR,
        'no-void': WARN,
        // Produce warnings when something is commented as TODO or FIXME
        'no-warning-comments': [
            WARN,
            {
                terms: ['TODO', 'FIXME'],
                location: 'start',
            },
        ],
        'no-with': WARN,
        radix: WARN,
        'vars-on-top': ERROR,
        // Enforces the style of wrapped functions

        yoda: ERROR,

        // Strict Mode - for ES6, never use strict.
        strict: [ERROR, 'never'],

        // Variables
        'init-declarations': [ERROR, 'always'],

        'no-delete-var': ERROR,
        'no-label-var': ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-shadow': WARN,

        // We require all vars to be initialized (see init-declarations)
        // If we NEED a var to be initialized to undefined, it needs to be explicit
        'no-undef-init': OFF,
        'no-undef': ERROR,
        'no-undefined': OFF,
        'no-unused-vars': WARN,
        // Disallow hoisting - let & const don't allow hoisting anyhow
        'no-use-before-define': ERROR,

        /** Node.js and CommonJS */
        'callback-return': [WARN, ['callback', 'next']],
        'global-require': ERROR,
        'handle-callback-err': WARN,
        'no-mixed-requires': WARN,
        'no-new-require': ERROR,
        // Use path.concat instead
        'no-path-concat': ERROR,
        'no-process-exit': ERROR,
        'no-restricted-modules': OFF,
        'no-sync': WARN,

        // ECMAScript 6 support
        'arrow-body-style': [ERROR, 'always'],

        'constructor-super': ERROR,

        'no-class-assign': ERROR,
        'no-const-assign': ERROR,
        'no-dupe-class-members': ERROR,
        'no-this-before-super': ERROR,
        'no-var': WARN,
        'object-shorthand': [WARN, 'never'],
        'prefer-arrow-callback': WARN,
        'prefer-spread': WARN,
        'prefer-template': WARN,
        'require-yield': ERROR,

        // Stylistic - everything here is a warning because of style.

        camelcase: WARN,

        'consistent-this': [WARN, 'self'],

        'func-names': WARN,
        'func-style': [WARN, 'declaration'],
        'id-length': [WARN, { min: 2, max: 32 }],

        'lines-around-comment': [WARN, { beforeBlockComment: true }],
        'max-depth': [WARN, 8],
        'max-len': [WARN, 132],
        'max-nested-callbacks': [WARN, 8],
        'max-params': [WARN, 8],
        'new-cap': WARN,

        'no-array-constructor': WARN,
        'no-bitwise': OFF,
        'no-continue': OFF,
        'no-inline-comments': OFF,
        'no-lonely-if': WARN,

        'no-negated-condition': OFF,
        'no-nested-ternary': WARN,
        'no-new-object': WARN,
        'no-plusplus': OFF,
        'no-spaced-func': WARN,
        'no-ternary': OFF,

        'no-underscore-dangle': WARN,
        'no-unneeded-ternary': WARN,

        'one-var': OFF,
        'operator-assignment': [WARN, 'never'],

        quotes: [WARN, 'single'],
        'require-jsdoc': [
            WARN,
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: false,
                },
            },
        ],

        'sort-vars': OFF,

        'spaced-comment': [WARN, 'always'],
    },
};
