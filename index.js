function prettyCurrency(input) {
    const type = typeof(input)
    if (type !== 'number' && type !== 'string' ) {
        throw new TypeError('parameter must be a number or string.')
    }

    const parsedInput = Number.parseFloat(input)
    if (Number.isNaN(parsedInput) && input !== '') {
        throw new Error('parameter is invalid.')
    }

    input = Number.isNaN(parsedInput) ? input : parsedInput
    let [ integer, decimal ] = input.toString().split('.')
    integer = integer.replace(/\B(?=(\d{3})+$)/g, ',')

    if (!decimal) {
        return integer
    }
    return integer + '.' + decimal
}

module.exports = prettyCurrency
