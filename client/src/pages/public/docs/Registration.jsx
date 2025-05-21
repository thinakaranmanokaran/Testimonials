import React from 'react';
import { DocsTitle, DocsParagrabh } from '../../../components';

const Registration = () => {
    return (
        <div className='w-full'>
            <div className='space-y-8'>

                <DocsTitle title='Registering on Rumoro' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="To begin using Rumoro and managing your testimonials, you'll need to create a free account. Registration is simple and only takes a minute." />

                    <DocsParagrabh paragrabh="Once registered, you’ll gain access to your personalized dashboard, where you can start creating feedback forms, view incoming testimonials, and customize how they appear on your portfolio or profile." />
                </div>

                <DocsTitle title='How to Register' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="1. Navigate to the Rumoro website and click on the 'Get Started' or 'Sign Up' button." />
                    <DocsParagrabh paragrabh="2. Enter your name, email address, and set a secure password." />
                    <DocsParagrabh paragrabh="3. Click 'Register' to complete the signup process. You may receive a confirmation email depending on your settings." />
                    <DocsParagrabh paragrabh="4. After successful registration, you'll be redirected to your dashboard, where you can start setting up your first feedback form." />
                </div>

                <DocsTitle title='Why Register?' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• Gain full access to your testimonial dashboard and form manager." />
                    <DocsParagrabh paragrabh="• Store all client feedback in one place — safe, structured, and searchable." />
                    <DocsParagrabh paragrabh="• Customize your forms to match your brand and tone." />
                    <DocsParagrabh paragrabh="• Embed your best testimonials in websites, resumes, or public profiles with ease." />
                </div>
            </div>
        </div>
    );
};

export default Registration;
