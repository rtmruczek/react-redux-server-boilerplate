import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.css'

export default class Main extends React.Component {

  constructor() {
    super()
    console.log("hi")
  }

  render() {
    return (
      <h1>Hi</h1>
    )
  }

}

ReactDOM.render(<Main/>, document.getElementById('app'))
