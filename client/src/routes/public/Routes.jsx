import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Register, Services, Signin } from '../../pages'
import { PublicLayout } from '../../layouts'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<PublicLayout />}>
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default PublicRoutes