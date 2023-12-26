import React from "react";
const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="">
          <div class="">
            <span className=""></span>
          </div>
          <a className="" href="#">
            +44 (0) 2380011767
          </a>
        </div>

        <div class="">
          <ul className="flex">
            <li>
              <select name="userLang" id="userLang">
                <option value="arabic">Arabic</option>
                <option value="bangla">Bangla</option>
                <option value="english" selected="selected">
                  English
                </option>
                <option value="french">French</option>
              </select>
            </li>
            <div>
              <li className="inline">
                <a href="http://facebook.com/">
                  <i class="fab fa-facebook-f">fb</i>
                </a>
              </li>
              <li className="inline">
                <a href="http://">
                  <i class="fab fa-twitter"></i>twi
                </a>
              </li>
              <li className="inline">
                <a href="http://">
                  <i class="fab fa-instagram"></i>ins
                </a>
              </li>
              {/** <!--<li><a href="#"><i class="fab fa-vimeo-v"></i></a></li> */}
              <li className="inline">
                <a href="http://">
                  <i class="fab fa-dribbble"></i>dri
                </a>
              </li>
              <li className="inline">
                <a href="http://">
                  <i class="fab fa-skype">sk</i>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
