import React from 'react'
import { Row , Col  } from 'react-bootstrap';
import { Navbar, Container, Nav , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';




export default function Header_nav()
{
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar bg="dark"  variant='dark' expand="md" >
              <Container>
                <Navbar.Brand href="#">
                  <img src="logo512.png" width='100' height='50'
                     />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">

                    <Link to='/DisplayData'>
                       <Button variant="outline-info"> 
                       Display Accounts Api Data </Button>
                    </Link> 
                         {/* <Nav.Link href='#' >Home</Nav.Link>   */}
                    
                    {/* <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link> */}
                    

                  </Nav>
                  
                  <Nav>
                    
                    <Link to="/Registration2">
                      <Button variant="outline-info" className='me-2'>
                         Register</Button>{' '}
                    </Link>

                    <Link to="/Login2">
                      <Button variant="outline-info" className='ms-2'>
                          Sign In</Button>
                      </Link>
                  </Nav>
                </Navbar.Collapse>


              </Container>
            </Navbar>
          </Col>
        </Row>


        
      </Container>

    </>
  )
}
