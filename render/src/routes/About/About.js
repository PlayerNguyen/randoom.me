import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-start p-3 bg-gray-200 rounded">
      <div className="mx-24">
        {/* Present card */}
        <div>
          <div className="mt-3">
            <h1 className="text-3xl font-bold">About</h1>
            <p className="mt-3 text-lg text-gray-700">
              This website was built by
              <a
                target="_blank"
                href={`https://github.com/PlayerNguyen`}
                rel="noreferrer"
                className="text-cyan-700"
              >
                @Player_Nguyen
              </a>{" "}
              with the powerful help of JavaScript library call React.js and
              TailwindCSS. The purpose of this website is to get a randomly
              number, string, or some dice roll. In general, this website
              provides many other utilities to work with (or some funny stuffs,
              idk). <br></br>
              In the future, I am expecting to see my work is useful and I am
              going to create a flip card game.
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-3xl font-bold ">Introduction</h1>
            <p className="mt-3 text-gray-700">
              Greetings, I am currently studying at the International University
              (in 2020) in Ho Chi Minh City, Vietnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
