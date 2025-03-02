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
    