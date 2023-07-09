
// assignment
// Q 1
let person_name: string = "Ali";
console.log("hello " + person_name + ", How are you?");

// Q2
const personName: string = "Umer";

console.log("Lowercase: ", personName.toLowerCase());
console.log("Uppercase: ", personName.toUpperCase());

const titleCaseName: string = personName.replace(/\b\w/g, (match) => match.toUpperCase());
console.log("Titlecase: ", titleCaseName);

// Q3
console.log('Albert Einstein once said "A person who never made a mistake never tried anything new."'); 

// Q4
const famous_person: string = "Albert Einstein";
const message: string = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);

// Q5
const personNameWithWhitespace: string = "\t   \n  Ali  \t\n  ";

console.log("Name with whitespace:", personNameWithWhitespace);
const strippedName: string = personNameWithWhitespace.trim();
console.log("Name without whitespace:", strippedName);

// Q6
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 15 - 7);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 64 / 8);

// Q7
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);

// Q8
const favoriteNumber: number = 42;
const nummessage: string = `My favorite number is ${favoriteNumber}.`;

console.log(nummessage);

// Q9
const names: string[] = ["Umer", "Ali", "Ahmed", "hamza"];
for (let i = 0; i < names.length; i += 1) {
  console.log(names[i]);
}

// Q10
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}! How are you doing?`);
}

// Q11
const transportationModes: string[] = ["Honda motorcycle", "Tesla car", "Bicycle", "Private jet"];
for (let i = 0; i < transportationModes.length; i++) {
  console.log(`I would like to own a ${transportationModes[i]}.`);
}

// Q12
const guestList: string[] = ["Ali", 'Umer", "Ahmed"];
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, Please join us for dinner.`);
}

console.log("\n Ali wont be able to attend because he has died \n")

// Q13
guestList[0] = "Yaseen";
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, Please join us for dinner.`);
}

// Q14
// Original guest list


// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add a new guest to the beginning of the array
guestList.unshift("Amaan");

// Add a new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamid");

// Add a new guest to the end of the array using append()
guestList.push("Yasir");

// Print new invitation messages
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, Please join us for dinner.`);
}

// Q15
// Print a message indicating only two guests can be invited
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages for the remaining two guests
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you're still invited to dinner.`);
}

// Remove the last two names from the list
guestList.length = 0;

// Print the empty list
console.log("Guest list:", guestList);

// Q16
// Array of places to visit
const placesToVisit: string[] = ["Paris", "Tokyo", "Rio de Janeiro", "Cairo", "Sydney"];

// Print array in original order
console.log("Original order:", placesToVisit);

// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in original order
console.log("Original order:", placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show the changed order
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the list to show it's back to its original order
console.log("Original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print the array to show the changed order
console.log("Alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();

// Print the list to show the changed order
console.log("Reverse alphabetical order:", placesToVisit);

// Q17
console.log(`The number of people invited to dinner is: ${guestList.length}`);

// Q18
// Array of mountains
const mountains: string[] = ["Everest", "K2", "Kilimanjaro", "Denali", "Matterhorn"];

// Print the array
console.log("Mountains:", mountains);

// Q19
// Object representing a mountain
const mountain1: Record<string, string> = {
  name: "Everest",
  location: "Nepal",
  height: "8,848 meters"
};

// Object representing another mountain
const mountain2: Record<string, string> = {
  name: "K2",
  location: "Pakistan/China",
  height: "8,611 meters"
};

// Print the objects
console.log("Mountain 1:", mountain1);
console.log("Mountain 2:", mountain2);

// Q20 Done 

// Q21
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');

console.log("Is car < 'mazda'? I predict False.");
console.log(car < 'mazda');

// Q22

console.log("Is 'orange' === 'orange'? I predict True.");
console.log('orange' === 'orange');

console.log("Is 'grape' !== 'grape'? I predict False.");
console.log('grape' !== 'grape');

console.log("Is 'kiwi' > 'banana'? I predict True.");
console.log('kiwi' > 'banana');

console.log("Is 'kiwi' < 'pear'? I predict False.");
console.log('kiwi' < 'pear');

console.log("Is 'apple' === 'apple' && 'orange' === 'orange'? I predict True.");
console.log('apple' === 'apple' && 'orange' === 'orange');



console.log("Is 'apple' in ['apple', 'banana', 'orange']? I predict True.");
console.log('apple' in ['apple', 'banana', 'orange']);

console.log("Is 'kiwi' in ['apple', 'banana', 'orange']? I predict False.");
console.log('kiwi' in ['apple', 'banana', 'orange']);

// Q23
const alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 5 points.");
}

// Q24


if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}

// Q25
if (alien_color === 'green') {
   console.log("Congratulations! You earned 5 points.");
} else if (alien_color === 'yellow') {
   console.log("Congratulations! You earned 10 points.");
} else if (alien_color === 'red') {
  console.log("Congratulations! You earned 15 points.");
}

// Q26
const age: number = 30;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
}


// Q28
const usernames: string[] = ['user1', 'user2', 'admin', 'user3', 'user4'];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in`);
  }
}

// Q29
const eusernames: string[] = []; // Empty array

if (eusernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < eusernames.length; i++) {
    if (eusernames[i] === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${eusernames[i]}, thank you for logging in again.`);
    }
  }
}

// Q30
const current_users: string[] = ["Umer", "Ali", "Ahmed", "hamza"];
const new_users: string[] = ["Raza", "Ali", "Shafique", "hamza"];

for (let i = 0; i < new_users.length; i++) {
  const new_username = new_users[i].toLowerCase();
  if (current_users.includes(new_username)) {
    console.log('The username "${new_users[i]}" is already taken. Please enter a new username.');
  } else {
    console.log(`The username "${new_users[i]}" is available.`);
  }
}

// Q31
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  let ordinal;
  if (numbers[i] === 1) {
    ordinal = 'st';
  } else if (numbers[i] === 2) {
    ordinal = 'nd';
  } else if (numbers[i] === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  console.log(`${numbers[i]}${ordinal}`);
}

// Q32
const favorite_pizzas: string[] = ['Pepperoni', 'Supreme', 'Ranch'];
for (let i = 0; i < favorite_pizzas.length; i++) {
  console.log(`I like ${favorite_pizzas[i]} pizza.`);
}
console.log("I really love pizza!");

// Q33
const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// Q34
function make_shirt(size: string, message: string) {
  console.log(`Shirt size: ${size}`);
  console.log(`Message: ${message}`);
}

make_shirt('M', 'Hello World!');

// Q35
function mk_shirt(size: string = 'L', message: string = 'I love TypeScript') {
  console.log(`Shirt size: ${size}`);
  console.log(`Message: ${message}`);
}

mk_shirt(); // Large shirt with default message
mk_shirt('M'); // Medium shirt with default message
mk_shirt('S', 'Custom message'); // Custom size and message

// Q36
function describe_city(city: string, country: string = 'Pakistan') {
  console.log(`${city} is in ${country}.`);
}

describe_city('Karachi'); // Default country
describe_city('London', 'United Kingdom'); // Custom country
describe_city('New York', 'USA'); // Custom country

// Q37
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('Tokyo', 'Japan'));

// Q38
function make_album(artist: string, album_title: string, tracks?: number): Record<string, string | number> {
  const album: Record<string, string | number> = {
    artist: artist,
    title: album_title
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

console.log(make_album('Artist 1', 'Album 1'));
console.log(make_album('Artist 2', 'Album 2', 10));
console.log(make_album('Artist 3', 'Album 3', 12));

// Q39
function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

const magician: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
show_magicians(magician);

// Q40
function mk_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
}


mk_great(magician);
show_magicians(magician);

// Q41
function make_great(magicians: string[]): string[] {
  const great_magicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push(`${magicians[i]} the Great`);
  }
  return great_magicians;
}

const magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
const great_magicians: string[] = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);

// Q42
function make_sandwich(...items: string[]): void {
  console.log("Sandwich ingredients:");
  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);
  }
}

make_sandwich('Bread', 'nutella');
make_sandwich('Bread', 'Ham', 'Lettuce', 'Tomato', 'Mayonnaise');
make_sandwich('Bread', 'Butter', 'Jelly');

// Q43
function car_info(manufacturer: string, model: string, ...features: string[]): Record<string, string | string[]> {
  const car: Record<string, string | string[]> = {
    manufacturer: manufacturer,
    model: model,
  };

  for (let i = 0; i < features.length; i += 2) {
    const key = features[i];
    const value = features[i + 1];
    car[key] = value;
  }

  return car;
}

const cr = car_info('Toyota', 'Camry', 'Color', 'Red', 'Year', '2022', 'Sunroof', 'Yes');
console.log(cr);
