import React from "react";
 import Logo from "../assets/Logo.png";
  import Call from "../assets/Call.svg";
 import Info from "../assets/Message.svg";

const Navbar = () =>{
    return(
        <>
        <div>
            <img class="w-38 h-23 mx-20 my-5" src={Logo}/>
        </div>

        <div class="flex  absolute top-23 left-190 gap-12">
            <div class="flex gap-3">
                <img class="w-11" src={Call}/>
                <div>
                    <p class="text-blue-800 font-bold">4044</p>
                <p class="text-gray-500 font-bold">Toll free lines</p>
                </div>
            </div>
            <div class="flex gap-3">
                <img class="w-11" src={Info}/>
                <div>
                    <p class="text-blue-800 font-bold">info@rssb.rw</p>
                    <p class="text-gray-500 font-bold">Reach to us</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;
