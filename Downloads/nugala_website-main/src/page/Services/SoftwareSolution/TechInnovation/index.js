import React from "react";
import img from '../../../../assets/Services/Tech Innovation.jpg';
import ServicePage from "../../../../components/Service";
const data = {
    heroSection: {
        heading: "Tech Innovation – Embrace the Future of Technology",
        sectionTitle: "Innovate and Lead",
        content: "Stay ahead of the curve by leveraging emerging technologies like AI, IoT, blockchain, and more to drive business transformation and growth."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala’s tech innovation services enable businesses to harness cutting-edge technologies to enhance efficiency, create new opportunities, and deliver exceptional customer experiences.",
        services: [
            { title: "Artificial Intelligence (AI)", description: "Automate processes, improve decision-making, and deliver personalized experiences through AI-powered solutions." },
            { title: "Internet of Things (IoT)", description: "Connect devices and systems to gather real-time data, optimize operations, and enhance visibility." },
            { title: "Blockchain Solutions", description: "Enhance security, transparency, and efficiency with blockchain-based applications." },
            { title: "Process Automation", description: "Streamline repetitive tasks and boost productivity with intelligent automation." },
            { title: "Technology Consulting", description: "Receive expert guidance on adopting and implementing innovative technologies aligned with your goals." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Innovation Strategy Development", description: "We collaborate with you to create a roadmap for technology-driven growth." },
            { title: "Technology Research & Selection", description: "Nugala’s experts evaluate and recommend the best technologies to achieve your objectives." },
            { title: "Prototype & Development", description: "We develop proof-of-concepts and prototypes to test and refine innovative solutions." },
            { title: "Implementation & Integration", description: "Team Nugala deploys new technologies and integrates them seamlessly with your existing systems." },
            { title: "Continuous Innovation", description: "We provide ongoing support, updates, and innovation workshops to help your business stay future-ready." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala?",
        reasons: [
            { title: "Innovation Experts", description: "Nugala’s team is at the forefront of emerging technology trends and innovations." },
            { title: "Tailored Approach", description: "We create customized strategies that align with your industry and business goals." },
            { title: "Scalable Solutions", description: "Our innovations are designed to grow with your business and adapt to evolving needs." },
            { title: "End-to-End Support", description: "From initial ideation to full implementation, we provide comprehensive innovation support." },
            { title: "Results-Oriented", description: "We focus on delivering measurable improvements in efficiency, customer experience, and market positioning." }
        ]
    },
    contactSection: {
        sectionTitle: "Lead the Way with Innovative Technology Solutions",
        content: "Contact Us to explore how we can drive growth through tech innovation."
    },
    whyReference: {
        title: "Building Technology for Real-World Impact",
        content: "Explore how technology can be applied to create more accessible and reliable real-world support services through WHY.",
        cta: "Discover WHY"
    }
};







const TechInnovationServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default TechInnovationServicePage;