function reverseString(str) {
  const strArr = str.split('');
  let returnStr = '';
  while (strArr.length > 0) {
    returnStr += strArr.pop();
  }
  return returnStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log('=>', reverseString('hi'));

  console.log('');

  console.log("Expecting: 'ybabtac'");
  console.log('=>', reverseString('catbaby'));

  console.log("Expecting: 'ados'");
  console.log('=>', reverseString('soda'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// break the string into an array
// loop for the lenth of the array
// pop the char to a new string
