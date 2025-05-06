import { PublicLayout } from '@/layouts'
import { About, Register, Services, Signin } from '@/pages'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<PublicLayout />}>
                <Route path="about" element={<About />} />
                <Route path="about" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default PublicRoutes