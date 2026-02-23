import React ,{useContext}from 'react'
import { myContext } from './App'
import "./Cart.css"

const Cart=()=> {
  let appState=useContext(myContext)
  return (
        <div className="cart-container">
  {appState.cart.length > 0 ? appState.cart.map((e)=>{

    return (
      <div className="cart-item" key={e.id}>
        <img src={e.image} alt="" />
        <h2>{e.title}</h2>
        <h3>Price: {e.price}$</h3>
        <h3>Rating : {e.rating.rate}</h3>
        <button onClick={()=>{
          let filterarray = appState.cart.filter((x)=> e.id !== x.id)
          appState.dispatch({
            type:"remove",
            payload:filterarray
          })
        }}>
          Remove from cart
        </button>
      </div>
    )

  }) : "OOPS..! no products in your cart"}
</div>
  )
}

export default Cart
