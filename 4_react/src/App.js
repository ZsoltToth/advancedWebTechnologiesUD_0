import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './style.scss';
import './components/Greetings';
import Greetings from "./components/Greetings";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className={"App","container-fluid"}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Greetings name={"Alice"}/>
        <NewsFeed/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
