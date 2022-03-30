import React from 'react'
import { TextInput, Textarea, Button } from '@mantine/core';

const AddUser = (props) => {
  return (
    <>
    <h1>Create a user</h1>
    <TextInput label="Name" onChange={props.onChangeProp} value={props.createNameProp} name='name' placeholder='Name' />
    <TextInput label="Age" onChange={props.onChangeProp} value={props.createAgeProp} name='age' type='number' placeholder='Age' />
    <Textarea label="Favorite Movies" onChange={props.onChangeProp} value={props.createMoviesProp} name='favoriteMovies' />
    <Button color="green" type='submit' onClick={props.createUserProp} style={{ float: 'right', margin: '20px' }}>Create User</Button>
    </>
  )
}

export default AddUser