import constantValues from "../assets/constantValues.json";
import numberRangeChecker from "./numberRangeChecker";

/**
 * Accepts a number and a callback function to receive the result
 * @param {number} num 
 * @param {function} callBackFunction 
 * @return {callBackFunction(convertedRomanValue)}
*/
const convertIntegerToRomanNumerals = (num, callBackFunction) => {
    let numberToBeConverted = num;
    let convertedRomanValue = '';

    // check if user provided a number
    if (isNaN(numberToBeConverted)) return constantValues.invalidNumber;

    // check if the provided number by the user is within a range of 0 - 3999
    if (!numberRangeChecker(numberToBeConverted, constantValues.minValidNumber, constantValues.maxValidNumber)) {
        return constantValues.invalidRange;
    }

    // iterate romanFigureData from left to right  and get the keys|values
    Object.entries(constantValues.romanFigureData).forEach(([key, value]) => {
        // continue iteration if the provided number by the user is greater than the currently iterated number e.g 1990 > 90
        while (numberToBeConverted >= value) {
            // concatenate the current value of convertedRomanValue with the currently interated key e.g M + CM
            convertedRomanValue += key;
            // subtract the current value of numberToBeConverted with the currently interated value e.g 1990 - 900
            numberToBeConverted = numberToBeConverted - value;
        }
    });
    // return the current value of convertedRomanValue
    callBackFunction(convertedRomanValue);
  };

  export default convertIntegerToRomanNumerals;