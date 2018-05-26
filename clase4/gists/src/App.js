import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      gists: [],
    }
  }

  componentDidMount() {
    const gists = 'https://api.github.com/users/gaearon/gists'
    fetch(gists)
      .then(response => response.json())
      .then(gists => this.setState({ gists }))
      .catch(e => {console.log(e)})
  }

  render() {
    // const withGists = withData('https://api.github.com/users/gaearon/gists')
    // const ListWithGists = withGists(List)
    return (
      <div className="container">
        <ul>
          {
            this.state.gists.map(gist => <li key={gist.id}>{gist.description}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;