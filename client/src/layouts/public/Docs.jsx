import React from 'react'
import { DocsHeader, DocsNavigation, OnThisPage } from '../../components'
import { Outlet } from 'react-router-dom'

const Docs = () => {
    return (
        <div>
            <DocsHeader />
            <div className='flex justify-between mt-12 min-h-screen  py-4 relative z-10 ' >
                <div className="fixed left-0 h-full ">
                    <DocsNavigation />
                </div>
                    <div className='w-3/5 relative left-67.5 bg-bggrey' >
                        <Outlet />
                    </div>
                <div className='fixed right-0  h-full' >
                    <OnThisPage />
                </div>
            </div>
        </div>
    )
}

export default Docs