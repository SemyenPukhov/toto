import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './containers/Todo/index';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './containers/Header';
import Footer from './containers/Footer';

import App from './containers/App/index';

import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(rootReducer);

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#b0ff68',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//     accent: {backgroundColor: '#ff7961'},
//     action: {backgroundColor: '#b0ff68', color: '#000'}
//   },
// });



window.store = store;

ReactDOM.render(
  <Provider store={store}>
    {/*<MuiThemeProvider theme={theme}>*/}
      <Router>
        <React.Fragment>
          <Header/>
          <App/>
          <Footer/>
        </React.Fragment>
      </Router>
    {/*MuiThemeProvider</MuiThemeProvider>*/}
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
