# eslint-config-dan-nl
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

an [ESLint shareable config][eslint-shareable-url]

## table of contents
* [installation](#installation)
    * [.eslintrc](#.eslintrc)
    * [package.json](#pacakge.json)
* [usage](#usage)
* [license](#license)

## installation
```javascript
npm install --save-dev dan-nl/eslint-config-dan-nl
```

### .eslintrc
add a reference in the `.eslintrc` file
```javascript
module.exports = {
  extends: 'dan-nl'
};
```

### package.json
add a script entry in the `package.json` file
```javascript
"scripts": {
  "eslint": "eslint ."
}
```

## use
```javascript
npm run eslint
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/eslint-config-dan-nl/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/eslint-config-dan-nl?branch=master
[eslint-shareable-url]: http://eslint.org/docs/developer-guide/shareable-configs.html
[mit-license]: https://raw.githubusercontent.com/dan-nl/eslint-config-dan-nl-listening/master/license.txt
[npm-image]: https://img.shields.io/npm/v/eslint-config-dan-nl.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-dan-nl
[travis-image]: https://travis-ci.org/dan-nl/eslint-config-dan-nl.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/eslint-config-dan-nl
