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
// const lufthansa = {
//   name: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const swiss = {
//   name: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// // Call a function from another object to the object you want to
// const book = lufthansa.book;
// // book.call(eurowings, 23, 'Fernando Valerio');
// // book.call(lufthansa, 43, 'Alex Serafini');
// // book.call(swiss, 54, 'David Frias');

// // The apply method, the only difference is that you need to use an array of parameters
// const flightData = [43, 'Fernando Valerio'];
// // book.apply(swiss, flightData);

// // Bind method
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Williams');

// // Creating functions with set variables with bind (PARTIAL APLICATION)
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Fernando Valerio');

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this);
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // // Partial Aplication

// // const addTax = (rate, value) => value + value * rate;

// // // First parameter set to default because you dont need this. in this function
// // const addVAT = addTax.bind(null, 0.23);
// // console.log(addVAT(2400));

// const addTax = rate => {
//   return value => {
//     console.log(value + value * rate);
//   };
// };

// addTax(0.23)(2400);

// - Coding Challenge 1

// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')} \n(Write option number)`
//       )
//     );

//     typeof answer === 'number' && answer < this.options.length
//       ? this.answers[answer]++
//       : alert('Not permitted input, try again');

//     this.displayResults();
//   },
//   displayResults(type) {
//     type === 'array'
//       ? console.log(this.answers)
//       : console.log(`Poll results are ${this.answers.join(' ')}`);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// - IIFE

// (function () {
//   console.log('This will never run again');
// })();

// (() => {
//   console.log('This will also never run again');
// })();

// - Clousures

// const secureBooking = () => {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
