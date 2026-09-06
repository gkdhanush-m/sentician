import React from "react";
import img from '../../../assets/Services/Nugala-Ai-Hub/Quantum-Computing.webp';
import ServicePage from "../../../components/Service";

const data = {
    heroSection: {
        heading: "Quantum Computing Services",
        sectionTitle: "",
        content: "Transform complex challenges into opportunities with quantum-driven innovation. Harness the power of Quantum Computing to accelerate problem-solving, optimize operations, and stay ahead of the competition with Nugala’s cutting-edge solutions."
    },
    whatWeDo: {
        sectionTitle: "What We Do - Revolutionizing Business with Quantum Power",
        content: "Nugala helps companies embrace Quantum Computing to tackle high-complexity problems that were once unsolvable by classical computing.",
        services: [
            { title: "Optimization Challenges", description: "Improve logistics, supply chains, and resource allocation with quantum algorithms." },
            { title: "Data Security & Encryption", description: "Utilize quantum-safe cryptography to secure sensitive data in the post-quantum era." },
            { title: "AI Model Enhancement", description: "Enhance the speed and accuracy of machine learning models through quantum computing's parallel processing power." },
            { title: "Drug Discovery & Material Science", description: "Accelerate innovation by simulating molecular interactions with unparalleled precision." },
            { title: "Financial Risk Management", description: "Optimize risk models and portfolio strategies to make data-driven decisions faster than ever before." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It - The Quantum Integration Framework",
        steps: [
            { title: "Consultation & Feasibility Study", description: "We assess your business needs and analyze the potential quantum computing opportunities." },
            { title: "Customized Algorithm Development", description: "Nugala’s experts develop quantum algorithms that address your specific challenges." },
            { title: "Hybrid Infrastructure Implementation", description: "We integrate quantum systems with your existing IT infrastructure, enabling both quantum and classical operations." },
            { title: "Collaborative Partnerships", description: "We collaborate with leading quantum hardware providers and research institutions to ensure state-of-the-art services." },
            { title: "Training & Support", description: "We provide ongoing support and training to your teams, empowering them to maximize quantum technology." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala for Quantum Computing?",
        reasons: [
            { title: "Cutting-Edge Expertise", description: "Team Nugala includes quantum scientists, AI specialists, and engineers experienced in solving complex problems." },
            { title: "Industry-Specific Solutions", description: "We design quantum solutions tailored to your industry’s needs, ensuring measurable ROI." },
            { title: "Collaborative Approach", description: "We work hand-in-hand with your teams to align solutions with business goals." },
            { title: "End-to-End Support", description: "From strategy development to full-scale implementation and optimization, we are with you at every step." },
            { title: "Quantum Partnerships", description: "We leverage partnerships with global quantum leaders, giving you access to the latest advancements and research." }
        ]
    },
    contactSection: {
        sectionTitle: "Start Your Quantum Journey Today!",
        content: "Start your quantum journey today with Nugala’s AI Hub and drive unprecedented business value with next-generation technology. Contact us today to discuss your requirements!"
    }
};


const QuantumComputingPage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default QuantumComputingPage;