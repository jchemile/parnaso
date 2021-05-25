import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'


function Card({title, imageSource, text ,url}) {
    return (
        <div className = "card text-center bg-dark animate__animated animate__fadeInUp">
            
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top"/>
            </div>
            
            <div className = "card-body text-light">
                <h4 className = "card-title">{title}</h4>
                <p className = "card-text text-secondary">
                    {
                        text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a incidunt ipsum veritatis ducimus debitis soluta. Natus cupiditate iste assumenda suscipit repudiandae, temporibus reiciendis commodi vitae vero, eius unde minus.'
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank" rel="noreferrer">
                    Go To this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Card
