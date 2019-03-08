import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM

  getProjects() {
    this.props.dispatch({ type: 'GET_PROJECT' })
  }

  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
