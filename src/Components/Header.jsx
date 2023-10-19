import React from 'react'
import {Nav,Navbar,Container, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  return (
    <Navbar expand="lg"  style={{backgroundColor:'orange',zIndex:'1'}}>
    <Container>
    <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i className="fa-solid fa-truck-fast me-2"></i>E-Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'> 
          <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
            <i className='fa-solid fa-heart text-danger me-2'></i> Wishlist
            <Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge>
        </Link>
          </Nav.Link>

          <Nav.Link className='btn border rounded ms-3'> 
          <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
            <i className='fa-solid fa-cart-shopping text-primary me-2'></i> Cart
            <Badge className='ms-2 rounded' bg="light">10</Badge>
        </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header