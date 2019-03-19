const prettyCurrency = require('pretty-currency')

function invalidInput(input) {
    return () => prettyCurrency(input)
}

describe('Integer', () => {
    test('123456 should be "123,456"', () => {
        expect(prettyCurrency(123456)).toBe('123,456')
    })

    test('12 should be "12"', () => {
        expect(prettyCurrency(12)).toBe('12')
    })

    test('0 should be "123,456"', () => {
        expect(prettyCurrency(0)).toBe('0')
    })

    test('-1 should be "-1"', () => {
        expect(prettyCurrency(-1)).toBe('-1')
    })

    test('-1234 should be "-1,234"', () => {
        expect(prettyCurrency(-1234)).toBe('-1,234')
    })

    test('-1234 should be "-1,234"', () => {
        expect(prettyCurrency(-1234)).toBe('-1,234')
    })
})

describe('Float number', () => {
    test('123456.123456 should be "123,456.123456"', () => {
        expect(prettyCurrency(123456.123456)).toBe('123,456.123456')
    })

    test('123456.1234 should be "123,456.1234"', () => {
        expect(prettyCurrency(123456.1234)).toBe('123,456.1234')
    })

    test('123456.1 should be "123,456.1"', () => {
        expect(prettyCurrency(123456.1)).toBe('123,456.1')
    })

    test('123456. should be "123,456"', () => {
        expect(prettyCurrency(123456.)).toBe('123,456')
    })

    test('123456.00 should be "123,456"', () => {
        // JS engine will transform float number 123.00 to 123 integer,
        // according to IEEE-754, number will be stored 64-bit binary,
        // both float number and integer.
        expect(prettyCurrency(123456.00)).toBe('123,456')
    })

    test('-12.12345 should be "-12.12345"', () => {
        expect(prettyCurrency(-12.12345)).toBe('-12.12345')
    })

    test('-0.12345 should be "-0.12345"', () => {
        expect(prettyCurrency(-0.12345)).toBe('-0.12345')
    })
})

describe('String', () => {
    test('"123456.1234" should be "123,456.1234"', () => {
        expect(prettyCurrency('123456.1234')).toBe('123,456.1234')
    })

    test('"123456." should be "123,456"', () => {
        expect(prettyCurrency('123456.')).toBe('123,456')
    })

    test('"123456" should be "123,456"', () => {
        expect(prettyCurrency('123456')).toBe('123,456')
    })

    test('"" should be ""', () => {
        expect(prettyCurrency('')).toBe('')
    })

    test('started with non-number should throw an Error.', () => {
        expect(invalidInput('invalid string')).toThrowError(/parameter is invalid/)
        expect(invalidInput('ss123')).toThrowError(/parameter is invalid/)
        expect(invalidInput('ss1234.1234')).toThrowError(/parameter is invalid/)
        expect(invalidInput('ss1234.1234ss')).toThrowError(/parameter is invalid/)
    })

    test('started with number should be considered as a valid parameter.', () => {
        expect(prettyCurrency('123sss')).toBe('123')
        expect(prettyCurrency('12345sss')).toBe('12,345')
        expect(prettyCurrency('12345sss1234')).toBe('12,345')
        expect(prettyCurrency('12345sss1234sss')).toBe('12,345')
    })
})

describe('Non-number or non-string', () => {
    const error = new TypeError('parameter must be a number or string.')

    test('boolean should throw a TypeError', () => {
        expect(invalidInput(false)).toThrowError(error)
    })

    test('null should throw a TypeError', () => {
        expect(invalidInput(null)).toThrowError(error)
    })

    test('object should throw a TypeError', () => {
        expect(invalidInput({})).toThrowError(error)
    })

    test('undefined should throw a TypeError', () => {
        expect(invalidInput(undefined)).toThrowError(error)
    })

    test('function should throw a TypeError', () => {
        expect(invalidInput(function() {})).toThrowError(error)
    })

    test('symbol should throw a TypeError', () => {
        expect(invalidInput(Symbol(''))).toThrowError(error)
    })
})
