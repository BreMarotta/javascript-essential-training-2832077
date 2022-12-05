/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Shelf from './Shelf.js';

const bookShelf = new Shelf(
    "Harry Potter",
    "30 inches",
    17,
    "family room by desk",
    false,
)

console.log("Harry Potter Shelf: ", bookShelf)
console.log("Decorated Status: ", bookShelf.decorated)
bookShelf.decorateShelf(true);
console.log("Decorated Status after function: ", bookShelf.decorated)