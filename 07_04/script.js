/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let list = ["lip gloss", "hair ties", "coffee", "lotion", "nail polish", "lego figures", "headphones", "clock"]

// array is 8 itmes:
console.log("array length", list.length)

// remove last itme
list.pop()
console.log("remove last", list)

// dd the last item as the first item on the array 
list.unshift("eraser")
console.log("add eraser to beginning", list)

// Sort the items by alphabetical order
list.sort();
console.log("sorted alphabetically", list)

// Use the find() method to find a specific item in the array
let x = list.find(x => x === "lip gloss")
console.log(x)

let newList = list.filter(y => y !== x)
console.log(newList)