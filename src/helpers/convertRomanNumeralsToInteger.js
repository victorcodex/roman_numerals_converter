import constantValues from "../assets/constantValues.json";
import stringOnlyChecker from "./stringOnlyChecker";
import regExpMatcher from "./regExpMatcher";
import reducer from "./reducer";

/**
 * Accepts a Roman numeral value and a callback function to receive the result
 * @param {string} romanNumeralValue 
 * @param {function} callBackFunction 
 * @return {callBackFunction(convertedValue)}
*/
const convertRomanNumeralsToInteger = (romanNumeralValue, callBackFunction) => {

    if (!romanNumeralValue) {
        return constantValues.invalidRomanNumerals;
    }

    // convert provided roman numerals to uppercase
    romanNumeralValue = romanNumeralValue.toUpperCase();

    // check if user provided string only
    if (stringOnlyChecker(romanNumeralValue)) {
        return constantValues.invalidRomanNumerals;
    }
    
    // get pattern for rexExp checker. Should return like M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I
    const regMatchPattern = Object.keys(constantValues.romanFigureData).join("|");
    
    // get array of matches based on the user's input. E.g "MCMXC" which is equivalent to 1990 Should return ["M", "CM", "XC"]
    const matchedArray = regExpMatcher(romanNumeralValue, regMatchPattern);

    // Sum the interger equivalent for each interation. E.g "M" => 1000, "CM" => 900, "XC" => 90 i.e 1000 + 900+ 90 = 1990
    const convertedValue = matchedArray.map(integerEquivalent => constantValues.romanFigureData[integerEquivalent]).reduce(reducer);
    callBackFunction(convertedValue);
  };


  export default convertRomanNumeralsToInteger;