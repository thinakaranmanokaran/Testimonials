import React from 'react';
import { DocsTitle, DocsParagrabh } from '../../../components';

const Testimonials = () => {
    return (
        <div className='w-full'>
            <div className='space-y-8'>

                <DocsTitle title='Manage Testimonials' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="The Testimonials section lets you view, organize, and publish all feedback collected via your forms. Whether it's client praise or team input, it's all stored securely in your account." />
                    <DocsParagrabh paragrabh="You can manage how testimonials are displayed publicly and use advanced filtering options to focus on specific audiences or timeframes." />
                </div>

                <DocsTitle title='Workflow' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="1. A user submits feedback using your shared form." />
                    <DocsParagrabh paragrabh="2. The testimonial is automatically stored in your account." />
                    <DocsParagrabh paragrabh="3. You can view, filter, or delete testimonials anytime from the dashboard." />
                    <DocsParagrabh paragrabh="4. Highlighted testimonials can be embedded directly into your personal site or portfolio." />
                </div>

                <DocsTitle title='Why Testimonials Matter' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• Build trust and social proof by showcasing real feedback." />
                    <DocsParagrabh paragrabh="• Let satisfied clients advocate for you through their words." />
                    <DocsParagrabh paragrabh="• Use testimonials as a marketing tool across your platforms." />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
