import React from 'react'
import { prices } from "../Data";

const Prices = () =>{

    return (
        <div className='text-white text-xl'>
            <div>{prices.map(price => {
        return(
          <div key={prices.id} className="flex gap-4 p-4">
            <div className="text-[#4d7c0f] text-[2rem]">{prices.icon}</div>
            <div>
            <h3 className="text-xl font-bold">{price.title}</h3>
            <div className="opacity-80 mt-4 text-[0.9rem]">
            <p>{price.text}</p>
            <br/>
            <p>{price.text2}</p>
            <br/>
            <p>{price.text3}</p>
            <br/>
            <p>{price.text4}</p>
            <br/>
            <p>{price.text5}</p>
            <br/>
            <p>{price.text6}</p>
            </div>
            </div>
          </div>
        )

      })}
      </div>
        </div>
    )

}

export default Prices