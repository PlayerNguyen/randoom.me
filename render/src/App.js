import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./routes/About/About";
import Home from "./routes/Home/Home";
import { Randoom } from "./routes/Randoom/Randoom";
import RollDice from "./routes/RollDice/RollDice";
import String from "./routes/String/String";
import MenuItem from "./utils/MenuItem";

function App() {
  const [item] = useState([
    { component: <Home />, url: "/" },
    { component: <Randoom />, url: "/number-random" },
    { component: <String />, url: "/string-random" },
    { component: <RollDice />, url: "/roll-a-dice" },
    { component: <About />, url: "/about" },
  ]);

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col md:flex-row p-3 items-start gap-2">
        <div className="w-full md:w-1/5 bg-slate-100 text-gray-600 rounded min-h-400 p-3 ">
          {MenuItem.map((item, index) => {
            return (
              <div className="px-4 py-3" key={index}>
                <Link to={`${item.url}`}>{item.title}</Link>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-4/5">
          <Routes>
            {item.map((item, index) => (
              <Route key={index} path={item.url} element={item.component} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
