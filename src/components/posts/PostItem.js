import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = ({ id, title, body }) => {

    return (
        <li>
            <Link to={`/posts/${id}`}> <h4>{title}</h4> </Link>
            <p>{body}</p>
        </li>
    )

}

export default PostItem