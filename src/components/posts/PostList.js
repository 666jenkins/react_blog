import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts }) => {

    return (
        <ul>
            {posts.map(post => <PostItem key={post.id} title={post.title} body={post.body} id={post.id} />)}
        </ul>
    )
}

export default PostList