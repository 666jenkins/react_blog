import React from 'react'
import { fetchUsers } from '../../services/userService';
import AuthorsList from './AuthorsList';


class Authors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        fetchUsers()
            .then(authors => {
                this.setState({ authors })
            })
    }
    render() {
        return (
            <>
                <h4 style={{ paddingLeft: '10px', marginBottom: '30px' }}><i>AUTHORS</i></h4>
                <AuthorsList authors={this.state.authors} />
            </>
        )
    }
}

export default Authors