import React from 'react'
import ReactDOM from 'react-dom'
import LotteryPicks from './LotteryPicks'

class LotteryGeneratorForm extends React.Component{


    constructor() {
        super();
        this.state = {
            min : 1,
            max : 90,
            pickCnt : 5
        }
    }

    render(){
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Minimum
                        </td>
                        <td>
                            <input
                                type={"number"}
                                value={this.state.min}
                                onChange={(e)=>{
                                    let st = this.state;
                                    st.min = Math.round(e.target.value);
                                    this.setState(st);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Maximum
                        </td>
                        <td>
                            <input
                                type={"number"}
                                value={this.state.max}
                                onChange={(e)=>{
                                    let st = this.state;
                                    st.max = Math.round(e.target.value);
                                    this.setState(st);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Pick Count</td>
                        <td>
                            <input
                                type={"number"}
                                value={this.state.pickCnt}
                                onChange={(e)=>{
                                    let st = this.state;
                                    st.pickCnt = Math.round(e.target.value);
                                    this.setState(st);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                onClick={()=>{
                                    console.log({state: this.state});
                                    let picks = [];
                                    for( let i = 0; i < this.state.pickCnt; i++){
                                        let currentPick = Math.round(
                                            Math.random() *
                                            (this.state.max - this.state.min)
                                        ) + this.state.min;
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
                                }}
                            >Generate</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LotteryGeneratorForm;
