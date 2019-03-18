function prettyCurrency(input) {
    if (typeof input !== 'number' || typeof input !== 'string' ) {
        throw new TypeError('parameter must be a number.')
    }

    let [ integer, decimal ] = input.toString().split('.')
    integer = integer.replace(/\B(?=(\d{3})+$)/g, ',')

    if (!decimal) {
        return integer
    }
    return integer + decimal
}

module.exports = prettyCurrency
