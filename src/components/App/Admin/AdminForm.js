import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

class AdminForm extends Component {

    state = {
        newProject: {
            id: 4,
            name: '',
            description: '',
            date: '',
            gitHub: '',
            website: '',
            tag_id: '',
            thumbnail: ''
        }
    }

    // Renders the entire app on the DOM
    componentDidMount() {
        this.getProjects();
        // use component did mount to dispatch an action to request the projectList from the API
    }

    getProjects() {
        this.props.dispatch({ type: 'GET_PROJECT' })
    }

    handleNameChange = (key) => (event) => {
        console.log('event happended')
        this.setState({
            newProject: {
                ...this.state.newProject,
                [key]: event.target.value,
            }
        });
    }

    addNewProject = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PROJECT', payload: this.state.newProject })
        this.setState({
                newProject: {
                id: this.state.newProject.id + 1,
                name: '',
                description: '',
                date: '',
                gitHub: '',
                website: '',
                tag_id: '',
                thumbnail: ''
            }
        });
    }

    handleClick = (event) => {
        console.log(event.target.value)
        this.props.dispatch({ type: 'REMOVE', payload: event.target.value })

    }


    render() {
        console.log(this.props.reduxState.projects);
        

        return (
            <div>
                <form onSubmit={this.addNewProject}>
                    <Input placeholder='Name' type='text' value={this.state.newProject.name} onChange={this.handleNameChange('name')} />
                    <Input placeholder='Date' type='date' value={this.state.newProject.date} onChange={this.handleNameChange('date')} />
                    <Input placeholder='GitHub URL' type='text' value={this.state.newProject.gitHub} onChange={this.handleNameChange('gitHub')} />
                    <Input placeholder='Website' type='text' value={this.state.newProject.website} onChange={this.handleNameChange('website')} />
                    <Input placeholder='Description' type='text' value={this.state.newProject.description} onChange={this.handleNameChange('description')} />
                    <Input placeholder="Thumbnail" type='text' value={this.state.newProject.thumbnail} onChange={this.handleNameChange('thumbnail')} />
                    <Input placeholder="Tag ID" type='integer' value={this.state.newProject.tag_id} onChange={this.handleNameChange('tag_id')} />
                    <Button type='submit' value='Add New Project'>Add Project</Button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.projects.map((project) => (
                            <tr>
                                <td>{project.name}</td>
                                <td><button onClick={this.handleClick}>Delete</button></td>
                            </tr>))}

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
