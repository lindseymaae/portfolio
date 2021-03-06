import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECT', getData)
    yield takeEvery('POST_PROJECT', postProject)
    yield takeEvery('REMOVE', deleteProject)

}
//saga used to get information 

function* getData(){
    try {
        const getProject = yield axios({
            type: 'GET',
            url: '/api/project'
        })
        yield put({ type: 'SET_PROJECTS', payload: getProject.data })
        console.log(getProject.data);
        
    }
    catch (err) {
        console.log('in getProject (get)', err)
    }
}

function* postProject(action) {
    console.log('2nd saga was hit', action)
    try {
        yield axios.post('/project', action.payload)
        yield put({ type: 'GET_PROJECT' });
    } catch (error) {
        console.log(error)
    }
}

function* deleteProject(action) {
    console.log('delete saga was hit');
    try {
        yield axios.delete(`/${action.payload.id}`)

        yield put({ type: 'GET_PROJECT' })
    } catch (error) {
        console.log('DELETE ', error)
    }
}





// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
