import React, {useContext} from 'react'
import {AuthContext} form"../../context/AuthContext";


export const BottomMainRight = () => {
    const {isloggenin, login, logout} = useContext(AuthContext)
  return (
    <div className='bottommainright' >
    <p>BottomiinRight: {isloggenin ? ""}</p>
    
    </div>
  )
}

