import { Link } from "react-router-dom";

const InsightCard = ({ title, description, link, image, minutes ,isNew}) => {
    return (
        <div className="flex flex-col p-6 border rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all hover:bg-gradient-to-tr from-blue-50 to-purple-50">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl mb-4" />

            <div className="flex items-center justify-between mb-2">
                {isNew && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full animate-pulse">
                        🆕 New
                    </span>
                )}
                <p className="text-sm text-gray-500">{minutes} Min Read</p>
            </div>

            <h4 className="text-lg md:text-xl lg:text-lg font-bold flex items-center gap-2">
                {title}
            </h4>

            <p className="text-sm md:text-base text-justify lg:text-base text-gray-600 mt-2 flex-1">
                {description}
            </p>

            <Link to={`/insight/${link}`}>
                <button className="text-blue-600 font-medium mt-3 flex text-sm md:text-base lg:text-lg items-center gap-1">
                    🔗 Read More →
                </button>
            </Link>
        </div>
    );
};


export default InsightCard;