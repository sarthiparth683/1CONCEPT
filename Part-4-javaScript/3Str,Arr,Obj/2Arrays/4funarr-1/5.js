// Problem Statement:
// You are tasked with implementing a basic library management system. The system should support the following operations:

let book = [];

function addBook(Title, Author, ISBN) {
    let obj = {};                               // important
    obj["Title"] = Title;
    obj["Author"] = Author;
    obj.ISBN = ISBN;
    book.push(obj);                               //  important
}
addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
addBook("BookName", "Writer Name", "ISBN Number");
addBook("To Kill a Mockingbird", "by Harper Lee", "9780061120084");
console.log(book);
//------------------------------------------------------------------------------------------


function displayBooks(ISBN) {
    for (let i = 0; i < book.length; i++)
        // if (book[i].ISBN == ISBN); // or      // important for getting this is good
        if (book[i]["ISBN"] == ISBN) {           // for assigning this is good
            // console.log(book[i].Title, "Book is:- is Available");
        };
};
displayBooks(9780743273565);
displayBooks(9780061120084);
//-------------------------------------------------------------------------------------


function borrowBook(ISBN) {
    for (let i = 0; i < book.length; i++) {
        if (book[i].ISBN == ISBN) {
            book[i].borrowed = true;
            // console.log(book[i].Title, ", book:- has been borrowed");
        };
    };
};
borrowBook(9780061120084);
//-------------------------------------------------------------------------------------------
function returnBook(ISBN) {
    for (let i = 0; i < book.length; i++) {
        if (book[i].ISBN == ISBN) {
            book[i].return = true;
            // console.log(book[i].Title, "book:- has been returned");
        };
    };
};
returnBook(9780743273565);
//------------------------------------------------------------------