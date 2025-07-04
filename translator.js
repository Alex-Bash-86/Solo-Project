// Wichtig damit node die ersten beides Positionen des arrays überspringt und mit den einegebenen Zahlen/Wörter arbeitet
const args = process.argv.slice(2);
// console.log(args);

// if (args[0] === int) {
//   console.error("Input has to be a word!");
// }

const text = args.join(" ");

console.log(text);

const newArray = [];

args.forEach((word) => {
  //   console.log(`${word}`);
  let firstLetter = word.charAt(0);
  let secondLetter = word.charAt(1);
  let slicedText = word.slice(1);
  let slicedText2 = word.slice(2);
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const isFirstVowel = vowels.some((vowel) => vowel === firstLetter);
  const isSecondVowel = vowels.some((vowel) => vowel === secondLetter);

  if (!isFirstVowel && isSecondVowel) {
    let newWord = slicedText + firstLetter + "ay";
    newArray.push(newWord);
    console.log("1: " + newWord);
  } else if (!isFirstVowel && !isSecondVowel) {
    let newWord = slicedText2 + firstLetter + secondLetter + "ay";
    newArray.push(newWord);
    console.log("2: " + newWord);
  } else if (isFirstVowel) {
    let newWord = word + "way";
    newArray.push(newWord);
    console.log("3: " + newWord);
  }
});

const newString = newArray.join(" ");
console.log(newString);

///////////////////////////////////////////////////////////////////////
// args.forEach((word) => {
//   //   console.log(`${word}`);
//   let firstLetter = word.charAt(0);
//   let secondLetter = word.charAt(1);
//   let slicedText = word.slice(1);
//   let slicedText2 = word.slice(2);
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const isVowel = vowels.some((vowel) => vowel === firstLetter);

//   if (firstLetter != isVowel && secondLetter === isVowel) {
//     let newWord = slicedText + firstLetter + "ay";
//     newArray.push(newWord);
//     console.log("1: " + newWord);
//   } else if (firstLetter != isVowel && secondLetter != isVowel) {
//     let newWord = slicedText2 + firstLetter + secondLetter + "ay";
//     newArray.push(newWord);
//     console.log("2: " + newWord);
//   } else if (firstLetter === isVowel) {
//     let newWord = word + "way";
//     newArray.push(newWord);
//     console.log("3: " + newWord);
//   }
// });
////////////////////////////////////////////////////////////////////////
