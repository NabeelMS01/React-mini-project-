import {createContext,useState} from 'react'

export const AuthPageContext =createContext({})
export const AuthSignupPageContext =createContext({})
export const EditUserContext =createContext({})
// export default function Context ({children}){
//     const[showLogin,setshowLogin] =useState(false)
//     return(
//         <AuthPageContext.Provider value={{showLogin,setshowLogin}} >
//             {children}
//         </AuthPageContext.Provider>
//     )
//  }