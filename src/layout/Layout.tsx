import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { PiArrowSquareUpFill } from "react-icons/pi";
interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("set TIme out");
      if (isLoading) {
        setIsLoading(false);
      }
    }, 2000);
  }, [isLoading]);

  const scroll = ()  =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling
      });
  }

  return (
    <div className={`relative  `}>
      <Loading extraStyles={`${isLoading ? "" : "hidden"}`} />
      <Navbar
        onCallBack={() => {
          setIsLoading(true);
            scroll()
        }}
        extraStyle={`${isLoading ? "opacity-0" : "opacity-100"} transition-all `}
      />
      <div
        className={`${isLoading ? "opacity-0 " : "opacity-100"} transition-all  `}
      >
        {props.children}
      </div>

      <div className=" rounded-full h-5 w-5 fixed right-vw2 bottom-vh2  sm_3:left-[5px]"> <PiArrowSquareUpFill onClick={scroll} size={30} className="text-sky-400 z-10 hover:cursor-pointer"/></div>
      <Footer
        extraStyle={`${isLoading ? "opacity-0" : "opacity-100"} transition-all `}
      />
    </div>
  );
};

export default Layout;
