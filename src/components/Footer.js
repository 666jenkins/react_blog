import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer light-blue darken-1">
            <div className="container center-align">
                &copy; {new Date().getFullYear()} Copyright &nbsp;<i>Jenkins & Concha</i>
            </div>
        </footer>
    )

}

export default Footer