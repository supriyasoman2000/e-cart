import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {emptyCart, removeFromCart} from '../Redux/slices/cartSlice'
import { useState } from 'react'


function Cart() {
  const cartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(    cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order Placed Successfully")
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  return (
    <div className='container' style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
        <div className="row mt-5">
          <div className="col-lg-7">
            <table className='table shadow border'>
             <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
             </thead>
             <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                    <td> {index+1} </td>
                    <td> {product.title} </td>
                    <td> <img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /> </td>
                    <td>${product.price} </td>
                    <td> <button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'> <i className='fa-solid fa-trash text-danger '></i></button>  </td>
                  </tr>
                ))
              }
             </tbody>
            </table>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <div className="border mt-3 p-3 rounded shadow">
            <h1 className='text-primary'>Cart Summary</h1>
              <h4 className='mt-3'>Total Products: <span> {cartArray.length} </span></h4>
               <h4 >Total: <span className='text-danger fw-bolder fs-2'> ${total} </span></h4>
                <div className="d-grid">
                  <button onClick={handleCart} className='btn btn-success mt-3 rounded'>Check Out</button>
                </div>
            </div>
          </div>
        </div>
        
        :
        <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img  height={'550px'} width={'350px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
        <h3  className='fw-bolder'>Your Cart is Empty!!!</h3>
        <Link style={{textDecoration:'none',width:'250px',height:'50px',marginBottom:'150px'}} className='btn btn-success rounded mt-5' to={'/'}>Back To Home</Link>

       </div>
      }
    </div>
  )
}

export default Cart