import React from 'react'

const Title = ({title, subtitle, className}) => {
  return (
    <div className={` text-center mx-auto ${className} `}>
        <h4 className=' text-[32px] font-raleway font-bold text-orange '>{title}</h4>
        <h2 className=' text-[40px] font-raleway font-extrabold text-[#11111D] mt-[12px] '>{subtitle}</h2>
    </div>
  )
}

export default Title