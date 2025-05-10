import React from 'react'
import { DocsHeader, DocsNavigation, OnThisPage } from '../../components'
import { Outlet } from 'react-router-dom'

const Docs = () => {
    return (
        <div>
            <DocsHeader />
            <div className='flex justify-between' >
                <DocsNavigation />
                <Outlet />
                <OnThisPage />
            </div>
        </div>
    )
}

export default Docs