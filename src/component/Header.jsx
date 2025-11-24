import React from "react";
import pic1 from "../assets/In.svg";
import pic2 from "../assets/Twitter.svg";
import pic3 from "../assets/Facebook.svg";
import pic4 from "../assets/Youtube.svg";
import pic5 from "../assets/Instagram.svg";

const Header = () =>{
    return(
        <>
        <div class=" h-8 bg-sky-50">
            <div class="flex ">
                <div class="flex gap-6 ml-8 w-40 mt-1 justify-center items-center h-">
                    <a><img src={pic1}/></a>
                    <a><img src={pic2}/></a>
                    <a><img src={pic3}/></a>
                    <a><img src={pic4}/></a>
                    <a><img src={pic5}/></a>
                </div>

                <div class="flex absolute top-0 left-200">
                    <select>
                      <option>Online Services</option>
                      <option>Apply for Employee Number</option>
                      <option>Check for your Contributions</option>
                      <option>Pay Employee Contribution</option>
                      <option>RSSB Clearance Contribution</option>
                      <option>Kwivuza</option>
                    </select>
                </div>
                <div class="flex absolute top-0 left-280">
                  <p>Publications</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;

