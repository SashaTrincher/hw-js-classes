class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class Bookstore {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(bookToRemove) {
        this.books = this.books.filter(book => book.title !== bookToRemove.title);
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`Назва: ${book.title}, Автор: ${book.author}, Вартість: ${book.price}`);
        });
    }
}