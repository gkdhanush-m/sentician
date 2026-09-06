import React, { useState } from "react";
import "./style.css";

//Icons 
import { TbMessageChatbot } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import ChatBox from "./ChatBox";



const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''} `}>
            <div className="chatbot-button" onClick={toggleChat}>
                {isOpen ? < IoMdClose /> : <TbMessageChatbot />}
            </div>
            {isOpen && <ChatBox />}
        </div>
    );
};

export default ChatBot;
