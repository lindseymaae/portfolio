import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class AdminForm extends Component {
    // Renders the entire app on the DOM

    render() {
        console.log(this.props.reduxState.projects);

        return (
            <div >
                <input placeholder="name" />
                <input type="date" />
                <input placeholder="GitHub URL" />
                <input placeholder="Website URL (Optional)" />
                <input placeholder="Description" />
                <button>Delete</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>

                </table>

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminForm);
