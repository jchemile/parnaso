import React from 'react'
import Card from './Card'

import create from '../assets/create.jpg' 
import read from '../assets/read.jpg' 
import vote from '../assets/vote.jpg' 

const cards = [
    {
        id:1,
        title:"Crear",
        image: create,
        url: 'http://pasandoapalabras.com/',
        text: "Guarda lo que la musa te ha contado"
    },
    {
        id:2,
        title:"Mirar",
        image: read,
        url: 'http://pasandoapalabras.com/',
        text: "El azar te dará lo que la musa te ha contado."
    },
    {
        id:3,
        title:"Votar",
        image: vote,
        url: 'http://pasandoapalabras.com/',
        text: "Dale un punto a la frase si te ha gustado"
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
