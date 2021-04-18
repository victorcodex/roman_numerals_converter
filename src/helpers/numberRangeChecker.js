/**
 * Helper function to check if a number is within a range of numbers 
 * @param {number} num 
 * @param {number} minNumber 
 * @param {number} maxNumber 
 * @return {boolean}
*/
  const numberRangeChecker = (num, minNumber, maxNumber) => {
    return num > minNumber && num <= maxNumber;
  };

  export default numberRangeChecker;