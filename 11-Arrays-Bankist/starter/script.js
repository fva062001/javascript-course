'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const typeOfTransf = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${typeOfTransf}">${
      i + 1
    } ${typeOfTransf} </div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const generateUsernames = accounts => {
  accounts.map(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcDispBalance = movements => {
  const balance = movements.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
};

displayMovements(account1.movements);
generateUsernames(accounts);
calcDispBalance(account1.movements);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// - Array Slice Method not mutate
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// - Array Splice Method mutates
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// arr.splice(1, 2);
// console.log(arr);

// - Array Reverse Method mutates
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// - Array Concat Method not mutate
// const letters = arr.concat(arr2);
// console.log(letters);

// - Array Join Method
// console.log(letters.join(' - '));

// - At Method
// const arr = [23, 11, 64];
// console.log(arr.at(0));
// console.log(arr.at(-1));

// -  Foreach in array
// ? Conventional Way
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${movement}`);
//   }
// }

// ? With forEach
// movements.forEach((mov, i) => {
//   if (mov > 0) {
//     console.log(`Movement: ${i + 1} \nYou deposited ${mov}`);
//   } else {
//     console.log(`Movement: ${i + 1} \nYou withdrew ${mov}`);
//   }
// });

// - Maps forEach
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// - Sets forEach
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`);
// });

// Coding Challenge #1

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)

// 2. Create an array with both Julia's (corrected) and Kate's data

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")

// 4. Run the function for both test datasets
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

// const checkDogs = (dogsJulia, dogsKate) => {
//   const copy = dogsJulia.slice(1, -2);
//   const allDogs = copy.concat(dogsKate);
//   allDogs.forEach((dog, i) => {
//     console.log(
//       dog < 3
//         ? `Dog number ${i + 1} is still a puppy`
//         : `Dog number ${i + 1} is an adult, and is ${dog} years old`
//     );
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const toEur = movements.map(item => item * 0.95);

// console.log(toEur);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter((mov, i) => {
//   return mov > 0;
// });

// const withdrawal = movements.filter(mov => mov < 0);

// const balance = movements.reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0);

// console.log(deposits);
// console.log(withdrawal);
// console.log(balance);

// const maximumBalance = movements.reduce((acc, curr) => {
//   return acc > curr ? acc : (acc = curr);
// }, movements[0]);

// console.log(maximumBalance);

// Coding Challenge 2

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:

// const calcAverageHumanAge = ages => {
//   const agesArray = ages.map((dog, i) => {
//     return dog <= 2 ? 2 * dog : 16 + dog * 4;
//   });

//   const filter = agesArray.filter(item => {
//     return item >= 18;
//   });

//   return filter;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)

// 4. Run the function for both test datasets

// PIPELINE
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov);
console.log(totalDeposits);
