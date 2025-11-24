import React from "react";
import pic1 from "../assets/megaphone.svg";

const Transform = () => {
  return (
    <section class="px-6 md:px-24 py-16">
      <h1 class="font-bold text-black-500 ">
        Digital transformation
      </h1>
      <p class="text-gray-700 text-lg max-w-3xl mb-14 leading-relaxed">
        A major focus for RSSB going into 2025 is to transform into a member
        first, <span class="text-yellow-500 font-semibold">data driven</span>, high performing 
        organization and a big part of that is to complete its{" "}
        <span class="text-yellow-500 font-semibold">shift to digital.</span>
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full mb-6">
            <img src={pic1} class="w-10" />
          </div>

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Changing from Legacy processes and systems
          </h2>

          <p class="text-gray-600 leading-relaxed">
            As we enter a new era of technology advances and data-driven
            business models, we are upgrading our systems and processes to gain
            in operational efficiency, address technology constraints, meet
            member expectations and support adoption and integration with other
            systems.
          </p>
        </div>
        <div>
          <div class="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full mb-6">
            <img src={pic1} class="w-10" />
          </div>

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Non-paper based processes
          </h2>

          <p class="text-gray-600 leading-relaxed">
            We are moving away from time-taking processes as we process a large
            number of member claims. Members and partners will enjoy timely and
            faster responses and reimbursements by reducing the time taken for
            processes to be completed.
          </p>
        </div>
        <div>
          <div class="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full mb-6">
            <img src={pic1} class="w-10" />
          </div>

          <h2 class="text-2xl font-bold text-blue-900 mb-4">
            Ensure the compliance rate in mandatory contributions
          </h2>

          <p class="text-gray-600 leading-relaxed">
            Digital-led compliance for private and public institutions to
            ensure compliance and fraud monitoring. Members will have seamless
            and transparent access to their contributions and benefits via an
            intelligent system and notification ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transform;
