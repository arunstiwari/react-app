import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import TodoApp from "../../page/TodoApp";
import {Provider} from "react-redux";
import store from "../../store";

describe('TodoApp', function () {

  it('should render the app without crash', function () {
    render(<Provider store={store}><TodoApp/></Provider>)
  });
  it('should update the state on addButton click', function () {
    console.log(store.getState());
    const {getByTestId, container} = render(<Provider store={store}><TodoApp/></Provider>);
    let b = fireEvent.click(getByTestId('addtodobutton'));
    expect(b).toBe(true);
    console.log(store.getState());
  });
});
