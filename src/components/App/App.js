import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Projects from '../Projects/Projects'
const mapStateToProps = reduxState => ({
    reduxState,
});

class App extends Component {
    // Renders the entire app on the DOM

    render() {
        console.log(this.props.reduxState.projects);

        return (
            <div className="App">
            <Projects />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(App);
