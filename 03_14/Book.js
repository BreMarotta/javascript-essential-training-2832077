class Book {
    constructor(
        name,
        pages,
        author,
        read,
        rating
    ) {
        this.name = name;
        this.pages = pages;
        this.author = author;
        this.read = read;
        this.rating = rating;
    }
    readBook(readStatus){
        this.read = readStatus;
    }
    rateBook(inputRating){
        this.rating = inputRating;
    }
}

export default Book;