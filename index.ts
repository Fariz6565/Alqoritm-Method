// 15. Return the longest word in a sentence.
// let cumle = sentence => sentence
// .split(" ").reduce((indikisoz,uzunsoz) => indikisoz.length>uzunsoz.length ?indikisoz : uzunsoz
// )
// console.log(cumle("The quick brown fox jumped over the lazy dog"));




// 16. Factorial of a number.
// let n=5;
// let faktorial=1;
// for (let i=0; i<n; i++){
//     faktorial*=n-i;
// }console.log(faktorial);




// 17. Convert a string to snake case.
// let toSnakeCase = (str) => {
//     return str
//         .replace(/[^a-zA-Z0-9 ]/g, "")
//         .split(" ")
//         .join("_")
//         .toLowerCase();
// }
// console.log(toSnakeCase("Hello World!"));





// 18. Return an array’s unique values.
// let uniqueValues = (arr) => {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(uniqueValues([1,2,2,3,4,4]))




// 19. Find the sum of all even numbers up to a given number.
// let n=0;
// let sumEvenNumbers = (n) => {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumEvenNumbers(12))




// 20. Check if all items in an array are identical. console.log(allSame([1,1,1,1])); true
// let arr=[1,1,1,1];
// let eyni = arr.every(n => n === arr[0]);
// console.log(eyni);




// 21. Return the middle character(s) of a string. console.log(middleChar("middle")); // 'dd'
// console.log(middleChar("middle")); // 'dd'
// let soz="middle";
// let orta=soz.length/2;
// if (soz.length % 2 === 0) {
//     console.log(soz[orta-1] + soz[orta]);
// }else {
//     console.log(soz[Math.floor(orta)]);
// }





// 22. Transpose a matrix. console.log(transposeMatrix([[1,2,3], [4,5,6], [7,8,9]])); // [[1,4,7], [2,5,8], [3,6,9]]
// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// let kopya=[];
// for (let i=0; i<arr.length; i++){
//     let setr=[];
//     for (let j=0; j<arr.length; j++){
//         setr.push(arr[j][i]);
//     }kopya.push(setr);
// }console.log(kopya);





// 23. Find the greatest common divisor of two numbers. console.log(gcd(14, 28)); // 14






// 24. Remove falsey values from an array. console.log(removeFalsey([0, 1, false, 2, '', 3])); // [1,2,3]
// let arr = [0, 1, false, 2, '', 3];
// let s= arr.filter(Boolean);
// console.log(s);






// 25. Find the shortest word in a string. console.log(shortestWord("The quick brown fox jumped over the lazy dog")); // 'The'
// let cumle = sentence => sentence
// .split(" ").reduce((indikisoz,qisasoz) => indikisoz.length<=qisasoz.length ?indikisoz : qisasoz
// )
// console.log(cumle("The quick brown fox jumped over the lazy dog"));





// 26. Generate an array with a given range and step. console.log(rangeWithStep(1, 10, 2)); // [1,3,5,7,9]
// let eded = (start, end, step) => {
//     let arr = [];
//     for (let i = start; i <= end; i += step) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(eded(1, 10, 2));



// 27. Return the most frequent number in an array. console.log(eded([1, 2, 3, 3, 3, 4, 5, 5])); // 3




// 28. Check if a string is a valid number.
// let eded = "123";
// let ededdir = !isNaN(Number(eded));
// console.log(ededdir); // true





// 29. Find the intersection of two arrays. console.log(intersectArrays([1,2,2,3,4], [2,3,5,6])); // [2,3]
// let arr1 = [1, 2, 2, 3, 4];
// let arr2 = [2, 3, 5, 6];
// let kesisme = [...new Set(arr1)]
//   .filter(item => arr2.includes(item));
// console.log(kesisme); // [2, 3]




// 30. Check if a string contains all letters of the alphabe. console.log(hasAllLetters("The quick brown fox jumps over a lazy dog")); // true




// 32. Merge two sorted arrays. console.log(mergeSortedArrays([1,3,5], [2,4,6])); // [1,2,3,4,5,6]
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let birles = [...arr1, ...arr2]
// .sort((a, b) => a - b);
// console.log(birles); // [1, 2, 3, 4, 5, 6]



// // 34. Check if two strings are a rotation of each other. console.log(areRotations("abc", "cab")); // true
// let a= 	"abc";
// let b= 	"cab";
// let eynidir = (a.length===b.length) && (a + a).includes(b);
// console.log(eynidir); // true



// 1. Find the first repeating character in a string. console.log(firstRepeatingChar("abcdab")); // 'a'





// 3. Capitalize the first letter of each word in a string. console.log(capitalizeWords("hello world")); // "Hello World"
// let soz = "hello world";
// let boyu=soz
// .split(" ")
// .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// .join(" ");
// console.log(boyu); // "Hello World"



// 2. Flatten a nested array. console.log(flattenArray([1, [2, 3, [4, 5]], 6])); // [1,2,3,4,5,6]
// let arr = [1, [2, 3, [4, 5]], 6];
// let yeni = arr.flat(2);
// console.log(yeni); // [1, 2, 3, 4, 5, 6]
