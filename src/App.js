import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  function changeTask(event) {
    setTask(event.target.value);
  }
  function changeTime(event) {
    setTime(event.target.value);
  }

  function addNewTask() {
    const newTask = {
      task: task,
      time: time,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
    setTime("");
  }

  function deleteTask(event) {
    const idToDelete = event.target.value;

    idToDelete && document.getElementById(idToDelete).remove();
  }

  return (
    <div className="App">
      <div className="formContainer">
        <div className="todo">
          <label htmlFor="">Add meg a feladatot: </label>
          <input type="text" value={task} onChange={changeTask} />
        </div>

        <div className="time">
          <label htmlFor="">Add meg a ráfordítani kívánt időt: </label>
          <input type="text" value={time} onChange={changeTime} />
        </div>

        <button onClick={addNewTask}>Feladat felvétele</button>
      </div>
      <div className="todo-list">
        {taskList.map((task, index) => {
          return (
            <div className="item" id={index} onClick={deleteTask}>
              <p>
                <strong>Feladat: </strong>
                {task.task}
              </p>
              <p>
                <strong>Rászánt idő: </strong>
                {task.time}
              </p>
              <button value={index}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
