import React from "react";
import img from '../../../../assets/Services/Permanent Hiring.jpg';
import ServicePage from "../../../../components/Service";
const data = {
    heroSection: {
        heading: "Permanent Hiring – Build Your Dream Team with Top Talent",
        sectionTitle: "",
        content: "Finding and retaining the right talent is essential for long-term success. At Nugala, we provide tailored permanent staffing solutions to connect your company with highly skilled professionals ready to drive innovation and growth."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "We specialize in permanent hiring solutions to help businesses streamline the recruitment process and secure the best-fit candidates for their unique needs.",
        services: [
            { title: "Role-Specific Expertise", description: "Whether you need senior developers, cloud architects, data analysts, or technical leads, we source candidates with industry expertise to meet job-specific requirements." },
            { title: "Customized Recruitment Plans", description: "We understand your business goals and tailor recruitment strategies to find candidates with the right skills, experience, and cultural fit." },
            { title: "Industry Focus", description: "We cater to tech-driven industries including AI, software development, cloud services, data analytics, and more, helping companies stay ahead in competitive markets." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Comprehensive Job Analysis", description: "We collaborate with you to define the job role, responsibilities, and essential skills to create a detailed hiring plan." },
            { title: "Talent Pool Access", description: "Our extensive network and advanced sourcing methods allow us to identify both active and passive candidates across multiple platforms." },
            { title: "Screening & Evaluation", description: "We conduct multi-step screening that includes technical assessments, interviews, and background checks to shortlist only the top candidates." },
            { title: "Candidate Engagement & Onboarding Support", description: "From the first interaction to the final offer, we ensure candidates are engaged and prepared for smooth onboarding." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala?",
        reasons: [
            { title: "Extensive Industry Network", description: "Our connections with leading talent across the tech and business sectors ensure access to the best professionals in the market." },
            { title: "Efficient Hiring Process", description: "We reduce time-to-hire without compromising on candidate quality through our data-driven sourcing and evaluation methods." },
            { title: "Dedicated Account Managers", description: "We assign experienced consultants who work closely with your team to understand your long-term talent needs and deliver ongoing support." },
            { title: "Proven Success", description: "Our staffing partnerships with clients like Capgemini, HCL, and Tiger Analytics demonstrate our commitment to excellence and long-term collaboration." }
        ]
    },
    contactSection: {
        sectionTitle: "Start Building Your Dream Team Today!",
        content: "Contact Us for customized permanent hiring solutions that drive business growth."
    }
};







const PermanentHiringServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default PermanentHiringServicePage;