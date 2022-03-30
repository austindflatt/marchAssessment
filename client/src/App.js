import React, { Component } from 'react'
import AddUser from './components/AddUser'
import GetUser from './components/GetUser'
import UpdateUser from './components/UpdateUser'

export class App extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    favoriteMovies: []
  }

  handleNameChange = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    })
    console.log(this.state)
  }

  handleAgeChange = (event) => {
    event.preventDefault();
    this.setState({
      age: event.target.value,
    })
    console.log(this.state)
  }

  handleMoviesChange = (event) => {
    event.preventDefault();
    this.setState({
      favoriteMovies: event.target.value,
    })
    console.log(this.state)
  }

  render() {
    return (
      <>
      <label>Name:</label>
      <input onChange={this.handleNameChange} value={this.state.name} name='name' placeholder='Name'></input>
      <label>Age:</label>
      <input onChange={this.handleAgeChange} value={this.state.age} name='age' type='number' placeholder='Age'></input>
      <label>Favorite Movies:</label>
      <textarea onChange={this.handleMoviesChange} value={this.state.favoriteMovies} name='favoriteMovies'></textarea>
      <button type='submit'>Create User</button>
      </>
    )
  }
}

export default App