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
console.log(authors);
