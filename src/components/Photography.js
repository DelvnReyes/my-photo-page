import React from "react";


const Photography = ({ image }) => {
    

    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src = { image.image } alt='' className='w-full'></img>
        <div className='px-6 py-4'>
        <div className='font-bold text-black-500 text-xl mb-2'>
        Photo by Delvin Reyes
        </div>
        <ul>
          <li>
            <strong className="px-1">
              {image.name}
            </strong>
            
          </li>
          <li>
            <strong className="px-1">
            Views:
            </strong>
            {image.views}
        
          </li>
        </ul>
        </div>
      </div>
      );
}

export default Photography;