import React, { useState, useEffect, useRef } from "react";

//Images
import NLogo from '../../../assets/N-logo.png'
import ServicesChatComponent from "./../servicesChatComponent";

import '../style.css'
import UserMessage from "./Chat/userMessage";
import BotMessage from "./Chat/botMessage";
import InputContainer from "./input";

const ChatBox = () => {
    const chatBodyRef = useRef(null);
    const [userMessage, setUserMessage] = useState("");
    const [optionsShow, setOptionsShow] = useState(true)
    const [botTyping, setbotTyping] = useState(false)
    const [inputTypeDisabled, setinputTypeDisabled] = useState(true)
    const [chatHistory, setChatHistory] = useState([
        { role: "bot", content: "Hello! How can we help you today? Please select an option: Services, Careers, Contact, Process, Clients, or Demo." }
    ]);
    const [context, setContext] = useState(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    });

    const followUps = {
        Services: {
            response: "We provide a range of IT services to help your business thrive! Here’s what we offer. Which service would you like to want about it?",
            options: ["Data Analytics", "Cloud Computing", "Software Development", "Artificial Intelligence", "Tech Innovation"]
        },
        Careers: {
            response: "Looking to join our team? Here’s how you can explore opportunities at Nugala:\n\n- View current job openings\n- Learn about our company culture\n- Apply for a position\n\nWhat would you like to do?",
            options: ["Job Openings", "Company Culture", "Apply Now"]
        },
        Contact: {
            response: "We’d love to hear from you! Here’s how you can reach us:\n\n- Fill out our contact form [Insert Link].\n- Email us at [your-email@example.com].\n- Call us at [your-phone-number].\n\nWhat do you need help with?",
            options: ["Request a Demo", "Talk to Support", "General Inquiry"]
        },
        Process: {
            response: "Our work process ensures smooth and efficient project delivery:\n1️⃣ Select a Project\n2️⃣ Analyze & Plan\n3️⃣ Execute with Precision\n4️⃣ Deliver Outstanding Results\n\nWould you like more details about any step?",
            options: ["Step 1: Project Selection", "Step 2: Project Analysis", "Step 3: Execution", "Step 4: Delivery"]
        },
        Clients: {
            response: "We’ve worked with amazing brands and delivered impactful results!\n\n- Explore our client success stories.\n- Read testimonials from happy clients.\n- Learn how we collaborate with businesses.\n\nWhat would you like to see?",
            options: ["Success Stories", "Client Testimonials", "Case Studies"]
        },
        Demo: {
            response: "Want to see our services in action?\n\n- Schedule a live demo with our team.\n- Request a personalized consultation.\n- Learn how our solutions can help your business.\n\nLet us know how we can assist!",
            options: ["Schedule a Demo", "Request Consultation", "Learn More"]
        }
    };

    const handleSend = async () => {
        if (!userMessage.trim()) return;

        const newUserMessage = { role: "user", content: userMessage };
        setChatHistory((prev) => [...prev, newUserMessage]);

        let botMessage = "";
        let options = [];

        // Handle user's message based on context or initial input
        if (!context) {
            const selectedOption = Object.keys(followUps).find((key) =>
                userMessage.toLowerCase().includes(key.toLowerCase())
            );
            if (selectedOption) {
                botMessage = followUps[selectedOption].response;
                options = followUps[selectedOption].options;
                setContext(selectedOption);
            } else {
                botMessage = "I'm sorry, I didn't understand that. Please select one of the following: Services, Careers, Contact, Process, Clients, or Demo.";
            }
        } else {
            const followUpOptions = followUps[context]?.options || [];
            if (followUpOptions.some((option) => userMessage.toLowerCase().includes(option.toLowerCase()))) {
                botMessage = `You selected "${userMessage}". Please provide more details, or let me know if you'd like to explore other options.`;
            } else {
                botMessage = "Please choose a valid option from the provided list.";
            }
        }

        const newBotMessage = { role: "bot", content: botMessage };
        setChatHistory((prev) => [...prev, newBotMessage]);
        setUserMessage("");
    };

    const handleButtonClick = (buttonText) => {
        setOptionsShow(false)
        setbotTyping(true)

        setTimeout(() => {
            setbotTyping(false)
            setChatHistory((prev) => [...prev, { role: "user", content: buttonText }]);
            const selectedOption = followUps[buttonText];
            if (selectedOption) {
                setChatHistory((prev) => [
                    ...prev,
                    { role: "bot", content: selectedOption.response, buttonText, options: selectedOption.options }
                ]);
                setContext(buttonText);
            } else {
                setChatHistory((prev) => [
                    ...prev,
                    { role: "bot", content: "Please select a valid option." }
                ]);
            }

        }, 1000)

    };

    const handleServicesButtonClick = (buttonText) => {
        setOptionsShow(false);
        setbotTyping(true);

        const contentMap = {
            "Data Analytics": "Our data analytics solutions transform raw data into actionable insights to help you make informed decisions. Would you like to learn about our tools or case studies?",
            "Cloud Computing": "We provide scalable cloud solutions to optimize operations and reduce costs. Are you interested in migration services, cloud setup, or consulting?",
            "Software Development": "We build custom software tailored to your needs. Do you want to know about our development process or past projects?",
            "Artificial Intelligence": "We use AI to automate processes and enhance efficiency. Do you want to know about our AI solutions or integrations?",
            "Tech Innovation": "Discover how we leverage cutting-edge technology to drive innovation. Would you like to learn about our R&D initiatives or partnerships?"
        };

        setTimeout(() => {
            setbotTyping(false);
            setChatHistory((prev) => [
                ...prev,
                { role: "user", content: buttonText },
                { role: "bot", content: contentMap[buttonText], options: "yesOrNo" }
            ]);
        }, 1000);
    };


    return (
        <div className="chatbot-box flex flex-col h-full">
            <div className="chat-header">
                <div className="heading-container rounded-t-md w-[100%] flex justify-center items-center p-3 bg-gray-300">
                    <img src={NLogo} alt="N Logo" />
                    <h1 className="text-custom-blue font-bold md:text-2xl">
                        Nugala Chat Team
                    </h1>
                </div>
            </div>
            <div
                ref={chatBodyRef}
                className="chat-body p-4 flex-grow overflow-y-auto">
                {botTyping ? <p>Bot is Typing...</p> : chatHistory.map((chat, index) => {
                    switch (chat.buttonText) {
                        case "Services":
                            return <ServicesChatComponent
                                key={index}
                                chat={chat}
                                handleButtonClick={handleServicesButtonClick}
                            />
                        default:
                            return (
                                <div key={index} className=" mb-3">
                                    {chat.role === "user" ? (
                                        <UserMessage content={chat.content} />
                                    ) : (
                                        <BotMessage content={chat.content} />
                                    )}
                                </div>
                            )
                    }
                }
                )}
            </div>
            {optionsShow && <div className="flex flex-wrap p-2 gap-6">
                {["Services", "Careers", "Contact", "Process", "Clients", "Demo"].map((option) => (
                    <button
                        key={option}
                        onClick={() => handleButtonClick(option)}
                        className="text-custom-blue border border-custom-blue py-2 px-4 rounded-lg hover:scale-105 transition"
                    >
                        {option}
                    </button>
                ))}
            </div>}
            <InputContainer userMessage={userMessage} setUserMessage={setUserMessage} inputTypeDisabled={inputTypeDisabled} handleSend={handleSend} />
        </div>
    );
};



export default ChatBox;