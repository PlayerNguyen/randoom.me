import React, { useRef } from "react";

const ResizableHeightTextarea = ({ onChange }) => {
  const inputElement = useRef(null);

  const handleChange = (event) => {
    const content = event.target.value;
    onChange(event, content);
    inputElement.current.style.height = "5px";
    inputElement.current.style.height =
      inputElement.current.scrollHeight + "px";
  };

  return (
    <textarea
      ref={inputElement}
      onInput={handleChange}
      className="p-2 rounded outline-none border-lime-100 border-solid min-h-full bg-slate-50"
    ></textarea>
  );
};

export default ResizableHeightTextarea;
