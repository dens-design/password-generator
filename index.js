const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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

function generatePasswords() {
  //getrandompassword and display it x2
  if (inputEl.value > 0 && inputEl.value <= 20) {
    inputError.textContent = "";
    firstPasswordEl.textContent = getPassword();
    secondPasswordEl.textContent = getPassword();
  } else {
    inputError.textContent = "Please specify a number between 0-20!";
  }
}

function getPassword() {
  let password = "";
  for (let i = 0; i < inputEl.value; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function copyFirstValue() {
  navigator.clipboard.writeText(firstPasswordEl.textContent);
}
function copySecondValue() {
  navigator.clipboard.writeText(secondPasswordEl.textContent);
}
