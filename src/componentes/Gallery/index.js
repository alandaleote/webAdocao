  
import React from 'react';
import {Tab, Tabs, Carousel, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem from '../../Imagens/about.jpg'
import TextosGallery from './textos.json'

function GalleryNavComponent() {
    return (
        <div className='container-gallery'>
        <h1 className="title-gallery">{TextosGallery.gallery.title}</h1>
        <Tabs defaultActiveKey="profile">
            <Tab eventKey="Todos" title="Todos">

            <div className="row">
                
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem} width="100px"/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card1.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card1.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card3.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card3.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row">

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card4.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card4.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card5.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card5.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
        </Tab>

          <Tab eventKey="Pets" title="Pets">

            <div className="row">
                
                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem} width="100px"/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card1.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card1.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card3.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card3.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row">

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card4.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card4.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card5.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card5.content}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col">
                    <Card className= "card-depositions">
                        <div className="imgCard">
                        <Card.Img variant="top" src={Imagem}/>
                        </div>
                        <Card.Body classname="body-depositions">
                        <Card.Title className='card-title-gallery'>{TextosGallery.card6.title}</Card.Title>
                        <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
        </Tab>
        <Tab eventKey="Diversos" title="Diversos">

        <div className="row">
            
            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Imagem} width="100px"/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card1.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card1.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Imagem}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card2.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card2.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Imagem}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card3.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card3.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

        <div className="row">

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Imagem}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card4.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card4.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Imagem}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card-title-gallery'>{TextosGallery.card5.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card5.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col">
                <Card className= "card-depositions">
                    <div className="imgCard">
                    <Card.Img variant="top" src={Imagem}/>
                    </div>
                    <Card.Body classname="body-depositions">
                    <Card.Title className='card.title-gallery'>{TextosGallery.card6.title}</Card.Title>
                    <Card.Text className='text-card-gallery'>{TextosGallery.card6.content}</Card.Text>
                    </Card.Body>
                </Card> 
            </div>
        </div>
        </Tab>
        </Tabs>
        </div>
     
    )
}
export default GalleryNavComponent