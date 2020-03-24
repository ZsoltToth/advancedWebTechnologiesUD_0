const faker = require('faker');
const fs = require('fs');



generateAuthor = () => {
    return {
        name  : `${faker.name.firstName()} ${faker.name.lastName()}`,
        nationality : faker.address.country()
    };
};
let authors = [];
for(i=0; i < 100; i++){
    authors.push(generateAuthor());
}
authors = authors.map((author,index)=>{
    author.authorId = index;
    return author;
});

generateBook = () =>{
    titleLength = faker.random.number({min:1, max:5});
    numOfAuthors =  faker.random.number({min:1, max:3});
    booksAuthors = [];
    for(i=0; i< numOfAuthors; i++){
        booksAuthors.push(faker.random.arrayElement(authors))
    }
    return {
        title : faker.lorem.words(titleLength),
        authors : booksAuthors
    };
};
let books = [];
for(bookIndex = 0; bookIndex < 1000; bookIndex++){
    book = generateBook();
    book.bookId = bookIndex;
    books.push(book);
}

fs.writeFile(
    'database.fake.json',
    JSON.stringify({authors: authors, books: books}),
    (err)=>{console.log(err)}
    );
