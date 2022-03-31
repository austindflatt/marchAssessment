import React from 'react'
import { TextInput, Button, Title } from '@mantine/core';

const UsersList = (props) => {
  const { nameProp, idProp, ageProp, favoriteMoviesProp } = props;
  return (
	<>
	<div>
    <Title order={2}>{nameProp}</Title>
    <p>User ID: {idProp}</p>
    <p>Age: {ageProp}</p>
    <p>Favorite Movies: {favoriteMoviesProp}</p>
    <Title order={3}>Update User Details</Title>
    <TextInput label='Name' onChange={props.onUpdateProp} data-id={idProp} value={props.nameProp} name='name' />
    <TextInput label='Age' type='number' value={props.ageProp} name='age' />
    <TextInput label='Favorite Movies' value={props.favoriteMoviesProp} name='favoriteMovies' />
    <br />
    <Button color="dark" type='submit' onClick={() => props.updateUserProp(nameProp, idProp, ageProp, favoriteMoviesProp)} style={{ marginRight: '10px' }}>Update User</Button>
    <Button color="red" type='submit' onClick={() => props.deleteUserProp(idProp) }>Delete User</Button>
	</div>
	</>
  )
}

export default UsersList