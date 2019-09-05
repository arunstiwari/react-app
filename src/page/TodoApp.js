import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import TodoForm from "../organisms/TodoForm";


const TodoApp = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const addTodo = (todo) => {
    dispatch({type: 'ADD_TODO', payload: todo});
  }
  return (
    <div>
      <TodoForm onClick={addTodo}/>
      {todos.map(item => <li key={item.id}>{item.item}</li>)}
    </div>
  );
};

export default TodoApp;
