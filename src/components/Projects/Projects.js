import React, { Component } from 'react';
import { connect } from 'react-redux';
import Linkify, { linkify } from 'react-linkify';
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
        <div>
          {this.props.reduxState.projects.map((project) => (
            <div className="projectDiv">
              <div>{project.thumbnail}</div>
              <h2>{project.name}</h2>
              <p>{project.tag_id}</p>
              <p>{project.description} </p>
              <Linkify> GitHub: {project.github}</Linkify>
              <p>
                <Linkify> Website: {project.website}</Linkify>
              </p>
              <div>{project.date_completed}</div>

            </div>

          ))}
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(App);
