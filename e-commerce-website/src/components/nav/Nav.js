import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'



export function Nav() {
    const [searchItem, setSearchItem] = useState('')
  return (
    <>
    <nav>
        <div className='nav_container'>
            <div className='nav_heading'>
                <Link to='/'><h1> ShopKaro</h1></Link>
            </div>
            <div className='search_input_btn'>
                <input type='text' id='search' onChange={(e) => setSearchItem(e.target.value)} placeholder='search...'/>
                <button>Search</button>
            </div>
            <div className='cart_signup_login_btns'>
                <button>Cart</button>
                <Link to='/signup'><button>Sign Up</button></Link>
                <Link to='/login'><button>Log In</button></Link>
            </div>
        </div>
    </nav>
    
    </>
  )
}
