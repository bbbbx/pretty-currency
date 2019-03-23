# Pretty currency

  Pretty your number or string to a readable currency:  `123456789` → `'123,456,789'`.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][travis-image]][travis-url]

## Install

  ```bash
  npm install --save pretty-currency
  ```

## Usage

  ```js
  const prettyCurrency = require('pretty-currency')

  let num = 123456789
  num = prettyCurrency(num)
  console.log(num)  // '123,456,789'

  num = 123456.7899
  num = prettyCurrency(num)
  console.log(num)  // '123,456.7899'
  ```

  the parameter must be a number or string, if not, it will throw a TypeError, for example:

  ```js
  prettyCurrency({})     // Thrown: TypeError: parameter must be a number or string.
  prettyCurrency(false)  // Thrown: TypeError: parameter must be a number or string.
  ```

  if the parameter is string, it must start with number, for example:

  ```js
  prettyCurrency('1234.123forssa')  // '1,234.123'
  ```

  if not, it will throw an Error, for example:

  ```js
  prettyCurrency('ow1234.123qw')  // Thrown: Error: parameter is invalid.
  ```

## Contribution

  Any PR is welcome! This package use Babel to compile and Flow for static type check.

  Install dependencies:

  ```bash
  npm install
  ```

  after patching `index.js`, you can build it:

  ```bash
  npm run build
  ```

  then, run all test cases:

  ```bash
  npm run test
  ```

  Before you submit your awesome PRs, please passed all tests first.

  If you have any edge test case, please let me know. ;)

## License

  MIT

[npm-image]: https://img.shields.io/npm/v/pretty-currency.svg
[npm-url]: https://npmjs.org/package/pretty-currency
[downloads-image]: https://img.shields.io/npm/dm/pretty-currency.svg
[downloads-url]: https://npmjs.org/package/pretty-currency
[travis-image]: https://img.shields.io/travis/bbbbx/pretty-currency/master.svg
[travis-url]: https://www.travis-ci.org/bbbbx/pretty-currency
