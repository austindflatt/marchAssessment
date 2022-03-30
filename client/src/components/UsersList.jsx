import React from 'react'

const UsersList = (props) => {
  const { nameProp, idProp, ageProp, favoriteMoviesProp } = props;
  return (
	<>
	<div>
    <br />
    <label>Name:</label>
		<input onChange={props.onUpdateProp} data-id={idProp} value={props.nameProp} name='name'></input>
		<p>ID: {props.idProp}</p>
    <label>Age:</label>
		<input type='number' onChange={props.onUpdateProp} data-id={idProp} value={props.ageProp} name='age'></input>
    <br />
    <label>Favorite Movies:</label>
		{/* <textarea data-id={idProp} value={props.favoriteMoviesProp} name='favoriteMovies'></textarea> */}
    <br /><br />
		<button type='submit' onClick={() => props.updateUserProp(nameProp, idProp, ageProp, favoriteMoviesProp)} style={{ marginRight: '20px' }} >Update User</button>
		<button type='submit'>Delete User</button>
    <br />
	</div>
	</>
  )
}

export default UsersList