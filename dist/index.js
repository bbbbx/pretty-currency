"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function prettyCurrency(input) {
  var type = _typeof(input);

  if (type !== 'number' && type !== 'string') {
    throw new TypeError('parameter must be a number or string.');
  }

  var parsedInput = Number.parseFloat(input);

  if (Number.isNaN(parsedInput) && input !== '') {
    throw new Error('parameter is invalid.');
  }

  input = Number.isNaN(parsedInput) ? input : parsedInput;
  var integer = input.toString().split('.')[0];
  var decimal = input.toString().split('.')[1];
  integer = integer.replace(/\B(?=(\d{3})+$)/g, ',');

  if (!decimal) {
    return integer;
  }

  return integer + '.' + decimal;
}

module.exports = prettyCurrency;