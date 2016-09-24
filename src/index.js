'use strict';

module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'accessor-pairs': 'error',
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs'
    ],
    'callback-return': 'error',
    'camelcase': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': 'error',
    'comma-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'comma-style': 'error',
    'complexity': 'error',
    'computed-property-spacing': [
      'error',
      'always'
    ],
    'consistent-return': 'error',
    'consistent-this': 'error',
    'curly': 'error',
    'default-case': 'off',
    'dot-location': [ 2, 'property' ],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'off',
    'func-call-spacing': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true
      }
    ],
    'line-comment-position': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'error',
    'lines-around-directive': 'error',
    'max-depth': 'error',
    'max-len': [ 'error', 100 ],
    'max-lines': 'error',
    'max-nested-callbacks': 'error',
    'max-params': 'error',
    'max-statements': 'off',
    'max-statements-per-line': 'error',
    'multiline-ternary': [
      'error',
      'never'
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': [
      'error',
      'always'
    ],
    'newline-before-return': 'error',
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-var': 'off',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error',
      { 'allowMultiplePropertiesPerLine': true }
    ],
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'error',
    'operator-assignment': [
      'error',
      'always'
    ],
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'quote-props': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'radix': 'error',
    'require-jsdoc': 'error',
    'rest-spread-spacing': 'error',
    'semi': [
      'error',
      'always'
    ],
    'semi-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'sort-imports': 'error',
    'sort-keys': [
      'error',
      'asc'
    ],
    'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', { 'anonymous': 'always', 'named': 'never' } ],
    'space-in-parens': [ 'error', 'always' ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'strict': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'valid-jsdoc': [
      'error',
      {
        'requireParamDescription': false,
        'requireReturnDescription': false
      }
    ],
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': [
      'error',
      'never'
    ]
  }
};
