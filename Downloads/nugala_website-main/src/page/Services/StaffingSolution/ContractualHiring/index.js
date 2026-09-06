import React from "react";
import img from '../../../../assets/Services/Contractual Hiring.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "Contractual Hiring",
        sectionTitle: "Flexible Talent, Maximum Impact",
        content: "Need a specialized workforce for short-term projects or seasonal demands? With our contractual hiring services, we provide top-tier talent when and where you need it. Stay agile, reduce costs, and scale effortlessly with Nugala."
    },
    whatWeDo: {
        sectionTitle: "What We Do – Tailored Contractual Hiring Solutions",
        content: "We help companies bridge the gap between talent needs and project demands by providing skilled professionals for short-term, project-based, or temporary roles. Our experts are handpicked to meet your exact requirements and seamlessly integrate into your existing team.",
        services: [
            { title: "Project-Based Hiring", description: "Specialists for specific projects with defined timelines and objectives." },
            { title: "Seasonal and Peak Demand Hiring", description: "Talent solutions for peak seasons without long-term commitments." },
            { title: "Interim Staffing", description: "Experienced professionals to fill critical positions temporarily." },
            { title: "On-Demand Technical Experts", description: "Highly skilled IT experts, engineers, and developers available when needed." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It – Our Approach",
        steps: [
            { title: "Requirement Analysis", description: "We collaborate with you to understand your project scope, timeline, and talent requirements." },
            { title: "Talent Search and Screening", description: "Nugala’s recruiters leverage a vast network of industry professionals, utilizing both AI-powered sourcing tools and human expertise to identify top candidates." },
            { title: "Rapid Deployment", description: "We streamline onboarding so that contract employees can quickly contribute to your project." },
            { title: "Performance Monitoring", description: "We stay engaged throughout the contract period to ensure smooth operations and handle any issues promptly." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala.com for Contractual Hiring?",
        reasons: [
            { title: "Extensive Talent Pool", description: "Access a wide range of IT professionals, data analysts, cloud architects, and other specialists." },
            { title: "Fast Turnaround", description: "We understand that time is critical. Our process enables quick identification and deployment of the right talent." },
            { title: "Cost Efficiency", description: "Avoid the long-term costs associated with permanent hires. With flexible contracts, you only pay for what you need." },
            { title: "Industry Expertise", description: "Backed by years of experience, we know what it takes to deliver contract-based staffing solutions across industries like technology, finance, and healthcare." },
            { title: "Commitment to Quality", description: "We are dedicated to providing top-quality professionals who can immediately contribute to your organization’s success." }
        ]
    },
    contactSection: {
        sectionTitle: "Elevate Your Projects with Flexible, On-Demand Contractual Hiring Services",
        content: "Partner with us today and ensure your business remains agile, efficient, and scalable. Ready to learn more? Contact Us Now!"
    }
};

const ContractualHiringServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default ContractualHiringServicePage;