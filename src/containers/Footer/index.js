import React, { Component } from 'react';
import './styles.css'


class Footer extends Component {


  render() {
    return (

      <div className="footer">
        <p className="footer-text">All rights recieved {new Date().getDate()}.{new Date().getMonth() + 1}.{new Date().getFullYear()} </p>
      </div>
    );
  }
}


export default Footer;
