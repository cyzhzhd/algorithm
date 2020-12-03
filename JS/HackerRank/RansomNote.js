const magazine = ['two', 'times', 'three', 'is', 'not', 'four', 'two', 'two'];
const note = ['two', 'times', 'two', 'is', 'four', 'two'];
function checkMagazine(magazine, notes) {
  const obj = {};
  magazine.forEach((val) => (obj[val] ? obj[val]++ : (obj[val] = 1)));
  for (const word of notes) {
    if (obj[word] === undefined || obj[word] < 1) {
      console.log('No');
      return;
    }
    obj[word]--;
  }
  console.log('Yes');
}

console.log(checkMagazine(magazine, note));
