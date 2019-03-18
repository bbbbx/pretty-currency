function prettyCurrency(input) {
    const type = typeof(input)
    if (type !== 'number' && type !== 'string' ) {
        throw new TypeError('parameter must be a number or string.')
    }

    let [ integer, decimal ] = input.toString().split('.')
    integer = integer.replace(/\B(?=(\d{3})+$)/g, ',')

    if (!decimal) {
        return integer
    }
    return integer + '.' + decimal
}

module.exports = prettyCurrency
