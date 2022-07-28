
import {
  AuthPageContext,
  AuthSignupPageContext,
} from "../Context/AuthPageContext";
import React, { useContext } from 'react'
import Header from '../Components/Header/Header'

function Home() {
  const { showSignup, setShowSignup } = useContext(AuthSignupPageContext);
  const { showLogin, setShowLogin } = useContext(AuthPageContext);
 useContext(()=>{
  setShowSignup(false)
  setShowLogin(false)

 },[])


  return (

    <div>
   <Header/>
  

   <h1 className='text-7xl font-bold hover:text-red-500 transition duration-300 ease-linear max-w-0' >Home</h1>


    </div>

    
  )
}

export default Home