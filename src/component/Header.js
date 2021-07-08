import React from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"


const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >BIGBASKET</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  {""}
                  <i className='fas fa-shopping-home'></i> 
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  {""}
                  {/* <i className='fad fa-shopping-cart'></i>  */}
                  MYCART
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/register'>
                <Nav.Link>
                  {/* <i className='fas fa-user'></i> */}
                  REGISTER
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  {/* <i className='fas fa-user'></i> */}
                  LOGIN
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/productscreen'>
                <Nav.Link>
                  {/* <i className='fas fa-user'></i> */}
                  PRODUCT DETAIL
                </Nav.Link>
              </LinkContainer>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
