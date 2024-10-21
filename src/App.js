import React, { useEffect, useState } from "react";
import Photography from "./components/Photography";
import { photoshoots } from "./Data";
import Header from "./components/Header";
import Profilepic from "./components/Profilepic";
import Prices from "./components/Prices";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const App = () => {
  const [pics, setPics] = useState([]);
  const [selectedPic, setSelectedPic] = useState(null); // State to track selected image index
  const [touchStartX, setTouchStartX] = useState(0); // Track touch start X position
  const [touchEndX, setTouchEndX] = useState(0); // Track touch end X position

  useEffect(() => {
    setPics(photoshoots); // Set the photoshoot data
  }, []);

  const handleClick = (index) => {
    setSelectedPic(index); // Set the index of the selected image
  };

  const closeModal = () => {
    setSelectedPic(null); // Close the modal
  };

  const showPrevious = () => {
    if (selectedPic > 0) {
      setSelectedPic(selectedPic - 1); // Show the previous image
    }
  };

  const showNext = () => {
    if (selectedPic < pics.length - 1) {
      setSelectedPic(selectedPic + 1); // Show the next image
    }
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Record the starting X position of the touch
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX); // Continuously track the X position of the touch
  };

  // Handle touch end (when the user lifts their finger)
  const handleTouchEnd = () => {
    // Detect swipe direction
    if (touchStartX - touchEndX > 50) {
      // Swipe left (show next image)
      showNext();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right (show previous image)
      showPrevious();
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500">
      <div className="container mx-auto">
        <Header />
        <Profilepic />

        {/* Display images in a grid */}
        <div className="grid grid-cols-3 gap-4">
          {pics.map((picture, index) => (
            <Photography
              key={picture.image}
              image={picture}
              onClick={() => handleClick(index)} // Set index of clicked image
            />
          ))}
        </div>

        <Prices />
        <Requirements />
      </div>

      <Footer />

      {/* Modal for displaying selected image */}
      {selectedPic !== null && (
        <div
          className="fixed inset-0 flex justify-center items-center backdrop-blur-lg bg-opacity-75 z-50"
          onClick={closeModal}
          onTouchStart={handleTouchStart} // Start tracking touch
          onTouchMove={handleTouchMove} // Continuously track touch position
          onTouchEnd={handleTouchEnd} // Detect swipe direction when touch ends
        >
          {/* IN CASE CLOSE FUNCTIONALITY DONT WORK ON MOBILE*/}
          <div className="relative" onClick={closeModal}>
            {/* Close button */}
            {/* <AiOutlineClose
              size={40}
              className="absolute top-2 right-2 text-[#64748b] cursor-pointer"
              onClick={closeModal}
            /> */}

            {/* Display selected image */}
            <img
              src={pics[selectedPic].photo} // Access the image from pics array
              alt={pics[selectedPic].name}
              className="max-w-[90%] max-h-[90vh] mx-auto"
            />

            {/* Display image name and views */}
            <div className="text-center mt-4">
              <h2 className="text-white text-2xl font-semibold flex justify-center items-center">
                {pics[selectedPic].social}
                {pics[selectedPic].name} {/* Image name */}
              </h2>
              <p className="text-white">Views: {pics[selectedPic].views}</p>{" "}
              {/* Image views */}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
