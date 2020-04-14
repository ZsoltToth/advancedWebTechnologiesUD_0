import React from 'react';
import './App.css';
import LotteryGeneratorForm from "./components/LotteryGeneratorForm";
import LotteryActions from "./actions/LotteryActions";

function App() {
  return (
    <div className="App">
        <button onClick={()=>{
            LotteryActions.generatePicks(1,90,5)
        }}>Lottery 5</button>
        <LotteryGeneratorForm/>
        <div id={"picks"}></div>
    </div>
  );
}

export default App;
