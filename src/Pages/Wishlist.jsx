import React from 'react'
import { Card,Row,Col,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slices/wishlistSlice'

function Wishlist() {
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  return (
    <div style={{marginTop:'100px'}}>
   <Row>
     {
      wishlistArray.length>0?
      wishlistArray.map((product,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem',height:'29rem',marginTop:'20px',marginLeft:'50px'}}>
          <Card.Img variant="top" height={'200px'} src={product?.thumbnail}/>
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
              <p>{product?.description.slice(0,55)}...</p>
              <h5>${product?.price}</h5>
            </Card.Text>
           <div className='d-flex justify-content-between'> 
           <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'>
            <i className='fa-solid fa-trash text-danger fa-2x'></i>
           </Button>
           <Button className='btn btn-light'>
            <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
           </Button>
           </div>
          </Card.Body>
        </Card>
      </Col>
       )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img  height={'550px'} width={'350px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
        <h3  className='fw-bolder'>Your Wishlist is Empty!!!</h3>
        <Link style={{textDecoration:'none',width:'250px',height:'50px',marginBottom:'150px'}} className='btn btn-success rounded mt-5' to={'/'}>Back To Home</Link>

       </div>
         }
   </Row>
   </div>
  )
}

export default Wishlist