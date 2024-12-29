import { FaArrowUp } from "react-icons/fa";
import { ButtonOutline } from "../Buttons/Buttons";

const Card = () => {
  return (
    <div className="max-w-md mx-auto p-4 rounded-lg bg-card shadow-md text-accent">
      {/* Header Section */}
      <div className="flex items-center">
        <img
          src="https://live-production.wcms.abc-cdn.net.au/dd746d4a947d50c1b2121aca27de39bd?impolicy=wcms_crop_resize&cropH=576&cropW=576&xPos=224&yPos=0&width=862&height=862"
          alt="Thumbnail"
          className="w-10 h-10 rounded-full mr-3"
        />
        <h3 className="text-lg font-semibold text-accent">
          Trump ends Ukraine war by first 90 days?
        </h3>
      </div>
      <p className="mt-2 text-sm text-gray-400">$11.3m Vol.</p>

      {/* Buttons Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Buy Yes */}
        <ButtonOutline className="flex items-center justify-center w-[45%] px-3 py-2 text-sm font-semibold text-green border-green hover:bg-green hover:text-white rounded-lg">
          Buy Yes
          <FaArrowUp className="ml-2" />
        </ButtonOutline>

        {/* Buy No */}
        <ButtonOutline className="flex items-center justify-center w-[45%] px-3 py-2 text-sm font-semibold text-red border-red hover:bg-red hover:text-white rounded-lg">
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
  );
};

export default Card;
