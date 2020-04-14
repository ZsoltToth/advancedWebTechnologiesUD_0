import dispatcher from '../LotteryDispatcher'
import ReactDOM from "react-dom";
import LotteryPicks from "../components/LotteryPicks";
import React from "react";

class LotteryActions{

    generatePicks(min, max, pickCnt){
        let picks = [];
        for( let i = 0; i < pickCnt; i++){
            let currentPick = Math.round(
                Math.random() *
                (max - min)
            ) + min;
            if(picks.includes(currentPick)){
                i--;
            }
            else{
                picks.push(currentPick);
            }
        }
        ReactDOM.render(
            <LotteryPicks picks={picks}/>,
            document.getElementById('picks'));
    }

}

export default new LotteryActions();
