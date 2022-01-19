import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarItem] = useState([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div>
      <nav className="bg-zinc-800 px-10 py-6 text-white">
        <div>
          {navbarItem.map((item, index) => (
            <Link className="mr-6" key={index} to={`${item.url}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
