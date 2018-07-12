import React, { Component } from 'react';
import PropertyCashFlow from './PropertyCashFlow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Modesto Property</h1>
          <PropertyCashFlow/>
      </div>
    );
  }
}

export default App;
