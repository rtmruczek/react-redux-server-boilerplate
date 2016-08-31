import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/components/site.css';

export default class Main extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }

}

ReactDOM.render(<Main/>, document.getElementById('app'));
