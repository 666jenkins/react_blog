import React from 'react'
import UserItem from './UserItem';
const AuthorsList = ({ authors }) => {
    return (
        <ul>
            {authors.map(user => <UserItem key={user.id} id={user.id} name={user.name} />)}
        </ul>
    )
}
export default AuthorsList