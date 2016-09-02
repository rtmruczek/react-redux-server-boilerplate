import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import 'semantic-ui-css/components/site.css';
import fetch from 'isomorphic-fetch';

import Container from './containers/Container/Container';
import Home from './views/Home';
import Characters from './views/Characters';


fetch('http://localhost:8080/posts')
.then(response => response.json()).then(json =>
  console.log(json)
);

const routes = {
  path: '/',
  component: Container,
  childRoutes: [
    { indexRoute: { component: Home } },
    {
      path: '/characters',
      component: Characters,
    },
  ],
};

export default class Main extends React.Component {
  render() {
    return (
      <Router history={hashHistory} routes={routes}/>
    );
  }

}

ReactDOM.render(<Main/>, document.getElementById('app'));
