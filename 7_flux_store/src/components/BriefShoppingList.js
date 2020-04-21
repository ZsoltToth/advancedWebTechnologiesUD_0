import React from 'react'
import ShoppingCart from "../stores/ShoppingCart";

class BriefShoppingList  extends  React.Component{

    constructor() {
        super();
        this.state = {cart : []};
        this.onChangeOfShoppingCart = this.onChangeOfShoppingCart.bind(this);
    }

    onChangeOfShoppingCart(){
        this.setState({
            cart : ShoppingCart._items
        });
    }

    componentWillUnmount() {
        ShoppingCart.removeChangeListener(this.onChangeOfShoppingCart)
    }

    componentDidMount() {
        ShoppingCart.addChangeListener(this.onChangeOfShoppingCart);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.cart.map((item)=>{
                        return (
                            <li key={item.id}>{item.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BriefShoppingList;
