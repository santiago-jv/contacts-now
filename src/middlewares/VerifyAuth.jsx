import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { AppContext } from '../context/ContextProvider'

const VerifyAuth = ({children}) => {
    const {state} = useContext(AppContext)
    const token = sessionStorage.getItem('session')
    return (
        <>
         {state.user || token ? <>{children}</>:<Redirect to='/login'/>}
        </>
    )
}

export default VerifyAuth
