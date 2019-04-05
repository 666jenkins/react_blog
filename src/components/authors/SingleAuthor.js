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
                <Link to={`/authors`}>{`< All authors`}</Link>
                <h3 style={{ display: 'inline-block', marginLeft: '30%' }}>Author</h3>

                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/200" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5>{author.name}</h5>
                                <p><b>username:</b> {author.username}</p>
                                <p><b>email:</b> {author.email}</p>
                                <p><b>phone:</b> {author.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5>Address</h5>
                                <p><b>street:</b> {street} {suite}</p>
                                <p><b>city:</b> {city}</p>
                                <p><b>zipcode:</b> {zipcode}</p>
                            </div>
                        </div>
                        <div className="card-image" style={{ width: '40%' }}>
                            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.672983572212!2d1${Math.floor((Math.random() * 99) + 1)}.79000901565932!3d${Math.floor((Math.random() * 99) + 1)}.74263990870584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sCJXxX81VKU9PrhJls78kczIX74OOQSYvXMCooLP!2s!5e0!3m2!1sen!2srs!4v1554466667555!5m2!1sen!2srs`} width="100%" height="200" style={{ border: '0' }}></iframe>
                        </div>
                    </div>
                </div>

                <div className='card-panel' id='company-card'>
                    <h5>Company</h5>
                    <p><b>name:</b> {company}</p>
                    <p><b>slogan:</b> {slogan}</p>
                </div>
            </>
        )
    }
}

export default SingleAuthor