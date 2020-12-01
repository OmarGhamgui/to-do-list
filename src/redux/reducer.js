import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actions";
import taskList from "./states";
export let Reducer = (state = taskList, action) => {
  let newTaskList = [...state];
  switch (action.type) {
    case ADD_TASK:
      return [...newTaskList, action.payload];
    case DELETE_TASK:
      return newTaskList.filter((task) => task.id !== action.payload);
    case EDIT_TASK:
      return newTaskList.map((el) => 
        (el.id === action.payload.id)? {id: action.payload.id,name: action.payload.name,isDone: false,}: el);

    default:
  }
  return state;
};
