function formatString(string, maxLength = 40) {
  // Write code under this line
  let cutOffString = string.slice(0, maxLength);
  if (cutOffString.length < string.length) {
    cutOffString += '...';
  } else {
    return string;
  }
  return cutOffString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'
console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
