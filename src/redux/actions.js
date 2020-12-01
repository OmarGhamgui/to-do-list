export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function addToTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}
export function EditTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
}
export function DeleteTask(taskID) {
  return {
    type: DELETE_TASK,
    payload: taskID,
  };
}
