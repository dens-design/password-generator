const alphabetSmallArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabetLargeArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//Generate two random passwords when the user clicks the button
//Each password should be 15 characters long
const inputEl = document.getElementById("input-el");
const inputError = document.getElementById("input-error");

const firstPasswordEl = document.getElementById("firstPassword");
const secondPasswordEl = document.getElementById("secondPassword");
const checkboxError = document.getElementById("checkbox-error");

const alphabetSmall = document.getElementById("alphabet-small");
const alphabetLarge = document.getElementById("alphabet-large");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

function generatePasswords() {
  if (
    !alphabetSmall.checked &&
    !alphabetLarge.checked &&
    !numbersEl.checked &&
    !symbolsEl.checked
  ) {
    console.log("All unchecked");
    checkboxError.classList.remove("hidden");
    return;
  }

  checkboxError.classList.add("hidden");

  //getrandompassword and display it x2

  let customArray = [];
  if (alphabetSmall.checked) {
    customArray = customArray.concat(alphabetSmallArr);
    console.log(customArray);
  }
  if (alphabetLarge.checked) {
    customArray = customArray.concat(alphabetLargeArr);
  }
  if (numbersEl.checked) {
    customArray = customArray.concat(numbers);
  }
  if (symbolsEl.checked) {
    customArray = customArray.concat(symbols);
  }

  if (inputEl.value > 0 && inputEl.value <= 20) {
    inputError.textContent = "";
    firstPasswordEl.textContent = getPassword(customArray);
    secondPasswordEl.textContent = getPassword(customArray);
  } else {
    inputError.textContent = "Please specify a number between 0-20!";
  }
}

function getPassword(array) {
  let password = "";
  for (let i = 0; i < inputEl.value; i++) {
    password += array[Math.floor(Math.random() * array.length)];
  }
  return password;
}

function copyFirstValue() {
  navigator.clipboard.writeText(firstPasswordEl.textContent);
}
function copySecondValue() {
  navigator.clipboard.writeText(secondPasswordEl.textContent);
}

const generatorBtn = document.getElementById("generator");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

generatorBtn.addEventListener("click", generatePasswords);
output1.addEventListener("click", copyFirstValue);
output2.addEventListener("click", copySecondValue);
