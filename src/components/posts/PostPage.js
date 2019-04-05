import React from 'react'
import PostList from './PostList'
import { fetchPosts } from '../../services/postService'
import { Link } from 'react-router-dom'


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
                <div className='center-align'>
                    <h3><i>POSTS</i></h3>
                    <Link to='/posts/new' className="btn-floating btn-large blue pulse"><i className="fas fa-plus"></i></Link>
                </div>
                <PostList posts={this.state.posts} />
            </>
        )
    }
}

export default PostPage