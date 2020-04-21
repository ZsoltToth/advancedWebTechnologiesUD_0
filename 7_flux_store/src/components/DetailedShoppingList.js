import React from 'react'
import ShoppingCart from "../stores/ShoppingCart";
import ShoppingCartActions from "../actions/ShoppingCartActions";

class DetailedShoppingList extends  React.Component{


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
               Detailed List
                <table className="table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.cart.map((item) =>{
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td><button
                                    className='btn-danger'
                                    onClick={()=>{
                                        ShoppingCartActions.removeItem(item.id);
                                    }}
                                >Delete</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DetailedShoppingList;
