import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Awarditem from "./Awarditem";
import { GrTrophy } from "react-icons/gr";
import { FaRegMap } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Awards = () => {
  return (
    <section className=" bg-background pb-[162px] pointer-events-none ">
      <Container>
        <Flex className=" justify-between items-center ">
          <Awarditem icon={<GrTrophy />} awardNumber="26+" awardTitle="Awards  won" />
          <Awarditem icon={<FaRegMap />} awardNumber="65+" awardTitle="States covered" />
          <Awarditem icon={<GrTrophy />} awardNumber="689K+" awardTitle="Happy clients" />
          <Awarditem icon={<TbTruckDelivery />} awardNumber="130M+" awardTitle="Goods delivered" />
          <Awarditem icon={<MdOutlineBusinessCenter />} awardNumber="130M+" awardTitle="Business hours" />
        </Flex>
      </Container>
    </section>
  );
};

export default Awards;
