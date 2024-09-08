let books = [];

// Create Book
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Show Book
function showbooks(){
    const bookDiv = books.map((book, index)=> `<h1>Book Number: ${index + 1}</h1>
    <p><em>Book Name:</em> ${book.name}</p>
    <p><em>Author Name:</em> ${book.authorName}</p>
    <p><em>Book Description:</em> ${book.bookDescription}</p>
    <p><em>No. of Pages:</em> ${book.pagesNumber} page(s)</p>`);
    document.getElementById('books').innerHTML = bookDiv.join('');
}

// Clear input data
function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}