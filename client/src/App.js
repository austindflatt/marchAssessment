import React, { Component } from 'react'

export class App extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    favoriteMovies: []
  }
  render() {
    return (
      <div>App</div>
    )
  }
}

export default App