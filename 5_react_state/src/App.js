import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8"><ToDoList/></div>
          <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default App;
