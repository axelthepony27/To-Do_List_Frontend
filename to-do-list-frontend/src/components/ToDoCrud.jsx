import { useState } from "react";
import api from "../api/axiosConfig";
import ToDoList from "./ToDoList";

const ToDoCrud = ({ load, todos }) => {
    /* state definition  */
    const [id, setId] = useState("");
    const [text, setText] = useState("");
    const [done, setDone] = useState("");
    const [priority, setPriority] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [dateCreated, setDateCreated] = useState("");
    const [dateDone, setDateDone] = useState("");

    /* being handlers */
    async function save(event) {
        event.preventDefault();
        await api.post("", {
            text: text,
            done: done,
            priority: priority,
            dueDate: dueDate,
            dateCreated: dateCreated,
            dateDone: dateDone,
        });
        alert("To-Do Record Saved");
        // reset state
        setId("");
        setText("");
        setDone("");
        setPriority("");
        setDueDate("");
        setDateCreated("");
        setDateDone("");
        load();
    }
    async function editToDo(todos) {
        setText(todos.text);
        setDone(todos.done);
        setPriority(todos.priority);
        setId(todos.id);
        setDueDate(todos.dueDate);
        setDateCreated(todos.dateCreated);
        setDateDone(todos.dateDone);
    }

    async function deleteToDo(id) {
        await api.delete("/delete/" + id);
        alert("To-Do Details Deleted Successfully");
        load();
    }

    async function updateToDo(event) {
        event.preventDefault();
        if (!id) return alert("To-Do Details No Found");
        await api.put("/" + id, {
            id: id,
            text: text,
            done: done,
            priority: priority,
            dueDate: dueDate,
            dateCreated: dateCreated,
            dateDone: dateDone,
        });
        alert("To-Do Details Updated");
        // reset state
        setId("");
        setText("");
        setDone("");
        setPriority("");
        setDueDate("");
        setDateCreated("");
        setDateDone("");
        load();
    }
    /* end handlers */

    /* jsx */
    return (
        <div className="container mt-4">
            <form>
                <div className="form-group my-2">
                    <input
                        type="text"
                        className="form-control"
                        hidden
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <label>Text</label>
                    <input
                        type="text"
                        className="form-control"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Priority</label>
                    <input
                        type="text"
                        className="form-control"
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                    />
                </div>

                <div className="row">
                    <div className="col-4">
                        <label>Done</label>
                        <input
                            type="text"
                            className="form-control"
                            value={done}
                            placeholder="Doneness"
                            onChange={e => setDone(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary m-4" onClick={save}>
                        Register
                    </button>
                    <button className="btn btn-warning m-4" onClick={updateToDo}>
                        Update
                    </button>
                </div>
            </form>
            <ToDoList
                todos={todos}
                editEmployee={editToDo}
                deleteEmployee={deleteToDo}
            />
        </div>
    );
};

export default ToDoCrud;