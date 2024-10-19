import React, { useEffect, useState } from "react";
import Photography from "./components/Photography";
import { photoshoots } from "./Data";
import Header from "./components/Header";
import Profilepic from "./components/Profilepic";
import Prices from "./components/Prices";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";


const App = () => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    setPics(photoshoots);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500">
    <div className="container mx-auto">
      <Header />
      <Profilepic />
      <div className="grid grid-cols-3 gap-4">{pics.map(picture => {
        return (
          <Photography key={picture.image} image={picture}/>
        )

      })}
        </div>
        <Prices />
        <Requirements />
      </div>
      <Footer />
    </div>
  );
};

export default App;
