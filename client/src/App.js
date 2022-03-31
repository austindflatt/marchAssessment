import React, { Component } from 'react'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import { Container, Title } from '@mantine/core';

export class App extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    favoriteMovies: [],
    users: [],
    errorMessage: ''
  }

  componentDidMount = () => {
    this.getUsers();
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
    this.getUsers();
  }

  handleUpdateUser = (name, _id, age, favoriteMovies) => {
    this.updateUser({name, _id, age, favoriteMovies})
  }

  handleDeleteUser = (_id) => {
    this.handleDelete({_id})
    this.getUsers();
  }

  handleUpdateChange = (event) => {
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

  getUsers = async () => {
    const response = await fetch(`http://localhost:3001/users/get-users`);
    const data = await response.json();
    this.setState({
      users: data,
    })
  }

  handleDelete = async ({_id}) => {
    const requestOptions = {
      method: 'DELETE',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', "x-Trigger": "CORS", },
    }
    const response = await fetch(`http://localhost:3001/users/delete-user/${_id}`, requestOptions);
    console.log(_id)
    const createResponse = await response.json();
    return createResponse;
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
      <Title order={1}>Users List</Title>
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
          deleteUserProp={this.handleDeleteUser}
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