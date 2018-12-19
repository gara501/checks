import React, { Component} from 'react';
import {hot} from 'react-hot-loader';
import Layout from './components/layout/Layout.js';
import './general.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default hot(module)(App);