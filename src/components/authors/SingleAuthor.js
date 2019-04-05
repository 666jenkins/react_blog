import React from 'react'
import { fetchUser } from '../../services/userService'
import { Link } from 'react-router-dom'

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        fetchUser(this.props.match.params.id)
            .then(author => this.setState({ author }))
    }

    render() {
        const { author } = this.state
        const city = (author.address ? author.address.city : 'Loading...')
        const street = (author.address ? author.address.street : 'Loading...')
        const suite = (author.address ? author.address.suite : 'Loading...')
        const zipcode = (author.address ? author.address.zipcode : 'Loading...')
        const company = (author.company ? author.company.name : 'Loading...')
        const slogan = (author.company ? author.company.catchPhrase : 'Loading...')

        return (
            <>
                <Link to={`/authors`}>All authors</Link>
                <h1 style={{ display: 'inline-block' }}>Single Author</h1>
                <div className='profile-card'>
                    <img src='http://via.placeholder.com/200' alt='' />
                    <div className='profile-info' style={{ display: 'inline-block' }}>
                        <h4>{author.name}</h4>
                        <p>username: {author.username}</p>
                        <p>email: {author.email}</p>
                        <p>phone: {author.phone}</p>
                    </div>
                </div>
                <hr />
                <div className='address-card'>
                    <div className='profile-info' style={{ display: 'inline-block' }}>
                        <h4>Address</h4>
                        <p>street: {street} {suite}</p>
                        <p>city: {city}</p>
                        <p>zipcode: {zipcode}</p>
                    </div>
                    <img src='http://via.placeholder.com/300x200' alt='' />
                </div>
                <hr />
                <div className='company'>
                    <h4>Company</h4>
                    <p>name: {company}</p>
                    <p>slogan: {slogan}</p>
                </div>
            </>
        )
    }
}

export default SingleAuthor