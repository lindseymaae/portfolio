import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link, Router } from 'react-router-dom';
const mapStateToProps = reduxState => ({
  reduxState,
});

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.getProjects();
    // use component did mount to dispatch an action to request the projectList from the API
  }

  getProjects() {
    this.props.dispatch({ type: 'GET_PROJECT' })
  }

  render() {
    console.log(this.props.reduxState.projects);
    
    return (      
      <div className="App">
        <p>
          {this.props.reduxState.projects.map((project) => (            
            <div>
              <div>{project.thumbnail}</div>
            <div>{project.name}</div> 
            <div>{project.description} </div>
           <div>{project.github}</div>
           <div>{project.website}</div>
              <div>{project.date_completed}</div>
              <div>{project.tag_id}</div>
            </div>
           
          ))}
        </p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(App);
