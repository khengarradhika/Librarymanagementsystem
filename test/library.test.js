const Library = require('./library');

test('should add a book to the library', () => {
  const library = new Library();
  const book = { isbn: '210280116094', title: 'JavaScript Essentials', author: 'Radhika Khengar', year: 2024 };
  library.addBook(book);
  expect(library.getBooks()).toContainEqual(book);
});
    test('should borrow a book from the library', () => {
        const library = new Library();
        const book = { isbn: '210280116094', title: 'JavaScript Essentials', author: 'Radhika khengar', year: 2024 };
        
        
        library.addBook(book);
      
      
        library.borrowBook('210280116094');
      
       
        expect(library.getAvailableBooks()).not.toContainEqual(book);
        expect(() => library.borrowBook('210280116094')).toThrow('Book not available');
      });
      test('should return a borrowed book to the library', () => {
        const library = new Library();
        const book = { isbn: '210280116094', title: 'JavaScript Essentials', author: 'Radhika khengar', year: 2024 };
      
        
        library.addBook(book);
      
      
        library.borrowBook('210280116094');
      
        
        library.returnBook('210280116094');
      
        
        expect(library.getAvailableBooks()).toContainEqual(book);
      });
      
      test('should view all available books in the library', () => {
        const library = new Library();
        const book1 = { isbn: '210280116094', title: 'JavaScript Essentials', author: 'Radhika khengar', year: 2024 };
        const book2 = { isbn: '210280116116', title: 'Advanced JavaScript', author: 'Rashi Agarwal', year: 2023 };
      
        
        library.addBook(book1);
        library.addBook(book2);
      
       
        library.borrowBook('210280116094');
      
       
        const availableBooks = library.getAvailableBooks();
        expect(availableBooks).toContainEqual(book2);
        expect(availableBooks).not.toContainEqual(book1);
      });
      

  
  
  
  
  
