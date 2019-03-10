import React, { Component } from 'react';
import { connect } from 'react-redux';
import Projects from '../Projects/Projects'
const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {
    // Renders the entire app on the DOM

    render() {
        console.log(this.props.reduxState.projects);

        return (
            <div >
              
            </div>
        );
    }
}


export default connect(mapStateToProps)(Admin);
