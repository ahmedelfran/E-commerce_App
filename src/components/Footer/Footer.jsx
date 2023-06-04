import  React  from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className='logo'>
                            <div >
                                <h1 className='text-white'>Multimart</h1>
                            </div>
                        </div>
                        <p className='footer__text mt-4'>
                            Lorem ipsum is placeholder text used commonly
                            in the graphic, print, layouts publishing
                            industries for previewing and visual
                            mockups.
                        </p>
                    </Col>
                    <Col lg='3' md='3' className='mb-4'>
                        <div className='footer__quick-links'>
                            <h4 className='footer__links-title' >
                                Top Categories
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className='mb-4'>
                        <div className='footer__quick-links'>
                            <h4 className='footer__links-title' >
                                Useful Links
                            </h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6' >
                        <div className='footer__quick-links'>
                            <h4 className='footer__links-title' >
                                Contact
                            </h4>
                            <ListGroup className='footer__contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>123 Banha, Qalyubia, Egypt</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-phone-line"></i></span>
                                    <p>+20 01023858970</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-mail-line"></i></span>
                                    <p>ahmedelfran343@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12' className='footer__copyright'>
                        Copyright {year} developed by Ahmed El-fran. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer