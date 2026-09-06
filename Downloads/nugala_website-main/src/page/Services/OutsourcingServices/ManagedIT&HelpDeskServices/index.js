import React from "react";
import img from '../../../../assets/Services/Managed IT & Help Desk Services.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "24/7 IT Support & Managed Services for Business Continuity",
        sectionTitle: "Proactive IT Support – Enhance Security, Reduce Downtime, and Optimize Performance",
        content: "Nugala’s Managed IT Support & Help Desk Services ensure smooth business operations with 24/7 remote IT support, cybersecurity monitoring, and cloud management solutions."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "We provide comprehensive IT support services tailored to your business needs.",
        services: [
            { title: "24/7 Help Desk Support", description: "Round-the-clock IT troubleshooting, software support, and network management." },
            { title: "Proactive IT Monitoring", description: "Continuous infrastructure monitoring to prevent downtime and optimize performance." },
            { title: "Cybersecurity & Compliance", description: "Threat detection, risk assessments, and regulatory compliance audits to protect sensitive data." },
            { title: "Cloud-Based IT Solutions", description: "Seamless cloud integration, remote workforce support, and hybrid IT management." },
            { title: "Custom ITSM Solutions", description: "Tailored IT service management plans with dedicated SLAs for businesses of all sizes." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "AI-Driven Monitoring", description: "Advanced AI tools detect vulnerabilities and resolve issues before they escalate." },
            { title: "Managed Endpoint Security", description: "Protect every device in your network with enterprise-grade security measures." },
            { title: "Custom IT Solutions", description: "Flexible service plans designed to align with your business needs and growth." },
            { title: "Dedicated IT Support Teams", description: "Certified IT professionals available 24/7 for real-time assistance and issue resolution." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala for Managed IT Services?",
        reasons: [
            { title: "24/7 Support & Monitoring", description: "Our dedicated IT team is always available to ensure business continuity." },
            { title: "Automated IT Optimization", description: "Reduce downtime and increase efficiency with proactive automation and monitoring." },
            { title: "Scalable & Cost-Effective", description: "Flexible IT solutions that adapt to your company’s growth while optimizing costs." },
            { title: "Compliance & Security", description: "Ensure regulatory compliance with ISO 27001, HIPAA, and SOC 2 certifications." },
            { title: "Expert IT Professionals", description: "Certified IT experts providing industry-leading support and consulting." }
        ]
    },
    contactSection: {
        sectionTitle: "Optimize Your IT Operations with Nugala",
        content: "Partner with Nugala for proactive, scalable, and secure IT management. Contact us today to learn more about our Managed IT & Help Desk Services."
    }
};

const ManagedITServicePage = () => {
    return <ServicePage data={data} img={img} />;
};

export default ManagedITServicePage;
