const Library = require('./library');

test('should add a book to the library', () => {
  const library = new Library();
  const book = { isbn: '210280116001', title: 'JavaScript Essentials', author: 'Radhika Khengar', year: 2024 };
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
      
      

  
  
  
  
  
