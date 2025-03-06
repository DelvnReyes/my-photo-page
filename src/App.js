import React, { useEffect, useState } from "react";
import Photography from "./components/Photography";
import { photoshoots, categories } from "./Data";
import Header from "./components/Header";
import Profilepic from "./components/Profilepic";
// import Prices from "./components/Prices";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";

const App = () => {
  const [pics, setPics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // New state to track selected category

  useEffect(() => {
    setPics(photoshoots); // Set the photoshoot data
  }, []);

  const handleCategoryClick = (category) => {
    const filteredPics = photoshoots.filter((pic) => pic.category === category);
    setPics(filteredPics); // Update pics to show only the selected category
    setSelectedCategory(category); // Update selected category
  };

  const resetCategory = () => {
    setPics(photoshoots); // Reset to show all images
    setSelectedCategory(null); // Reset category selection
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="container mx-auto">
        <Header />
        <Profilepic />

        {!selectedCategory && (
          <div className="grid grid-cols-2 gap-4 py-5">
            {categories.map((category) => (
              <div
                key={category.name}
                className="font-extralight cursor-pointer"
                onClick={() => handleCategoryClick(category.name)}
              >
                <img
                  src={category.coverImage}
                  alt={category.name}
                  className="w-64 h-65 object-cover rounded-lg"
                />
                <h3 className="text-center text-white text-xl mt-2">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        )}

        {selectedCategory && (
          <div className="text-center mt-4 py-4">
            <button
              className="bg-gradient-to-r from-gray-500 text-white px-4 py-2 rounded font-semibold"
              onClick={resetCategory}
            >
              Back to Categories
            </button>
          </div>
        )}

        {/* Display images in a grid */}
        {selectedCategory && (
          <div className="flex flex-col justify-center items-center space-y-1">
            {pics.map((picture) => (
              <Photography
                key={picture.photo}
                image={picture}
              />
            ))}
            
          </div>
        )}

        {selectedCategory && (
          <div className="text-center mt-4 py-2">
            <button
              className="bg-gradient-to-r from-gray-500 text-white px-4 py-2 rounded font-semibold"
              onClick={resetCategory}
            >
              Back to Categories
            </button>
          </div>
        )}

        {/* <Prices /> */}
        <Requirements />
      </div>
      <Footer />
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import Photography from "./components/Photography";
// import { photoshoots } from "./Data";
// import Header from "./components/Header";
// import Profilepic from "./components/Profilepic";
// import Requirements from "./components/Requirements";
// import Footer from "./components/Footer";

// const App = () => {
//   const [pics, setPics] = useState([]);

//   useEffect(() => {
//     setPics(photoshoots); // Set the photoshoot data
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-gray-800 to-gray-500">
//       <div className="container mx-auto">
//         <Header />
//         <Profilepic />

//         {/* Display images in a 4-column grid */}
//         <div className="grid grid-cols-3 gap-4 py-5">
//           {pics.map((picture) => (
//             <Photography key={picture.photo} image={picture} />
//           ))}
//         </div>

//         <Requirements />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default App;

