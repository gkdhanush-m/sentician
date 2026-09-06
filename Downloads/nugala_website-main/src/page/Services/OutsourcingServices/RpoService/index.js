import React from "react";
import Img from '../../../../assets/Services/RpoServices.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "Recruitment Process Outsourcing",
        sectionTitle: "Empowering Your Workforce Strategy with Expert Talent Acquisition",
        content: "Optimize your hiring with our data-driven RPO solutions designed to deliver the right talent, at the right time, with reduced costs and improved efficiency."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala offers end-to-end Recruitment Process Outsourcing (RPO) services tailored to meet your business’s unique talent needs. Whether you're scaling rapidly or looking for specialized roles, our expert team ensures a seamless recruitment experience by leveraging AI-powered tools, in-depth market insights, and proven strategies.",
        services: [
            { title: "Full-cycle RPO", description: "We manage the entire recruitment lifecycle, from job requisition to onboarding." },
            { title: "Project-Based RPO", description: "Flexible solutions for urgent or high-volume hiring projects." },
            { title: "On-Demand RPO", description: "Access recruitment experts for short-term, critical hiring requirements." },
            { title: "Recruitment Technology Integration", description: "Automating and optimizing the hiring process with the latest applicant tracking systems (ATS) and AI-driven sourcing tools." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Discovery & Needs Assessment", description: "We collaborate with your HR and leadership teams to identify hiring goals and challenges." },
            { title: "Custom Strategy Development", description: "Tailored recruitment plans are built around your industry, company size, and role-specific needs." },
            { title: "Candidate Sourcing & Screening", description: "Nugala’s recruiters use advanced AI sourcing tools, job boards, social networks, and passive talent outreach to attract the best candidates." },
            { title: "Interview Coordination & Offer Management", description: "We manage candidate interviews, feedback loops, and negotiation processes to ensure smooth hiring." },
            { title: "Ongoing Support", description: "Post-placement services include onboarding support, retention strategies, and continuous performance analysis of our recruitment efforts." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala for RPO Services?",
        reasons: [
            { title: "Expert Recruitment Team", description: "Nugala’s recruiters bring years of experience in sourcing top talent across industries." },
            { title: "Tech-Driven Approach", description: "We leverage AI, automation, and advanced applicant tracking systems to streamline every step of the hiring process." },
            { title: "Customized Solutions", description: "Our flexible RPO models are designed to scale with your company’s needs, ensuring maximum value at every stage of growth." },
            { title: "Proven Results", description: "We've helped businesses like yours reduce time-to-hire, increase retention rates, and lower recruitment costs by up to 40%." },
            { title: "Long-Term Partnerships", description: "Our commitment to continuous improvement ensures we remain an integral part of your talent acquisition strategy." }
        ]
    },
    contactSection: {
        sectionTitle: "Start Building Your Dream Team with Nugala's RPO Services",
        content: "Start building your dream team with Nugala's RPO Services—where expert recruitment meets technology-driven results. Contact us today!"
    }
};



const RpoServicePage = () => {

    return (
        <ServicePage data={data} img={Img} />
    );
};

export default RpoServicePage;