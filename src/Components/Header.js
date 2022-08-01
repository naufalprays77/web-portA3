import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeIcon from '../Img/home.png';

function Header() {
  return (
    <header class="header bg-[#447D89]">
      <div class="container py-7 px-5 w-full md:px-10">
        <div className="flex flex-row justify-between gap-5">
          <div className="self-center">
            <h1 className="text-[20px] text-white md:text-[35px]">Kalaplist Project</h1>
          </div>
          <div className="self-center">
            <Link to="/web-portA3">
              <img src={HomeIcon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
