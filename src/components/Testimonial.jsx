import React from "react";
import Container from "./Container";
import Title from "./Title";
import Image from "./Image";
import ReviewCart from "./ReviewCart";

const Testimonial = () => {
  return (
    <div className=" bg-background pb-[266px] ">
      <Container>
        <div className=" flex items-center justify-center gap-[38px] relative mb-[80px] ">
          <Image
            src="images/Quote icon.png"
            className=" inline-block absolute left-[280px] top-[-10px] "
          />
          <Title subtitle="Our Awesome Clients" title="TESTIMONIAL" />
        </div>
        <ReviewCart
          cartTitle="Fantastic service!"
          description="I purchased a phone from an e-commerce site, and this courier service 
          provider assisted me in getting it delivered to my home. I received my phone within
           one day, and I was really satisfied with their service when I received it. They are 
           really quick and dependable. They give me with the option of real-time delivery status,
            which allows me to track the progress of my goods delivery. I get a lot of questions from
             call center support and key account managers. They come highly recommended. Confidently say that they are really reliable."
        />
      </Container>
    </div>
  );
};

export default Testimonial;
