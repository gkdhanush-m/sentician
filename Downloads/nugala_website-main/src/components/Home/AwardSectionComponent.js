import React from "react";

const AwardCard = ({ number, text }) => {
    return (
        <div className="award-card flex justify-around items-center py-6 w-full">
            <div className="flex items-center justify-around w-[30%]">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl stroke-text">{number}</h1>
                <hr className="w-8 lg:w-20 h-1 bg-custom-red-line transform rotate-[135deg] border-0 md:hidden" />
            </div>
            <div className="w-[70%]">
                <h1 className="text-white text-right md:text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                    {text}
                </h1>
            </div>
        </div>
    );
};

const AwardsSection = () => {
    const awards = [
        { number: "10x", text: "Satisfied Customer" },
        {
            number: "10+", text: "Experienced Team Members"
        },
        { number: "5+", text: "Projects Completed" },
        { number: "1+", text: "Winning Awards" },
    ];

    return (
        <div className="p-5 md:p-1">
            <div className="p-5 bg-gradient-to-r from-custom-blue to-custom-blue flex flex-col lg:flex-row lg:justify-around w-full md:py-5 rounded-lg">
                {awards.map((award, index) => (
                    <AwardCard key={index} number={award.number} text={award.text} />
                ))}
            </div>
        </div>
    );
};

export default AwardsSection;
