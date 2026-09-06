import React from "react";
import img from '../../../../assets/Services/Colocation.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "Enterprise-Grade Colocation Solutions for Maximum Security and Performance",
        sectionTitle: "Secure, Scalable, and High-Performance Colocation Services",
        content: "Nugala’s colocation data center solutions offer top-tier security, redundancy, and ultra-low latency connectivity. We help businesses optimize IT infrastructure while reducing operational costs."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "We provide high-availability colocation services to support business-critical IT operations.",
        services: [
            { title: "High-Availability Data Centers", description: "99.999% uptime with redundant power and cooling systems to ensure continuous operations." },
            { title: "Customizable Infrastructure", description: "Flexible rack space, private suites, and scalable IT infrastructure to match your growth." },
            { title: "Multi-Cloud Connectivity", description: "Seamless interconnectivity with AWS, Azure, Google Cloud, and hybrid cloud environments." },
            { title: "Disaster Recovery Solutions", description: "Automated failover, backup, and recovery strategies to protect against downtime and data loss." },
            { title: "Carrier-Neutral Network", description: "Access to multiple high-speed fiber networks for improved connectivity and performance." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Tier III & IV Certified Facilities", description: "Our colocation centers adhere to the highest industry standards for reliability and security." },
            { title: "Advanced Security & Monitoring", description: "Multi-layered security, biometric access control, and 24/7 real-time monitoring." },
            { title: "Scalable Solutions", description: "We offer cost-effective, flexible solutions that adapt to your business requirements." },
            { title: "Compliance & Regulatory Adherence", description: "ISO 27001, HIPAA, SOC 2, and other global compliance certifications." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala for Colocation Services?",
        reasons: [
            { title: "Carrier-Neutral & High-Speed Network", description: "Ensure ultra-low latency and seamless cloud connectivity with diverse carrier options." },
            { title: "Enterprise-Level Security", description: "Cutting-edge security protocols with biometric access, firewalls, and DDoS protection." },
            { title: "Cost-Effective & Scalable Solutions", description: "Reduce capital expenditures while leveraging secure, redundant infrastructure." },
            { title: "24/7 Monitoring & Support", description: "Real-time monitoring and expert support to keep your operations running smoothly." },
            { title: "Global Reach with Local Presence", description: "Our colocation data centers provide worldwide scalability with localized support." }
        ]
    },
    contactSection: {
        sectionTitle: "Partner with Nugala for Reliable Colocation Services",
        content: "Ensure maximum uptime and security with Nugala’s state-of-the-art colocation solutions. Contact us today to discuss your business needs and get a customized colocation plan."
    }
};

const ColocationServicePage = () => {
    return <ServicePage data={data} img={img} />;
};

export default ColocationServicePage;
