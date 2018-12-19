import React, { Component} from "react";
import Header from '../header/Header.js';

class Layout extends Component {
  render() {
    return (
      <div className="layout--main">
        <Header></Header>
      </div>
    );
  }
}

export default Layout;