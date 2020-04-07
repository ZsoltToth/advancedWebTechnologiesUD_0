import React from 'react'

class ToDoList extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            form : {
                name: "Dish Washing",
                description: "I shall wash the dishes",
                estimation: "0.5"
            },
            todos : []
        };
        this.handleNameChangeEvent = this.handleNameChangeEvent.bind(this);
        this.handleDescriptionChangeEvent = this.handleDescriptionChangeEvent.bind(this);
        this.handleEstimationChangeEvent = this.handleEstimationChangeEvent.bind(this);
        this.handleAddOnClickEvent = this.handleAddOnClickEvent.bind(this)
    }

    handleNameChangeEvent(event){
        let state = this.state;
        state.form.name = event.target.value;
        this.setState(state);
    }

    handleDescriptionChangeEvent(event){
        let state = this.state;
        state.form.description = event.target.value;
        this.setState(state);
    }

    handleEstimationChangeEvent(event){
        let state = this.state;
        state.form.estimation = event.target.value;
        this.setState(state);
    }

    handleAddOnClickEvent(event){
        let state = this.state;
        state.todos.push(this.state.form);
        state.form = {name : '', description: '', estimation: 0};
        this.setState(state);

    }

    render(){
        return (
            <div>
                <div className="row">
                    <h1>To Do List</h1>

                </div>
                <div className="row">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                To Do Name:
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={this.state.form.name}
                                    onChange={this.handleNameChangeEvent}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description:
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={this.state.form.description}
                                    onChange={this.handleDescriptionChangeEvent}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Estimated Time:
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={this.state.form.estimation}
                                    onChange={this.handleEstimationChangeEvent}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={this.handleAddOnClickEvent}>Add</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">-----------</div>
                <div className="row">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Estimation</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map((todoItem)=>{
                                return(
                                    <tr key={todoItem.name}>
                                        <td>{todoItem.name}</td>
                                        <td>{todoItem.estimation}</td>
                                        <td>{todoItem.description}</td>
                                        <td><button className="btn-danger">Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ToDoList
