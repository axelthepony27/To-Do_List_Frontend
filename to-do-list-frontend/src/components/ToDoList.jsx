import React from "react";

const ToDoList = ({ todos, editToDo, deleteToDo }) => {
    return (
        <table className="table table-hover mt-3" align="center">
            <thead className="thead-light">
            <tr>
                <th scope="col">Nº</th>
                <th scope="col">Text</th>
                <th scope="col">Priority</th>
                <th scope="col">Due date</th>

                <th scope="col">Option</th>
            </tr>
            </thead>
            {todos.map((todo, index) => {
                return (
                    <tbody key={todo.id}>
                    <tr>
                        <th scope="row">{index + 1} </th>
                        <td>{todo.text}</td>
                        <td>{todo.priority}</td>
                        <td>{todo.dueDate}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={editToDo}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger mx-2"
                                onClick={() => deleteToDo(todo.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                );
            })}
        </table>
    );
};

export default ToDoList;