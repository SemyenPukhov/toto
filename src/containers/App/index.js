import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Route, Redirect, BrowserRouter as Router} from "react-router-dom";
import Registration from '../Registration';
import Login from '../Login';
import ToDoApp from '../Todo';
//import AuthRoute from '../Authorization/AuthRoute';
import AuthRoute from '../Authorization/AuthRoute';
import UnauthRoute from '../Authorization/UnauthRoute';
// import { BrowserRouter as Router } from "react-router-dom";

function Test() {
  return (<h1>TEST</h1>);
}

class App extends Component {


  render() {

    return (

      <div className="app-wrapper">
        {/*<Route path="/sign" component={Login} />*/}
        {/*<Route path="/reg" component={Registration} />*/}

        <Route path="/sign" render={() =>
          <UnauthRoute path='/sign' component={Login} />
        } />
        <Route path="/reg" render={() =>
          <UnauthRoute path='/reg' component={Registration} />
        } />
        <Route path="/todo" render={() =>
          <AuthRoute path='/todo' component={ToDoApp} />
        } />
        {/*<PrivateRoute path='/' component={Test} />*/}
        {/*<Route path="/test" component={<AuthRoute path='test' component={Test}/>} />*/}
        {/*<Route path='test' component={AuthRoute}/>*/}
        {/*<PrivateRoute path="/todo" component={Test} />*/}
        {/*<Route path="/test" render={() => (*/}
          {/*true ? (*/}
            {/*<Redirect to="/reg"/>*/}
          {/*) : (*/}
              {/*<ToDoApp />*/}
            {/*))} />*/}
        {/*<Redirect from="/" to="/todo" />*/}
      </div>

  );
  }
}





export default App;

//передавать функции auth компонент