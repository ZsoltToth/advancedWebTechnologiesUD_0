const assert = require('assert');
//import ShoppingCart from "./ShoppingCart";
const ShoppingCart = require('./ShoppingCart');

describe("Testing of a Shopping Cart", ()=>{

    it('calculates the total price of a fixed array', ()=>{
       let items = [
           {name : 'apple', quantity: 10, price: 1},
           {name : 'banana', quantity: 5, price: 2}
       ];
       const expected = 20;
       let cart = new ShoppingCart();
       cart._items = items;
       const actual = cart.getTotal();
       assert.equal(actual,expected,"Wrong total price");
    });

    it('adds a new item to an empty cart',()=>{
        let item = {name : 'apple', quantity: 10, price: 1};
        let cart = new ShoppingCart();
        assert.equal(cart._items.length, 0);
        cart.addItem(item);
        assert.equal(cart._items.length, 1);
    });

    it('adds more to an existing item to the cart', ()=>{
        let item = {name : 'apple', quantity: 10, price: 1};
        let cart = new ShoppingCart();
        cart._items = [item];
        assert.equal(cart._items.length, 1);
        cart.addItem(item);
        assert.equal(cart._items.length, 1);
        assert.equal(
            cart._items.find((i)=>{return i.name === 'apple'}).quantity,
            20);
    });
});
