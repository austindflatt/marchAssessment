import React from 'react'
import { Table, TextInput, Button } from '@mantine/core';

const UsersList = (props) => {
  const { nameProp, idProp, ageProp, favoriteMoviesProp } = props;
  return (
	<>
	<div>
  <Table>
    <h2>{nameProp}</h2><p>User ID: {idProp}</p>
    <tr key={null}>
      <td><TextInput label='Name' onChange={props.onUpdateProp} data-id={idProp} value={props.nameProp} name='name' /></td>
      <td><TextInput label='Age' type='number' value={props.ageProp} name='age' /></td>
      <td><TextInput label='Favorite Movies' value={props.favoriteMoviesProp} name='favoriteMovies' style={{ marginRight: '20px' }}/></td>
    </tr>
    <br />
    <Button color="dark" type='submit' onClick={() => props.updateUserProp(nameProp, idProp, ageProp, favoriteMoviesProp)} style={{ marginRight: '10px' }}>Update User</Button>
    <Button color="red" type='submit' onClick={() => props.deleteUserProp(idProp) }>Delete User</Button>
  </Table>
	</div>
	</>
  )
}

export default UsersList