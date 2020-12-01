import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteTask, EditTask } from "../redux/actions";

const Task = ({ task, index }) => {
  const [nameOfTask, setNameOfTask] = useState("");
  let dispatch = useDispatch();
  let handleChange = (e) => setNameOfTask(e.target.value);
  const [showInput, setShowInput] = useState(false);
  const [done, setDone] = useState(false);
  let edit = () => {
    dispatch(
      EditTask({
        id: task.id,
        name: nameOfTask,
      })
    );
    setShowInput(!showInput);
  };
  return (
    <div className="row w-75 container mx-auto my-4">
      <h3 className="mr-3">{index + 1}</h3>
      {showInput ? (
        <input
          className="mx-auto"
          style={{ width: 500 }}
          type="text"
          value={nameOfTask}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              edit(task);
            }
          }}
        />
      ) : (
        <h3 className="mx-auto">{task.name}</h3>
      )}{" "}
      <button
        className="btn btn-primary btn-md"
        style={{ width: 90 }}
        onClick={() => edit(task)}
      >
        {" "}
        EDIT{" "}
      </button>
      <button
        className="btn btn-danger btn-md ml-3"
        onClick={() => dispatch(DeleteTask(task.id))}
        style={{ width: 90 }}
      >
        DELETE
      </button>
      {!done ? (
        <button
          className="btn btn-secondary mx-2"
          onClick={() => setDone(!done)}
          style={{width:80}}
        >
          CHECK
        </button>
      ) : (
        <button
          className="btn btn-success mx-2"
          onClick={() => setDone(!done)}
          style={{width:80}}
        >DONE</button>
      )}
    </div>
  );
};

export default Task;
