import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const Banner = () => {
  return (
    <section className=" bg-[#fef5e3] pb-[168px] ">
      <Container>
        <Flex>
          <div className=" pt-[260px] w-[40%] ">
            <h1 className=" text-[49px] font-raleway font-normal text-[#261134] leading-[120%] ">
              A trusted provider of <br />
              <span className=" font-extrabold">courier services.</span>
            </h1>
            <p className=" text-[20px] text-[#4D4D4D] font-raleway font-normal leading-[120%] mt-[16px] ">
              We deliver your products safely to <br /> your home in a
              reasonable time.
            </p>
            <button
              className=" mt-[41px] py-[12px] pr-[31px] pl-[20px] bg-orange text-white rounded-[5px] 
            text-[20px] font-raleway font-medium hover:bg-white hover:text-orange duration-300 ease-out "
            >
              Get started
            </button>
          </div>
          <div className=" w-[60%] pt-[170.48px] ">
            <Image src="images/banner.png" alt="banner_image" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
