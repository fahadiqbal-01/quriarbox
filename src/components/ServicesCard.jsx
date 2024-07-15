import React from "react";
import Image from "./Image";

const ServicesCard = ({
  src,
  alt,
  cardTitle,
  details,
  className,
  listItem1,
  listItem2,
  listItem3,
}) => {
  return (
    <div className=" bg-white rounded-[16px] border-[1px] border-transparent w-[424px] px-[61px] ">
      <img src={src} alt={alt} className={`mx-auto mt-[66px] ${className}`} />
      <h2 className=" text-[25px] font-raleway font-extrabold text-[#464558] mt-[29px] text-center ">
        {cardTitle}
      </h2>
      <p className=" text-[16px] font-raleway font-normal text-[#7B7A8B] mt-[32px] text-left ">
        {details}
      </p>
      <ul className=" mt-[36px]">
        <li className=" w-fit text-[16px] font-normal font-raleway text-[#7B7A8B] cursor-pointer flex items-center 
        gap-[11.5px] hover:text-[#D9D9D9] duration-300 ease-out ">
          <div className=" h-[7px] w-[7px] bg-orange rounded-full "></div>
          {listItem1}
        </li>
        <li className=" w-fit text-[16px] font-normal font-raleway text-[#7B7A8B] cursor-pointer flex items-center 
        gap-[11.5px] mt-[11px] hover:text-[#D9D9D9] duration-300 ease-out ">
          <div className=" h-[7px] w-[7px] bg-orange rounded-full "></div>
          {listItem2}
        </li>
        <li className=" w-fit text-[16px] font-normal font-raleway text-[#7B7A8B] cursor-pointer flex items-center
         gap-[11.5px] mt-[11px] hover:text-[#D9D9D9] duration-300 ease-out ">
          <div className=" h-[7px] w-[7px] bg-orange rounded-full "></div>
          {listItem3}
        </li>
      </ul>
      <button
        className=" text-[20px] font-raleway font-bold text-orange px-[94px] py-[12px]
       bg-transparent border-[1px] border-orange rounded-[5px] mt-[60px] mb-[49px] hover:bg-orange hover:border-transparent hover:text-white duration-300 ease-out "
      >
        Learn more
      </button>
    </div>
  );
};

export default ServicesCard;
