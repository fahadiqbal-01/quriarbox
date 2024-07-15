import React from "react";
import Container from "./Container";
import Image from "./Image";
import List from "./List";
import { Listitems } from "./Listitems";

const NavBar = () => {
  return (
    <nav className=" bg-[#fdf8ef]">
      <Container>
        <div className=" flex justify-between items-center pt-[15px] pb-[18px] ">
          <Image src="images/Logo.png" alt="navbar_logo" />
          <div className=" flex justify-between items-center gap-[45px] cursor-pointer ">
            <List className=" flex items-center gap-[25px] ">
              <Listitems className=" text-[16px] font-bold font-raleway text-[#817382] hover:text-orange duration-300 ease-out ">
                Home
              </Listitems>
              <Listitems className=" text-[16px] font-bold font-raleway text-[#817382] hover:text-orange duration-300 ease-out ">
                Our services
              </Listitems>
              <Listitems className=" text-[16px] font-bold font-raleway text-[#817382] hover:text-orange duration-300 ease-out ">
                About Us
              </Listitems>
              <Listitems className=" text-[16px] font-bold font-raleway text-[#817382] hover:text-orange duration-300 ease-out ">
                What’s new?
              </Listitems>
            </List>
            <button className=" px-[20px] py-[12px] bg-[#FFE4D9] text-orange text-[20px] font-raleway font-bold hover:bg-transparent hover:scale-[0.8] duration-300 ease-out ">
              Contact us
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
