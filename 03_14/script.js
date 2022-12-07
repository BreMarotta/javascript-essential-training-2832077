/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";


const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const Pride = new Book(
  "Pride and Prejudice",
  324,
  "Jane Austen",
  true,
  5
)

const Sense = new Book(
  "Sense and Sensibility",
  123,
  "Jane Austen",
  true,
  4
)

const HarryPotter = new Book(
  "Harry Potter and the Sorcerer's Stone",
  432,
  "JK Rowling",
  true,
  3
)

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log(Pride, Sense, HarryPotter)
