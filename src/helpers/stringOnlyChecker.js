/**
 * Helper function to check string only value
 * @param {string} value 
 * @return {boolean}
*/
  const stringOnlyChecker = value => {
    return /[^a-z]/i.test(value);
  };

  export default stringOnlyChecker;