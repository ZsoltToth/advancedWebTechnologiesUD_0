import EventEmitter from 'events';
import dispatcher from '../AppDispatcher';

class ShoppingCart extends EventEmitter{

    _items = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change', callback);
    }
}
const store = new ShoppingCart();

dispatcher.register((action) =>{
    if(action.payload.command === 'ADD_TO_CART'){
        let item = action.payload.item;
        item.id = store._items.length + 1;
        store._items.push(item);
        store.emitChange();
    }
    if(action.payload.command === 'REMOVE_ITEM_BY_ID'){
        store._items = store._items.filter((item)=>{
            return item.id !== action.payload.itemId
        });
        store.emitChange();
    }
});


export default store;
