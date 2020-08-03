function checkForSpam(str) {
  // Write code under this line
  const string = str.toLowerCase();

  const includesSpam =
    string.includes('spam') || string.includes('sale') ? true : false;

  return includesSpam;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
