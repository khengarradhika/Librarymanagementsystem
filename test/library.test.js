const Library = require('./library');

test('should add a book to the library', () => {
  const library = new Library();
  const book = { isbn: '210280116001', title: 'JavaScript Essentials', author: 'Radhika Khengar', year: 2024 };
  library.addBook(book);
  expect(library.getBooks()).toContainEqual(book);
});
    test('should borrow a book from the library', () => {
        const library = new Library();
        const book = { isbn: '123456', title: 'JavaScript Essentials', author: 'John Doe', year: 2024 };
        
        
        library.addBook(book);
      
      
        library.borrowBook('123456');
      
       
        expect(library.getAvailableBooks()).not.toContainEqual(book);
        expect(() => library.borrowBook('123456')).toThrow('Book not available');
      });
      

  
  
  
  
  
