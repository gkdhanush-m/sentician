import { React, useEffect, useState } from "react";
import img from "../../../../assets/Services/interview-as-a-services.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = {
  heroSection: {
    heading:
      "Interview as a Service (IaaS)",
    sectionTitle: "Smarter Hiring, Faster Decisions, Expert Evaluations.",
    content:
      "Hiring the right talent goes beyond resumes and coding tests. At Nugala, we offer Interview as a Service (IaaS)  a scalable solution where industry experts evaluate your candidates through structured interviews. Our service ensures unbiased assessments, accelerates the hiring process, and saves your team valuable time. With deep expertise in Data, AI, Cloud, and Emerging Technologies, our panel delivers reliable evaluations that help organizations hire with confidence.",
  },
  whyChooseUs: {
    sectionTitle: "Why Choose Nugala’s IaaS?",
    reasons: [
      {
        title: "Domain Expertise",
        description:
          "Our interview panel includes seasoned professionals in Data Science, AI, Cloud, and Software Engineering.",
      },
      {
        title: "Unbiased & Structured Assessments",
        description:
          "Every candidate is evaluated on predefined technical and behavioral benchmarks, ensuring consistency and fairness.",
      },
      {
        title: "Scalable Support",
        description:
          "From niche roles to bulk hiring, we adapt to your needs with flexible engagement models.",
      },
      {
        title: "Time & Cost Efficiency",
        description:
          "Free your internal teams from hours of technical interviewing and focus on onboarding the right talent faster.",
      },
      {
        title: "Actionable Insights",
        description:
          "Each interview comes with a detailed evaluation report highlighting strengths, gaps, and recommendations.",
      },
    ],
  },
  howItWorks: {
    sectionTitle: "How It Works",
    steps: [
      {
        title: "Requirement Sharing",
        description:
          "You provide the job description, role expectations, and required skillsets.",
      },
      {
        title: "Expert Allocation",
        description:
          "We assign an interviewer from our panel with matching domain expertise.",
      },
      {
        title: "Candidate Evaluation",
        description:
          "Structured technical and behavioral interviews conducted online.",
      },
      {
        title: "Assessment Report",
        description:
          "Comprehensive feedback shared with your hiring team for final decision-making.",
      },
    ],
  },
  whoBenefits: {
    sectionTitle: "Who Benefits from IaaS?",
    points: [
      "Startups scaling quickly but lacking in-house interview bandwidth.",
      "Enterprises with ongoing high-volume hiring needs.",
      "HR Teams needing third-party validation for technical roles.",
      "Tech Companies hiring for Data, AI, Cloud, and niche software roles.",
    ],
  },
  extraBenefits: {
    sectionTitle: "Key Advantages",
    benefits: [
      "Faster time-to-hire",
      "Reduced interview bottlenecks",
      "Reliable skill validation",
      "Improved candidate experience",
      "Cost savings compared to building internal expert panels",
    ],
  },
  contactSection: {
    sectionTitle: "Let’s Get Started!",
    content:
      "Whether you’re hiring for a few critical roles or scaling your tech team, Nugala’s Interview as a Service (IaaS) ensures your candidates are evaluated by the right experts.",
    email: "hrd@thenugala.com",
    website: "www.thenugala.com",
    buttonText: "Contact Us",
  },
};

const InterviewAsAServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyChooseUsLength = data.whyChooseUs.reasons.length;

  const HowItWorksSection = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    return (
      <div className="relative md:p-12 rounded-3xl m-10 shadow-sm overflow-hidden">
        <motion.h2
          className="text-2xl text-center font-bold text-custom-blue mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {data.howItWorks.sectionTitle}
        </motion.h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            data.howItWorks.steps.length === 4
              ? "lg:grid-cols-2"
              : "lg:grid-cols-3"
          } gap-10 md:p-5`}
        >
          {data.howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative bg-white text-gray-900 p-8 rounded-2xl shadow-lg transition-all duration-500 transform ${
                hoverIndex === index ? "scale-105" : "hover:scale-105"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <hr className="h-[2px] w-full border-t-2 border-custom-blue" />
              <p className="text-gray-700 mt-4 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const WhyChooseUs = () => (
    <div className="flex flex-col items-center bg-slate-50 pb-10 p-5">
      <h2 className="text-2xl text-center font-bold text-custom-blue mt-8 mb-4">
        {data.whyChooseUs.sectionTitle}
      </h2>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          whyChooseUsLength === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        } gap-10 px-6 mt-6 md:mt-12`}
      >
        {data.whyChooseUs.reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#d9f2ff] shadow rounded-2xl p-6 text-center border border-custom-blue hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const WhoBenefits = () => (
    <div className="bg-gray-50 py-10 text-center">
      <h2 className="text-2xl font-bold text-custom-blue mb-6">
        {data.whoBenefits.sectionTitle}
      </h2>
      <ul className="text-gray-700 text-lg space-y-3 max-w-3xl mx-auto text-left w-3/4">
        {data.whoBenefits.points.map((point, index) => (
          <li key={index}>✅ {point}</li>
        ))}
      </ul>
    </div>
  );

  const ExtraBenefits = () => (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold text-custom-blue mb-6">
        {data.extraBenefits.sectionTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {data.extraBenefits.benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white shadow-md border border-custom-blue rounded-2xl px-4 py-3 text-gray-800 font-semibold text-base sm:text-lg w-full sm:w-[48%] lg:w-[30%] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span className="text-green-500 text-xl sm:text-2xl">✔</span>
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="md:p-8 md:pt-32">
          {/* Hero Section */}
          <div className="p-10 flex flex-col md:flex-row items-center">
            <div className="md:w-[50%] md:p-8">
              <img
                src={img}
                alt="Interview as a Service"
                className="rounded-2xl"
              />
            </div>
            <div className="md:w-[50%] md:space-y-5 md:p-8 text-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-custom-blue mt-5">
                {data.heroSection.heading}
              </h1>
              <h2 className="m-4 md:text-xl lg:text-2xl font-semibold text-gray-800">
                {data.heroSection.sectionTitle}
              </h2>
              <p className="text-lg text-gray-700 text-left">
                {data.heroSection.content}
              </p>
            </div>
          </div>
          <WhyChooseUs />
          <HowItWorksSection />
          <WhoBenefits />
          <ExtraBenefits />
          {/* Contact Section */}
          <div className="flex flex-col items-center bg-gray-100 py-10 text-center p-4">
            <h2 className="text-2xl font-semibold text-custom-blue mb-4">
              {data.contactSection.sectionTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-6 w-3/4">
              {data.contactSection.content}
            </p>
            <div className="space-y-3 m-5">
              <p className="text-gray-600 mb-2">
                📩{" "}
                <a
                  href={`mailto:${data.contactSection.email}`}
                  className="text-custom-blue font-semibold hover:underline"
                >
                  {data.contactSection.email}
                </a>
              </p>
              <p className="text-gray-600 mb-6">
                🌐{" "}
                <a
                  href={`https://${data.contactSection.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-blue font-semibold hover:underline"
                >
                  {data.contactSection.website}
                </a>
              </p>
            </div>

            <Link to={"/contact-us"}>
              <button className="bg-custom-blue text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition">
                {data.contactSection.buttonText}
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InterviewAsAServicePage;
