import React from 'react'
import { DocsRoutes, PublicRoutes } from './routes'

const Router = () => {
    return (
        <div>
            <PublicRoutes />
            <DocsRoutes />
        </div>
    )
}

export default Router