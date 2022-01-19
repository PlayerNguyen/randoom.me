import React, { useState } from "react";

function Inputter({ value, onChange }) {
  return (
    <input
      className="box-border p-1 rounded w-full"
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export const Randoom = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);
  const [iteration, setIteration] = useState(1);
  const [results, setResults] = useState([]);
  const [isUsingDecimal, setIsUsingDecimal] = useState(false);

  const generateRandomDecimal = (from, to) => {
    // Set the value of the input to the random number, non-floor algorithm
    return (
      Math.random() * (Number.parseFloat(to) - Number.parseFloat(from)) +
      Number.parseFloat(from)
    );
  };

  const generateRandomInt = (from, to) => {
    // Set the value of the input to the random number
    return Math.ceil(generateRandomDecimal(from, to));
  };

  const handleSubmit = (event) => {
    // Prevent the default action of the form
    event.preventDefault();
    // Retrieves random number
    let width = [];
    for (let i = 0; i < iteration; i++) {
      width.push(
        isUsingDecimal
          ? generateRandomDecimal(from, to)
          : generateRandomInt(from, to)
      );
    }
    console.log(width);
    setResults([...results, ...width]);
  };

  const handleReset = () => {
    setResults([]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 items-start">
      <div className="p-6 w-full md:w-1/3 bg-gray-50 rounded bg-gradient-to-r from-fuchsia-400 to-violet-400">
        <h1 className="text-3xl font-bold">Randooom</h1>

        <div>
          <p className="text-xl">
            Generate a randomly integer number by using the miracle
            generate-algorithm from my computational, programming, and the
            best-quality course on my university.
          </p>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="flex gap-3 mt-2">
            <div>
              <label className="mr-2 font-bold">From</label>
              <Inputter value={from} onChange={(value) => setFrom(value)} />
            </div>
            <div>
              <label className="mr-2 font-bold">To</label>
              <Inputter value={to} onChange={(value) => setTo(value)} />
            </div>
          </div>
          <div className="flex mt-2">
            <div>
              <label className="mr-2 font-bold">Iteration (no.)</label>
              <Inputter
                value={iteration}
                onChange={(value) => {
                  setIteration(value > 0 ? value : 1);
                }}
              />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              className="mr-3"
              value=""
              onChange={(e) => {
                setIsUsingDecimal(e.target.checked);
              }}
            />
            <label className="mr-2 font-bold">Use Decimal</label>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              className="bg-green-400 hover:bg-green-700 ease-linear duration-100 text-black font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Generate
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 ease-linear duration-100 text-black font-bold py-2 px-4 rounded w-full"
              type="button"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
          {/* <div className="flex gap-2 mt-2">
            <button className="bg-blue-400 hover:bg-blue-600 py-2 px-4 font-bold text-black w-full rounded">
              Download as .txt
            </button>
          </div> */}
        </form>
      </div>

      <div className="p-12 w-full bg-slate-50 rounded">
        {/* Here is the result */}
        <div className="mt-2">
          {results.map((ele, index) => {
            return (
              <p key={index} className="text-2xl font-bold font-mono">
                {ele}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
