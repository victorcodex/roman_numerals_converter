import React, { useState, useEffect } from "react";

//import helper functions
import convertRomanNumeralsToInteger from "../../helpers/convertRomanNumeralsToInteger";
import convertIntegerToRomanNumerals from "../../helpers/convertIntegerToRomanNumerals";
import constantValues from "../../assets/constantValues.json";

const App = () => {
  // states declarations
  const [romanNumeralsInput, setRomanNumeralsInput] = useState("");
  const [integerInput, setIntegerInput] = useState(0);

  // detect when the number input changes
  useEffect(() => {
    if (romanNumeralsInput) {
      // if the romanNumeralsInput has a calue call convertRomanNumeralsToInteger with the arguments romanNumeralsInput, setIntegerInput
      convertRomanNumeralsToInteger(romanNumeralsInput, setIntegerInput);
    } else {
      setIntegerInput("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [romanNumeralsInput]);

  // detect when the Roman numerals input changes
  useEffect(() => {
    if (integerInput) {
      convertIntegerToRomanNumerals(integerInput, setRomanNumeralsInput);
    } else {
      setRomanNumeralsInput("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [integerInput]);

  return (
    <div className="container">
      <form>
          <h1>{constantValues.homePageHeading}</h1>
          <label htmlFor="roman_numerals">{constantValues.romanNumerals}</label>
          <input 
            type="text" 
            id="roman_numerals" 
            placeholder={constantValues.romanNumeralsInputPlaceholder}
            value={romanNumeralsInput} 
            onChange={(e) => setRomanNumeralsInput(e.target.value)}
          />
      
          <label htmlFor="integer">{constantValues.number}</label>
          <input 
            type="number" 
            id="integer" 
            placeholder={constantValues.numberInputPlaceholder} 
            value={integerInput && integerInput > 0 ? integerInput : ""} 
            onChange={(e) => setIntegerInput(e.target.value)}
          />
      </form>
    </div>
  );
}

export default App;