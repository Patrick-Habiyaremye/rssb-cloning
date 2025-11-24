import React from 'react';
import pic1 from '../assets/team1.jpeg';
import pic2 from '../assets/team2.jpeg';
import pic3 from '../assets/certificate.jpg'

const Gallery = () =>{
    return(
        <>
         <div class="h-130">
            <div class="font-extrabold ml-140 mt-10">
             <p class="text-blue-900">NEW & EVENTS</p>

            </div>

            <div  class="flex gap-22 ml-15 mt-10">
                <div>
                    <img class="w-80" src={pic1}/>
                    <p class="text-sm text-gray-400">a year ago</p>
                    <p class="text-purple-950 font-bold">RSSB Engages the Private Sector on</p>
                    <p class="text-purple-950 font-bold">Pension Reforms and .....</p>

                    <p class="text-nm text-gray-400">Kigali: Thursday, November 28th, 2024 - The</p>
                    <p class="text-nm text-gray-400">Rwanda Social Security Board(RSSB) engaged</p>
                    <p class="text-nm text-gray-400">With the private sector to discuss upcoming</p>
                    <p class="mt-3 text-blue-400">Read more ...</p>
                </div>

                <div>
                    <img class="w-80 h-54" src={pic2}/>
                    <p class="text-sm text-gray-400">2 year ago</p>
                    <p class="text-purple-950 font-bold">RSSB Engages the Private Sector on</p>
                    <p class="text-purple-950 font-bold">Pension Reforms and .....</p>

                    <p class="text-nm text-gray-400">Kigali: Thursday, November 28th, 2024 - The</p>
                    <p class="text-nm text-gray-400">Rwanda Social Security Board(RSSB) engaged</p>
                    <p class="text-nm text-gray-400">With the private sector to discuss upcoming</p>
                    <p class="mt-3 text-blue-400">Read more ...</p>
                </div>

                <div>
                    <img class="w-80 " src={pic3}/>
                    <p class="text-sm text-gray-400">2 year ago</p>
                    <p class="text-purple-950 font-bold">RSSB Engages the Private Sector on</p>
                    <p class="text-purple-950 font-bold">Pension Reforms and .....</p>

                    <p class="text-nm text-gray-400">Kigali: Thursday, November 28th, 2024 - The</p>
                    <p class="text-nm text-gray-400">Rwanda Social Security Board(RSSB) engaged</p>
                    <p class="text-nm text-gray-400">With the private sector to discuss upcoming</p>
                    <p class="mt-3 text-blue-400">Read more ...</p>
                </div>
            </div>

            <div class="text-blue-800 font-bold rounded-md border-blue-700 ring-blue-900 ml-140 mt-5">
                <button>View More</button>
            </div>
         </div>
        </>
    )
}
export default Gallery;