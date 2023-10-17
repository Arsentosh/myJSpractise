// function calculateAvarage(numbers) {
//   const sum = numbers.reduce((acc, val) => acc + val, 0);
//   const avarage = sum / numbers.length;
//   console.log(avarage);
// }

// calculateAvarage([1, 2, 3, 4, 5]);

// function findLargestNumber(numbers) {
//   const comparedNumbers = numbers.reduce((max, cur) => {
//     if (max > cur) {
//       return max;
//     } else {
//       return cur;
//     }
//   }, numbers[0]);
//   return comparedNumbers;
// }

// const numbers = [7e22, 2e32, 922, 1e34, 131e21];
// const largestNumber = findLargestNumber(numbers);
// console.log(largestNumber);

// function getReps(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   // console.log(sum);
//   console.log(sum * 2);
// }

// getReps(10);
// getReps(9);
// getReps(8);
// getReps(7);
// getReps(6);
// getReps(5);
// getReps(4);

// function reverseString(string) {
//   let reversedString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//     console.log(reversedString);
//   }
// }
// reverseString("omg");

// function getVowels(string) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i].toLowerCase();
//     if (char === "e" || char === "u" || char === "o" || char === "a")
//       counter += 1;
//   }
//   return counter;
// }
// const vowelCount = getVowels("Hello world");
// console.log(vowelCount);
