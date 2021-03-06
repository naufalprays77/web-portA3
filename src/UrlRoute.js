import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Calculator from './Calculator/Calculator';
import Home from './Home';
import ToDoList from './ToDoList/ToDoList';
import API from './API/API';

import './Style/style.css';

function Url() {
  return (
    <Routes>
      <Route path="/web-portA3" element={<Home />} />
      <Route path="/ToDoList" element={<ToDoList />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/API" element={<API />} />
    </Routes>
  );
}

export default Url;
