  
import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import NavId from './texts.json'
import Logo from '../../Imagens/adocaoLogo.png'

function HeaderComponent() {
    return (
          
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={Logo} height="100px"></img></Navbar.Brand> 
        
            <Nav className="mr-auto">
                <Nav.Link href="#home">{NavId.id.benefits}</Nav.Link>
                <Nav.Link href="#features">{NavId.id.depositions}</Nav.Link>
                <Nav.Link href="#pricing">{NavId.id.duvidas}</Nav.Link>
                <Nav.Link href="#pricing">{NavId.id.duvidas}</Nav.Link>
            </Nav>
          
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Login</Button>
            </Form>
      </Navbar>
    )
}
export default HeaderComponent