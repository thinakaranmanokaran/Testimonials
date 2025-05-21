import React, { useEffect } from 'react';
import { DocsParagrabh, DocsTitle } from '../../../components';
import { useLocation } from 'react-router-dom';

const Overview = () => {

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className='w-full'>
            <div className='space-y-8'>
                <DocsTitle title='Overview' size='4xl' />

                <div className='space-y-4' id='what-is-rumoro'>
                    <DocsTitle title='What is Rumoro' size='3xl' />
                    <DocsParagrabh paragrabh="Rumoro is a modern testimonial and feedback platform crafted for creators, freelancers, developers, and agencies to gather and manage authentic feedback in a clutter-free way. Traditional feedback collection methods like WhatsApp, Google Forms, and email threads often become disorganized and overwhelming. Rumoro solves this by offering a centralized solution for structured, branded testimonial collection." />

                    <DocsParagrabh paragrabh="Users can build and customize feedback forms that align with their brand. These forms can then be shared with clients, allowing them to leave testimonials without signing up or going through a complicated process. The submissions are automatically organized and made ready for presentation on a personal website, portfolio, or client profile." />

                    <DocsParagrabh paragrabh="Rumoro is made for individuals and teams alike. It empowers users to collect valuable client insights, strengthen credibility, and present testimonials in a professional format that builds trust with future prospects." />
                </div>

                <div className='space-y-4' id='why-use-it'>
                    <DocsTitle title='Why Use It' size='3xl' />
                    <DocsParagrabh paragrabh="• Avoid the mess of juggling between chats, emails, and spreadsheets." />
                    <DocsParagrabh paragrabh="• Instantly create branded feedback forms with no-code simplicity." />
                    <DocsParagrabh paragrabh="• Collect testimonials that are structured, verifiable, and easy to display." />
                    <DocsParagrabh paragrabh="• Clients don’t need to log in — just click, write, and submit." />
                    <DocsParagrabh paragrabh="• Built-in dashboard for managing, reviewing, and customizing responses." />
                    <DocsParagrabh paragrabh="• Developers get access to API documentation for advanced use cases." />
                    <DocsParagrabh paragrabh="• Easy integration with portfolios or resumes via embed snippets or public showcase." />
                </div>
            </div>
        </div>
    );
};

export default Overview;
