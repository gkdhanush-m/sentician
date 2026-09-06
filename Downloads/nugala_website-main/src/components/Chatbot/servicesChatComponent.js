import React from 'react'
import BotMessage from './ChatBox/Chat/botMessage';

function ServicesChatComponent({ chat, handleButtonClick }) {
    const options = chat.options;
    return (
        <div className='flex flex-col'>
            <BotMessage content={chat.content} />
            <div className='flex flex-wrap p-2 gap-6'>
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleButtonClick(option)}
                        className="text-custom-blue border border-custom-blue py-2 px-4 rounded-lg hover:scale-105 transition"
                    >
                        {option}
                    </button>
                ))}
            </div>

        </div>

    )
}

export default ServicesChatComponent