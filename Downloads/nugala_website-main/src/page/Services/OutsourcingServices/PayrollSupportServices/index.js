import React from "react";
import img from '../../../../assets/Services/Payroll Support.jpg';
import ServicePage from "../../../../components/Service";

const data = {
    heroSection: {
        heading: "Payroll Support Services",
        sectionTitle: "Simplified Payroll Management for a Stress-Free Workforce Experience!",
        content: "Focus on your business while we streamline your payroll processes with accuracy, compliance, and efficiency."
    },
    whatWeDo: {
        sectionTitle: "What We Do",
        content: "Nugala offers end-to-end Payroll Support Services tailored to meet your organizational needs. Whether you're a startup or an enterprise, managing payroll can be complex and time-consuming, especially when scaling globally. Our services help eliminate manual payroll tasks, ensure compliance with tax regulations, and provide on-time salary distribution.",
        services: [
            { title: "Payroll Processing & Administration", description: "We manage employee wages, deductions, benefits, and tax filings to guarantee on-time and accurate payouts." },
            { title: "Compliance Management", description: "We ensure your payroll operations adhere to the latest labor laws, tax regulations, and statutory compliance in various regions." },
            { title: "Customized Payroll Reporting", description: "Get access to real-time payroll data, including workforce insights, tax summaries, and compliance reports." },
            { title: "Employee Self-Service Portal", description: "We provide your employees with access to a secure platform where they can track payslips, tax forms, and benefits." }
        ]
    },
    howWeDoIt: {
        sectionTitle: "How We Do It",
        steps: [
            { title: "Requirement Analysis", description: "We assess your current payroll structure, regulatory needs, and employee expectations to design a customized solution." },
            { title: "Integration with HR & Accounting", description: "We seamlessly integrate payroll with your existing HR management and accounting systems for better workflow efficiency." },
            { title: "Automation & Accuracy", description: "Our automated tools reduce human errors, allowing timely payroll processing with tax calculations and compliance checks." },
            { title: "Ongoing Support", description: "Our payroll experts are available to troubleshoot issues, provide updates on regulatory changes, and support your organization through every stage of growth." }
        ]
    },
    whyChooseUs: {
        sectionTitle: "Why Choose Nugala for Payroll Support Services?",
        reasons: [
            { title: "Expert Compliance Management", description: "We stay ahead of changing tax laws and labor regulations, minimizing compliance risks." },
            { title: "Cost-Efficiency", description: "Reduce operational costs by outsourcing payroll, freeing your in-house team to focus on strategic business priorities." },
            { title: "Data Security", description: "We prioritize the confidentiality and security of employee payroll data with top-tier encryption and access control measures." },
            { title: "Scalable Solutions", description: "Whether you have 10 or 10,000 employees, our payroll services are scalable to accommodate your organization’s growth." },
            { title: "Dedicated Support", description: "Our experienced payroll specialists are on standby to provide assistance, advice, and ongoing training for your HR team." }
        ]
    },
    contactSection: {
        sectionTitle: "Get in Touch with Nugala Today",
        content: "Get in touch with Nugala today to learn how our Payroll Support Services can help streamline your business operations and elevate your workforce experience."
    }
};


const PayrollSupportServicesPage = () => {

    return (
        <ServicePage data={data} img={img} />
    );
};

export default PayrollSupportServicesPage;