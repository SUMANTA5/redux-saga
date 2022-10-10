import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import "../App.css";

const Header = () => {
    const result = useSelector((state) => state.cartData)
  return (
    <div className='header'>
      <Link to='/'>
      <h1 className='logo'>E-com</h1>
      </Link>
        <Link to='/cart'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' />

        </div>
        </Link>
      
    </div>
  )
}

export default Header
