import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Calculator from './Calculator/Calculator';
import Home from './Home';
import Footer from './Components/Footer';
import ToDoList from './ToDoList/ToDoList';
import Maintenance from './API/maintenance';
import Header from './Components/Header';

function Url() {
  return (
    <div className="app ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/API" element={<Maintenance />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Url;
