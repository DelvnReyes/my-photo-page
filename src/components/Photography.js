import React from "react";

const Photography = ({ image }) => {
    

    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src = { image.photo } alt='' className='w-full'></img>
        <div className='px-6 py-4'>
        <ul>
          <li>
            <strong className="px-1 text-white">
              {image.name}
            </strong>
          </li>
          
          <li>
            <strong className="px-1 text-white">
            Views: {image.views}
            </strong>
          </li>

          <li>
            <strong className="px-1 text-lg text-white">
            {image.social} 
            </strong>
          </li>
        </ul>
        </div>
      </div>
      );
}

export default Photography;