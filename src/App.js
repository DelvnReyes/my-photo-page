import React, { useEffect, useState } from "react";
import Photography from "./components/Photography";
import { photoshoots } from "./Data";

const App = () => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    setPics(photoshoots);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">{pics.map(picture => {
        return (
          <Photography key={picture.image} image={picture}/>
        )

      })}
        
      </div>
    </div>
  );
};

export default App;
