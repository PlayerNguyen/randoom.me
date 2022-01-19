import React, { useState } from "react";
import Dice from "./Dice";

export default function RollDice() {
  const [dices, setDices] = useState([]);

  return (
    <div className="flex flex-col md:flex-row gap-2 items-start">
      <div className="p-6 bg-gray-200 w-full md:w-1/3 rounded">
        <h1 className="text-3xl font-bold">Roll a dice</h1>
        <p className="text-xl">Generate a dice roll</p>
        <div className="flex flex-col mt-6">
          <button
            className="py-4 font-bold text-lg rounded bg-red-500"
            onClick={() => {
              setDices([]);
              setDices([
                Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1,
              ]);
            }}
          >
            Roll
          </button>
        </div>
      </div>
      <div className="p-6 bg-gray-200 w-full md:w-2/3 rounded flex flex-col justify-center items-center">
        {dices.length === 0 ? (
          <>
            <div className="font-semibold text-4xl">
              Press Roll to roll your lucky dice!
            </div>
          </>
        ) : (
          <div className="flex flex-col md:flex-row gap-12">
            {dices.map((_e, _i) => {
              return <Dice key={_i} number={_e} />;
            })}
          </div>
        )}
        {/* <div className="mt-5 ">
          <h1 className="font-bold text-6xl">
            {dices.reduce((_a, _b) => _a + _b)}
          </h1>
        </div> */}
      </div>
    </div>
  );
}
