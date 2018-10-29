import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './styles.css'
import Button from '@material-ui/core/Button';
import {  MyTheme } from "../../MyTheme";

import { connect } from 'react-redux';

import { logOut} from "../../actions/userActions";

class Header extends Component {

  render() {
    console.log(this.props.currentUser.isLogin);
    return (
      <div className="header">
        <ul className="link-list">
          <li style={{display: this.props.currentUser.isLogin ? "none" : "inherit"}}><NavLink to="/sign" activeClassName="is-active"><Button style={MyTheme.palette.allButtons} variant="link">Sign</Button></NavLink></li>
          <li style={{display: this.props.currentUser.isLogin ? "none" : "inherit"}}><NavLink to="/reg" activeClassName="is-active"><Button style={MyTheme.palette.allButtons} variant="link">Reg</Button></NavLink></li>
          <li style={{display: this.props.currentUser.isLogin ? "inherit" : "none"}}><NavLink to="/todo" activeClassName="is-active"><Button style={MyTheme.palette.allButtons} variant="link">ToDo</Button></NavLink></li>
        </ul>
        <div className="active-user">
          {this.props.currentUser.isLogin ? "Hello, " +  this.props.currentUser.userObj.nickName : "Hello, Guest!"}
          <div style={{display: this.props.currentUser.isLogin ? "flex" : "none"}} className="log-out-button">
            <Button style={MyTheme.palette.allButtons} variant="link"onClick={() => this.props.logOut()}  >Log Out</Button>
          </div>
        </div>
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
    logOut: () => dispatch(logOut()),

  };
}

export default connect(mapStatesToProps, mapDispatchToProps, null, {
  pure: false
})(Header)