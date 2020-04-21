import dispatcher from '../AppDispatcher';

class ShoppingCartActions {

    add2Cart(item){
        dispatcher.handleViewAction({
            command : 'ADD_TO_CART',
            item : item
        });
    }

    removeItem(itemId){
        dispatcher.handleViewAction({
            command : 'REMOVE_ITEM_BY_ID',
            itemId : itemId
        });
    }
}

export default new ShoppingCartActions();
