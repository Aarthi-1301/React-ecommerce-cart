import React,{useContext,useEffect} from 'react'
import { myContext } from './App'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home=()=> {
    let  appState=useContext(myContext)
    let navigate=useNavigate()
    useEffect(()=>{
      async function abc() {
        
        let res=await fetch('https://fakestoreapi.com/products')
        let data=await res.json()
        console.log(data); 
        appState.dispatch({
          type:"all",
          payload:data
        })
      }
      abc()
    },[])
    if (appState.loading) {
      return <div>
        ......Loading
      </div>
    }
    
  return (
    <div>
      <section className='all'>
         {appState.allProduct.map((e,i)=>{

          return <div key={e.id}>
            <img src={e.image} alt="" />
            <h2>{e.title}</h2>
            <h3>Price: {e.price}$</h3>
            <h3>Rating :{e.rating.rate}</h3>
            {
              appState.cart.some((x)=>x.id==e.id)?<button onClick={()=>{
                navigate("cart")
              }}>View Cart</button>:
            <button onClick={()=>{
              appState.dispatch({
                type:"cart",
                payload:e
              })
            }}>Add to cart</button>
            }
          </div>
         })}
      </section>
    </div>
  )
}

export default Home
