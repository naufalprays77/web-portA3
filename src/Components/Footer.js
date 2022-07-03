import React from 'react';
import Logo from '../Img/NPLogo1.1.png';

function Footer() {
  return (
    <section id="footer">
      <div className="container bg-[#447D89] text-white py-7 px-5 w-full md:px-10">
        <div className="flex flex-col justify-center text-[14px] ">
          <div className="self-center">
            <div className="flex flex-row gap-3 justify-center">
              <h5 className="self-center">Developed 2022</h5>
              <img src={Logo} className="w-[5%] self-center" />
              <a href="https://naufalprays77.github.io/personal/" className="hover:text-[#CDBC16] self-center">
                @naufalprays77
              </a>
            </div>
          </div>
          <div className="self-center">
            <h5>version 1.2.1.</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
