// import userReducer.js from "./userReducer.js";

const initialState = {list: [{text: "open deposit", id: 0, completed: true}, {text: "read book", id: 1, completed: false}], filter: 'ALL' }; // done, undone
let nextTodo = initialState.list.length;


export const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TODO": {
      if (state.list.length === 0) nextTodo = 0;
      if (action.payload !== "" )
        return {...state, list: [...state.list, {id: nextTodo++, text: action.payload, completed: false}]};
      break;
    }
    case "TOGGLE_TODO": {
      return {...state, list: state.list.map((todo) => todo.id === action.payload ?
          {
            ...todo, completed: !todo.completed,
          } : todo)};
      break;
    }
    case "REMOVE_TODO": {
      return {...state, list: state.list.filter((todo) => !todo.completed)};
    }
    case "COMPLETE_ALL": {
      return {...state, list: state.list.map((todo) => !todo.completed ?
          {
            ...todo, completed: true,
          } : todo)
      };
    }
    case "CHANGE_VIEW": {
      return {...state, filter: action.payload};
    }
  }
  return state;

}

