import React from 'react'
import PostList from './PostList';
import { fetchPosts } from '../../services/postService';


class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetchPosts()
            .then(posts => {
                this.setState({ posts })
            })
    }


    render() {
        return (
            <>
                <h2>POSTS</h2>
                <PostList posts={this.state.posts} />
            </>
        )
    }
}

export default PostPage