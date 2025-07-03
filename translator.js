// Wichtig damit node die ersten beides Positionen des arrays überspringt und mit den einegebenen Zahlen/Wörter arbeitet
const args = process.argv.slice(2);
// console.log(args);

// const text = args.join(" ");

// console.log(text);

const newString = [];
args.forEach((word) => {
  //   console.log(`${word}`);
  let letter = word.charAt(0);
  let slicedText = word.slice(1);
  //   console.log("slicedText:", slicedText, "Letter:", letter);
  //   console.log("Pig Latin:", slicedText + letter + "ay");
  let newWord = slicedText + letter + "ay";
  newString.push(newWord);
  //   console.log("in Schleife:", newString);
});
// console.log("nach Schleife:", newString);

const bla = newString.join(" ");
console.log(bla);
