import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DocsLayout } from '../../layouts'
import { GettingStarted } from '../../pages'

const Docs = () => {
    return (
        <Routes>
            <Route path='/docs/' element={<DocsLayout />} >
                <Route path='get-started' index element={<GettingStarted />} />
            </Route>
        </Routes>
    )
}

export default Docs