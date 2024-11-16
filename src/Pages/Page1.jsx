import React from "react";
import bg from "../Images/bg.jpg";
import people from "../Images/People.png";
import wtsapp from "../Images/wtspp.png";
import grating from "../Images/grating.png";

function Page1() {
  return (
    <div className="flex h-screen">
      <div
        className="relative w-full h-full bg-no-repeat bg-right flex items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "70%",
          backgroundPosition: "right",
        }}
      >
        <div className="absolute top-1/3 left-16 space-y-4">
          <h1 className="text-black text-6xl font-semibold leading-tight">
            Have a shining
          </h1>
          <h1 className="text-black text-6xl font-semibold leading-tight">
            smile with our
          </h1>
          <h1 className="text-orange-600 text-6xl font-semibold leading-tight">
            modern methods!
          </h1>

          <div className="mt-6">
            <img src={grating} alt="Google Rating" className="w-56" />
          </div>
        </div>

        <div className="absolute top-8 right-8 w-64 h-64 flex flex-col items-center justify-center bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
          <h2 className="text-orange-600 text-lg font-semibold">
            15+ Expert Doctors
          </h2>
          <img className="mb-4" src={people} alt="People" />
          <p className="text-center text-gray-700">
            We take meticulous care of your dental needs to ensure a healthy,
            lasting smile.
          </p>
        </div>

        <div className="absolute bottom-10 right-10">
          <img
            src={wtsapp}
            alt="WhatsApp"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Page1;
