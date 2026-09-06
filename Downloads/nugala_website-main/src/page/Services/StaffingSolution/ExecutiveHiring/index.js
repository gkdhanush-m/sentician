import React from "react";
import img from '../../../../assets/Services/executive_hiring.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "Executive Hiring",
        sectionTitle: "Find the Right Leaders to Drive Your Business Success",
        content: "At Nugala, we specialize in identifying, recruiting, and placing high-performing executive leaders who align with your organization’s vision and goals. Our tailored executive search services ensure you have the right leadership talent to accelerate growth and innovation."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "We help companies build strong leadership by connecting them with experienced executives across various domains, including technology, finance, operations, and strategy. Our executive hiring services focus on securing candidates with exceptional decision-making capabilities, leadership experience, and industry expertise.",
        services: [
            { title: "Customized Leadership Search", description: "We tailor our approach to your company’s unique culture, values, and goals." },
            { title: "Wide Talent Network", description: "Tap into Nugala’s extensive network of senior leaders and executives in industries such as tech, healthcare, finance, and more." },
            { title: "Expert Screening", description: "We conduct in-depth assessments to ensure that candidates meet both technical qualifications and leadership benchmarks." },
            { title: "Reduced Time-to-Hire", description: "Accelerate your executive search process with our streamlined recruitment solutions." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Client Consultation", description: "We start by understanding your business, leadership needs, and the impact you expect from the new hire." },
            { title: "Market Research & Talent Mapping", description: "Nugala’s experts analyze your industry to identify ideal leadership profiles and map potential candidates." },
            { title: "Comprehensive Candidate Evaluation", description: "Through interviews, psychometric assessments, and background checks, we shortlist candidates who meet your high standards." },
            { title: "Seamless Onboarding Support", description: "We provide assistance even after the hire to ensure smooth integration into your leadership team." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Us?",
        reasons: [
            { title: "Industry Expertise", description: "Our staffing professionals understand the nuances of different industries, ensuring precise executive matches for your business." },
            { title: "Proven Track Record", description: "We have successfully placed leaders across organizations ranging from startups to multinational corporations." },
            { title: "End-to-End Support", description: "From candidate sourcing to post-hire support, we offer a comprehensive solution tailored to your leadership needs." },
            { title: "Innovative Talent Strategies", description: "We leverage AI-driven analytics and cutting-edge hiring strategies to deliver exceptional results." },
            { title: "Confidentiality & Integrity", description: "We handle all executive hiring assignments with the utmost discretion and professionalism." }
        ]
    },
    contactSection: {
        sectionTitle: "Get Started Today",
        content: "Ready to find the visionary leaders your business needs? Let Nugala guide you through a successful executive hiring process. Contact us to learn more about how we can support your organization’s leadership goals."
    }
};








const ExecutiveHiringServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default ExecutiveHiringServicePage;