import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/components/site.css';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';

import Container from './containers/Container';
import Home from './views/Home';

export default class Main extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }

}

ReactDOM.render(<Main/>, document.getElementById('app'));
