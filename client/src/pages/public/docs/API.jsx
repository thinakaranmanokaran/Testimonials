import React from 'react';
import { DocsTitle, DocsParagrabh } from '../../../components';

const API = () => {
    return (
        <div className='w-full'>
            <div className='space-y-8'>

                <DocsTitle title='Rumoro Public API' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Rumoro provides a developer-friendly REST API that allows you to manage testimonials and forms programmatically. You can integrate it into your own frontend, backend, or even mobile apps." />
                    <DocsParagrabh paragrabh="Authentication is required for most endpoints. You must provide a valid token in the request headers." />
                </div>

                <DocsTitle title='Authentication' size='4xl' />
                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Use your Bearer token in the request header to access protected routes." />
                    <DocsParagrabh paragrabh="Example: `Authorization: Bearer YOUR_TOKEN_HERE`" />
                </div>

                <DocsTitle title='API Endpoints' size='4xl' />
                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• **GET /api/testimonials** – Fetch all testimonials for the authenticated user." />
                    <DocsParagrabh paragrabh="• **POST /api/testimonials** – Submit a new testimonial (used in your forms)." />
                    <DocsParagrabh paragrabh="• **DELETE /api/testimonials/:id** – Delete a specific testimonial." />
                    <DocsParagrabh paragrabh="• **GET /api/forms** – Retrieve all feedback forms created by the user." />
                    <DocsParagrabh paragrabh="• **POST /api/forms** – Create a new form with custom fields and styling." />
                    <DocsParagrabh paragrabh="• **PUT /api/forms/:id** – Update a form’s configuration." />
                    <DocsParagrabh paragrabh="• **DELETE /api/forms/:id** – Delete a specific form." />
                </div>

                <DocsTitle title='Rate Limits' size='4xl' />
                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="To prevent abuse, the API has a rate limit of 100 requests per minute per token. If you exceed the limit, you'll receive a 429 error." />
                </div>

                <DocsTitle title='Error Responses' size='4xl' />
                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• **401 Unauthorized** – Token missing or invalid." />
                    <DocsParagrabh paragrabh="• **403 Forbidden** – You don’t have access to this resource." />
                    <DocsParagrabh paragrabh="• **404 Not Found** – Resource doesn’t exist." />
                    <DocsParagrabh paragrabh="• **500 Server Error** – Something went wrong on our end." />
                </div>
            </div>
        </div>
    );
};

export default API;
