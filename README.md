# Pretty currency

Pretty your number or string to a readable currency. Like `123456789` -> `'123,456,789'`.

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

## Contribution

Any PR is welcome!

## License

MIT
