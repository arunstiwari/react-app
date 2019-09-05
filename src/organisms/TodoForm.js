import React, {useState} from 'react';
import InputElement from "../atoms/InputElement";

let seq = 0;

const TodoForm = ({onClick}) => {
  const [todo, setTodo] = useState({id: seq, item: ''})
  const onChangeHandler = (e) => {
      setTodo({...todo, item: e.target.value})
  }

  const onButtonClick = () => {
    onClick(todo);
    seq +=1;
    setTodo({id: seq, item: ''});
  }

  return (
    <div className="div1">
      <InputElement onChange={onChangeHandler} inputValue={todo.item} />
      <button data-testid="addtodobutton" onClick={onButtonClick}>Add TODO</button>
    </div>
  );
};

export default TodoForm;
