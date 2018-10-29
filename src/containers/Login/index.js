import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import './styles.css'
import {  MyTheme } from "../../MyTheme";

import { logIn } from "../../actions/userActions";

class Login extends Component {

  constructor(state) {
    super(state);

    this.state = {
      mail: "",
      password: "",
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.currentUser.isLogin)
      this.props.history.push('/todo');
  }

  handleChange = name => event => {
    let prop = name + "Error";
    this.setState({
      [name]: event.target.value,
      [prop]: false
    });
  };

  clearForm() {
    this.setState({
      mail: "",
      password: "",
    });

  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: {...this.state[name], value: event.target.value, isValid: true},
  //     formIsValid: {
  //       ...this.state.formIsValid, valid: "",
  //     },
  //   });
  // };

  render() {
    const { mail, password } = this.state;
    return (
      <div className="login-form-wrapper">
        <TextField
          id="mail"
          onChange={this.handleChange("mail")}
          error={this.props.currentUser.loginError.mailError ? true : false}
          value={mail}
          label="Email"
          style={{ paddingTop: 18, paddingLeft: 21 }}
          variant="outlined"
        />
        <TextField
          id="password"
          onChange={this.handleChange("password")}
          error={this.props.currentUser.loginError.passwordError ? true : false}
          value={password}
          label="Password"
          type="password"
          style={{ paddingTop: 18, paddingLeft: 21 }}
          variant="outlined"
        />
       <div className="log-button"><Button onClick={() => { this.props.logIn(this.state); this.clearForm() }} style={MyTheme.palette.allButtons} variant="contained">Log In</Button></div>
      </div>
    );
  }
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

