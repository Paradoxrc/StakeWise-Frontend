import UpcomingEvent01 from "@/assets/images/UpcomingEvent01.png";
import InterestedBtn from "../interestedBtn/IntererstedBtn";
import { IoShareSocialSharp } from "react-icons/io5";


const UpcomingCard = () => {
    return (
      <div className="max-w-5xl mx-auto p-[10px] bg-primary border-t-2">
        <div className="mb-[12px]">
          <p className="text-sm font-semibold">Listed on : Wednesday, 04 Dec 2024</p>
          <h2 className="text-2xl font-bold">Australia vs India, 3rd Test at Brisbane</h2>
        </div>
        <div className="flex gap-[10px]">
          <img
            src={UpcomingEvent01}
            alt="Event"
            className="max-w-full h-auto rounded-md" // Keep original image size
          />
          <div className="flex-1">
            <div className="flex space-x-[5px]">
            <span className="font-bold min-w-[90px] text-xs flex justify-between"> Event Date<span>:</span></span>
              <span className="text-xs">December 14–18, 2024</span>
            </div>
            <div className="flex mt-2 space-x-[5px]">
            <span className="font-bold min-w-[90px] text-xs flex justify-between"> Venue<span>:</span></span>
              <span className="text-xs">The Gabba, Brisbane</span>
            </div>
            <div className="flex mt-2 space-x-[5px]">
            <span className="font-bold min-w-[90px] text-xs flex justify-between"> Occasion<span>:</span></span>
              <span className="text-xs">
                3rd Test of the 5-match Border-Gavaskar Trophy (2024–25), part of
                the ICC World Test Championship (2023–2025).
              </span>
            </div>
            <div className="flex mt-2 space-x-[5px]">
            <span className="font-bold min-w-[90px] text-xs flex justify-between"> Description<span>:</span></span>
              <span className="text-xs ">
                The third Test match between India and Australia in the ongoing
                Border-Gavaskar Trophy 2024–25 is set to take place from December
                14 to 18, 2024, at the iconic Gabba in Brisbane. This high-stakes
                encounter marks the midpoint of the five-match series, which is
                part of the ICC World Test Championship cycle for 2023–2025. Known
                for its pace and bounce, the Gabba has historically been a fortress
                for Australia, boasting an impressive unbeaten streak of 12
                consecutive Test victories. The pitch is expected to favor fast
                bowlers, making it a challenging task for batters to adapt.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-2">
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-card text-xs rounded-md">Sports</span>
            <span className="px-3 py-1 bg-card text-xs rounded-md">Cricket</span>
          </div>
          <div className="flex gap-[10px] mt-2">
            <InterestedBtn />
            <div className="p-2 rounded-md hover:bg-card transition duration-300">
              <IoShareSocialSharp size={22} className="my-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpcomingCard;