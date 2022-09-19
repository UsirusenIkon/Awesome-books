const title=document.querySelector(".title");
const author=document.querySelector(".author");
const form=document.querySelector(".form");
const submit=document.querySelector(".submit");
let books = [
    book1 = 
    {title: 'title1',
     author: 'author1',
    },
    book2 = 
    {title: 'title2',
     author: 'author2',
    },
    book3 = 
    {title: 'title3',
     author: 'author3',
    }
];

let bookList = document.querySelector('.bookList');

function displayBook(){
    bookList.innerText="";
    books.forEach(book => {
        let title = document.createElement('h3');
        title.innerText = book.title;
    
        let author = document.createElement('h4');
        author.innerText = book.author;
    
        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
    
        let horizontalLine = document.createElement('hr');
    
        bookList.append(title, author, removeBtn, horizontalLine);
    
    });
}


submit.addEventListener('click', addBooks=>{
 let title1 = title.value;
 let author2=author.value;
 
 console.log(title1);
 console.log(author2);
 books.push(book={
    title:title1,
    author:author2
});
displayBook();
console.log(books);
});