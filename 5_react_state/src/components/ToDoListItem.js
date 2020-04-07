import React from 'react'

function ToDoListItem(props){
    return(
        <tr key={props.todoItem.name}>
            <td>{props.todoItem.name}</td>
            <td>{props.todoItem.estimation}</td>
            <td>{props.todoItem.description}</td>
            <td>
                <button
                    className="btn-danger"
                    onClick={props.deleteAction}
                >Delete</button></td>
        </tr>
    );
}

export default ToDoListItem
