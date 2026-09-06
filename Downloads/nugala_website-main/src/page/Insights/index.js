import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import InsightsList from "../../components/InsightsList";
import { InsightsListData } from "../../utils";

const categories = ["All", "Software Solutions", "Staffing Services"];

const InsightsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredInsights =
        activeCategory === "All"
            ? InsightsListData
            : InsightsListData.filter((item) => item.category === activeCategory);

    return (
        <div className="min-w-full">
            <Navbar />
            {/* Hero Container */}
            <div className="pt-5 lg:pt-32"></div>

            {/* Tabs for filtering */}
            <div className="flex justify-center space-x-4 mb-6 px-8 md:px-0">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 text-sm font-medium rounded ${activeCategory === category ? "bg-[#50bcf7] text-white" : "bg-gray-200 "
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Insights List */}
            <InsightsList InsightsListData={filteredInsights} />

            <Footer />
        </div>
    );
};

export default InsightsPage;