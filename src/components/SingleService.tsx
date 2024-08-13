import React, { useEffect, useState } from "react";
import { serviceType } from "./home/HomeService";



const SingleService = (props: serviceType) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".home_service_animation");

    if (element && !hasAnimated ) {
      element.addEventListener("animationend", () => {
    
        setHasAnimated(true);
      });

      

      console.log("has animate",hasAnimated)
    }

    return () => {
      if (element) {
        element.removeEventListener("animationend", () => {
         
          
        });
      }
    };
  }, [hasAnimated]);

  return (
    <div
      key={props.keyIndex}
      className={`w-p35 xl_:w-full border border-gray-200 rounded-2xl bg-primary_light1 flex items-center justify-center py-vh5 opacity-0  home_service_animation`}
    >
      <div className="w-full px-vw2 py-vh2 flex flex-col items-center gap-vh1">
        <h4 className="font-bold text-xl capitalize text-service_svg_bg">
          {" "}
          {props.topic}
        </h4>
        <section className="flex items-center justify-center w-full  sm_:w-p60 md_:w-p35 lg2_:w-p30 lg_:w-p25 xl2_:w-p20 ">
          <span className="h-px2 w-1/5 bg-gray-400"></span>
          <span className="bg-service_svg_bg p-px3 rounded-2xl flex items-center justify-center text-white">
            {props.svg}
          </span>
          <span className="h-px2 w-1/5 bg-gray-400"></span>
        </section>
        <p className="w-full text-center">{props.desc}</p>
      </div>
    </div>
  );
};

export default SingleService;
