import React from 'react';

const InputElement = ({onChange, inputValue}) => {
  return (
    <div>
      <input data-testid="input"
             name="input1"
             type="text"
             onChange={onChange}
             value={inputValue}
             placeholder="Enter value..." />
    </div>
  );
};

export default InputElement;
