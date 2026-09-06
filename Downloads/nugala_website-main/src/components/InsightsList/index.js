import React from "react";
import InsightCard from "./InsightCard";




// Blog posts data


const InsightsList = ({ InsightsListData }) => {
    return (
        <div className="flex flex-col mx-auto p-2 md:px-6 w-full items-center mb-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 text-custom-blue">Latest Insights</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {InsightsListData.map((post, index) => (
                    <InsightCard key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default InsightsList;
