import React, { Component } from 'react';
import './styles.css'

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  MyTheme } from "../../MyTheme";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  normal: {
    marginBottom: 36,
  },
  menu: {
    width: 200,
  },
});

class Registration extends Component {

  constructor(state) {
    super();
    const initialState = {
      firstName: {value: "", isValid: true},
      lastName: {value: "", isValid: true},
      nickName: {value: "", isValid: true},
      mail: {value: "", isValid: true},
      password: {value: "", isValid: true},
      confirmPassword: {value: "", isValid: true},
      formIsValid: {valid: false},
    };

    this.state = initialState;
  }

  clearForm() {
    this.setState({
      ...this.state, firstName: {value: "", isValid: true},
      lastName: {value: "", isValid: true},
      nickName: {value: "", isValid: true},
      mail: {value: "", isValid: true},
      password: {value: "", isValid: true},
      confirmPassword: {value: "", isValid: true},
      formIsValid: {valid: true},
    });
  }



  handleChange = name => event => {
    this.setState({
      [name]: {...this.state[name], value: event.target.value, isValid: true},
      formIsValid: {
        ...this.state.formIsValid, valid: "",
      },
    });
  };

  writeUserData() {
    const { firstName, lastName, nickName, mail, password, confirmPassword } = this.state;

    const hashCode = s => {
      return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    }

    if (firstName.isValid && lastName.isValid && nickName.isValid && mail.isValid && password.isValid && confirmPassword.isValid) {
      console.log("Form is valid");
      let hash = hashCode(password.value);

      let arrForPush = JSON.parse(localStorage.getItem("users"));

      let userObj = {"firstName": firstName.value, "lastName": lastName.value, "nickName": nickName.value, "mail": mail.value, "password": hash};

      arrForPush.push(userObj);

      localStorage.setItem("users", JSON.stringify(arrForPush));

      this.clearForm();

    }
  }

  formValidation() {

    this.setState(prevState => {
      if (!prevState.firstName.value.match(/^[a-zA-Z]{3,}$/)) {
        prevState = {...prevState,
          firstName: {...prevState.firstName, isValid: false}
        };
      }

      if (!this.state.lastName.value.match(/^[a-zA-Z]{3,}$/)) {
        prevState = {
          ...prevState,
          lastName: {...prevState.lastName, isValid: false}
        };
      }

      if (!this.state.nickName.value.match(/^[a-zA-Z]+[A-z0-9]{2,16}$/)) {
        prevState = {
          ...prevState,
          nickName: {...prevState.nickName, isValid: false}
        }
      }

      if (!this.state.mail.value.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/)) {
        prevState = {
          ...prevState,
          mail: {...prevState.mail, isValid: false}
        }
      }

      if (!this.state.password.value.match(/[a-zA-Z0-9]{3,}/)) {
        prevState = {
          ...prevState,
          password: {...prevState.password, isValid: false}
        }
      }

      if (this.state.password.value !== this.state.confirmPassword.value || this.state.confirmPassword.value == "") {
        prevState = {
          ...prevState,
          confirmPassword: {...prevState.confirmPassword, isValid: false}
        }
      }

      return prevState;
    });

    setTimeout(() => {this.writeUserData()}, 0);


    //
    // if (!this.state.lastName.value.match(/^[a-zA-Z]{3,}$/)) {
    //   console.log("mismatch lastName", this.state.lastName.value)
    //   this.setState({
    //     lastName: {...this.state.lastName, isValid: "",}
    //   });
    // }
    //
    // if (!this.state.nickName.value.match(/^[a-zA-Z]+[A-z0-9]{2,16}$/)) {
    //   console.log("mismatch nickName")
    //   this.setState({
    //     nickName: {...this.state.nickName, isValid: "",}
    //   });
    // }
    //
    // if (!this.state.mail.value.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/)) {
    //   console.log("mismatch mail")
    //   this.setState({
    //     mail: {...this.state.mail, isValid: "",}
    //   });
    // }
    //
    // if (!this.state.password.value.match(/[a-zA-Z0-9]{3,}/)) {
    //   this.setState({
    //    password: {...this.state.password, isValid: "",}
    //   });
    // }
    //
    //
    // if (this.state.password.value !== this.state.confirmPassword.value) {
    //   console.log("Wrong passwords");
    //   this.setState({
    //     confirmPassword: {...this.state.confirmPassword, isValid: "",}
    //   });
    // }
    //
  }

  render() {
    const { classes } = this.props;
    const { firstName, lastName, nickName, mail, password, confirmPassword } = this.state;
    return (
      <div className="form-wrapper">
        <div className="user-alert">
          {this.state.formIsValid.valid ? "Form was successfuly send!" : ""}
        </div>

        <form className={classes.container}  autoComplete="on">
          <TextField
          id="firstName"
          error ={firstName.isValid ? false : true }
          label="First Name"
          value={ firstName.value }
          onChange={this.handleChange("firstName")}
          className={classes.textField}
          style={{ paddingTop: 18, paddingLeft: 21 }}
          variant="outlined"
          />

          <TextField
            id="lastName"
            error ={lastName.isValid ? false : true }
            value={ lastName.value }
            label="Last Name"
            onChange={this.handleChange("lastName")}
            className={classes.textField}
            style={{ paddingTop: 18, paddingLeft: 21 }}
            variant="outlined"
          />

          <TextField
            id="nickName"
            error ={nickName.isValid ? false : true }
            label="Nickname"
            value={ nickName.value }
            className={classes.textField}
            onChange={this.handleChange("nickName")}
            style={{ paddingTop: 18, paddingLeft: 21 }}
            variant="outlined"
          />

          <TextField
            id="mail"
            error ={mail.isValid ? false : true }
            value={ mail.value }
            onChange={this.handleChange("mail")}
            style={{ paddingTop: 18, paddingLeft: 21 }}
            label="Email"
            className={classes.textField}
            variant="outlined"
          />

          <TextField
            id="password"
            value={ password.value }
            error ={ password.isValid ? false : true }
            onChange={this.handleChange("password")}
            label="Password"
            style={{ paddingTop: 18, paddingLeft: 21 }}
            type="password"
            className={classes.textField}
            variant="outlined"
          />

          <TextField
            id="confirmPassword"
            value={ confirmPassword.value }
            error ={ confirmPassword.isValid ? false : true }
            onChange={this.handleChange("confirmPassword")}
            label="Confirm password"
            style={{ paddingTop: 18, paddingLeft: 21 }}
            type="password"
            className={classes.textField}
            variant="outlined"
          />

          <div className="custom-button">
            <Button onClick={() => { this.formValidation();}} variant="contained" style={MyTheme.palette.allButtons}>
              Rigistartion
            </Button>
          </div>

        </form>

      </div>
    );
  }
}

export default withStyles(styles)(Registration);

//export default Registration;
