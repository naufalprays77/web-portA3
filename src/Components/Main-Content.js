import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from '../Img/Calculator.png';
import APIIcon from '../Img/Api.png';
import ToDoList from '../Img/ToDoList.png';

export const CalculatorSec = () => {
  return (
    <div className=" md:px-6 md:py-3 px-4 py-1">
      <Link to="/web-portA3/Calculator ">
        <img src={Calculator} alt="calculator" className="md:w-[100px] w-[300px] hover:scale-150 duration-1000 hover:duration-500 " />
      </Link>
    </div>
  );
};

export const API = () => {
  return (
    <div className=" md:px-6 md:py-3 px-6 py-1">
      <Link to="/web-portA3/API">
        <img src={APIIcon} alt="API" className="md:w-[100px] w-[300px] hover:scale-150 duration-1000 hover:duration-500" />
      </Link>
    </div>
  );
};

export const Todo = () => {
  return (
    <div className=" md:px-6 md:py-3 px-4 py-1">
      <Link to="/web-portA3/ToDoList">
        <img src={ToDoList} alt="ToDoList" className="md:w-[100px] w-[300px] hover:scale-150 duration-1000 hover:duration-500" />
      </Link>
    </div>
  );
};
