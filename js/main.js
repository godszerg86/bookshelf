
document.addEventListener('DOMContentLoaded', ()=>{
let octopus = {
    init() {
        view.init();
    },
    getBooks() {
        return model.getBooks();
    },
    markRead(id) {
        model.books[id].toggleread();
        view.render();
    },
    addNewBook() {
        let {
            name,
            author,
            year,
            cover
        } = view.getNewBookInput();
        model.addNewBook(new Book(name, author, year, cover));
        view.resetInput();
        view.render();
    }
}


let view = {
    init() {
        document.querySelector('#shelf').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'I') {
                octopus.markRead(parseInt(e.target.dataset.id));
            }
        });
        document.querySelector('#add-btn').addEventListener('click', () => {
            octopus.addNewBook();
        });
        this.render();
    },
    render() {
        let htmlStr = '';
        for (const book of octopus.getBooks()) {
            htmlStr = htmlStr + `<div class="col s12 m6 xl4">
            <div class="card ${book.read?'teal lighten-2':''} hoverable ">
                <div class="card-content">
                    <span class="card-title">${book.name}</span>
                    <img class="responsive-img" src="${book.cover}" alt="" srcset="">
                        <p>By: ${book.author} (publish date: ${book.year})</p>
                        <button data-id="${book.id}" class="btn waves-effect waves-light ${book.read?'red lighten-2':''}">MARK AS ${book.read?'UNREAD':'READ'}<i data-id="${book.id}" class="material-icons right">done</i></button>
                </div>
            </div>
        </div>`;
        }
        document.querySelector('#shelf').innerHTML = htmlStr;
    },
    getNewBookInput(){
        return {
            name: document.querySelector('#book-name').value,
            author: document.querySelector('#book-author').value,
            year:document.querySelector('#book-year').value,
            cover: document.querySelector('#book-cover').value
        }
    },
    resetInput() {
        document.querySelector('#book-name').value = '';
        document.querySelector('#book-author').value = '';
        document.querySelector('#book-year').value = '';
        document.querySelector('#book-cover').value = '';
    }
}


octopus.init();
});