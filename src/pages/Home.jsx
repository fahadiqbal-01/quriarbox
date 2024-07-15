import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Awards from "../components/Awards";
import FastDelivery from "../components/FastDelivery";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Awards />
      <FastDelivery />
      <Testimonial />
    </>
  );
};

export default Home;
