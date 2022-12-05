class Shelf {
    constructor(
        name,
        length,
        numberOfBooks,
        location,
        decorated,
    ) {
        this.name = name;
        this.length = length;
        this.numberOfBooks = numberOfBooks;
        this.location = location;
        this.decorated = decorated;
    }
    decorateShelf(status){
        this.decorated = status;
    }
}

export default Shelf;