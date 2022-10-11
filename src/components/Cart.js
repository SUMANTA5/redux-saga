import React from 'react'
import { useSelector } from 'react-redux'
import {} from 'react-router-dom'

const Cart = () => {
  const cartData = useSelector((state)=> state.cartData)
  console.log(cartData)
  return (
    <div>
      <h1>Cart</h1>
      
    </div>
  )
}

export default Cart
