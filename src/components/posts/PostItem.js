import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = ({ id, title, body }) => {

    return (
        <Link to={`/posts/${id}`}>
            <div className='card-panel hoverable'>
                <li>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </li>
            </div>
        </Link>
    )

}

export default PostItem