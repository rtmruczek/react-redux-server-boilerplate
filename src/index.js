import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import firebase from 'firebase';
import Component from './Component';
import reducer from './Reducer';


firebase.initializeApp(config);

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Component/>
      </Provider>
    )
}

ReactDOM.render(<Main/>, document.getElementById('app'));
