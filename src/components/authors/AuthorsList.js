import React from 'react'
import UserItem from './UserItem';
const AuthorsList = ({ authors }) => {
    return (
        <div className='collection'>
            {authors.map(user => <UserItem key={user.id} id={user.id} name={user.name} />)}
        </div>
    )
}
export default AuthorsList