import React from "react"
import Form from "./Form"

const Table = ({ users, postUser, updateUser, deleteUser }) => {
	const showUpdateUser = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ user }) => {
		return (
			<>
				<div className='row'>
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div></div>
					<div className='buttons'>
						<button id={user.id} onClick={() => showUpdateUser(user.id)}>Update</button>
						<button id={user.id} onClick={() => deleteUser(user.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} />
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
		</div>
	)
}

export default Table
