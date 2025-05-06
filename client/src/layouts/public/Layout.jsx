import React from 'react'
import { Outlet } from 'react-router-dom'
import { PublicFooter, PublicHeader } from '../../components'

const Layout = () => {
    return (
        <div>
            <PublicHeader />
            <Outlet />
            <PublicFooter /> 
        </div>
    )
}

export default Layout