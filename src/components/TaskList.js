import { React } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  let tasklist = useSelector((state) => state);

  return (
    <div>
      {tasklist.map((task, index) => {
        return <Task key={task.id} task={task} index={index} />;
      })}
    </div>
  );
};

export default TaskList;
