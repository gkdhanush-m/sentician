import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import developing from '../../assets/Home/developing.png';
import edgeComputing from '../../assets/Home/edge-computing.png';
import business from '../../assets/Home/business.png';
import cloudImage from '../../assets/Home/cloud-image.webp';
import softwareDevelopement from '../../assets/Home/software_development.webp';
import dataAnalytics from '../../assets/Home/statistics_img.jpg';


const ContainerComponent = () => {
    const [index, setIndex] = useState(0);

    // Handle screen size changes and initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    const containerData = [
      { title: "Technology and Operations", description: "We deliver software-powered AI for transformative digital experiences", image: cloudImage, logo: edgeComputing },
      { title: "Staffing solutions", description: "We bring specialized talent, ensuring business growth and organized ability.", image: dataAnalytics, logo: business },
      { title: "Outsourcing services", description: "We optimize operations, freeing hands to focus on core goals.", image: softwareDevelopement, logo: developing },
       
    ];



    const LargeScreenComponent = () => (
       <div
  className={`grid ${
    containerData.length === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-3"
  } grid-cols-1 sm:grid-cols-2 gap-8 p-8 items-center`}>
  {containerData.map((data, idx) => (
    <div
      key={idx}
      className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform duration-500 transform hover:scale-105 hover:bg-opacity-90"
      onMouseEnter={() => setIndex(idx)}
    >
      <div className="flex flex-col items-center text-center">
        {/* Card Image */}
        <div
          className={`h-24 w-24 rounded-full ${idx === index
              ? "bg-gradient-to-r from-custom-blue to-custom-blue"
            : "bg-gradient-to-r from-custom-blue to-custom-blue border-[1px] border-custom-blue"
              } flex justify-center items-center p-5 transition-transform duration-500 hover:scale-110`}
        >
          <img
            className="filter brightness-0 invert transition-transform duration-500 hover:scale-110"
            src={data.logo}
            alt="Logo"
          />
        </div>

        {/* Card Title */}
        <h3 className="text-custom-blue text-2xl mt-6 font-bold transition-opacity duration-500 opacity-90 hover:opacity-100">
          {data.title}
        </h3>
      </div>

      {/* Card Description */}
      <p className="text-gray-800 text-center font-bold  mt-4 text-base opacity-80 hover:opacity-100">
        {data.description}
      </p>

      {/* Card Image */}
      <div className="flex justify-center mt-4">
        <img
          className="h-[180px] w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          src={data.image}
          alt="Statistics_Img"
        />
      </div>
    </div>
  ))}
</div>


    );


  

    return (
        <div className="p-3 pt-14 pb-28">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center justify-center mb-5">
                    <hr className="w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                    <h1 className="ml-4  font-bold bg-gradient-to-r from-custom-blue to-custom-blue bg-clip-text text-transparent mr-4 text-base sm:text-2xl lg:text-3xl">OUR SERVICES</h1>
                   <hr className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                </div>
                <h1 className="font-bold text-center text-4xl m-4 mb-5 text-gray-900">We Provide Best Services</h1>
            </div>
            <div className="flex justify-center items-center w-[100%] mt-8">
                {<LargeScreenComponent />}
            </div>
            <div className="flex justify-center items-center mt-20 ">
                <p className="text-center text-2xl">Want to see our professional Services?</p>
                <Link to="/contact-us">
                    <button className="bg-gradient-to-r from-custom-blue to-custom-blue text-transparent bg-clip-text font-bold py-2 px-4 rounded text-2xl hover:scale-110 transition-transform duration-500">
               Lets connect today
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContainerComponent;
