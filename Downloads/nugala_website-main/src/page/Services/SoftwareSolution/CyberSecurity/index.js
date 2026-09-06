import React from "react";
import img from '../../../../assets/Services/Cyber Security.jpg';
import ServicePage from "../../../../components/Service";
const data = {
    heroSection: {
        heading: "Cyber Security – Protect Your Business from Digital Threats",
        sectionTitle: "Stay Secure in the Digital Age",
        content: "Safeguard your critical data and infrastructure with robust cybersecurity solutions designed to protect against evolving cyber threats."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala’s cybersecurity services provide comprehensive protection, ensuring the security of your digital assets, operations, and sensitive information.",
        services: [
            { title: "Threat Detection & Prevention", description: "Identify and mitigate potential threats before they can impact your business." },
            { title: "Network Security", description: "Strengthen your network defenses with advanced firewalls, intrusion detection systems, and continuous monitoring." },
            { title: "Data Protection", description: "Implement encryption, secure storage, and access controls to protect sensitive data from unauthorized access." },
            { title: "Incident Response", description: "Minimize downtime and damage with rapid response and recovery services in the event of a security breach." },
            { title: "Compliance Management", description: "Ensure your organization meets industry-specific security standards and regulations." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Security Assessment", description: "We begin with a thorough evaluation of your current security posture and potential vulnerabilities." },
            { title: "Strategy Development", description: "Our Nugala experts design a comprehensive security plan tailored to your risk profile and business goals." },
            { title: "Implementation", description: "We deploy cutting-edge security tools and practices to protect your infrastructure and data." },
            { title: "Continuous Monitoring", description: "Team Nugala provides 24/7 monitoring to detect and respond to threats in real time." },
            { title: "Ongoing Support & Training", description: "We offer regular updates, maintenance, and employee training to ensure long-term security resilience." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala?",
        reasons: [
            { title: "Expert Security Team", description: "Our cybersecurity specialists have extensive experience in threat management and risk mitigation." },
            { title: "Proactive Protection", description: "We stay ahead of emerging threats by continuously updating our security strategies." },
            { title: "Customized Solutions", description: "We tailor security services to fit your specific business needs and regulatory requirements." },
            { title: "Rapid Response", description: "Our incident response teams act quickly to contain and resolve security breaches." },
            { title: "End-to-End Security", description: "From risk assessment to continuous monitoring, we provide comprehensive protection for your business." }
        ]
    },
    contactSection: {
        sectionTitle: "Stay Protected and Secure",
        content: "Contact Us to learn how we can safeguard your business against digital threats."
    }
};


const CyberSecurityServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default CyberSecurityServicePage;