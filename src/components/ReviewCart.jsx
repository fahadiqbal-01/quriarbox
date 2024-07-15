import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCart = ({ cartTitle, description }) => {
  return (
    <div className=" px-[33.5px] py-[36.5px] bg-white rounded-[16px] w-fit mx-auto ">
      <h1 className=" text-[25px] font-raleway font-bold leading-[120%] text-orange ">
        {cartTitle}
      </h1>
      <p className=" text-[16px] font-raleway font-normal leading-[145%] text-[#464558] mt-[11px] w-[799.39px] ">
        {description}
      </p>
      <div className=" mt-[28.50px] flex justify-between items-center ">
        <h4 className=" flex items-center justify-center gap-[7px] ">
          <FaStar className=" text-[19px] text-orange " />
          <FaStar className=" text-[19px] text-orange " />
          <FaStar className=" text-[19px] text-orange " />
          <FaStar className=" text-[19px] text-orange " />
          <FaStar className=" text-[19px] text-orange " />
        </h4>
        <div className=" flex items-center justify-center gap-[13px] ">
          <div className=" text-right ">
            <h2 className=" text-[16px] font-raleway font-bold leading-[120%] tracking-[2px] text-[#222132] ">Yves Tanguy</h2>
            <h4 className=" text-[16px] font-raleway font-normal leading-[120%] tracking-[2px] text-[#222132] mt-[5px] " >Chief Executive, DLF</h4>
          </div>
          <img src="images/Avatar.png" alt="review_img" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
