const faker = require('faker');



generateAuthor = () => {
    return {
        name  : `${faker.name.firstName()} ${faker.name.lastName()}`,
        nationality : faker.address.country()
    };
};
const authors = [];
for(i=0; i < 100; i++){
    authors.push(generateAuthor());
}

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
console.log(generateBook());
