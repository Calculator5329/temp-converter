/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Ethan Gates
      Date:   2-5-2023

      Filename: project02-01.js
 */

document.getElementById("cValue").onchange = function() {
    cValue = parseFloat(document.getElementById("cValue").value);
    fValue = CelsiusToFarenheit(cValue);
    fValue = decimalRound(fValue)
    document.getElementById("fValue").value = fValue;
}

document.getElementById("fValue").onchange = function() {
    fValue = parseFloat(document.getElementById("fValue").value);
    cValue = FarenheitToCelsius(fValue);
    cValue = decimalRound(cValue)
    document.getElementById("cValue").value = cValue;
}

function decimalRound(val, places=2) {
    return Math.round(val * (10 ** places)) / 10 ** places
}

function FarenheitToCelsius(degree) {
    return (degree - 32) / 1.8;
}

function CelsiusToFarenheit(degree) {
    return degree * 1.8 + 32;
}

