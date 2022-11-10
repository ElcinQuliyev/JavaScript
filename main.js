// let studend = [];

// let teacher = ["ss", "dd", "ff"];

// console.log(studend);

// // let count = 5;
// // while (true)  {
// //   let newUsar = prompt("ad daxil edin");
// //   studend.push(newUsar);
// //   console.log(studend);

// //   count--;
// //   if (count == 0) {
// //     break;
// //   }
// // }
// //.1 slice 1ci (from sonra end ) 1ci kesdiyi areyi deismir
// // .2 splice 1ci (start soora say  ) 1ci kesdiyi areyi deisdirir

//.1 Test No:1
// let num1 = prompt();
// let num2 = prompt();

// if (num1 > num2) {
//   console.log("max" + num1);
// } else if (num1 < num2) {
//   console.log("min" + num2);
// } else if (num1 == num2) {
//   console.log("Beraberdir");
// }

//.2 Test No:2
// let num1 = prompt();
// let num2 = prompt();
// let num3 = prompt();

// if (num1 > num2 && num1 > num3) {
//   console.log("max" + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("max" + num2);
// } else if (num3 > num1 && num3 > num2) {
//   console.log("max" + num3);
// } else {
//   console.log("Beraberdir");
// }
// if (num1 > num2 && num1 > num3) {
//   console.log("max" + num1);
// } else if (num2 > num3) {
//   console.log("max" + num2);
// } else {
//   console.log("max" + num3);
// }

//.3 Test No:3
// let num1 = prompt();

// if (num1 > 0) {
//   console.log("Number is Positive");
// } else if (num1 < 0) {
//   console.log("Nomber is Neqative");
// } else if (num1 == 0) {
//   console.log("Nomber is Zero");
// }

//.4 Test No:4
// let num1 = prompt();

// if (num1 % 5 == 0 && num1 % 11 == 0) {
//   console.log("Bolunur");
// } else if (num1 % 5 !== 0 && num1 % 11 !== 0) {
//   console.log("Bolunmur");
// }

//.5 Test No:5
// let num1 = prompt();

// if (num1 % 11 == 0) {
//   console.log("Bolunur 11-ye");
// } else {
//   console.log("Bolunmur");
// }

//.6 Test No: nie 4 bolunurse ve 100 bolunmurse .?
// let year1 = prompt();

// if ((year1 % 4 == 0 && year1 % 100 != 0) || (year1 % 400 == 0)) {
//   console.log("Bolunur");
// } else {
//   console.log("Bolunmur");
// }

//.7 Test  No:7 say sistemi vardir ASCII
//let alphabet = prompt("Herif daxil et:");
// let startAlpha = "a";
// let endAlpha = "z";
// if (
//   (alphabet >= "a" && alphabet <= "z") ||
//   (alphabet >= "A" && alphabet <= "Z")
// ) {
//   console.log("Alphabet");
// } else {
//   console.log("Duszgun daxil edilmedi");
// }

//.8 Test No:8
// let vowel = prompt("Sait  daxil et:");
// if (
//   vowel == "a" ||
//   vowel == "ı" ||
//   vowel == "o" ||
//   vowel == "u" ||
//   vowel == "e" ||
//   vowel == "ə" ||
//   vowel == "i" ||
//   vowel == "ö" ||
//   vowel == "ü" ||
//   vowel == "A" ||
//   vowel == "I" ||
//   vowel == "O" ||
//   vowel == "U" ||
//   vowel == "E" ||
//   vowel == "Ə" ||
//   vowel == "İ" ||
//   vowel == "Ü" ||
//   vowel == "Ö"
// ) {
//   console.log("Saitler");
// } else {
//   console.log("Duzgun sait daxil et:");
// }

//.9 test No:9 herifli reqem daxil oldu XETA.!!
// let caracter = prompt("Reqem Daxil et:");
// if (
//   (caracter >= "a" && caracter <= "z") ||
//   (caracter >= "A" && caracter <= "Z")
// ) {
//   console.log("Bu herifdir");
// } else if (caracter >= 0 && caracter <= 9) {
//   console.log("Bu reqemdir");
// } else {
//   console.log("Yenden Giris Edin.");
// }

//.10 Text No:10
// let alphAbet = prompt("Simvol daxil et:");

// if (alphAbet >= "A" && alphAbet <= "Z") {
//   console.log("Simvol Boyuk");
// } else if (alphAbet >= "a" && alphAbet <= "z") {
//   console.log("Simvol kicik");
// } else {
//   console.log("Yeniden Daxil ol.!");
// }
//.11 Text No:11 switch case sehv haradadir .???
//let week = prompt("Gun Daxil et:(1-7)");
// switch (week) {
//   case 1:
//     week = "Monday";
//     break;
//   case 2:
//     week = "Tuesday";
//     break;
//   case 3:
//     week = "Wednesday";
//     break;
//   case 3:
//     week = "Wednesday";
//     break;
//   case 3:
//     week = "Wednesday";
//     break;
//   case 3:
//     week = "Wednesday";
//     break;
//   case 3:
//     week = "Wednesday";
//     break;
//   default:
//     "Yenden Gun  daxil et";
// }
// console.log("Hefdenin" + " " + week + "Gunu");
// if (week == 1) {
//   console.log("Monday");
// } else if (week == 2) {
//   console.log("tuesday");
// } else if (week == 3) {
//   console.log("Wednesday");
// } else if (week == 4) {
//   console.log("Thursday");
// } else if (week == 5) {
//   console.log("Friday");
// } else if (week == 6) {
//   console.log("Saturday");
// } else if (week == 7) {
//   console.log("Sunday");
// } else {
//   console.log("Hefdenin gununu Daxil et:(1-7)");
// }
//.12 Test No:12
