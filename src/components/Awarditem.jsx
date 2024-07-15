import React from 'react'

const Awarditem = ({icon, awardNumber, awardTitle}) => {
  return (
    <div className=' text-center w-fit py-2 '>
         <h3 className=' text-[67.5px] inline-block '>{icon}</h3>
        <h2 className=' text-[49px] font-extrabold text-orange leading-[110%] mt-[20px] '>{awardNumber}</h2>
        <h4 className=' text-[20px] font-raleway font-bold text-[#464558] leading-[120%] mt-[6px] '>{awardTitle}</h4>
    </div>
  )
}

export default Awarditem