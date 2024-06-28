import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice.js'
import service from '../../appwrite/config.js'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
    service.logout().then(() => dispatch(logout()))
    }


  return (
<button
className='inlie-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
>Logout</button>  )
}

export default LogoutBtn