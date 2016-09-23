# eslint-config-dan-nl
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url]

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

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/eslint-config/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/eslint-config?branch=master
[david-dm-dev-image]: https://david-dm.org/dan-nl/eslint-config-dan-nl/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/eslint-config-dan-nl?type=dev
[eslint-shareable-url]: http://eslint.org/docs/developer-guide/shareable-configs.html
[mit-license]: https://raw.githubusercontent.com/dan-nl/eslint-config-dan-nl-listening/master/license.txt
[travis-image]: https://travis-ci.org/dan-nl/eslint-config-dan-nl.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/eslint-config-dan-nl
