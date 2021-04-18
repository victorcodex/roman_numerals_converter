/**
 * Helper function for regExp match
 * @param {string} value 
 * @param {string} patterns 
 * @return {array}
*/
  const regExpMatcher = (value, patterns) => {
    const regEx = new RegExp(patterns, 'g');
    return value.match(regEx);
  };


  export default regExpMatcher;