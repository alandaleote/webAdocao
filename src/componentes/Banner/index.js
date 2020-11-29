import React, { useState } from 'react'
import Banner from '../../Imagens/banner.png'
import './style.css';

function BannerComponent() {
   
    return (
        <div className="div-banner">
            <img alt="adocao" className="img-banner" fixed="top" src={Banner}></img>
        </div>
    )
}

export default BannerComponent