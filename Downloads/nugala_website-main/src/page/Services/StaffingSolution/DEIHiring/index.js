import React from "react";
import Img from '../../../../assets/Services/dei_hiring.jpeg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "DEI Hiring",
        sectionTitle: "Champion Diversity & Inclusion with Our DEI Hiring Solutions",
        content: "Empower your organization with diverse talent that drives innovation, growth, and collaboration. Nugala specializes in sourcing candidates from underrepresented groups to help you build a more inclusive and successful workplace."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "We provide tailored Diversity, Equity, and Inclusion (DEI) hiring solutions designed to attract, recruit, and retain a diverse workforce. Our services focus on helping companies meet DEI goals while promoting a culture of belonging.",
        services: [
            { title: "Inclusive Talent Sourcing", description: "We expand your talent pool by identifying candidates from diverse backgrounds, including women, minorities, veterans, and people with disabilities." },
            { title: "Bias-Free Hiring Practices", description: "Nugala’s experts design recruiting processes that minimize unconscious bias, from job descriptions to candidate evaluations." },
            { title: "DEI Compliance & Reporting", description: "We ensure your organization meets DEI-related legal and industry compliance requirements." },
            { title: "Employer Branding for Inclusion", description: "We enhance your employer brand by showcasing your company’s commitment to diversity and inclusion, making you a preferred employer for diverse talent." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Collaborative Assessment", description: "We work closely with your HR and leadership teams to understand your specific DEI goals and challenges." },
            { title: "Custom Recruitment Strategies", description: "We implement customized strategies, such as targeted outreach, partnerships with diverse organizations, and the use of inclusive job boards." },
            { title: "Candidate Screening & Training", description: "Our advanced tools and expert recruiters ensure that all candidates are assessed based on merit, free from bias. We also provide training for hiring managers on DEI best practices." },
            { title: "Long-Term Support", description: "Nugala helps you retain diverse talent by offering post-hire support, such as onboarding strategies and ongoing employee engagement programs." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Us?",
        reasons: [
            { title: "Proven Expertise in DEI", description: "We have a track record of helping companies build inclusive workforces that enhance innovation and business performance." },
            { title: "Tech-Driven Solutions", description: "Our AI-powered recruitment tools streamline the hiring process and eliminate bias." },
            { title: "Extensive Candidate Network", description: "We tap into a vast network of qualified, diverse candidates through strategic partnerships with advocacy groups, universities, and talent organizations." },
            { title: "End-to-End Support", description: "From strategy design to candidate placement and post-hire engagement, we provide comprehensive support tailored to your organization’s goals." },
            { title: "Commitment to Your Success", description: "We go beyond recruitment to ensure you achieve measurable results, including improved retention rates and enhanced workplace culture." }
        ]
    },
    contactSection: {
        sectionTitle: "Optimize Your Company's Growth with Nugala’s DEI Hiring Solutions",
        content: "Ready to get started? Contact us today to discuss your DEI goals and find the right talent for your team."
    }
};


const DEIHiringServicePage = () => {

    return (
        <ServicePage data={data} img={Img} />
    );
};

export default DEIHiringServicePage;