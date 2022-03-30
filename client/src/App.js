import React, { Component } from 'react'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import { Container } from '@mantine/core';

export class App extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    favoriteMovies: [],
    users: [],
    errorMessage: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted')
    this.createUser(this.state)
  }

  handleUpdateUser = (name, _id, age, favoriteMovies) => {
    this.updateUser({name, _id, age, favoriteMovies})
  }

  handleUpdateChange = (event) => {
    console.log('onChange')
    console.log(event.target.dataset.id)
    const copiedUsers = [ ...this.state.users ];
    const updatedUsers = copiedUsers.map((user) => {
      if(user._id === event.target.dataset.id){
        return {
          _id: user._id,
          name: event.target.value,
          age: user.age,
          favoriteMovies: user.favoriteMovies
        }
      }
      return user
    })
    this.setState({
      users: updatedUsers
    }, function(){
      console.log(this.state.users)
    })
  }

  async updateUser({ _id, name, age, favoriteMovies}) {
    const requestOptions = {
      method: 'PUT',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', "x-Trigger": "CORS", },
      body: JSON.stringify({ name, age, favoriteMovies })
    }
    const response = await fetch(`http://localhost:3001/users/update-user/${_id}`, requestOptions);
    const createResponse = await response.text();
    return createResponse;
  }

  async createUser({ name, age, favoriteMovies}) {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', "x-Trigger": "CORS", },
      body: JSON.stringify({ name, age, favoriteMovies })
    }
    const response = await fetch(`http://localhost:3001/users/create-user`, requestOptions);
    const createResponse = await response.text();
    return createResponse;
  }

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch(`http://localhost:3001/users/get-users`);
    const data = await response.json();
    this.setState({
      users: data,
    })
  }

  render() {
    return (
      <>
      <Container>
      <AddUser
      onChangeProp={this.handleChange}
      createNameProp={this.state.name}
      createAgeProp={this.state.age}
      createMoviesProp={this.state.favoriteMovies}
      createUserProp={this.handleSubmit}
      />
      <h1>All Users</h1>
      {this.state.users
      .map(({ _id, name, age, favoriteMovies }, idx) => {
        return (
          <UsersList 
          key={idx}
          idProp={_id}
          nameProp={name}
          ageProp={age}
          favoriteMoviesProp={favoriteMovies}
          updateUserProp={this.handleUpdateUser}
          onUpdateProp={this.handleUpdateChange}
          />
        )
      })
      }
      </Container>
      </>
    )
  }
}

export default App