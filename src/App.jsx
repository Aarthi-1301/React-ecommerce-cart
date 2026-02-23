import React ,{useReducer,createContext} from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Cart from './Cart'

function reducer(state,action) {
   switch (action.type) {
    case "all":
       return {...state,allProduct:action.payload,loading:false}
    case "cart":
       return {...state,cart:[...state.cart,action.payload]}
    case "remove":
        return {...state,cart:action.payload}
      }

}

let myRouter=createBrowserRouter([
  {
    path:"/",
    element:<Nav></Nav>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"cart",
        element:<Cart></Cart>
      }
    ]
  }
])

export let myContext=createContext()

const App=()=> {
    let [state,dispatch]=useReducer(
      reducer,{allProduct:[],
        oneProduct:{},
        cart:[],
        loading:true,
        error:false
      }
    )
  return (<div>
   <myContext.Provider value={{...state,dispatch}}>

  <RouterProvider router={myRouter}/>

   </myContext.Provider>
  </div>
  )
}

export default App
