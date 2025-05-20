import { GoFlame, GoHome, GoProject, GoRocket, GoThumbsup, GoWorkflow, GoZap } from "react-icons/go";

const DocsNavigation = [
    {
        head: "Get Started",
        headicon: GoRocket,
        headlink: "get-started",
        titleData: [
            {
                title: "Overview",
                titlelink: "overview",
                subtitleData: [
                    {
                        subtitle: "What is Rumoro",
                        subtitlelink: "what-is-rumoro",
                    },
                    {
                        subtitle: "Why Use It",
                        subtitlelink: "why-use-it",
                    },
                ],
            },
            {
                title: "Authentication",
                titlelink: "authentication",
                subtitleData: [
                    {
                        subtitle: "How to Register",
                        subtitlelink: "how-to-register",
                    },
                    {
                        subtitle: "Email & Token",
                        subtitlelink: "email-and-token",
                    },
                ],
            },
        ],
    },
    {
        head: "Dashboard",
        headicon: GoFlame,
        headlink: "/user/dashboard",
        titleData: [
            {
                title: "Manage Forms",
                titlelink: "forms",
                subtitleData: [
                    {
                        subtitle: "Create Feedback Form",
                        subtitlelink: "create-feedback-form",
                    },
                    {
                        subtitle: "Form Settings",
                        subtitlelink: "form-settings",
                    },
                    {
                        subtitle: "Share Form",
                        subtitlelink: "share-form",
                    },
                    {
                        subtitle: "Customize Form",
                        subtitlelink: "customize-form",
                    },
                ],
            },
        ],
    },
    {
        head: "Docs",
        headicon: GoProject,
        headlink: "overview",
    },
    {
        head: "Testimonials",
        headicon: GoThumbsup,
        headlink: "testimonials",
    },

    {
        head: "Forms",
        headicon: GoWorkflow,
        headlink: "forms",
    },

    {
        head: "API",
        headicon: GoZap,
        headlink: "api",
        titleData: [
            {
                title: "Manage Testimonials",
                titlelink: "testimonials",
                subtitleData: [
                    {
                        subtitle: "Token Setup",
                        subtitlelink: "token-setup",
                    },
                    {
                        subtitle: "Fetch Testimonials",
                        subtitlelink: "fetch-testimonials",
                    },
                    {
                        subtitle: "View Feedback",
                        subtitlelink: "view-feedback",
                    },
                    {
                        subtitle: "Embed in Portfolio",
                        subtitlelink: "embed-portfolio",
                    },
                    {
                        subtitle: "Authentication",
                        subtitlelink: "authentication",
                    },
                    {
                        subtitle: "Endpoints",
                        subtitlelink: "endpoints",
                    },
                ],
            },
        ],
    },
];

export default DocsNavigation;