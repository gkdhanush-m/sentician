import React, { useState } from "react";
import { Link } from "react-router-dom";
import NugalaLogo from "./../../assets/Nugala/nugala-web-banner-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./SmallerNavbar.css";

import newIcon from "../../assets/Home/icons8-new-48.png";

function SmallerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const [socialIconsVisible, setSocialIconsVisible] = useState(false);
  const [dropdown, setDropdown] = useState({
    services: false,
    aiHub: false,
    aboutUs: false,
  });

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => setLogoVisible(true), 500); // Logo appears after 1 second
      setTimeout(() => setMenuItemsVisible(true), 1000); // Menu items appear after 2 seconds
      setTimeout(() => setSocialIconsVisible(true), 1500); // Social icons appear after 3 seconds
    } else {
      setSocialIconsVisible(false);
      setMenuItemsVisible(false);
      setLogoVisible(false);
      setTimeout(() => setMenuOpen(false), 500); // Close menu after animations
    }
  };

  const toggleDropdown = (key) => {
    setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="flex justify-center items-center  w-[100%] px-5 py-3 bg-[#F4F4F4]">
        <div className="flex justify-between items-center w-[90%]">
          <div className="flex justify-center items-center">
            <img src={NugalaLogo} alt="Nugala logo" />
          </div>
          <div className="">
            <button
              type="button"
              aria-label="menu toggle"
              className="menu-button"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBarsStaggered} className="menu-icon" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={`menu-overlay ${menuOpen ? "menu-open" : ""}`}>
          <div className={`menu-header ${logoVisible ? "logo-visible" : ""}`}>
            <img src={NugalaLogo} alt="Nugala Logo" className="menu-logo" />
            <button className="close-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div
            className={`menu-items ${menuItemsVisible ? "menu-visible" : ""}`}
          >
            <ul>
              <Link to="/" onClick={toggleMenu}>
                <li>Home</li>
              </Link>

              {/* Services Dropdown */}
              <li className="relative overflow-y-auto">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="dropdown-toggle"
                >
                  Services ▾
                </button>
                {dropdown.services && (
                  <div className="flex flex-col overflow-y-auto">
                    <h4 className="underline mt-3 ml-2">
                      Technology and Operations
                    </h4>
                    <ul>
                      <li>
                        <Link to="/service/data-analytics">
                          - Data Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/cloud-computing">
                          - Cloud Computing
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/software-development">
                          - Software Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/cyber-security">
                          - Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/tech-innovation">
                          - Tech Innovation
                        </Link>
                      </li>
                    </ul>

                    <div className="flex">
                      <h4 className="ml-2 underline">Nugala AI Hub </h4>
                      <img
                        className="ml-2  w-7 h-7"
                        src={newIcon}
                        alt="Nugala AI Hub"
                      />
                    </div>
                    <ul>
                      <li>
                        <Link to="/nugala-ai-hub/generative-ai">
                          - Generative AI
                        </Link>
                      </li>
                      <li>
                        <Link to="/nugala-ai-hub/llm-fine-tuning">
                          - LLM Fine Tuning
                        </Link>
                      </li>
                      <li>
                        <Link to="/nugala-ai-hub/computer-vision">
                          - Computer Vision
                        </Link>
                      </li>
                      <li>
                        <Link to="/nugala-ai-hub/natural-language-processing">
                          - Natural Language Processing
                        </Link>
                      </li>
                      <li>
                        <Link to="/nugala-ai-hub/conversational-ai">
                          - Conversational AI
                        </Link>
                      </li>
                      <li>
                        <Link to="/nugala-ai-hub/quantum-computing">
                          - Quantum Computing
                        </Link>
                      </li>
                      <li>
                        <Link to="/nugala-ai-hub/machine-learning-operations">
                          - Machine Learning Operations
                        </Link>
                      </li>
                    </ul>

                    <h4 className="ml-2 underline">Staffing Services</h4>
                    <ul>
                      <li>
                        <Link to="/service/permanent-hiring">
                          - Permanent Hiring
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/contractual-hiring">
                          - Contractual Hiring
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/dei-hiring">- DEI Hiring</Link>
                      </li>
                      <li>
                        <Link to="/service/executive-hiring">
                          - Executive Hiring
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/hire-train-deploy">
                          - Hire, Train, and Deploy
                        </Link>
                      </li> <li>
                        <Link to="/service/interview-as-a-service">
                          - Interview as a Service
                        </Link>
                      </li>
                    </ul>

                    <h4 className="ml-2 underline">Outsourcing Services</h4>
                    <ul>
                      <li>
                        <Link to="/service/business-process-outsourcing">
                          - Business Process Outsourcing
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/recruitment-process-outsourcing">
                          - Recruitment Process Outsourcing
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/hr-operations">- HR Operations</Link>
                      </li>
                      <li>
                        <Link to="/service/payroll-support">
                          - Payroll Support
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/workforce-management">
                          - Workforce Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <Link to="/insights" onClick={toggleMenu}>
                <li>Insights</li>
              </Link>

              <a 
                href="https://www.thewhyservices.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <li className="text-[#239FE3] font-semibold">Explore WHY</li>
              </a>

              {/* About Us Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("aboutUs")}
                  className="dropdown-toggle"
                >
                  About Us ▾
                </button>
                {dropdown.aboutUs && (
                  <div className="dropdown-menu">
                    <ul>
                      <Link to={"/about-us/who-we-are"}>
                        <li>- Who We Are</li>
                      </Link>
                      <Link to={"/about-us/our-culture"}>
                        <li>- Our Culture</li>
                      </Link>
                      <Link to={"/about-us/the-nugala-advantage"}>
                        <li>- The Nugala Advantage</li>
                      </Link>
                      <a 
                        href="https://www.thewhyservices.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <li className="text-[#239FE3] font-semibold">- WHY — Your Trusted Companion</li>
                      </a>
                    </ul>
                  </div>
                )}
              </li>
              <Link to="/contact-us">
                <li>Contact-us</li>
              </Link>
            </ul>
            <div className="menu-search" style={{ color: "black" }}>
              <input type="text" placeholder="Search Etc.." />
              <button className="search-button" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faSearch} />
                Search
              </button>
            </div>
          </div>
          <div
            className={`menu-socials ${
              socialIconsVisible ? "social-visible" : ""
            }`}
          >
            <a
              href="https://www.linkedin.com/company/nugala-software-solutions-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a
              href="mailto:afifah.arif@thenugala.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default SmallerNavbar;
