/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("James");
console.log(23);

let firstName = "Jobear";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = 'Codder';

console.log(myFirstJob);
console.log(myCurrentJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'james');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
console.log(birthYear);
console.log(typeof birthYear);

// const job;

var job = 'programmer';
job = 'teacher';

let lastName = 'Al Mahomud';
console.log(lastName);



//lacture 09
// math operator
const now = 2030;
const ageJames = now - 1999;
const ageMonika = now - 2005;

console.log(ageJames, ageMonika);

console.log(ageJames * 2, ageMonika / 3, 2 ** 4);
//2**4 mens  2 to the power of 4 = 2*2*2*2

const firstName = 'Jobear';
const lastName = 'James';
console.log(firstName + lastName);

// Assaignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x /= 2;
x++;
x--;
console.log(x);

//Comparison Operator
console.log(ageJames > ageMonika);
console.log(ageJames >= 32);

const isFullAge = ageMonika >= 25;

console.log(now - 1991 > now - 2018);



//lecture 10

const now = 2030;
const ageJames = now - 1999;
const ageMonika = now - 2005;


// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avarageAge = (ageJames + ageMonika) / 2;
console.log(ageJames, ageMonika, avarageAge);



// lecture 12

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);



const firstName = 'jobear';
const job = 'programmer';
const birthYear = 1999;
const year = 2037;


const Jobear = "I'm " + firstName + (year - birthYear) + ' years old ' + job + '!';
console.log(Jobear);

const jobearNew = `I'm ${firstName} , ${year - birthYear} year old ${job}.`;
console.log(jobearNew);

console.log(`Just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`It
is
a
multi
line
string`)



// lecture 14

const age = 15;

if (age >= 18) {
    console.log(`Sara can stat driving Licence 🚗 `);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young . wait another ${yearsLeft} Years.`)
};

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};
console.log(century);



//lecture 16

//type Conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jobear'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coerction

console.log('I am ' + 23 + ' years old');

console.log('23' - '10' - 3);

console.log('23' * '10');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/

//lecture 17

// js has 5 falsy values : 0 , '', undefined,null,NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jobear'));
console.log(Boolean({}));
console.log(Boolean(''));