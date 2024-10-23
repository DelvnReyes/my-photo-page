import React, { useEffect, useState } from "react";
import Photography from "./components/Photography";
import { photoshoots, categories } from "./Data";
import Header from "./components/Header";
import Profilepic from "./components/Profilepic";
import Prices from "./components/Prices";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";

const App = () => {
  const [pics, setPics] = useState([]);
  // const [touchStartX, setTouchStartX] = useState(0); // Track touch start X position
  // const [touchEndX, setTouchEndX] = useState(0); // Track touch end X position
  const [selectedCategory, setSelectedCategory] = useState(null); // New state to track selected category

  useEffect(() => {
    setPics(photoshoots); // Set the photoshoot data
  }, []);

  // useEffect(() => {
  //   if (selectedPic !== null) {
  //     // Disable scrolling when modal is open
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Re-enable scrolling when modal is closed
  //     document.body.style.overflow = "auto";
  //   }
  // }, [selectedPic]);

  const handleCategoryClick = (category) => {
    const filteredPics = photoshoots.filter((pic) => pic.category === category);
    setPics(filteredPics); // Update pics to show only the selected category
    setSelectedCategory(category); // Update selected category
  };

  const resetCategory = () => {
    setPics(photoshoots); // Reset to show all images
    setSelectedCategory(null); // Reset category selection
  };

  // const showPrevious = () => {
  //   if (selectedPic > 0) {
  //     setSelectedPic(selectedPic - 1); // Show the previous image
  //   }
  // };

  // const showNext = () => {
  //   if (selectedPic < pics.length - 1) {
  //     setSelectedPic(selectedPic + 1); // Show the next image
  //   }
  // };

  // // Handle touch start
  // const handleTouchStart = (e) => {
  //   setTouchStartX(e.touches[0].clientX); // Record the starting X position of the touch
  // };

  // // Handle touch move
  // const handleTouchMove = (e) => {
  //   setTouchEndX(e.touches[0].clientX); // Continuously track the X position of the touch
  // };

  // // Handle touch end (when the user lifts their finger)
  // const handleTouchEnd = () => {
  //   // Detect swipe direction
  //   if (touchStartX - touchEndX > 50) {
  //     // Swipe left (show next image)
  //     showNext();
  //   } else if (touchEndX - touchStartX > 50) {
  //     // Swipe right (show previous image)
  //     showPrevious();
  //   }
  // };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500">
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
              className="bg-gradient-to-r from-indigo-500 text-white px-4 py-2 rounded font-semibold"
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
              className="bg-gradient-to-r from-indigo-500 text-white px-4 py-2 rounded font-semibold"
              onClick={resetCategory}
            >
              Back to Categories
            </button>
          </div>
        )}

        <Prices />
        <Requirements />
      </div>

      <Footer />

    </div>
  );
};

export default App;
