import React  from "react";
import {render, fireEvent} from "@testing-library/react";
// import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
import TodoForm from "../../organisms/TodoForm";
import store from "../../store";

// const mockStore = configureMockStore();

describe('TodoForm Tests', function () {
  const payload = {id:1, item: 'Todo1'};
  const onClickHandler = jest.fn(() => {
    store.dispatch({type: 'ADD_TODO',payload: payload})
  });
  it('should render the TodoForm without crash', function () {
      render(<Provider store={store}><TodoForm /></Provider>)
  });

  it('should render', function () {
    const {getByTestId, container} = render(<Provider store={store}><TodoForm onClick={onClickHandler} /></Provider>);
    fireEvent.click(getByTestId('addtodobutton'));
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    // console.log('--container---');
    // console.log(store.getState());
    expect(store.getState().todo).toMatchObject([payload])
  });

  it('should simulate the onChange event of the form', () => {
    const {getByTestId, container} = render(<Provider store={store}><TodoForm onClick={onClickHandler} /></Provider>);
    let inputelement = getByTestId("input");

    let b = fireEvent.change(inputelement, {target: {name : 'input1', value: 'ABCD'}});
    // console.log('container  ',container);
    // console.log(inputelement.value);
  })

  it('should simulate the onClick event of the form', () => {
    const {getByTestId, container} = render(<Provider store={store}><TodoForm onClick={onClickHandler} /></Provider>);
    let inputelement = getByTestId("input");

    let b = fireEvent.change(inputelement, {target: {name : 'input1', value: 'ABCD'}});
    // console.log('container  ',container);
    // console.log(inputelement.value);
  })
});
