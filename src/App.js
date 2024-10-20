import React, { useEffect, useState } from "react";
import Photography from "./components/Photography";
import { photoshoots } from "./Data";
import Header from "./components/Header";
import Profilepic from "./components/Profilepic";
import Prices from "./components/Prices";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";
import { AiOutlineClose } from "react-icons/ai";

const App = () => {
  const [pics, setPics] = useState([]);
  const [selectedPic, setSelectedPic] = useState(null); // State to track selected image

  useEffect(() => {
    setPics(photoshoots);
  }, []);

  const handleClick = (picture) => {
    setSelectedPic(picture); // Set selected image
  };

  const closeModal = () => {
    setSelectedPic(null); // Close the modal
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-500">
      <div className="container mx-auto">
        <Header />
        <Profilepic />

        <div className="grid grid-cols-3 gap-4">
          {pics.map((picture) => {
            return (
              <Photography
                key={picture.image}
                image={picture}
                onClick={() => handleClick(picture)} // On click, open modal
              />
            );
          })}
        </div>

        <Prices />
        <Requirements />
      </div>

      <Footer />

      {/* Modal for displaying selected image */}
      {selectedPic && (
        <div
          className="fixed inset-0 flex justify-center items-center backdrop-blur bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <AiOutlineClose
              size={40}
              className="absolute top-2 right-2 text-[#64748b] cursor-pointer"
              onClick={closeModal}
            />
            <img
              src={selectedPic.photo} // Display selected image
              alt="Selected"
              className="max-w-full max-h-screen"
            />
            <div className="text-center mt-4">
              <h2 className="text-white text-2xl font-semibold flex justify-center items-center">
                {selectedPic.social}{selectedPic.name}
                </h2>
              <p className="text-white">Views: {selectedPic.views}</p> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
