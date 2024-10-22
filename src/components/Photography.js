import React from "react";

const Photography = ({ image, onClick }) => {
  
  return (
    <div className="max-w-sm rounded overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={image.photo} alt="photoshoots" className="w-full"></img>
      <div className="px-6 py-2">
        <ul>
          {/* <li className="flex">
            <h2 className="px-1 text-lg text-white">{image.social}</h2>
            <h2 className="px-1 text-white">{image.name}</h2>
          </li> */}

          {/* <li>
            <strong className="px-1 text-white">Views: {image.views}</strong>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Photography;
