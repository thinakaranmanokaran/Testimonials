import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DocsLayout } from '../../layouts'
import { DocsAPI, DocsForms, DocsGuide, DocsOverview, DocsRegistration, GettingStarted } from '../../pages'

const Docs = () => {
    return (
        <Routes>
            <Route path='/docs/' element={<DocsLayout />} >
                <Route path='get-started' index element={<GettingStarted />} />
                <Route path='overview' element={<DocsOverview />} />
                <Route path='forms' element={<DocsForms />} />
                <Route path='testimonials' element={<DocsGuide />} />
                <Route path='authentication' element={<DocsRegistration />} />
                <Route path='api' element={<DocsAPI />} />
            </Route>
        </Routes>
    )
}

export default Docs