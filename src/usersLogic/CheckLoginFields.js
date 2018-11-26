export function checkLoginFields(mail, password) {
  let resObj = {
    mail: {
      isValid: true,
    },
    password: {
      isValid: true,
    }
  };
  if (!password.match(/[a-zA-Z0-9]{3,}/)) {
    resObj.password.isValid = false;
  }

  if (!mail.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/)) {
    resObj.mail.isValid = false;
  }
  return resObj;
}


