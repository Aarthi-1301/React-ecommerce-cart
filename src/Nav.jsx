import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "./Nav.css"

const Nav=()=> {
  return (
    <div className='navv'>
      <nav>
        <ul>
           <li><Link to={"/"}>HOME</Link></li>
           <li><Link to={"cart"}>CART</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Nav
