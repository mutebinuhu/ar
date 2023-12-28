import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-100 p-3">
      <div className="flex justify-between">
        <div className="">
          <div class="">
            <span className=""></span>
          </div>
         
          <div className="flex space-x-3 text-gray-500 ">
          <div className="text-sm">
          <li  className="fas fa-mobile fa-2x"></li>
          </div>
            <div className="text-xs">
            +44 (0) 2380011767
            </div>
          </div>
          
        </div>

        <div class="">
          <ul className="flex">
            <li>
              <select name="userLang" id="userLang" className="border rounded-sm border-gray-500">
                <option value="arabic">Arabic</option>
                <option value="bangla">Bangla</option>
                <option value="english" selected="selected">
                  English
                </option>
                <option value="french">French</option>
              </select>
            </li>
            <div>

              <Link href="#" className="inline">
              
                  <i className="mx-2 text-gray-400 text-sm fab fa-facebook-f"></i>
                
              </Link >

              <Link  href="#" className="inline">
                  <i className="mx-2 text-gray-400 text-sm fab fa-twitter"></i>
              </Link >
              <Link href="#"  className="inline">
                  <i class="mx-2 text-gray-400 text-sm fab fa-instagram"></i>
              </Link >
              {/** <!--<li><a href="#"><i class="fab fa-vimeo-v"></i></a></li> */}
              < Link  href="#" className="inline">
                  <i class=" mx-2 text-gray-400 text-sm  fab fa-dribbble"></i>
              </Link >
              <Link href="#" className="inline">
                  <i class=" mx-2  text-gray-400 text-sm  fab fa-skype"></i>
              </Link >
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
