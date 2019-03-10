import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom'



class Admin extends Component {
   

    render() {
        console.log(this.props.reduxState.projects);

        return (
            
            <div>
                <AdminForm />
                <Router>
                    <div>
                        <Link to="/">Back to Projects</Link>
                    </div>
                </Router>

                
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);
