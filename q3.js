// Q3 - Library Management System (Classes + Objects)
// Book class with issueBook and returnBook. Manage array, display available, search by ISBN

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) throw new Error('Book already issued');
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }

  toString() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn}) - ${this.isIssued ? 'Issued' : 'Available'}`;
  }
}

// sample books
const books = [
  new Book('Clean Code','Robert C. Martin','9780132350884'),
  new Book("You Don't Know JS",'Kyle Simpson','9781491904244'),
  new Book('Eloquent JavaScript','Marijn Haverbeke','9781593279509'),
  new Book('JavaScript: The Good Parts','Douglas Crockford','9780596517748'),
  new Book('Effective Java','Joshua Bloch','9780134685991')
];

console.log('Available books:');
books.filter(b => !b.isIssued).forEach(b => console.log(b.toString()));

// issue by ISBN
function issueByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (!book) { console.log('Book not found'); return; }
  try {
    book.issueBook();
    console.log('Issued:', book.toString());
  } catch (err) { console.error(err.message); }
}

// export for Node usage
if (typeof module !== 'undefined') module.exports = { Book, books, issueByISBN };
