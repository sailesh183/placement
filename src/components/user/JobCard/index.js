import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  description,
  postedDate,
  status,
}) => {
  const navigate = useNavigate();
  const handleOpenApplication = () => {
    navigate(`/application/${id}`);
  };
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 my-7 w-[750px] ">
      <div className="p-6 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
        <p className="text-black-600 text-sm font-semibold mb-4">{company}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4 mb-2">
            <MapPin className="h-4 w-4 text-blue-500 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mr-4 mb-2 ">
            <FaRupeeSign className="h-4 w-4 text-green-500 mr-1" />
            <span>{salary}</span>
          </div>
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 text-yellow-500 mr-1" />
            <span>Posted {postedDate}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        {status === 1 ? (
          <button className="bg-gray-400  text-black font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
            Applied
          </button>
        ) : (
          <button
            className="bg-blue-600 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleOpenApplication}
          >
            Apply Now
          </button>
        )}
      </div>
      <div className="bg-blue-100 p-2 text-xs text-center text-blue-600 font-medium">
        Featured Job
      </div>
    </div>
  );
};
