import React from 'react'
import { Outlet } from 'react-router-dom'
import { PublicFooter, PublicHeader } from '../../components'

const Layout = () => {
    return (
        <div className='relative' >
            <div className='relative z-10' >
                <PublicHeader />
                <div className='p-4 bg-bggrey min-h-screen mt-12 py-8' >
                    <Outlet />
                </div>
            </div>
            <div className='h-96 w-full ' ></div>
            <PublicFooter />
        </div>
    )
}

export default Layout