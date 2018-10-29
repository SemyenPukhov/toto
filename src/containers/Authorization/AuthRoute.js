import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function AuthRoute({ component: Component, ...rest }) {
  const { userInfo } = rest;
  if (userInfo.isLogin) {
    return <Component />
  }
  return <Redirect to="/sign" />
}


function mapStatesToProps(state) {
  return {
    userInfo: state.userReducer,
  };
}

export default connect(mapStatesToProps)(AuthRoute);

