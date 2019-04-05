import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ id, name }) => {
    return (
        <li>
            <Link to={`/authors/${id}`}><h4>{name}</h4></Link>
        </li>
    )
}

export default UserItem