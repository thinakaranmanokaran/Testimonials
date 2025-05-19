import { GoRocket } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaWpforms, FaBookOpen } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";

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
                title: "Registration",
                titlelink: "register",
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
        headicon: MdOutlineDashboardCustomize,
        headlink: "dashboard",
        titleData: [
            {
                title: "Manage Forms",
                titlelink: "manage-forms",
                subtitleData: [
                    {
                        subtitle: "Create Feedback Form",
                        subtitlelink: "create-feedback-form",
                    },
                    {
                        subtitle: "Form Settings",
                        subtitlelink: "form-settings",
                    },
                ],
            },
        ],
    },
    {
        head: "Forms",
        headicon: FaWpforms,
        headlink: "forms",
        titleData: [
            {
                title: "Form Flow",
                titlelink: "form-flow",
                subtitleData: [
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
        headicon: FaBookOpen,
        headlink: "docs",
        titleData: [
            {
                title: "API Reference",
                titlelink: "api-reference",
                subtitleData: [
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
    {
        head: "Testimonials",
        headicon: VscFeedback,
        headlink: "testimonials",
        titleData: [
            {
                title: "Feedback Showcase",
                titlelink: "feedback-showcase",
                subtitleData: [
                    {
                        subtitle: "View Feedback",
                        subtitlelink: "view-feedback",
                    },
                    {
                        subtitle: "Embed in Portfolio",
                        subtitlelink: "embed-portfolio",
                    },
                ],
            },
        ],
    },
    {
        head: "API",
        headicon: AiOutlineApi,
        headlink: "api",
        titleData: [
            {
                title: "Usage Guide",
                titlelink: "usage-guide",
                subtitleData: [
                    {
                        subtitle: "Token Setup",
                        subtitlelink: "token-setup",
                    },
                    {
                        subtitle: "Fetch Testimonials",
                        subtitlelink: "fetch-testimonials",
                    },
                ],
            },
        ],
    },
];

export default DocsNavigation;
