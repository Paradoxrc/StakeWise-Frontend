import { TECarousel, TECarouselItem } from "tw-elements-react";
import { SliderImages } from "../../data/data"; // Import SliderImages

export default function CarouselDarkVariant(): JSX.Element {
  return (
    <div className="relative mx-auto mt-10 w-[1340px] max-w-full rounded-lg bg-white shadow-lg z-[1]">
      {" "}
      {/* Set z-index for slider */}
      <TECarousel
        showControls
        showIndicators
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </>
        }
      >
        <div className="relative w-full overflow-hidden rounded-lg h-[400px] after:clear-both after:block after:content-['']">
          {SliderImages.map((images, index) => (
            <TECarouselItem
              key={index}
              itemID={index + 1}
              className="relative w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={images.image1}
                className="block w-full h-full object-cover rounded-lg"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                <h5 className="text-xl">Slide {index + 1} label</h5>
                <p>
                  Some representative placeholder content for slide {index + 1}.
                </p>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </div>
  );
}
