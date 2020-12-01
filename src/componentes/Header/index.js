  
import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import NavId from './texts.json'
import Logo from '../../Imagens/adocaoLogo.png'

function HeaderComponent() {
    return (
        <div  id="home" className='container-header'>
          
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={Logo} height="100px"></img></Navbar.Brand> 
        
            <Nav className="mr-auto">
                <Nav.Link href="#Contato">{NavId.id.contact}</Nav.Link>
                <Nav.Link href="#features">{NavId.id.depositions}</Nav.Link>
                <Nav.Link href="#pricing">{NavId.id.duvidas}</Nav.Link>
                <Nav.Link href="#pricing">{NavId.id.duvidas}</Nav.Link>
            </Nav>
          
            <Form inline>
                <Button variant="outline-info">Login</Button>
            </Form>
      </Navbar>
      </div>
    )
}
export default HeaderComponent