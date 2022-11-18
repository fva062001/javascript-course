'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//- Object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // ES6 Enhanced Functions on Objects
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  // ES6 Enhanced Literals
  openingHours,
};

//- Map iteration

//- Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// // Map chaining

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// // Get map value
// console.log(rest.get('name'));

// // Pattern
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // See if exists
// console.log(rest.has('categories'));

// // Delete on Map
// rest.delete(2);

// // Get size of Map
// console.log(rest.size);

// // Clear all elements
// console.log(rest.clear());

//- Sets

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// const word = new Set('Fernando');
// console.log(word);

// // Set Size
// console.log(`Set Size: ${ordersSet.size}`);

// // Check if an item is in Set
// console.log(ordersSet.has('Pasta'));

// // Add item to set
// ordersSet.add('Garlic Bread');

// // Delete item on a set
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // Delete all elements in a set
// // ordersSet.clear();

// // Real use case
// // Use of sets is to eliminate duplicate values
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const allPositions = [...new Set(staff)];
// console.log(allPositions);
// console.log(`Size of the array: ${new Set(staff).size}`);

//- Optional Chaining

// console.log(openingHours.mon?.open);

//- For of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const [index, item] of menu.entries()) {
//   console.log(`${index}: ${item}`);
// }

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

//- Assignment Operators
// rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest2);
// console.log(rest1);

//- Nullish Coalescing Operator (null and undefined)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

//- && and || operators

// // Use ANY data type, return ANY data tyoe, short-circuiting
// // || will work taking the first truthy value
// console.log(3 || 'Fernando');
// console.log('' || 'Fernando');

// // Ternary Operator
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log(guests1);

// // AND operator is the opposite of the OR
// console.log(0 && 'Fernando');

//- Rest Pattern

// // SPREAD, because on RIGHT side of =

// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // REST with objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function(...numbers){
//   console.log(numbers);
// };

// add(2,3);
// add(4,5,6,7);

//- Spread Operator (useful only in places where you use commas)

// // Usage of spread operator on functions
// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

// // Objects with spread operator
// const newRestaurant = { ...restaurant, founder: 'Fernando', foundedIn: 1998 };
// console.log(newRestaurant);

// // Object Copy
// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // Printing each element
// console.log(...newArr);

// // Creating a new array with other array elements
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy Arrays
// const menuCopy = [...restaurant.mainMenu];
// console.log(`Copy: ${menuCopy}`);

// // Join two or more arrays
// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(wholeMenu);

// // Iterables: arrays,strings,maps,sets. NOT objects
// const str = 'Fernando';
// const letters = [...str, '', 's'];
// console.log(letters);
// console.log(...str);

//- Objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Destructuring changing variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values on Objects
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Switching Variables on Objects (Mutating)
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 14 };

// //* Need to use parenthesis bc of the way JS Works
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Destructuring
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//- Arrays

// // Destructuring
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// // Whole in the middle to skip elements
// let [main, , secondary] = restaurant.categories;

// // Switching Variables Array
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Destructuring functions
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Destructuring nested array
// const nested = [2, 4, [5, 6]];
// const [normal, , nestedArr] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//- Coding Challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')

// const [players1, players2] = game.players;

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)

// const allPlayers = [...players1, ...players2];

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)

// function printGoals(...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(`Player: ${players[i]} annotated ${i + 1}`);
//   }
// }
// const scoredPlayers = [...game.scored];
// printGoals(...scoredPlayers);

// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored

//- Coding Challenge 2
// // Let's continue with our football betting app! Keep using the 'game' variable from
// // before.

// // Your tasks:

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [index, item] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${item}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(`Odd Average: ${average}`);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them
// // (except for "draw"). Hint: Note how the odds and the game objects have the
// // same property names �

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : 'victory';
//   console.log(`Odd of ${teamStr} ${game[team]} ${odd}`);
// }
