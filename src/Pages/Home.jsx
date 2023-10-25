import React from 'react'
import { Card,Button, Row, Col } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Home() {
  const dispatch = useDispatch()
  const data = useFetch("https://dummyjson.com/products")
  // console.log(data);
  return (
      <Row>
         { 
         data?.length>0?data?.map((product,index)=>(
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
           <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'>
            <i className='fa-solid fa-heart text-danger fa-2x'></i>
           </Button>
           <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'>
            <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
           </Button>
           </div>
          </Card.Body>
        </Card>
          </Col>
           )):<p className='text-danger fw-bolder fs-4'>Nothing to Display!!!</p>
          }
         
      </Row>
  );
}

export default Home