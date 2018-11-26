import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { checkLoginFields } from '../../usersLogic/CheckLoginFields'; //CheckLoginFields

import './styles.css'
import {  MyTheme } from "../../MyTheme";

import { logIn } from "../../actions/userActions";

class Login extends Component {

  constructor(state) {
    super(state);

    this.state = {
      mail: {value: "", isValid: true},
      password: {value: "", isValid: true},
      passwordError: false,
      mailError: false,
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.currentUser.isLogin)
      this.props.history.push('/todo');
  }

  handleChange = name => event => {
    //let prop = name + "Error";
    this.setState({
      [name]: {...this.state[name], value: event.target.value, isValid: true},
      passwordError: false,
      mailError: false,
      // [prop]: false
    });
  };

  clearForm() {
    this.setState({
      mail: {value: "", isValid: true},
      password: {value: "", isValid: true},
    });

  }

  userLogin() {
    this.props.logIn(this.state);
    this.clearForm();
  }

  userAlert() {
    const { mailError, passwordError } = this.state;
    if (mailError)
      return "User doesn't exist";
    if (passwordError)
      return "Wrong password";
  }

  newUserLogin(user) {
    console.log("USER LOGIN");
    const validationRes = checkLoginFields(this.state.mail.value, this.state.password.value);
    console.log(validationRes);
    this.setState({
      mail: {...this.state.mail, isValid: validationRes.mail.isValid},
      password: {...this.state.password, isValid: validationRes.password.isValid},
    }, () => {
      if (this.state.mail.isValid && this.state.password.isValid) {
        console.log("AXIOS");
        axios({
          method: 'post',
          url: 'http://localhost:3001/login',
          data: {
            ...user,
          }
        }).then(response => {
          console.log("success login");
          console.log("response object", response);
          let loginObj = {
            ...response.data,
          };
          console.log("login Obj", loginObj);
          this.props.logIn(loginObj);
          this.clearForm();
          return;
        })
          // .catch(err => {
          //   console.log("ERROR from newuserlogin",err);
          //   console.log(err.response.data);
          //   this.setState({
          //     mailError: err.response.data.mailError,
          //     passwordError: err.response.data.passwordError,
          //   });
          // });


        // {isLogin: true, isExist: true, isAdmin: true, rightPassword: true, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hb…zc0fQ.3csvbdNdeiUWQZD11fIq64Mm03olFA3lLF5SlXu-o0A", …}
        // isAdmin: true
        // isExist: true
        // isLogin: true
        // rightPassword: true
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhZG1pbiIsImxhc3ROYW1lIjoiYWRtaW4iLCJtYWlsIjoiYWRtaW5AbWFpbC5ydSIsIm5pY2tOYW1lIjoiYWRtaW4iLCJ0b2RvcyI6W10sImlhdCI6MTU0MzIxNjc3NCwiZXhwIjoxNTQzMjIwMzc0fQ.3csvbdNdeiUWQZD11fIq64Mm03olFA3lLF5SlXu-o0A"
        // userObj: {nickName: "admin", todos: Array(0)}


      }
      else {
        return;
      }
    });

    // let loginObj = {
    //   mail: {isValid: true},
    //   password: {isValid: true},
    // };
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3001/login',
    //   data: {
    //     ...user,
    //   }
    // }).then(response => {
    //   console.log("success login");
    //   console.log("response object", response);
    //   let loginObj = {
    //     ...response.data,
    //   };
    //   this.props.logIn(loginObj);
    //   this.clearForm();
    // });

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3001/reg',
    //   data: {
    //     ...user,
    //   }
    // }).then((response) => {
    //     console.log("success");
    //     this.setState({
    //       registration: {...response.data},
    //     });
    //   },
    //   err => {
    //     console.log("error", err)
    //   });

  }






  /*            isLogin: true,
              isExist: true,
              rightPassword: true,
              token: token,
              userObj: {
                nickName: user[0].nickName,
                todos: user[0].todos,
              },*/






  render() {
    const { mail, password } = this.state;
    return (
      <div className="login-form-wrapper">
        <div className="login-user-alert">
          {this.userAlert()}
        </div>
        <TextField
          id="mail"
          onChange={this.handleChange("mail")}
          error={this.state.mail.isValid ? false : true}
          value={mail.value}
          label="Email"
          style={{ paddingTop: 18, paddingLeft: 21 }}
          variant="outlined"
        />
        <TextField
          id="password"
          onChange={this.handleChange("password")}
          // error={this.props.currentUser.loginError.passwordError ? true : false}
          error={this.state.password.isValid ? false : true}
          value={password.value}
          label="Password"
          type="password"
          style={{ paddingTop: 18, paddingLeft: 21 }}
          variant="outlined"
        />
        <div className="log-button"><Button onClick={() => { this.newUserLogin({mail: this.state.mail.value, password: this.state.password.value}) }} style={MyTheme.palette.allButtons} variant="contained">Log In</Button></div>
      </div>
    );
  }
}

Login.PropTypes = {
  currentUser: PropTypes.object.isRequired,
}

function mapStatesToProps(state) {
  return {
    currentUser: state.userReducer,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user)),
  };
}


export default connect(mapStatesToProps, mapDispatchToProps)(Login);

