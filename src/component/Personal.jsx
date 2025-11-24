import React from "react";
import pic1 from "../assets/ceo.jpeg";

const Personal = () => {
  return (
    <section className="px-6 md:px-24 py-16">
      <div className="border-l-4 border-yellow-500 pl-10">
        <p className="text-gray-800 text-xl md:text-2xl leading-relaxed mb-10">
          “We have ambitious plans to transform RSSB, by 2025, into an organisation 
          that is not just fully committed to delivering for our members but that 
          puts members at the heart of all our planning and all our decision-making. 
          Our vision is for RSSB to use all of its power and energy on behalf of our 
          members: to be best-in-class in serving their interests, as a friend and 
          source of help, as a modern, efficient organisation, with user-friendly, 
          enabling technology; as a source of input to Government thinking; as a 
          national and international thought-leader in social policy; as the leading 
          strategic investor in our chosen markets; and as a prudent but ambitious 
          business partner.”
        </p>
        <div className="flex items-center gap-4 mt-8">
          <img
            src={pic1}
            alt="CEO"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <p className="text-blue-900 font-bold text-lg">
              Regis RUGEMANSHURO
            </p>
            <p className="text-gray-500 font-semibold">CEO, RSSB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
