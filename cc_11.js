// Task 1: Creating a Book Class //
class Book {constructor(title, author, isbn, copies) {
this.title = title; // Title
this.author = author; // Author name
this.isbn = isbn; // isbn 
this.copies = copies;} // Number of copies 


getDetails() {
return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;} // The way to get book details
updateCopies(quantity) {
 this.copies += quantity;}} //The way to update number of copies

// Test Case //
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());// Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails());// Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2: Creating a Borrower Class //
class Borrower {
 constructor(name, borrowerId) {
this.name = name; // Barrower name
this.borrowerId = borrowerId; // Borrower Id
this.borrowedBooks = [];} // Borrowed Books list 
    
borrowBook(bookTitle) {
this.borrowedBooks.push(bookTitle);} // Way to borrow books 
    
 returnBook(bookTitle) {
 this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);}} // Way to return books  
    
 // Test Case //
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Output: ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Output: []

// Task 3: Creating a Library Class //
class Library {
 constructor() {
this.books = []; // Store books
 this.borrowers = [];} // Store borrowers
    
 addBook(book) {
this.books.push(book);} // Add new books to library
    
listBooks() {
this.books.forEach(book => console.log(book.getDetails()));} // list all books
    
 // lend book to barrower
 lendBook(borrowerId, isbn) {
const book = this.books.find(b => b.isbn === isbn);
 const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
if (book && borrower && book.copies > 0) {
book.updateCopies(-1);
borrower.borrowBook(book.title);}} 
    
 //  Return a barrowed book 
 returnBook(borrowerId, isbn) {
 const book = this.books.find(b => b.isbn === isbn);
 const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
 if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
 book.updateCopies(1);
 borrower.returnBook(book.title);}}}
    
// Test Case //
const library = new Library();
library.addBook(book1);
library.listBooks();  

// Task 4: Implementing Book Borrowing
library.lendBook(201, 123456); // barrower getting a book
console.log(book1.getDetails());// updated book details 
console.log(borrower1.borrowedBooks);// display barrowerd books