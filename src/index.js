import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import 'semantic-ui-css/components/site.css';

import Container from './containers/Container/Container';
import Home from './views/Home';
import Characters from './views/Characters';

export default class Main extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home} />
          <Route path="characters" component={Characters}/>
        </Route>
      </Router>
    );
  }

}

ReactDOM.render(<Main/>, document.getElementById('app'));
