import React from "react";
import img from '../../../../assets/Services/Cloud Computing.jpg';
import ServicePage from "../../../../components/Service";
const data = {
    heroSection: {
        heading: "Cloud Computing – Achieve Flexibility and Scalability",
        sectionTitle: "Elevate Your Business with Cloud Solutions",
        content: "Unlock agility, scalability, and cost-efficiency with secure cloud computing services designed to accelerate your business growth."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala’s cloud computing services help organizations streamline operations, enhance collaboration, and achieve digital transformation through cloud-based infrastructure and solutions.",
        services: [
            { title: "Cloud Migration", description: "Seamlessly move your applications, data, and workloads to the cloud with minimal disruption." },
            { title: "Infrastructure Management", description: "Optimize your cloud environment with proactive monitoring, maintenance, and performance enhancements." },
            { title: "Multi-Cloud Strategy", description: "Maximize flexibility by utilizing multiple cloud providers while maintaining security and efficiency." },
            { title: "Disaster Recovery & Backup", description: "Protect your critical data with automated backup solutions and robust disaster recovery plans." },
            { title: "Cloud Security", description: "Implement advanced security measures to safeguard your cloud infrastructure and data." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Assessment & Planning", description: "We assess your current infrastructure to design a cloud migration or optimization strategy tailored to your goals." },
            { title: "Cloud Implementation", description: "Our Nugala experts execute a seamless migration, ensuring minimal downtime and data integrity." },
            { title: "Optimization & Integration", description: "We integrate cloud services with your existing systems, enhancing functionality and efficiency." },
            { title: "Ongoing Management", description: "We provide continuous monitoring, updates, and support to maintain optimal cloud performance." },
            { title: "Security & Compliance", description: "We adhere to best practices for cloud security, compliance, and risk management." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala?",
        reasons: [
            { title: "Cloud Expertise", description: "Nugala’s certified cloud engineers have extensive experience across major platforms like AWS, Azure, and Google Cloud." },
            { title: "Customized Solutions", description: "We tailor our services to your business requirements, ensuring maximum value and efficiency." },
            { title: "Cost Optimization", description: "Our strategies focus on reducing cloud costs while improving resource utilization." },
            { title: "Security First", description: "We implement robust security protocols to protect your data and infrastructure." },
            { title: "Future-Ready Infrastructure", description: "Nugala’s scalable solutions are designed to adapt to your business's growth and evolving needs." }
        ]
    },
    contactSection: {
        sectionTitle: "Take Your Business to New Heights",
        content: "Contact Us to learn more about how we can support your digital transformation journey."
    }
};






const CloudComputingServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default CloudComputingServicePage;