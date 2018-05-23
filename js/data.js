class Book {

    constructor(name, author, year, cover) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.cover = cover;
        this.read = false;
        this.id = Book.id++;
    }
    toggleread() {
        this.read = !this.read;
    };
}

Book.id = 0;


let model = {
    books: [
        new Book('World of Warcraft Chronicle Volume 1', 'BLIZZARD ENTERTAINMENT', '2016', 'img/3.jpg'),
        new Book('World of Warcraft Chronicle Volume 2', 'BLIZZARD ENTERTAINMENT', '2017', 'img/4.jpg'),
        new Book('World of Warcraft Chronicle Volume 3', 'BLIZZARD ENTERTAINMENT', '2018', 'img/2.jpg'),
        new Book('Warcraft: The Last Guardian', 'Jeff Grubb', '2016', 'img/5.jpg'),
        new Book('Before the Storm', 'Christie Golden', '2018', 'img/1.jpg')
    ],
    getBooks() {
        return this.books;
    },
    addNewBook(obj) {
        this.books.push(obj);
    }
}
