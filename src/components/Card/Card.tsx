import { FaArrowUp } from "react-icons/fa";
import { ButtonOutline } from "../Buttons/Buttons";
import { CardData } from "../../data/data"; // Adjust the path to your data file if needed
import { useState } from "react";

const Card = () => {
  // State to control how many cards are shown
  const [showMore, setShowMore] = useState(false);

  // Show only the first 16 cards or all based on showMore state
  const displayedCards = showMore ? CardData : CardData.slice(0, 16);

  return (
    <div className="px-4 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-4 -mx-1">
        {/* Display cards */}
        {displayedCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full max-w-[350px] p-3 rounded-lg bg-card shadow-md text-accent mx-1"
          >
            {/* Header Section */}
            <div className="flex items-center">
              <img
                src={item.image}
                alt="Thumbnail"
                className="w-8 h-8 rounded-full mr-3"
              />
              <h3 className="text-sm font-semibold text-accent line-clamp-2">
                {item.title}
              </h3>
            </div>
            <p className="mt-2 text-xs text-gray-400">$11.3m Vol.</p>

            {/* Buttons Section */}
            <div className="flex justify-between items-center mt-4">
              {/* Buy Yes */}
              <ButtonOutline className="flex items-center justify-center w-[45%] px-2 py-1 text-xs font-semibold text-green border-green hover:bg-green hover:text-white rounded-lg">
                Buy Yes
                <FaArrowUp className="ml-2" />
              </ButtonOutline>

              {/* Buy No */}
              <ButtonOutline className="flex items-center justify-center w-[45%] px-2 py-1 text-xs font-semibold text-red border-red hover:bg-red hover:text-white rounded-lg">
                Buy No
                <FaArrowUp className="ml-2" />
              </ButtonOutline>
            </div>

            {/* Spread Section */}
            <div className="flex items-center mt-4">
              <div className="flex-1 flex items-center">
                <div className="h-1 w-[73%] bg-green rounded-l-full"></div>
                <div className="h-1 w-[27%] bg-red rounded-r-full"></div>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <span className="text-green text-xs">73% Yes</span>
                <span className="text-red text-xs">26% No</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {CardData.length > 16 && (
        <div className="flex justify-center mt-6">
          <ButtonOutline
            onClick={() => setShowMore(!showMore)}
            className="flex items-center px-4 py-2 bg-secondary text-white rounded-md text-sm font-semibold"
          >
            {showMore ? "Show Less" : "Show More"}
          </ButtonOutline>
        </div>
      )}
    </div>
  );
};

export default Card;
