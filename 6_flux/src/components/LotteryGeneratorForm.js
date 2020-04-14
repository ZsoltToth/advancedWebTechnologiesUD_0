import React from 'react'

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
                                onClick={()=>{console.log({state: this.state})}}
                            >Generate</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default LotteryGeneratorForm;
