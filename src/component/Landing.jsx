import React from "react";
import pic1 from "../assets/public4.svg";
import pic2 from "../assets/public5.svg";
import pic3 from "../assets/Public1.svg";
import pic4 from "../assets/public6.svg";
import pic5 from "../assets/public.svg";
import pic6 from "../assets/Public2.svg";
import pic7 from "../assets/public7.svg"

const Landing = () => {
  return (
    <>
      <div class="text-center mt-16">
        <div class="flex justify-center items-center gap-3">
          <div class="w-16 h-1 bg-yellow-500"></div>
          <h2 class="text-3xl font-bold text-blue-800 tracking-wide">
            SOCIAL PROTECTION SCHEMES
          </h2>
          <div class="w-16 h-1 bg-yellow-500"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 px-10">
        <div class="border rounded-xl shadow-sm p-10 text-center">
          <img src={pic1} class="w-20 mx-auto mb-6" />
          <h3 class="text-xl font-bold text-blue-900">PENSION SCHEME</h3>
          <p class="text-gray-600 mt-2">Retire With Dignity</p>
        </div>
        <div class="border rounded-xl shadow-sm p-10 text-center">
          <img src={pic2} class="w-20 mx-auto mb-6" />
          <h3 class="text-xl font-bold text-blue-900">
            OCCUPATIONAL HAZARDS
          </h3>
          <p class="text-gray-600 mt-2">We Are Here For You</p>
        </div>
        <div class="border rounded-xl shadow-sm p-10 text-center">
          <img src={pic3} class="w-20 mx-auto mb-6" />
          <h3 class="text-xl font-bold text-blue-900">MEDICAL SCHEME</h3>
          <p class="text-gray-600 mt-2">Our Health, Our Future</p>
        </div>
        <div className="border rounded-xl shadow-sm p-10 text-center">
          <img src={pic4} class="w-20 mx-auto mb-6" />
          <h3 class="text-xl font-bold text-blue-900">CBHI SCHEME</h3>
          <p class="text-gray-600 mt-2">
            Giving You Happiness At Best Rate
          </p>
        </div>
        <div class="relative rounded-xl overflow-hidden shadow-md">
          <img
            src={pic5}
            class="w-full h-full object-cover absolute inset-0"
          />

          <div class="relative bg-blue-900 bg-opacity-60 p-12 text-center text-white">
            <img src={pic7} class="w-20 mx-auto mb-6 invert" />
            <h3 class="text-2xl font-bold">EJOHEZA</h3>
            <p class="mt-2 text-lg">
              Start Early And Reap The Rewards.
            </p>
          </div>
        </div>
        <div class="border rounded-xl shadow-sm p-10 text-center">
          <img src={pic6} class="w-20 mx-auto mb-6" />
          <h3 class="text-xl font-bold text-blue-900">MATERNITY LEAVE</h3>
          <p class="text-gray-600 mt-2">
            Enjoy Your Maternity Leave With Your Full Salary
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
