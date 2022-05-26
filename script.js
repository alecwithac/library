let library = [];

const addBook = (ev) => {
    ev.preventDefault(); //stops page from submitting and refreshing
    let book = {
        id: Date.now(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: document.getElementById('year').value,
        genre: document.getElementById('genre').value,
        pages: document.getElementById('pages').value
    }
    library.push(book);
    document.querySelector('form').reset(); //clears the form for future entries
};


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBook);
});

