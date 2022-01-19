import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import MenuItem from "../../utils/MenuItem";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(MenuItem);
  }, []);
  return (
    <div className="App-Home">
      <div className="flex flex-col md:flex-row gap-2">
        {items.map((item, index) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              url={item.url}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
