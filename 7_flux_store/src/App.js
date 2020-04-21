import React from 'react';
import './App.scss';
import ShoppingCartForm from "./components/ShoppingCartForm";
import BriefShoppingList from "./components/BriefShoppingList";
import DetailedShoppingList from "./components/DetailedShoppingList";

function App() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12"><ShoppingCartForm/></div>
        </div>
      <div className="row">
        <div className="col-md-4"><BriefShoppingList/></div>
        <div className="col-md-8"><DetailedShoppingList/></div>
      </div>
    </div>
  );
}

export default App;
