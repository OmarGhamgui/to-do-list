import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTask } from "../redux/actions";

const AddTask = ({ task }) => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addToTask({
        name: name,
        id: Date.now(),
      })
    );
  };
  return (
    <div>
      <div className="row w-75 container mx-auto my-5 d-flex">
        <input
          type="text"
          className="form-control"
          style={{ width: 930 }}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
               handleClick();
            }
          }}
        />
        <button className="btn btn-success" onClick={() => handleClick()}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTask;
