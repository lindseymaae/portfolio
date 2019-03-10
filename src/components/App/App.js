import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Projects from '../Projects/Projects'
import Admin from './Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom'



class App extends Component {
    // Renders the entire app on the DOM

    render() {
        console.log(this.props.reduxState.projects);

        return (
            <div className="App">
                <Router>
                    <div>
                        <Link to="/admin">Admin</Link>
                        <Route path="/admin" component={Admin} />
                        
                        <Route exact path="/" component={Projects} />
                    </div>
                </Router>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(App);
