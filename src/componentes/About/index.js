import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import About from '../../Imagens/about.jpg'
import './style.css';
import AboutTexto from './textos.json'

function AboutComponent() {
   
    return (
        <>
        <div className="container-about">
        <div className="img_card">
        <Card>
            <Card.Body>
            <Card.Img alt="Adocao" className="img-banner"  src={About}></Card.Img>
            </Card.Body>
        </Card>
        </div>
        <div>
            <Card className="text_card" fixed="top">
            <Card.Body>
                <Card.Title className='.title-card-about'>{AboutTexto.about.title}</Card.Title>
                <Card.Text className='.text-card-about'>{AboutTexto.about.content}</Card.Text>
            </Card.Body>
            </Card>
        </div>
        </div>
        </>    
    )
}

export default AboutComponent