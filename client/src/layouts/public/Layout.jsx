import { PublicFooter, PublicHeader } from '@/components'
import React from 'react'
import { Outlet } from 'react-router-dom'

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