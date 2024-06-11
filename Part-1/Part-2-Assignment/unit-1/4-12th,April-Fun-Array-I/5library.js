// Problem Statement:
// You are tasked with implementing a basic library management system. The system should support the following operations:
// Add a new book to the library.
// Display all available books in the library.
// Allow users to borrow a book from the library.
// Allow users to return a borrowed book to the library.

// Each book in the library will be represented by an object with the following properties:
// Title
// Author
// ISBN
// Status (Available or Borrowed)
// You need to implement the following functions to manage the library:

// addBook(title, author, isbn): This function adds a new book to the library with the given title, author, and ISBN. The initial status of the book should be "Available".

// displayBooks(): This function displays all available books in the library along with their titles, authors, and ISBNs.

// borrowBook(isbn): This function allows a user to borrow a book from the library. It should update the status of the book to "Borrowed" if it's available. If the book is not available or doesn't exist, display an appropriate message.

// returnBook(isbn): This function allows a user to return a borrowed book to the library. It should update the status of the book to "Available". If the book is not borrowed or doesn't exist, display an appropriate message.

// Input:
// addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
// addBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
// displayBooks();
// borrowBook("9780743273565");
// displayBooks();
// returnBook("9780743273565");
// displayBooks();


// Output
// Added book: The Great Gatsby by F. Scott Fitzgerald (ISBN: 9780743273565) Added book: To Kill a Mockingbird by Harper Lee (ISBN: 9780061120084) Available Books:
// The Great Gatsby by F. Scott Fitzgerald (ISBN: 9780743273565)
// To Kill a Mockingbird by Harper Lee (ISBN: 9780061120084) Book with ISBN 9780743273565 has been borrowed. Available Books:
// To Kill a Mockingbird by Harper Lee (ISBN: 9780061120084) Book with ISBN 9780743273565 has been returned. Available Books:
// The Great Gatsby by F. Scott Fitzgerald (ISBN: 9780743273565)
// To Kill a Mockingbird by Harper Lee (ISBN: 9780061120084)
let book = [];
function addBook(Title,Author,ISBN) {
    let obj ={};
    obj["Title"] = Title;
    obj["Author"] =Author ;
    obj.ISBN = ISBN;
    book.push(obj);
    console.log(book)

}
addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
addBook("To Kill a Mockingbird", "by Harper Lee", "9780061120084");

function displayBooks(ISBN) {
    for (let i = 0; i < book.length; i++) {
        if (book[i].ISBN == ISBN)
        console.log(book[i],"Available")
    }
}
displayBooks(9780743273565);
displayBooks(9780061120084);

function borrowBook(ISBN) {
    for (let i = 0; i < book.length; i++) {
       if (book[i].ISBN == ISBN) {
        book[i].borrowed = true;
        console.log(book[i],"has been borrowed")
       }
        
    }
}
borrowBook(9780061120084);

function returnBook(ISBN) {
    for (let i = 0; i < book.length; i++) {
        if (book[i].ISBN == ISBN) {
         book[i].return = true;
         console.log(book[i],"has been returned")
        }
         
     }
};
returnBook(9780743273565);