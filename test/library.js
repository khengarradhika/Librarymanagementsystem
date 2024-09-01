
class library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    getBooks() {
      return this.books;
    }

    borrowBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (!book || book.borrowed) {
          throw new Error('Book not available');
        }
        book.borrowed = true;
      }
      returnBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn && book.borrowed);
        if (book) {
          book.borrowed = false;
        }
      }
  }
  
  module.exports = library;
  