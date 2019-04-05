import React from 'react'

const NewPage = () => {
    return (
        <>
            <div className='center-align row'>
                <div className='col m2 l4'></div>
                <form className='card-panel col s12 m8 l4'>
                    <div className="row">
                        <h4>Create New Post</h4>
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" placeholder="Title" />
                            <label for="title"></label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" placeholder="Content"></textarea>
                            <label for="textarea1"></label>
                        </div>
                        <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit &nbsp;<i className="fab fa-telegram-plane" style={{ transform: 'rotate(50deg)' }}></i>
                        </button>
                    </div>
                </form>
                <div className='col m2 l4'></div>
            </div>
        </>

    )
}

export default NewPage