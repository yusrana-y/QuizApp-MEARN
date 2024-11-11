import React, { createContext, useState } from 'react'

export const tokenAuthContext = createContext()

const TokenContext = ({children}) => {
    const [isAuthorized,setIsAuthorized] = useState(false)
  return (
   <tokenAuthContext.Provider value={{isAuthorized,setIsAuthorized}}>
    {children}
   </tokenAuthContext.Provider>
  )
}

export default TokenContext
