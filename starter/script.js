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


//lecture 17

// js has 5 falsy values : 0 , '', undefined,null,NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jobear'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all.");

} else {
    console.log('You shoud get a job');
};

let height = 1;
if (height) {
    console.log('YAY! Height is defined.');
} else {
    console.log('Height is UnDefined');
};



//lecture 18

const age = '18';
if (age === 18) console.log('You Just Became an adult :D(strict)');

if (age == 18) console.log('You Just Became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 7) {
    console.log('Cool! 7 is an amazaing number!')
} else if (favorite === 8) {
    console.log('8 is also a cool number!');
}
else if (favorite === 9) {
    console.log("Cool this is number 9!")
} else {
    console.log('Number is not 7 or 8 or 9.')
}

if (favorite !== 9) console.log('Why not 9!');



// lacture 19

//lacture 20

const hasDriversLicense = true;
const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

const shoudDrive = hasDriversLicense && hasGoodVision;



const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else shoud drive ..');
};



//lecture 21


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3

console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy  ');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}


const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3

console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy  ');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy.')
}


//lecture 22

const day = 'saturday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to codding meetup');
        break;
    case 'tusday':
        console.log('Prepare theory Videos');
        break;
    case 'wednesday ':
        console.log('Do code');
        break;
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend ');
        break;

    default:
        console.log("Not a valid day!");

}



//lecture 23

3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 id bigger';
}

const me = 'Jobear';
console.log(`I'm ${2037 - 1991} years old ${me}`);



const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) :
//     console.log(`I like to drink Water `);

const drink = age >= 18 ? `Wine` : `Water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `Wine`;

} else {
    drink2 = `Water`
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `Water`}`);



const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`);

*/

// lecture 26

