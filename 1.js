// 1
// function hello(a, b) {
//     return `Привет, ${a} ${b}`;
// }
// let a;
// do {
//     a = prompt('Введите имя');
// } while (a == '' || !isNaN(a));
// let b;
// do {
//     b = prompt('Введите фамилию');
// } while (b == '' || !isNaN(b));
// console.log(hello(a, b));

// 2
// const a = 'hapPy new yEar';

// function str(a) {
//     let words = a.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (i % 2 === 0) {
//             words[i] = words[i].toLowerCase(); 
//         } else {
//             words[i] = words[i].toUpperCase(); 
//         }
//     }
//     return words.join(' '); 
// }

// console.log(str(a));

//  3 
// const a = 'hschool company';

// function str(a) {
//     let words = a.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' '); 
// }

// console.log(str(a));

// 4
// let a = ['by', 'belarus', 'de', 'ru', 'germany'];
//  let filt = a.filter(function(a)
//     {
//         return a.length <= 2;
//     })
//  console.log(filt)

//  5
// function array(arr)
// {
//     for(let i = 0 ; i<arr.length; i++)
//     {
//         if(isNaN(arr[i]))
//         {
//             return false; break
//         }
//     }
//     return true;
// }
// const arr = [1,'f', 5, 78 , 'xdhcjvkbl', 'ahsjdkcfvb', false];
// const arr1= [ 1,2,4,4,5,4]
// console.log(array(arr1))

//  6
// const arr=[];
// function enter(a)
// {
//     arr.push(a)
// }
// function count(arr)
// {
//    return arr.length;
// }
// const n =Number(prompt('Введите количество элементов'));
// for(let i = 0 ; i<n; i++)
// {
//     let a = prompt('Эллемент массива');
//     enter(a);
// }
// console.log(count(arr))

//  7
// function num(arr)
// {
//     for(let i = 0 ; i<arr.length; i++)
//         {
//             if(isNaN(arr[i]))
//             {
//                 return false; break
//             }
//         }
//         return true;
// }
// let b = 0;
// function sum(arr)
// {
//     for(let i = 0 ; i<arr.length; i++)
//     {
//         b+=arr[i];
//     }
//     return b;
// }

// const arr = [1,'f', 5, 78 , 'xdhcjvkbl', 'ahsjdkcfvb', false];
// const arr1= [ 1,2,4,4,5,4];
// if(num(arr1))
// {
//     console.log('Числа');
//     console.log(sum(arr1));
// }
// else console.log('Не числа');

//  8
// function areAllStrings(arr) {
//     return arr.every(element => typeof element === 'string');
// }

// function concatenateStrings(arr) {
//     if (areAllStrings(arr)) {
//         return arr.join('');
//     } else {
//         return 'Не строки';
//     }
// }

// const inputArray = ["hello", " ", "world", "!"];
// if (areAllStrings(inputArray)) {
//     const result = concatenateStrings(inputArray);
//     console.log(result); 
// } else {
//     console.log('Не строки');
// }

//7
// function checkAllNumbers(arr) {
//     return arr.every(element => typeof element === 'number');
// }
// function doubleValues(arr) {
//     if (checkAllNumbers(arr)) {
//         return arr.map(element => element * 2);
//     } else {
//         return 'Не числа';
//     }
// }
// const arr= [1, 2, 3, 4];
// if (checkAllNumbers(arr)) {
//     const result = doubleValues(arr);
//     console.log(result);
// } else {
//     console.log('Не числа');
// }

//8
// function check(arr) {
//     return arr.every(element => typeof element === 'number');
// }
// function get(arr) {
//     if (check(arr)) {
//         return arr.filter(element => element % 2 === 0);
//     } else {
//         return 'Не числа';
//     }
// }
// const arr = [1, 2, 3, 4, 5, 6];
// if (check(arr)) {
//     const result = get(arr);
//     console.log(result);
// } else {
//     console.log('Не числа');
// }

//9
// let result = 1; 

// function fact(a) {
//     for (let i = 1; i <= a; i++) {
//         result *= i; 
//     }
//     return result; 
// }

// const a = 4;
// console.log(fact(a));

//10
function pal(str) {
    const str1 = str.replaceAll(' ', '').toLowerCase();
    return str1 === str1.split('').reverse().join('');
}

console.log(pal("шалаш")); 
console.log(pal("ляля"));