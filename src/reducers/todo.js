const todo = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO' :
      return [...state, action.payload];

    default:
      return state;
  }
}

export default todo;
