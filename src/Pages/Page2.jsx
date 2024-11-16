import React from "react";
import Image1 from "../Images/1.png";
import Image2 from "../Images/2.png";
import Image3 from "../Images/3.png";
import Image4 from "../Images/4.png";
import Image5 from "../Images/5.png";
import Image6 from "../Images/6.png";
import Image7 from "../Images/7.png";
import Image8 from "../Images/8.png";
import Image9 from "../Images/9.png";
import black from "../Images/blk.png";

function DummyCards() {
  return (
    <div className="p-0 m-0">
      {/* Black Image at the top with full width and no space at the top */}
      <div className="relative w-full h-[300px]">
        <img
          src={black}
          alt="Black Image"
          className="absolute top-0 left-0 w-full h-[140px] object-cover"
        />
      </div>

      {/* Container for the heading aligned with the cards */}
      <div className="px-[50px] mt-[100px]">
        {/* Row with Heading aligned to start from same position as first card */}
        <div className="grid grid-cols-5 gap-10 text-left">
          <div className="col-span-5 w-[50%] ">
            <h2 className="text-4xl font-bold text-black mb-4">
              Transform your smile with
            </h2>
            <h2 className="text-4xl font-bold text-black mb-8 mt-4">
              Veneers, Whitening, and Implants
            </h2>
            {/* Dummy content in the p tag with 60% width, aligned exactly below the h2 */}
            <p className="text-lg text-gray-700 w-full ml-[20px] mt-4 mb-4 text-left">
              Experience the best in dental care with our innovative services
              like veneers, teeth whitening, and implants.
            </p>
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="m-0 w-full">
        <div className="px-[50px] grid grid-cols-5 gap-10 place-content-center w-full">
          {/* Row 1 */}
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image1}
              alt="Service 1"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Orthodontics
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image2}
              alt="Service 2"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              General Dentistry
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image3}
              alt="Service 3"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Cosmetic Dentistry
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image4}
              alt="Service 4"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Teeth Whitening
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image5}
              alt="Service 5"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Gum Treatment
            </h2>
          </div>
        </div>

        <div className="px-[50px] grid grid-cols-5 gap-10 place-content-center w-full mt-10">
          {/* Row 2 */}
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image6}
              alt="Service 6"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Root Canal Treatment
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image7}
              alt="Service 7"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Crowns and Bridges
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image8}
              alt="Service 8"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Jaw Joint Disorder
            </h2>
          </div>
          <div className="border h-40 bg-[#FFFAF5] flex flex-col items-center justify-center p-0 m-0 rounded-md hover:shadow-lg transition-shadow">
            <img
              src={Image9}
              alt="Service 9"
              className="w-20 h-20 rounded-full transition-transform transform hover:scale-105"
            />
            <h2 className="mt-2 mb-0 text-center text-lg font-semibold">
              Children's Dentistry
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyCards;
