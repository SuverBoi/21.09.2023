// імя

let name = prompt("Введіть ваше ім'я: ");
alert("Привіт, " + name +"!");

// вік

const year = 2023
let age = prompt("Введіть ваш вік: ");
let birth = age - year
alert("Ваш вік: " + birth)

// квадрат

let storona = prompt("Введіть сторону квадрата: ");
let perimetr = storona*4
alert("Периметр: " + perimetr)

// коло

let storon = prompt("Введіть сторону кола: ");
let perimet = storona*4
alert("Периметр: " + perimet)

// валюти

const USD = 39.9
let conv = prompt("Скільки у вас грн?");
let convent = conv/USD
alert("Ваші доляри: " + convent+"$")

// парне не парне

let chislo = prompt("Введіть число: ");
const isEven = chislo % 2 === 0;

const result = isEven ? "парне" : "непарне";
alert(`Це число - ${result}.`);
// там чат gpt поміг я оператори забув просто