import {createStore,combineReducers} from "redux";
import todo from "./reducers/todo";

const reducers = combineReducers({
  todo
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
