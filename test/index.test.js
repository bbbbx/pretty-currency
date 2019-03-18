const prettyCurrency = require('pretty-currency')

test('pretty 123456 to "123,456"', () => {
    expect(prettyCurrency(123456)).toBe('123,456')
})

test('pretty 123456.1234 to "123,456.1234"', () => {
    expect(prettyCurrency(123456.1234)).toBe('123,456.1234')
})

test('pretty "123456.1234" to "123,456.1234"', () => {
    expect(prettyCurrency('123456.1234')).toBe('123,456.1234')
})