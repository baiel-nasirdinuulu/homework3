//homework 2
let number = prompt("enter your number?");
function number2() {
  if (number % 2 === 0) {
    document.write(number + " " + "is true");
  } else {
    document.write("false");
  }
}
number2();
//homework 1
const strToNumber = (str) => {
  str = Number(str);
  return str;
};

console.log(strToNumber("10"));
//homerwork 3

const hasElement = (elem, array) => {
  let result = array.includes(elem);
  return result;
};
let array = ["Elaman", "Tansu", "Asan"];
console.log(hasElement("Tansu", array));
console.log(hasElement("Shirin", array));
