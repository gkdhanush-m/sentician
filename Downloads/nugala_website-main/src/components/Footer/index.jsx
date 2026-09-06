import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import NugalaLogo from "../../assets/Nugala/nugala-web-banner-1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerRef = useRef();
  const [animate, setAnimate] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const footerElement = footerRef.current;

    if (!footerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animate) {
            setAnimate(true); // Trigger animation only once
          }
        });
      },
      { threshold: 0.2 } // Trigger when at least 20% of the footer is visible
    );

    observer.observe(footerElement);

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [animate]);

  const services = [
    [
      { name: "Data Analytics", path: "/service/data-analytics" },
      { name: "Cloud Computing", path: "/service/cloud-computing" },
      { name: "Software Development", path: "/service/software-development" },
      { name: "Cyber Security", path: "/service/cyber-security" },
      { name: "Tech Innovation", path: "/service/tech-innovation" },
    ],
    [
      { name: "Generative AI", path: "/nugala-ai-hub/generative-ai" },
      { name: "LLM Fine Tuning", path: "/nugala-ai-hub/llm-fine-tuning" },
      { name: "Computer Vision", path: "/nugala-ai-hub/computer-vision" },
      {
        name: "Natural Language Processing",
        path: "/nugala-ai-hub/natural-language-processing",
      },
      { name: "Conversational AI", path: "/nugala-ai-hub/conversational-ai" },
      { name: "Quantum Computing", path: "/nugala-ai-hub/quantum-computing" },
      {
        name: "Machine Learning Operations",
        path: "/nugala-ai-hub/machine-learning-operations",
      },
    ],
    [
      { name: "Permanent Hiring", path: "/service/permanent-hiring" },
      { name: "Contractual Hiring", path: "/service/contractual-hiring" },
      { name: "DEI Hiring", path: "/service/dei-hiring" },
      { name: "Executive Hiring", path: "/service/executive-hiring" },
      { name: "Hire, Train, and Deploy", path: "/service/hire-train-deploy" },
      { name: "Interview as a Service", path: "/service/interview-as-a-service" },
    ],
    [
      {
        name: "Business Process Outsourcing",
        path: "/service/business-process-outsourcing",
      },
      {
        name: "Recruitment process outsourcing",
        path: "/service/recruitment-process-outsourcing",
      },
      { name: "HR Operations", path: "/service/hr-operations" },
      { name: "Payroll Support", path: "/service/payroll-support" },
      { name: "Workforce Management", path: "/service/workforce-management" },
    ],

    [
      { name: "Who We Are", path: "/about-us/who-we-are" },
      { name: "Our Culture", path: "/about-us/our-culture" },
      { name: "The Nugala Advantage", path: "/about-us/the-nugala-advantage" },
    ],
  ];

  const ServiceList = ({ title, services }) => {
    return (
      <div className="footer-column services">
        <h4>{title}</h4>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <Link to={service.path}>
                {service.name} <span className="arrow-icon">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className={`footer`} ref={footerRef}>
      {/* Top Section */}
      <div className="footer-top">
        <img src={NugalaLogo} alt="Nugala Logo" className="footer-logo" />
        <p className="footer-description roboto-regular">
          Nugala Software Solutions provides a full spectrum of services
          designed to elevate your business, from expert staffing solutions to
          seamless software development and quality assurance. We are committed
          to delivering end-to-end support that drives success and helps you
          stay ahead in a competitive market.
        </p>
        <div className="footer-follow">
          <div className="flex flex-col items-center space-y-2">
            <h4>Follow Us</h4>
            <div className="social-icons ">
              <a
                href="https://www.linkedin.com/company/nugala-software-solutions-private-limited/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "white", fontSize: "0.9rem" }}
                />
              </a>
              <a
                href="mailto:afifah.arif@thenugala.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "white", fontSize: "0.9rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-column other-links roboto-regular">
          <h4>Pages</h4>
          <ul>
            <li>
              <Link to="/">
                Home <span className="arrow-icon">↗</span>
              </Link>
            </li>
            <li>
              <Link to="/insights">
                Insights <span className="arrow-icon">↗</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                Contact us <span className="arrow-icon">↗</span>
              </Link>
            </li>
            <li>
              <a
                href="https://www.thewhyservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#239FE3] font-semibold"
              >
                WHY — Your Trusted Companion
              </a>
            </li>
          </ul>
          <ServiceList title="About us" services={services[4]} />
        </div>
        <ServiceList title="Technology and Operations" services={services[0]} />
        <ServiceList title="Nugala AI Hub" services={services[1]} />
        <ServiceList title="Staffing Services" services={services[2]} />
        <ServiceList title="Outsourcing Services" services={services[3]} />
      </div>

      <div
        className="w-full flex flex-col justify-between md:flex-row relative mb-3 
    before:absolute before:inset-0 before:-z-10 before:rounded-md 
    before:border-[3px] before:border-transparent before:bg-gradient-to-r before:from-[#239FE3] before:via-[#50bcf7] before:to-[#6827DA] 
    before:bg-clip-border"
      >
        <div className="footer-column contact-usa">
          <h4>USA Office Address</h4>
          <p className="address-text">
            <span className="gradient-icon-wrapper">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="gradient-icon"
                style={{
                  background:
                    "linear-gradient(to right, #042964, #41035b, #680235)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1rem",
                }}
              />
            </span>
            <span className="address-content">
              257, FLANDERS ST SOUTHINGTON CONNECTICUT 06489, UNITED STATES.
            </span>
          </p>
          <p className="address-text">
            <span className="gradient-icon-wrapper">
              <FontAwesomeIcon
                icon={faPhone}
                className="gradient-icon"
                style={{
                  background:
                    "linear-gradient(to right, #042964, #41035b, #680235)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1rem",
                }}
              />
            </span>
            <span className="address-content">
              <a href="tel:+19494689091">+1 (949) 468-9091</a>
            </span>
          </p>
        </div>
        <div className="footer-column contact-usa">
          <h4>INDIA Office Address</h4>
          <p className="address-text">
            <span className="gradient-icon-wrapper">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="gradient-icon"
                style={{
                  background:
                    "linear-gradient(to right, #042964, #41035b, #680235)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1rem",
                }}
              />
            </span>
            <span className="address-content">
              14/1, BALAJIKRUPA 2ND MAIN ROAD, SESHADRIPURAM, BANGALORE-560020,
              INDIA.
            </span>
          </p>
          <p className="address-text">
            <span className="gradient-icon-wrapper">
              <FontAwesomeIcon
                icon={faPhone}
                className="gradient-icon"
                style={{
                  background:
                    "linear-gradient(to right, #042964, #41035b, #680235)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1rem",
                }}
              />
            </span>
            <span className="address-content">
              <a href="tel:+919886513663">+91 98865 13663</a>
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Bottom Section */}
        <div className="footer-bottom">
          <h6>© {year} thenugala.com All Rights Reserved.</h6>
        </div>
      </div>
    </footer>
  );
}
