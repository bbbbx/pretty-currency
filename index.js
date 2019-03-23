function prettyCurrency(input: number | string): string {
    const type: string = typeof(input)
    if (type !== 'number' && type !== 'string' ) {
        throw new TypeError('parameter must be a number or string.')
    }

    const parsedInput: number = Number.parseFloat(input)
    if (Number.isNaN(parsedInput) && input !== '') {
        throw new Error('parameter is invalid.')
    }

    input = Number.isNaN(parsedInput) ? input : parsedInput
    let integer: string = input.toString().split('.')[0]
    let decimal: string = input.toString().split('.')[1]
    integer = integer.replace(/\B(?=(\d{3})+$)/g, ',')

    if (!decimal) {
        return integer
    }
    return integer + '.' + decimal
}

module.exports = prettyCurrency
