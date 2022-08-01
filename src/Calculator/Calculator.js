import { React, useState } from 'react';

function Calculator() {
  const [number, setResult] = useState('');

  const handleClick = (e) => {
    if (e.target.name === '^') {
      setResult(number * number);
    } else {
      setResult(number.concat(e.target.name));
    }
  };
  const clear = () => {
    setResult('');
  };
  const backspace = () => {
    setResult(number.slice(0, number.length - 1));
  };
  const calculate = () => {
    try {
      setResult(eval(number));
    } catch (err) {
      setResult('Error');
    }
  };
  return (
    <section id="Calculator" className="flex flex-col items-center self-start bg-Kalaplist py-6">
      <div className="container flex flex-row w-[90%]">
        <div className="mt-5 xl:mt-10  mx-auto text-center self-center border-10 border-black w-[90%] md:w-[40%] lg:w-[25%] bg-black">
          <form>
            <input type="text" value={number} className="h-[70px] w-[100%] bg-black text-white my-5 text-right font-bold text-[30px] p-4 tracking-wide" />
          </form>
          <div className="grid grid-cols-44 auto-rows-2fr cursor-pointer bg-black gap-1 p-3 ">
            <button onClick={clear} className="p-3 bg-[#191919] text-white">
              AC
            </button>
            <button onClick={backspace} className="bg-red p-3 bg-[#191919] text-white ">
              C
            </button>
            <button onClick={handleClick} name="^" className="p-3 bg-[#191919] text-white">
              ^2
            </button>
            <button onClick={handleClick} name="/" className="bg-[#191919] p-3 text-white ">
              &divide;
            </button>
            <button onClick={handleClick} name="7" className="bg-[#2D2D2D] p-3 text-white ">
              7
            </button>
            <button onClick={handleClick} name="8" className="bg-[#2D2D2D] p-3 text-white">
              8
            </button>
            <button onClick={handleClick} name="9" className="bg-[#2D2D2D] p-3 text-white">
              9
            </button>
            <button onClick={handleClick} name="*" className="bg-[#191919] p-3 text-white">
              &times;
            </button>
            <button onClick={handleClick} name="4" className="bg-[#2D2D2D] p-3 text-white">
              4
            </button>
            <button onClick={handleClick} name="5" className="bg-[#2D2D2D] p-3 text-white ">
              5
            </button>
            <button onClick={handleClick} name="6" className="bg-[#2D2D2D] p-3 text-white">
              6
            </button>
            <button onClick={handleClick} name="-" className="bg-[#191919] p-3 text-white">
              &ndash;
            </button>
            <button onClick={handleClick} name="1" className="bg-[#2D2D2D] p-3 text-white">
              1
            </button>
            <button onClick={handleClick} name="2" className="bg-[#2D2D2D]  p-3 text-white">
              2
            </button>
            <button onClick={handleClick} name="3" className="bg-[#2D2D2D]  p-3 text-white">
              3
            </button>
            <button onClick={handleClick} name="+" className="bg-[#191919]  p-3 text-white">
              +
            </button>
            <button onClick={handleClick} name="0" className="bg-[#2D2D2D]  p-3 text-white col-span-2">
              0
            </button>
            <button onClick={handleClick} name="." className="bg-[#2D2D2D]  p-3 text-white ">
              .
            </button>
            <button onClick={calculate} className="bg-[#C73D00] p-3 text-white ">
              =
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
