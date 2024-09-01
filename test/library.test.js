const Library = require('../Library');

test('should add a book to the library', () => {
  const library = new Library();
  const book = { isbn: '210280116001', title: 'JavaScript Essentials', author: 'Radhika Khengar', year: 2024 };
  library.addBook(book);
  expect(library.getBooks()).toContainEqual(book);
});
