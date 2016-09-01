import React from 'react';
import 'semantic-ui-css/components/container.css';

import Navigation from '../../components/Navigation';
import './Container.scss';

export default class Container extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <div className="ui container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
