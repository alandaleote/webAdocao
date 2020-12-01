  
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  './style.css'
import FaceIcon from '../../Imagens/icon-face.png'
import InstaIcon from '../../Imagens/icon-insta.png'
import WhatsIcon from '../../Imagens/icon-whats.png'
import MailIcon from '../../Imagens/icon-mail.png'
import Contact from './textos.json'


function FooterComponent(){
    return (  
            <div id ="Contato" className="footerStyle" fixed="bottom" >
                <Row className="row-style">
                    <Col className="footerStyle-texts">
                        <Col>{Contact.data.contact}</Col>
                        <Col>{Contact.data.telephone}</Col>
                    </Col>
                    <Col>
                        <Col className="social-media-icons" >
                            <a className="icon-style" target="_blank" href="whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+5551998517154+"><img src={WhatsIcon} width="100px"></img></a>
                            <a className="icon-style" target="_blank" href="mailto:5marias.orcamento@gmail.com"><img src={MailIcon} width="100px"></img></a>
                            <a className="icon-style" target="_blank" href="https://www.facebook.com/5marias.sustentaveis"><img src={FaceIcon} width="100px"></img></a>
                            <a className="icon-style" target="_blank" href="https://www.instagram.com/_5marias_/"><img src={InstaIcon} width="100px"></img></a>
                        </Col>
                    </Col>  
                </Row>
            </div>
        )
}
export default FooterComponent