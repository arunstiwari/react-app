import React from "react";
import {render, fireEvent} from '@testing-library/react';
import InputElement from "../../atoms/InputElement";

describe('InputElement', function () {
  const onChangeHandler = jest.fn();
  it('should render the InputElement without crash', function () {
      render(<InputElement />);
  });

  it('should have props value as Value1', function () {
    let {getByTestId} = render(<InputElement inputValue="Value1" />);
    let byTestId = getByTestId("input");
  });

  it('should have onChangeHandler', function () {
    let {getByTestId} = render(<InputElement
                                    inputValue="Value1"
                                    onChange={onChangeHandler}/>);

    let byTestId = getByTestId("input");
    fireEvent.change(byTestId, {target: {value: 'stuff'}});
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
