import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';


//отстойно написано надо переписать. но работает

function UnauthRoute({ component: Component, ...rest }) {
  const { path, userInfo } = rest;
  if (!userInfo.isLogin) {
    return <Component />
  }
  return <Redirect to="/todo" />
  // const { path, userInfo } = rest;
  //
  // if (path === '/todo' && userInfo.isLogin) {
  //   return (<Component/>);
  // }
  //
  // if (path !== '/todo' && userInfo.isLogin) {
  //   return (<Redirect to='/todo'/>);
  // }
  //
  // if (!userInfo.isLogin && path === '/todo') {
  //   return (<Redirect to='/sign'/>);
  // }
  //
  // if (!userInfo.isLogin && path !== '/todo') {
  //   return (<Component/>);
  // }
}


function mapStatesToProps(state) {
  return {
    userInfo: state.userReducer,
  };
}

export default connect(mapStatesToProps)(UnauthRoute);

