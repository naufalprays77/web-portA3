import React from 'react';
import { Link } from 'react-router-dom';
import API from './Img/Api.png';
import Calculator from './Img/Calculator.png';
import ToDoList from './Img/ToDoList.png';

function Home() {
  return (
    <>
      <section id="home" className="min-h-[85vh] bg-home">
        <div className="container flex flex-col items-center self-center top-[20%] absolute ">
          <div className="text-5xl font-bold md:mb-20 mb-28 text-center">Join Project</div>
          <div className="flex flex-row md:gap-5 gap-1 md:mt-10 mt-0 ">
            <div className=" md:px-6 md:py-3 px-4 py-1">
              <Link to="/Calculator ">
                <img src={Calculator} alt="calculator" className="md:w-[100px] w-[300px] hover:scale-150 duration-1000 hover:duration-500 " />
              </Link>
            </div>
            <div className=" md:px-6 md:py-3 px-6 py-1">
              <Link to="/API">
                <img src={API} alt="API" className="md:w-[100px] w-[300px] hover:scale-150 duration-1000 hover:duration-500" />
              </Link>
            </div>
            <div className=" md:px-6 md:py-3 px-4 py-1">
              <Link to="/ToDoList">
                <img src={ToDoList} alt="ToDoList" className="md:w-[100px] w-[300px] hover:scale-150 duration-1000 hover:duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
