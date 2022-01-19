import React, { useState } from "react";
import ResizableHeightTextarea from "../../components/ResizableHeightTextarea";

export default function String() {
  const [words, setWords] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = () => {
    let _arr = [];
    const list = words.split("\n");
    for (let item of list) {
      _arr.push(item);
    }
    const random = _arr[Math.floor(Math.random() * _arr.length)];
    setResult(random);
  };

  return (
    <div className=" flex flex-col md:flex-row gap-2 items-start">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded w-full md:w-1/3">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Word</h1>
          <p>Select a word from the list</p>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-2 mt-4">
          <ResizableHeightTextarea
            onChange={(_event, content) => {
              setWords(content);
            }}
          />
        </div>
        {/* Footer */}
        <div className="flex flex-col">
          <button
            className="bg-yellow-400 mt-3 font-bold py-2 rounded"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="w-full p-6 bg-white rounded">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Result</h1>
          <p>The result of the word</p>
        </div>
        <hr />
        <div>{result}</div>
      </div>
    </div>
  );
}
