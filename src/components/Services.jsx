import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className=" bg-[#fef5e3] pb-[172px] ">
      <Container>
        <Title title="SERVICES" subtitle="Our services for you" />
        <Flex className=" justify-between mt-[85px] ">
        <ServicesCard
            src="images/iCON.png"
            alt="business_icon"
            cardTitle="Business Services"
            details="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."
            listItem1="Corporate goods"
            listItem2="Shipment"
            listItem3="Accesories"
          />
          <ServicesCard
            src="images/Icon2.png"
            alt="business_icon"
            cardTitle="Statewide Services"
            details="Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours."
            listItem1="Personal items"
            listItem2="Percels"
            listItem3="Documents"
          />
          <ServicesCard
            src="images/Icon3.png"
            alt="business_icon"
            cardTitle="Personal Services"
            details="You can trust us to safely deliver your most sensitive documents to the specific area in a short time."
            listItem1="Gifts"
            listItem2="Package"
            listItem3="Documents"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Services;
