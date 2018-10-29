import { combineReducers } from 'redux';
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";


// const initialState = {list: [{text: "open deposit", id: 0, completed: true}, {text: "read book", id: 1, completed: false}], filter: 'ALL' }; // done, undone
//
// let nextTodo = initialState.list.length;
//
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO": {
//       if (state.list.length === 0) nextTodo = 0;
//       if (action.payload !== "" )
//         return {...state, list: [...state.list, {id: nextTodo++, text: action.payload, completed: false}]};
//       break;
//     }
//     case "TOGGLE_TODO": {
//       return {...state, list: state.list.map((todo) => todo.id === action.payload ?
//           {
//             ...todo, completed: !todo.completed,
//           } : todo)};
//       break;
//     }
//     case "REMOVE_TODO": {
//       return {...state, list: state.list.filter((todo) => !todo.completed)};
//     }
//     case "COMPLETE_ALL": {
//       return {...state, list: state.list.map((todo) => !todo.completed ?
//           {
//             ...todo, completed: true,
//           } : todo)
//       };
//     }
//     case "CHANGE_VIEW": {
//       return {...state, filter: action.payload};
//     }
//   }
//   return state;
//
// }
//
// const userReducer = (state  = {isLogin: false, loginError: false, unknownUser: true, userObj: {}}, action) => {
//   switch (action.type) {
//     case "LOG_IN": {
//
//       const hashCode = s => {
//         return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
//       }
//
//       let hash = hashCode(action.payload.password);
//
//       const users = JSON.parse(localStorage.getItem("users"));
//
//       for (let i = 0; i < users.length; i++) {
//         if (users[i].mail === action.payload.mail) {
//           console.log("User exist");
//           if (hash === users[i].password) {
//             return {
//               ...state, isLogin: true, loginError: false, unknownUser: false, userObj: users[i],
//             };
//           }
//         }
//
//       }
//       return {
//         ...state, unknownUser: true, loginError: true
//       };
//     }
//   }
//   return state;
// }
//
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

export default rootReducer;

