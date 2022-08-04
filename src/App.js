import "./App.css";
import React, { useState } from "react";

function ToDo(props) {
    const handleClick = (event) => {
        props.subdeleteTask(props.taskId);
    };

    return (
        <div className="task">
            <div className="task-text">{props.task}</div>

            <button className="delete-button" onClick={handleClick}>
                delete
            </button>
        </div>
    );
}

function ToDoList(props) {
    const subdeleteTask = (taskId) => {
        props.deleteTask(taskId);
    };
    const edit = 1;

    // if(!edit){
    //   return (
    //     //fixed task block
    //     <div className="list">
    //            {props.taskList.map((x) => (
    //                <ToDo
    //                key = {props.taskList.indexOf(x)}
    //                taskId = {props.taskList.indexOf(x)}
    //                subdeleteTask = {subdeleteTask}

    //               task={x} />
    //           ))}
    //     </div>
    //   )
    // }
    // return(
    //   //edit task block
    //   <div className="Task">
    //     <input type="text" placeholder="edit task"/>
    //   </div>

    // );

    return (
        //fixed task block
        <div className="list">
            {props.taskList.map((x) => (
                //condition this

                <ToDo
                    key={props.taskList.indexOf(x)}
                    taskId={props.taskList.indexOf(x)}
                    subdeleteTask={subdeleteTask}
                    task={x}
                />
            ))}
        </div>
    );
}

function ToDoForm(props) {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(newTask);
        setNewTask("");
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-task"
                value={newTask}
                placeholder="Enter task"
                onChange={handleChange}
            />
            <button class="button-7" type="submit">
                Add Task
            </button>
        </form>
    );
}

function App() {
    const [taskList, setTaskList] = useState([
        "default task 1",
        "default task 2",
    ]);
    // setTaskList( prev => [...prev, 'Hi']);

    //const taskList = ["read", "eat", "sleep"];
    const addTask = (newTask) => {
        setTaskList((prev) => [...prev, `${newTask}`]);
        //taskList.push(newTask);
        console.log(taskList);
    };

    const deleteTask = (taskId) => {
        console.log(taskId);
        setTaskList((prev) => prev.filter((_, index) => index !== taskId));
    };

    console.log(taskList);
    return (
        <div>
            <header className="App-header">
                <h1>To Do List</h1>
            </header>
            <ToDoForm onSubmit={addTask} />
            <ToDoList taskList={taskList} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
