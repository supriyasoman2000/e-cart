import React from 'react'
import { Card,Row,Col,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Wishlist() {
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
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
           <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'>
            <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
           </Button>
           </div>
          </Card.Body>
        </Card>
      </Col>
       )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img  height={'550px'} width={'350px'} src="https://assets-v2.lottiefiles.com/a/744a57f2-116e-11ee-bbbc-230b4b2d893a/0mT3QWnp8Z.gif" alt="" />
        <h3  className='fw-bolder'>Your Wishlist is Empty!!!</h3>
        <Link style={{textDecoration:'none',width:'250px',height:'50px',marginBottom:'150px'}} className='btn btn-success rounded mt-5' to={'/'}>Back To Home</Link>

       </div>
         }
   </Row>
   </div>
  )
}

export default Wishlist