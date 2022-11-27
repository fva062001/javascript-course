'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 3);

// const flight = 'LH234';
// const fernando = {
//   name: 'Fernando Valerio',
//   passport: 24918408019,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 24918408019) {
//     alert('Check in');
//   } else {
//     alert('Wrong');
//   }
// };

// // checkIn(flight, fernando);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(fernando);
// checkIn(flight, fernando);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// //- Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Fernando');

// greet('Hello')('Fernando');

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet('Hey')('Fernando');
const lufthansa = {
  name: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const swiss = {
  name: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

// Call a function from another object to the object you want to
const book = lufthansa.book;
book.call(eurowings, 23, 'Fernando Valerio');
book.call(lufthansa, 43, 'Alex Serafini');
book.call(swiss, 54, 'David Frias');

// The apply method, the only difference is that you need to use an array of parameters
const flightData = [43, 'Fernando Valerio'];
book.apply(swiss, flightData);
