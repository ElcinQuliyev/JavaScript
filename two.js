let caracter = prompt("Reqem Daxil et:");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let hasNumber = false;
for (let number of numbers) {
  if (caracter.includes(number)) {
    hasNumber = true;
    break;
  }
}
if (!hasNumber) {
  console.log("herflerdir");
} else {
  console.log("her hansi eded");
}
