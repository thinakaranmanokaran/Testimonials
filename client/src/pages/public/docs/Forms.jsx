import React from 'react';
import { DocsTitle, DocsParagrabh } from '../../../components';

const Forms = () => {
    return (
        <div className='w-full'>
            <div className='space-y-8'>

                <DocsTitle title='Manage Feedback Forms' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Forms are the core tool in Rumoro for collecting testimonials. Each form you create is fully customizable and shareable." />
                    <DocsParagrabh paragrabh="You can create multiple feedback forms for different purposes — client testimonials, team feedback, event responses, or anything else you want insights for." />
                </div>

                <DocsTitle title='How Forms Work' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• Forms are linked to your account and accessible via unique URLs." />
                    <DocsParagrabh paragrabh="• You can edit the title, description, required fields, and appearance of each form." />
                    <DocsParagrabh paragrabh="• Once created, you can share your form link with clients, team members, or your audience." />
                </div>

                <DocsTitle title='Benefits of Using Forms' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• Collect testimonials quickly and professionally without back-and-forth emails." />
                    <DocsParagrabh paragrabh="• All feedback is automatically stored and visible inside your dashboard." />
                    <DocsParagrabh paragrabh="• You can customize and embed top responses anywhere to build trust." />
                </div>
            </div>
        </div>
    );
};

export default Forms;
