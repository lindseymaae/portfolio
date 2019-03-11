import React, { Component } from 'react';
import { connect } from 'react-redux';
import Linkify  from 'react-linkify';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
      
        this.props.reduxState.projects.map((project) => (

      <Card className="item-card">
        <CardActionArea>
          <CardMedia 
          component="img"
          className="item-img"
          height="240"
          image={project.thumbnail}
          name={project.name}
          />
          <CardContent>
            <Typography gutterBottom variant ="h5" component="h2"></Typography>
              {project.description}
              <h2>{project.name}</h2>
              <p>{project.tag_id}</p>
                <Linkify> GitHub: {project.github}</Linkify>
                <Linkify> Website: {project.website}</Linkify>
              <div>{project.date_completed}</div>

           
          </CardContent>
          
       </CardActionArea>
      </Card>
    )
        ))
}
}


export default connect(mapStateToProps)(App);
