import React from 'react'
import { TextInput, Textarea, Button, Title } from '@mantine/core';

const AddUser = (props) => {
  return (
    <>
    <Title order={1}>Create a user</Title>
    <TextInput label="Name" onChange={props.onChangeProp} value={props.createNameProp} name='name' placeholder='Name' />
    <TextInput label="Age" onChange={props.onChangeProp} value={props.createAgeProp} name='age' type='number' placeholder='Age' />
    <Textarea label="Favorite Movies" onChange={props.onChangeProp} value={props.createMoviesProp} name='favoriteMovies' />
    <Button color="green" type='submit' onClick={props.createUserProp} style={{ float: 'right', marginTop: '20px' }}>Create User</Button>
    <br /><br /><br /><br />
    </>
  )
}

export default AddUser