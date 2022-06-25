//.........................function........................
/*function Whatdoyoudo(job, firstname) {
    switch (job) {
        case 'trainer':
            return firstname + ' trains people';

        case 'fighter':
            return firstname + ' fights people';
        default:
            return firstname + ' does something else';
    }
}
console.log(Whatdoyoudo('trainer', 'nischal'));
//...........................................................arrays in javascript;.................................
var names = ['nischal', 'sarun', 'arun', 'himal'];
console.log(names[2]);
names[1] = 'dhisoom';
console.log(names[1]);
var john = ['nischal', 'gautam', 1992, 'student'];
john.push('Nepal');//add element at the last
console.log(john[2]);
john.unshift['Mr.'];//add at begenning
john.pop();// remove a element from end
john.shift();//remove element from begenning
console.log(john);
console.log(john.indexOf(1992));//returns position of element=====2 and returns-1 if element is not present
var x = john.indexOf('student');
if (x === -1) {
    console.log('Not an student');
}
else {
    console.log('student');
}
//************WAp to print array for tips paid for give bill amouts;
var bill = [124, 48, 268];
var tip = [(bill[0] * 0.2), (bill[1] * 0.15), (bill[2] * 0.1)];
console.log('the tips are ' + tip);
//............................OBJECT are like structure where order doesnot matter........................................
var john = {
    firstname: 'John',
    lastname: 'Gautam',
    birthyear: 2002,
    family: ['namuna, narayani, gangadhar, dilkumar'],
    job: 'tech',
    ismarried:false
};
console.log(john.firstname);
var x = 'birthyear';
console.log(john[x]);
john.job = 'unemployed';
console.log(john);
var john = {
    firstname: 'John',
    lastname: 'Gautam',
    birthyear: 2002,
    family: ['namuna', 'narayani', 'gangadhar', 'dilkumari'],
    job: 'tech',
    ismarried: false,
    calculateage: function () {
        return 2022 - this.birthyear;//can use this.birthyear
    },
    getsummary: function () {
        return `${this.firstname} is a ${this.job} enthusiast and he ${this.ismarried ? 'is' : 'not'} married.He is ${john.calculateage()} years old.`
    }
};
console.log(john.calculateage(1990));
console.log(john.getsummary());
const instrestedin = prompt('what do you want to know about jonas: firstname,lastname,birthyear,family,job,maritial status?');
console.log(john[instrestedin]);
if (john[instrestedin]) {
    console.log(john[instrestedin]);
} else {
    console.log('wrong request');
}
console.log(`${john.firstname} has ${john.family.length} family members and his dad is ${john.family[2]}`);
// ******************coding challenge: print x has bmi y which is higher than z using concept of obect and function.
var nischal = {
    fullname: 'Nischal Gautam',
    mass: 56,
    height: 1.86,
    calculateBMI: function () {
        return ((this.mass) / (this.height ** 2));
    }
};
var sarun = {
    fullname: 'Sarun Kafle',
    mass: 56,
    height: 1.79,
    calculateBMI: function () {
        return ((this.mass) / (this.height ** 2));
    }
};
if (nischal.calculateBMI() > sarun.calculateBMI()) {
    console.log(`${nischal.fullname} has  BMI ${nischal.calculateBMI()} which is higher than that of ${sarun.fullname}'s ${sarun.calculateBMI()}`);
} else {
    console.log(`${nischal.fullname} has BMI ${nischal.calculateBMI()} which is lower than that of ${sarun.fullname}'s ${sarun.calculateBMI()}`);
}

///.........................LOOPING....................................
for (let i = 0; i < 10; i++) {
    console.log('I am the God\'s favoriate child.');
}

const nischalarray = [
    'nischal',
    'Gautam',
    'Student',
    1980,
    ['sarun', 'Himal', 'suman', 'Gaurav']

];
const types = [];
for (let i = 0; i <= 3; i++) {
    console.log(nischalarray[i]);
    types[i] = typeof nischalarray[i];//can also use types.push(typeof nischalarray[i])
};
console.log(types);



const years = [2002, 2000, 1998];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(2022 - years[i]);
}
console.log(age);
//break stops the iteration while continue skips the iteration for that condtn.
//prints only string in array.
const values = ['nischal', 'gautam', 2002, 'sexy'];
for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string')
        continue;//break would have stopped the iteration here and sexy wouldnot print
    console.log(values[i], typeof values[i]);
}

for (let exersise = 1; exersise < 4; exersise++) {
    console.log(`------------starting exersise ${exersise}---------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`);
    }
}

//while loop
let rep = 1;
while (rep < 10) {
    console.log('i am nischal');
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
i = 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;//generating new number;
    i++;
    if (dice == 6) {
        console.log(`you have rolled a dice on attempt number ${i}.Congratulations`);
    }

}
//bills and tips in a bulk; coding challenge
const bill = [22, 23, 55, 60, 44, 66, 120, 200, 155];
tip = [];
function calculatetip(bill) {
    for (let i = 0; i < bill.length; i++) {
        tip[i] = bill[i] * 0.2;
    }
    console.log(tip);
}
calculatetip(bill);
sum = 0;
average = 0;
function calcaverage(arr) {
    for (let i = 0; i < 5; i++) {
        sum = sum + arr[i];
    }
    average = (sum / 5);
    return average;
}
console.log(calcaverage(10, 20, 30, 40, 50));

'use strict';
const x = 23;
if (x == 23) console.log(23);
console.log(25);

///calculate temperature amplitude when an array of temperatures of a day is given along with some error temperatures
const temperature = [3, -3, -2, -1, 13, 6, 5];
highest = temperature[0];
function amplitude(temperature) {
  for (let i = 0; i < temperature.length - 1; i++) {
    for (let j = i + 1; j < temperature.length; j++) {
      if (
        typeof temperature[i] == 'number' &&
        typeof temperature[j] == 'number'
      ) {
        if (temperature[j] > temperature[i]) {
          highest = temperature[j];
        }
      }
    }
  }
  console.log(highest);
}
amplitude(temperature);

const temperature = [3, -3, -2, 25, 'error', 17, 'error', 6, 5, -4, -1];
highest = temperature[0];
lowest = temperature[0];
function amplitude(temperature) {
  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] == 'number') {
      if (temperature[i] > highest) highest = temperature[i];
      if (temperature[i] < lowest) lowest = temperature[i];
    }
  }
  console.log(
    'the highest temperature was' + highest + ' and the lowest was ' + lowest
  );
  return highest - lowest;
}
console.log('the amplitude was ' + amplitude(temperature));
//merge two array array3=array1.concat(array2);
const temperature=[30,32,36];
function maximum(temperature);


const temperature = [30, 32, 36];
function maximum(temperature) {
  for (let i = 0; i < temperature.length; i++) {
    console.log(`the max temperature of day ${i + 1} is ${temperature[i]}`);
  }
}
maximum(temperature);

const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

'use strict';
const resturant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Bruschetta', 'Garlic Bread', 'Carprese Salad'],
  starterMenu: ['Focaccia', 'tea', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissotto'],
  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0, //default values
    time = '2:00',
    address,
  }) {
    console.log(
      `Order completed! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 10,
      close: 7,
    },
    sat: {
      open: 11,
      close: 12,
    },
  },
  orderpizza: function (ing1, ing2, ing3) {
    console.log(`You will like to have pizza with${ing1} , ${ing2}, ${ing3}`);
  },
  //using rest pattern
  orderPasta: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
resturant.orderDelivery({
  time: '22:30',
  address: 'Rajahar,21',
  mainIndex: 2,
  starterIndex: 2,
});
resturant.orderDelivery({
  starterIndex: 1,
});
const ingredients = [
  //prompt("Let's make pasta! ingredient 1?"),
  //prompt('ingredient 2?'),
  //prompt('ingredient 3?'),
];
console.log(ingredients);
resturant.orderpizza(ingredients[0], ingredients[1]);
//same shit
resturant.orderpizza(...ingredients);
resturant.orderPasta('cheese', 'paneer', 'chicken', 'topping');
const newresturant = {
  fondedIN: 1998,
  ...resturant, //copies all members from resturant object
  founder: 'Nischal Gautam',
};
//copying objects
const resturantcopy = { ...resturant };
resturantcopy.name = 'Nischal cusine';
console.log(resturantcopy);
console.log(newresturant);
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = resturant.categories; //asssigning array values to the variables
console.log(main, secondary);
//swapping values;
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(resturant.order(2, 0));
const [starter, mainCourse] = resturant.order(2, 0);

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);
//what if you want the object members to be assigned to diffrent variable
const {
  name: resturantName,
  openingHours: openTime,
  categories: tags,
  location: address,
} = resturant;
console.log(resturantName, openTime, tags, address);
const { menu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);
//mutating variable
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

console.log(obj.a);
({ a, b } = obj);
console.log(a, b);
//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
const {
  fri: { open: o, close: c },
} = openingHours;

////The spread operator
const arr2 = [7, 8, 9];
const newarr = [1, 3, ...arr2];
console.log(newarr);
console.log(...newarr); //individually logs to console
const newMenu = [...resturant.mainMenu, 'Momo']; //adding items from main menu to newmenu
console.log(newMenu);

//join two arrays
const fullmenu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(fullmenu);

const str = 'Nischal';
const letters = [...str, ' ', 's'];
console.log(letters);

//rest pattern and parameters
const arr3 = [1, 2, ...[3, 4]];
const [n, s, ...others] = [1, 2, 3, 4, 5];
console.log(n, s, others);
const [pizza, risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(sat, weekdays);
//functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  console.log(numbers);
  console.log(sum);
};
add(1, 2, 3, 4, 5);
const g = [23, 5, 7];
add(...g);
//short circuiting

console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
resturant.numGuests = 10;
const guests1 = resturant.numGuests ? resturant.numGuests : 1;
console.log(guests1);

//if 1st one is true or doesnot look on second while and looks on second also
if (resturant.orderpizza) {
  //checking if it exists
  resturant.orderpizza('mushroom', 'spanich');
}
resturant.orderpizza && resturant.orderPasta('mshroom', 'soya'); //appllies to both

//local assignment operators
const rest1 = {
  name: 'capri',
  numGuests: 0,
  owner: 'nischal',
};
const rest2 = {
  name: 'la piazza',
  owner: 'Giovanni Rossi',
};
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests ||= 10; //doesnot work as expected when numGeusts above is 0 instead it assigns 10 as 0 is not truish so we instead use nullish operator
rest2.numGuests ??= 10;
rest1.numGuests ??= 12;
rest2.owner = rest2.owner && '<annonymous>'; //logical and operator assigns a value to it if it is truthy
//even shorter
//or le truthy cha vane aru lai chalaudaina while and le value set garcha,,needs to be truthy
rest1.owner ||= '<anonymous>';
rest2.owner &&= '<anonymous';
console.log(rest1);
console.log(rest2);

//coding challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Arsenal',
  player1: [
    'nischal',
    'ram',
    'shyam',
    'ramesh',
    'rbaam',
    'joker',
    'tanmay',
    'samay',
    'carry',
    'bb',
    'hari',
  ],
  player2: [
    'nischal2',
    'ram2',
    'shyam2',
    'ramesh2',
    'rbaam2',
    'joker2',
    'tanmay2',
    'samay2',
    'carry2',
    'bb2',
    'hari2',
  ],
  score: '4:0',
  scored: ['Lewandoski', 'Gnarby', 'Lewandowski', 'Nischal'],
  date: 'Nov 9th,2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [gk, ...fieldPlayers] = game.player1;
console.log(gk);
console.log(...fieldPlayers);
const allPlayers = [...game.player1, ...game.player2];
console.log(allPlayers);
//include team 1's subsitute players too

const player1final = ['Thiago', 'Coutinho', 'Perisic', ...game.player1];
console.log(player1final);
///5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
///
const printGoals = function (...allPlayers) {
  console.log(`${allPlayers.length} goals were scored`);
};
printGoals('Davies', 'Muller');
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
//looping arrays for-of loop
const menu2 = [...resturant.starterMenu, ...resturant.mainMenu];
for (const item of menu2) console.log(item);
for (const item of menu2.entries()) {
  console.log(`${item[0]}: ${item[1]}`);
}

//maps
const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'subsitution'],
  [47, 'goal'],
  [61, 'subsitution'],
  [64, 'yellow card'],
  [69, 'Red card'],
  [70, 'subsitution'],
  [72, 'subsitution'],
  [76, 'goal'],
  [80, 'goal'][(92, 'yellow card')],
]);
const events = [...new set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);

//working with strings

const airline = 'Tap Air Portugal';
const plane = 'Boing 757';
console.log(plane[0]);
console.log('Boing'[1]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('t'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf('Air') + 5));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  var seatrow = seat.slice(-1); //seat[2];
  if (seatrow === 'B' || seatrow === 'E') {
    console.log('middle seat');
  } else {
    console.log('Not a middle seat');
  }
};
checkMiddleSeat('13D');
const email = 'hello@jonas.io';
const loginemail = ' Hello@jonas.Io \n';
const loweremail = loginemail.toLocaleLowerCase();
const trimmedEmail = loweremail.trim();
console.log(trimmedEmail);
const NormalizedEmail = loginemail.toLocaleLowerCase().trim();
console.log(NormalizedEmail);
const priceGB = '288,97E';
const priceUs = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUs);
const announcement = 'All passengers come to boarding door 23,Boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
const plane2 = 'Airbus A320neo';
if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}
console.log('a+very+nice+string'.split('+'));
console.log('Nischal Gautam'.split(''));
const firstName = 'Nischal';
const lastName = 'Gautam';
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.split(' ');
  console.log(names);
  for (const n of names) {
    console.log(n[1]);
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(namesUpper.join(' '));
  }
};
capitalizeName('nischal gautam');
//coding challenge
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;
console.log(text);
const text2 = 'Calculate_AGE';
const splitted = text2.split('_');
const firstname = splitted[0];
var lastname = splitted[1];
const camelName = [
  firstname,
  lastname[0].toLocaleUpperCase() + lastname.slice(1).toLocaleLowerCase(),
].join('');

console.log(camelName);
//const lastnameCapitalized = text2 toUpperCase();
//console.log(lastnameCapitalized);

const flights =
  '_Delayed_Departure;fao93766109;tx121337773;11:25+_Arrival;bru0978908908;fao999898989;11:45+_Delayed_ Arrival;hel7439299980;fao093765109; 12:05+_departure;fao737373773;lis12344555;12:30+_Delayed_ Arrival;hel7439299980;Nep093765109; 12:55';

const split = flights.split('+');
console.log(split);
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${
    type[1].toUpperCase() + type.slice(2).replace('_', ' ')
  } from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')}) `.padStart(42);
  console.log(output);
}
//working with function
const bookings = [];
const createBooking = function (
  flightnum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //numPassenger = numPassenger || 1;
  const booking = {
    flightnum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('120B');
createBooking('130c', undefined, 598);

const flight = 'LH234';
const jonas = {
  name: 'Nischal Gautam',
  passport: 238876,
};
const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);
  if (passenger.passport == 238876) {
    //alert('check in');
  } else {
    //alert('Wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
const newpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newpassport(jonas);
checkIn(flight, jonas);
//js doesnot have pass by refrence..objects passing is indeed value passing but has address as the vally
//higher order functions return or take function as arguments

const oneword = function (str) {
  return str.replace(/ /g, '').toLowercase();
};
const upperFirstWord = function (str) {
  const [firstword, ...others] = str.split(' ');
  return [firstword.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log('transformed by: ' + fn.name);
};
transformer('javascript is the best!', upperFirstWord);
upperFirstWord('my name is nischal');
const high5 = function () {
  console.log('🙋🏾‍♂️🙋🏾‍♂️🙋‍♂️');
};
//document.body.addEventListener('click', high5);


//function returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetingwithoutname = greet('Namaste!'); //returns a function
greetingwithoutname('Nischal');
greet('Hello')('Nischal'); //function call

//greet using arrow
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hola')('Gola');
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookkings: [],
  book(flightnum, name) {
    console.log(
      `${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
    );
    //this.bookkings.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};
lufthansa.book(112, 'Nischal Gautam');
console.log(lufthansa);
//reusing the lufthansa.book function with another object
const BuddhaAir = {
  airline: 'Buddha Air',
  iataCode: 'BD',
  bookings: [],
};
const book = lufthansa.book;
book.call(BuddhaAir, 36, 'Sarun Kafle');

book.call(lufthansa, 36, 'Himal Midun'); //this. should now point to buddhaair object
//apply method
const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary');
const flightdata = [583, 'George cooper'];
//book.apply(swiss, ...flightdata);
const bookswiss = book.bind(swiss, 23);
bookswiss('steven');
//with eventt listners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.5, 200));
const addVat = addTax.bind(null, 0.23); //first argument of bind is this keyword
console.log(addVat(100));
var addSum = function (principal) {
  return function (rate) {
    return principal + principal * rate;
  };
};
var n = addSum(100);
console.log(n(0.1));

*/
'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(2));
console.log(arr.slice(1, 3));
//splice
console.log(arr.splice(2)); //mutates original array
console.log(arr);
arr.splice(-1); //removes last element
//reverse
//.reverse() reverses array element and mutates original array
//arr1.concat(arr2) concats two arrays
//join
//arr1.join('-')

const arrx = [10, 12, 24, 15];
console.log(arrx[0]);
console.log(arrx.at(0));
console.log(arrx.at(-1));
//looping arrays using for each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement} `);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
//for each
console.log('----for each---');
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(mov)} `);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//Bankist app
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//array coding challenge one

var checkDogs = function (arr1, arr2) {
  var arr1Corrected = arr1.slice(1, -2);
  var overallArray = [...arr1Corrected, ...arr2];
  overallArray.forEach(function (element, i) {
    if (element >= 3) {
      console.log(`Dog no ${i + 1} is an adult`);
    } else {
      console.log(`Dog no ${i + 1} is a child`);
    }
  });
};
checkDogs([1, 3, 5, 6, 12, 3], [5, 4, 2, 4, 3]);
const user = 'Nischal Kumar Gautam'; //nkg
const username = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    //we would have to use for loop and loop over each elemtnt off username i.e nischal,kumar,gautam and take first letter from each if not for map
    return name[0];
  });
console.log(username);
console.log(`your username is ${username.join('')}`);

const CreateUsernames = function (accs) {
  accs.forEach(function (acc) {
    //for each mutates the original array while map creates new array
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
CreateUsernames(accounts);
console.log(account1);
