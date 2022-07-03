import React from 'react';
import { CalculatorSec, API, Todo } from './Components/Main-Content';

function Home() {
  return (
    <section id="home" className="lg:min-h-[70.9vh] min-h-[75vh] bg-Kalaplist">
      <div className="container flex flex-col items-center self-center top-[20%] absolute ">
        <div className="flex flex-row py-36">
          <CalculatorSec />
          <API />
          <Todo />
        </div>
      </div>
    </section>
  );
}

export default Home;
