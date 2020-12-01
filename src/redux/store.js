import { createStore } from "redux";
import { Reducer } from "./reducer";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(Reducer,reduxDevTools);

export default store;
