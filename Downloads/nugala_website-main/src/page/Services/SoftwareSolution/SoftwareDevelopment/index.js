import React from "react";
import img from '../../../../assets/Services/Cloud Computing.jpg';
import ServicePage from "../../../../components/Service";
const data = {
    heroSection: {
        heading: "Software Development – Build Custom Solutions for Your Business",
        sectionTitle: "Develop with Confidence",
        content: "Create innovative and high-performance software solutions tailored to meet your unique business needs, empowering you to stay ahead of the competition."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala’s software development services cover the entire lifecycle from design to deployment, ensuring custom-built solutions that enhance productivity, scalability, and user experience.",
        services: [
            { title: "Custom Application Development", description: "We build software solutions tailored to your business workflows and goals." },
            { title: "Web and Mobile Development", description: "Deliver seamless experiences across web and mobile platforms to reach customers anytime, anywhere." },
            { title: "Enterprise Software Solutions", description: "Optimize operations with integrated enterprise software tailored to meet organizational needs." },
            { title: "Software Integration", description: "Ensure smooth data exchange and system compatibility with robust integration solutions." },
            { title: "Maintenance & Support", description: "Keep your software performing at its best with regular updates, performance monitoring, and technical support." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Requirement Analysis", description: "We begin by understanding your business objectives and gathering detailed requirements." },
            { title: "Solution Design", description: "Team Nugala designs a scalable and user-friendly architecture tailored to your needs." },
            { title: "Agile Development", description: "We use iterative development processes to deliver high-quality software quickly and efficiently." },
            { title: "Testing & Quality Assurance", description: "Our rigorous testing process ensures your software is secure, reliable, and bug-free." },
            { title: "Deployment & Support", description: "We handle software deployment and provide ongoing support to maintain optimal performance." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala?",
        reasons: [
            { title: "Experienced Developers", description: "Our team comprises highly skilled software engineers and architects with expertise across various technologies." },
            { title: "Customized Solutions", description: "Nugala tailors each solution to fit your business processes and objectives." },
            { title: "Agile Methodology", description: "Our iterative approach ensures flexibility, faster delivery, and continuous improvements." },
            { title: "Focus on User Experience", description: "We prioritize usability and performance, delivering software that drives engagement and productivity." },
            { title: "Comprehensive Support", description: "From initial development to long-term maintenance, we provide full-cycle support to ensure lasting success." }
        ]
    },
    contactSection: {
        sectionTitle: "Transform Your Ideas into Reality",
        content: "Contact Us to discuss how we can build the perfect solution for your business."
    },
    whyReference: {
        title: "Engineering Solutions for Human Assistance",
        content: "Discover how custom digital platforms power real-world support services, care companion dispatch, and journey assistance through WHY.",
        cta: "Explore WHY"
    }
};







const SoftwareDevelopmentServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default SoftwareDevelopmentServicePage;