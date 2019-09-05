import todo from "../../reducers/todo";

describe('todo reducer', function () {

  it('should return the default state', function () {
      const todo1 = todo([], {});
      expect(todo1.length).toBe(0);
  });

  it('should return the default state when action is undefined', function () {
      const todo1 = todo([], {type: undefined});
      expect(todo1.length).toBe(0);
  });

  it('should return the initialState when action is undefined', function () {
    const todo1 = todo([{id: 1, item: 'Todo 1'}], {type: 'SHOW'});
    expect(todo1.length).toBe(1);
    expect(todo1).toMatchObject([{id: 1, item: 'Todo 1'}]);
  });

  it('should return the new state when action is ADD_TODO', function () {
    const todo1 = todo([{id: 1, item: 'Todo 1'}], {type: 'ADD_TODO',payload: {id:2, item: 'Todo 2'}});
    expect(todo1.length).toBe(2);
    expect(todo1[1]).toMatchObject({id: 2, item: 'Todo 2'});
  });
});
