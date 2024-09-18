import React from "react";
import ServiceImages from "./ServiceImages";

interface Props {}

const Service = (props: Props) => {
  return (
    <div className="h-[100vh]  w-full flex flex-col justify-between pt-3 mt-5 px-vw5 ">
       <h1 className='font-bold text-3xl text-center  capitalize text-service_svg_bg lg2_:mb-5'>Our Services</h1>
      <ServiceImages Style="h-[90%]   w-full" />
    </div>
  );
};

export default Service;
