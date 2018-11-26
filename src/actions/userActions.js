import { checkFields } from "../usersLogic/CheckFields";
import { hashFunction } from '../usersLogic/hashFunction';

export const logIn = (user) => {
  return ({
    // type: "LOG_IN", payload: checkFields(user.mail, hashFunction(user.password)),
    type: "LOG_IN", payload: user,
  });
}

// export const logIn = (user) => {
//
//   return ({
//     type: "LOG_IN", payload: user,
//   });
// }

export const logOut = () => {
  return ({
    type: "LOG_OUT",
  });
}


/*
...state, isLogin: action.payload.isLogin, loginError: action.payload.loginError, userObj: action.payload.userObj
*/

// {isLogin: true, isExist: true, isAdmin: true, rightPassword: true, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hb…zc0fQ.3csvbdNdeiUWQZD11fIq64Mm03olFA3lLF5SlXu-o0A", …}
// isAdmin: true
// isExist: true
// isLogin: true
// rightPassword: true
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhZG1pbiIsImxhc3ROYW1lIjoiYWRtaW4iLCJtYWlsIjoiYWRtaW5AbWFpbC5ydSIsIm5pY2tOYW1lIjoiYWRtaW4iLCJ0b2RvcyI6W10sImlhdCI6MTU0MzIxNjc3NCwiZXhwIjoxNTQzMjIwMzc0fQ.3csvbdNdeiUWQZD11fIq64Mm03olFA3lLF5SlXu-o0A"
// userObj: {nickName: "admin", todos: Array(0)}