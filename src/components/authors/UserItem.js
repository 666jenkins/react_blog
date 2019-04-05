import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ id, name }) => {
    return (
        <Link to={`/authors/${id}`} className='collection-item'><h5 style={{ color: '#039be5' }}>{name}</h5></Link>
    )
}

export default UserItem