import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, url }) => {
  return (
    <div>
      <Link to={`${url}`}>
        <div className="w-full p-3 mb-3  rounded bg-gradient-to-r from-green-300 to-lime-300 flex-1">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="mt-2">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
