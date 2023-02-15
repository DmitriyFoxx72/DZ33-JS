//                         Урок 3. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function cube(num) {
//     let res = num * num * num;
//     return res;
// }
// console.log(cube(2)+cube(3));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


// function nalog(salary) {
//     if (isNaN(salary)) {
//         console.log(`значение задано неверно`);
//     } else {
//         let res = salary * 0.87;
//         console.log(`Размер заработной платы за вычетом налогов равен ${res}`);
//     }
// }

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// console.log(maxNumber(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`)),Number(prompt(`Введите третье число`))));

// function maxNumber (num1, num2, num3){
//     let max = 0;
// if(num1> num2 && num1> num3)
// max = num1;
// else if(num2 > num1 && num2 > num3)
// max = num2;
// else max = num3;
// return max;



const sum = (a,b) => {
    return a + b;
}

let diff = (a,b) => {
    return diff = (a>b ? a-b : (b>a ? b-a : 0));
}

const mult = (a,b) => {
    return a*b;
}

const div = (a,b) => {
    return a/b;
}

console.log(sum(10, 6));
console.log(diff(10, 6));
console.log(mult(10, 6));
console.log(div(10,6));
