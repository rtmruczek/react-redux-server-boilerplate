import React from 'react';
import { Link } from 'react-router';
import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/icon.css';

class Navigation extends React.Component {

  render() {
    return (
      <div className="ui vertical left fixed labeled icon menu">
        <Link className="item" to="/">
          <i className="home icon"></i>
          Home
        </Link>
        <Link className="item" to="/characters">
          <i className="users icon"></i>
          Characters
        </Link>
        <a className="item">
          <i className="book icon"></i>
          Campaigns
        </a>
        <a className="item">
          <i className="gamepad icon"></i>
          Games
        </a>

      </div>
    );
  }
}

export default Navigation;
