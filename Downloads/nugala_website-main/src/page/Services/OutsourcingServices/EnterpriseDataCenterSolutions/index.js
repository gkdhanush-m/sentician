import React from "react";
import img from '../../../../assets/Services/Enterprise Data Center Solutions.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "Future-Ready Data Centers with Advanced Hosting & Cloud Solutions",
        sectionTitle: "Secure, Scalable, and High-Performance Data Center Solutions",
        content: "Nugala’s high-density data centers provide colocation hosting, dedicated servers, and cloud infrastructure to support mission-critical applications."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "We offer cutting-edge data center solutions to meet enterprise IT needs.",
        services: [
            { title: "Dedicated Hosting & Virtual Servers", description: "High-performance infrastructure for hosting mission-critical applications." },
            { title: "Cloud & Hybrid Solutions", description: "Seamless cloud integration with AWS, Azure, and Google Cloud." },
            { title: "High-Speed Connectivity", description: "Low-latency, high-bandwidth interconnects for optimized performance." },
            { title: "Disaster Recovery & Backup", description: "Automated recovery solutions to ensure business continuity." },
            { title: "Enterprise-Level Security", description: "Biometric access, DDoS protection, and real-time threat monitoring." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "State-of-the-Art Infrastructure", description: "Our Tier III and Tier IV data centers feature redundant power, cooling, and security." },
            { title: "Advanced Security Protocols", description: "We implement biometric authentication, surveillance, and real-time monitoring to safeguard your data." },
            { title: "Seamless Cloud Integration", description: "Connect effortlessly with AWS, Azure, and Google Cloud for hybrid cloud deployments." },
            { title: "Disaster Recovery & Uptime Assurance", description: "Automated backup, failover systems, and 99.999% uptime SLAs to ensure business continuity." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala for Data Center Solutions?",
        reasons: [
            { title: "Industry-Leading Security", description: "Our data centers meet ISO 27001, SOC 2, and HIPAA compliance standards." },
            { title: "Scalability & Flexibility", description: "From startups to enterprises, our infrastructure grows with your business." },
            { title: "Global Network & Low Latency", description: "Carrier-neutral data centers with ultra-fast connectivity worldwide." },
            { title: "Cost-Effective Hosting", description: "Optimized infrastructure to reduce IT costs while maintaining top-tier performance." }
        ]
    },
    contactSection: {
        sectionTitle: "Partner with Nugala for Enterprise Data Center Solutions",
        content: "Optimize your IT infrastructure with Nugala’s advanced data center services. Contact us today to learn more."
    }
};

const EnterpriseDataCenterServicePage = () => {
    return <ServicePage data={data} img={img} />;
};

export default EnterpriseDataCenterServicePage;
