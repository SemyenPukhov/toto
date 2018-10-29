import { checkFields } from "../usersLogic/CheckFields";
import { hashFunction } from '../usersLogic/hashFunction';

export const logIn = (user) => {
  return ({
    type: "LOG_IN", payload: checkFields(user.mail, hashFunction(user.password)),
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
