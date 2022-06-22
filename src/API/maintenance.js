import React from 'react';
import { Link } from 'react-router-dom';

function Maintenance() {
  return (
    <div className=" min-h-[64vh] flex flex-row justify-center mt-40">
      <div className="text-center">
        <h1 className="text-[30px]">Oops, sorry this website page is currently under construction.</h1>
        <h2 className="text-[20px] mb-10"> Please come back another time</h2>
        <Link to="/" className="bg-black px-5 py-2 text-white ">
          BackToHome
        </Link>
      </div>
    </div>
  );
}

export default Maintenance;
