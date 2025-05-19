import React from 'react';
import { DocsParagrabh, DocsTitle } from '../../../components';

const GettingStarted = () => {
    return (
        <div className='w-full'>
            <div className='space-y-8'>
                <DocsTitle title='Get Started with Rumoro for Feedbacks' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Rumoro is a modern testimonial and feedback platform designed for creators, developers, freelancers, and agencies who want to collect and showcase genuine feedback without the clutter of traditional methods. Instead of using scattered tools like WhatsApp, Google Forms, or email threads, Rumoro brings everything into one streamlined experience." />

                    <DocsParagrabh paragrabh="With Rumoro, you can create clean, customizable feedback forms and share them directly with clients. Clients can submit structured testimonials effortlessly — no account required, no friction. Once submitted, the responses are automatically stored and can be beautifully displayed in your portfolio or profile." />

                    <DocsParagrabh paragrabh="Whether you're a solo creator or part of a team, Rumoro helps you build trust through real words from real people. You control how your feedback looks, where it appears, and how it's used — without needing to ask for favors or dig through old messages." />

                    <DocsParagrabh paragrabh="The platform also supports features like a personal dashboard to manage all incoming testimonials, form analytics, documentation access for developers, and integration options for advanced users." />
                </div>

                <DocsTitle title='What is Rumoro?' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Rumoro is a feedback-first platform tailored for professionals who rely on client trust and testimonials to grow. Whether you’re a freelance developer, digital agency, or creative portfolio owner, Rumoro replaces the old way of collecting feedback with a structured, elegant solution. Think of it as your personal assistant for capturing praise and turning it into social proof." />
                </div>

                <DocsTitle title='Key Features' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• Clean and responsive feedback forms with zero learning curve." />
                    <DocsParagrabh paragrabh="• No login required for your clients to submit testimonials." />
                    <DocsParagrabh paragrabh="• Instant access to testimonials through your dashboard." />
                    <DocsParagrabh paragrabh="• Auto-formatted testimonial layout for websites, resumes, or portfolios." />
                    <DocsParagrabh paragrabh="• Developer-friendly: API access and embed code for custom use cases." />
                </div>

                <DocsTitle title='Customization Options' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Rumoro lets you personalize your feedback forms to match your brand’s voice. You can adjust questions, colors, tone, and layout without needing to write any code. Want to add your logo? Change the call-to-action? All possible with a few clicks." />
                </div>

                <DocsTitle title='Privacy and Trust' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Feedback is sensitive. That’s why Rumoro ensures that all data is securely stored and only visible to you unless you choose to share it. You’re in complete control of what gets published and what stays private." />
                </div>

                <DocsTitle title='Who Is It For?' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="• Freelancers who want to gather proof of work quality from clients." />
                    <DocsParagrabh paragrabh="• Agencies looking to display client satisfaction to land bigger deals." />
                    <DocsParagrabh paragrabh="• Product teams capturing user feedback post-launch." />
                    <DocsParagrabh paragrabh="• Students and creators collecting project feedback or reviews." />
                </div>

                <DocsTitle title='Ready to Get Started?' size='4xl' />

                <div className='space-y-4'>
                    <DocsParagrabh paragrabh="Sign up today, create your first feedback form, and let Rumoro do the heavy lifting while you focus on doing great work. Your words matter — let them shine." />
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;
