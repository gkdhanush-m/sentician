import React from "react";
import img from '../../../../assets/Services/Business Process Outsourcing.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "BPO Services for Efficient Business Growth",
        sectionTitle: "Outsource with Confidence – Maximize Efficiency, Minimize Costs, and Focus on Growth",
        content: "Our BPO services empower businesses to streamline operations by delegating non-core functions to our experienced professionals. From customer service to back-office processes, we optimize performance while you focus on innovation and strategy."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala provides end-to-end BPO solutions designed to support companies in achieving operational excellence across various business functions.",
        services: [
            { title: "Customer Support Services", description: "Deliver exceptional customer experiences with our 24/7 call center and live chat solutions. We handle inquiries, complaints, and service requests with professionalism and empathy." },
            { title: "Technical Support", description: "Provide round-the-clock technical assistance with multi-tiered support services, ensuring fast issue resolution for your clients." },
            { title: "Finance & Accounting", description: "Streamline your financial operations with accurate bookkeeping, accounts payable/receivable, payroll processing, and tax compliance services." },
            { title: "Human Resource Management", description: "Focus on employee engagement and productivity while we manage recruitment, onboarding, payroll, and compliance." },
            { title: "Data Entry & Back-Office Operations", description: "Enhance data accuracy and productivity with our data entry, document management, and administrative support services." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Needs Assessment & Consultation", description: "We collaborate with your leadership to identify areas for operational outsourcing." },
            { title: "Customized Solutions", description: "Every business has unique needs. We provide solutions designed to integrate seamlessly with your existing workflows." },
            { title: "Technology-Driven Automation", description: "We leverage AI, automation, and data-driven insights to increase efficiency and minimize manual errors." },
            { title: "Scalable Operations", description: "Our services are built to scale with your growth, whether you're a startup or an enterprise-level organization." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala.com for BPO Services?",
        reasons: [
            { title: "Expertise Across Industries", description: "We understand the nuances of different sectors, allowing us to provide industry-specific solutions for optimal results." },
            { title: "Cost Efficiency with Quality Focus", description: "Reduce operational costs without compromising on quality. Our process enhancements drive productivity and reduce errors." },
            { title: "Dedicated Client Success Managers", description: "We assign a dedicated team to monitor your BPO operations, ensuring you receive regular performance reports and continuous improvements." },
            { title: "Security & Compliance", description: "Your data's security is our top priority. We adhere to global security standards, including GDPR, ISO 27001, and PCI DSS compliance." },
            { title: "Global Reach, Local Support", description: "We offer multilingual and culturally aligned support teams to cater to diverse client needs worldwide." }
        ]
    },
    contactSection: {
        sectionTitle: "Partner with Nugala for Scalable BPO Services",
        content: "Partner with Nugala for scalable, efficient, and reliable BPO services. Let us handle your operations so you can focus on strategic growth. Contact us today to learn more about how we can enhance your business operations through outsourcing."
    }
};


const BpoServicePage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default BpoServicePage;