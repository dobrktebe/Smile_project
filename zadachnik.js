// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.

// let a = 12345;
// let b = number.toString().split('').map(Number)
// console.log(b)

// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

// let a = 12345
// let b = 0
// for (i = 0; i < a; i++){

// }
// console.log(b)

// Заполните массив целыми числами от 1 до 10.

// let a = [];
// for (i = 1; i <= 10; i++) {
//   a.push(i);
// }

// console.log(a);

// Заполните массив четными числами из промежутка от 1 до 100.

// let a = [];
// for (i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     a.push(i);
//   }
// }

// console.log(a);

// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

// let a = [1.456, 2.125, 3.32, 4.1, 5.34];
// for (i = 0; i < a.length; i++){
//     a[i] = a[i].toFixed(1)
// }
// console.log(a)

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// let a = [
//   "http://example.com",
//   "https://example.com",
//   "ftp://example.com",
//   "http://google.com",
// ];
// let b = a.filter(function (str) {
//   return str.startsWith("http://");
// });
// console.log(b);
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

// let a = [
//   "http://example.html",
//   "https://example.com",
//   "ftp://example.html",
//   "http://google.com",
// ];
// let b = a.filter(function (str) {
//   return str.endsWith(".html");
// });
// console.log(b);

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
// let a = [1,2,3,4,5];
// for (let i = 0; i < a.length; i++) {
//   a[i] = (a[i] * 1.1);
// }
// console.log(a);

// Заполните массив случайными числами из промежутка от 1 до 100.
// let a = [];
// for (let i = 1; i <= 43; i++) {
//   let b = Math.floor(Math.random() * 100) + 1;
//   a.push(b);
// }
// console.log(a);

// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.

// let a = 12345;
// let str = a.toString();
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:

// [1, 2]
// [3, 4]
// [5, 6]

// let b = [];
// let a = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < a.length; i++) {
//   b.push(a[i]); // b =[3]
//   if (b.length === 2) {
//     console.log(b); // [ 1, 2 ]
//     b = [];
//   }
// }

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// Дана некоторая строка. Найдите позицию первого нуля в строке.
// let a = '111010100101'
// let b = a.indexOf("0")
// console.log(b)

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

// for (i = 1; i <= 1000; i++) {
//   let a = i.toString().split("");
//   let b = 0;
//   for (j = 0; j < a.length; j++) {
//     b += Number(a[j]);
//     }
//     // console.log(b)
//     if (b === 5) {
//       console.log(i)
//   }
// }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user)

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)
// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {};

// // имя свойства будет взято из переменной fruit
// bag[fruit] = 5;
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// alert(user.age); // John

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// user.age = 25; // добавим ещё одно свойство

// // не целочисленные свойства перечислены в порядке создания
// for (let prop in user) {
//   alert(prop);  name, surname, age
//  }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// }
// alert(sum)

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt("add number" );
//   };
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// очередь в макдональдсе
// состоит из людей
// У каждого человека есть кол-во денег и список
// того, что он хочет заказать он может:
// сделать заказ: он получит товары, но станет меньше денег
// отказаться от заказа (ничего не поменяется)
// попрыать, пока стоит в очереди

// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   wife: null,
// };

// let json = JSON.stringify(student);

// alert(typeof json); // мы получили строку!

// alert(json);

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };

// let user2 = JSON.parse(JSON.stringify(user))

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? underfined : value;
// }))

// export function sayHi(user) {
//   console.log(`Hello, ${user}!`);
// }
// function sayHi2() {
//   return [123];
// }
// console.log(sayHi2());

//  let fruit = prompt("Какой фрукт купить?", "apple");

//  let bag = {
//    [fruit]: 5, // имя свойства будет взято из переменной fruit
//  };

//  alert(bag.apple);

// const str = "Hi str"
// console.log(typeof str)

// function sayBye(user) {
//   console.log(`Bye, ${user}!`);
// }

// export {sayHi, sayBye}

// let user = {}
//   name: "John";
//   surname: "Smith";

// let name = "pete"
// delete user.name

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false
//   }
//   return true
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); //

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0
// for (let key in salaries) {
//    sum += salaries[key]
// }
// console.log(sum)


// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == "number") {
//       menu[key] *= 2;
//     }
//   }
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu)


// let start1 = document.querySelector("title");
// let head = start1.parentElement
// let html = head.parentElement
// let body = html.lastElementChild
// let div = body.lastElementChild
// let p = div.lastElementChild
// let div1 = p.lastElementChild.previousSibling
// let p1 = div1.firstElementChild
 
// console.dir(p1);

// let start2 = document.querySelector("#hello");

// console.dir(div);

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
  },
};

user.sayHi();