const users = JSON.parse(localStorage.getItem("users"));


export const checkFields = (mail, hash) => {
  let loginObj = {
    isExist: false,
    isLogin: false,
    passwordRight: false,
    userObj: {},
  };

  for (let i = 0; i < users.length; i++) {
    if (mail === users[i].mail) {
      loginObj.isExist = true;
      if (hash === users[i].password) {
        loginObj.passwordRight = true;
        loginObj.isLogin = true;
        loginObj.userObj = users[i];
      }
      else {
        loginObj.passwordRight = false;
      }
    }
  }

  return {isLogin: loginObj.isLogin, loginError: {mailError: !loginObj.isExist, passwordError: !loginObj.passwordRight}, userObj: loginObj.userObj};
}
