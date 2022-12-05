/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const purse = {
    name: "Burgandy bookbag",
    color: "burgandy",
    numOfStraps: 2,
    open: false,
    location: "hanging on rack",
    unzip: function (pocketStatus) {
        this.open = pocketStatus;
    },
    putAway: function (box) {
        this.location = box
    }
}

console.log(purse)