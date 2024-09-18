import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


type props = {
  extraStyle: any;
};

const Footer = (props: props) => {
  const emailAddress = "ameliaweddingstudio@gmail.com";
  const subject = "test subject";
  const body = "test bodyy";

  const emailLink = `mailto:${emailAddress}?
  subject=${subject}&body=${body}`;

  return (
    <div
      className={`flex items-center justify-center w-full mt-vh5 text-white ${props.extraStyle} bg-navcolor  `}
    >
      {/* <div className={`flex items-center justify-center w-full mt-vh5 bg-gradient-to-r from-primary_light3  to-primary_light4 text-white ${props.extraStyle} `}> */}
      <div className="w-full px-vw5 pt-vh10 pb-vh5 flex flex-col justify-center gap-vh4 ">
        <div className="w-full flex flex-col gap-vh2">
          <div className="flex justify-end items-center gap-[10px]">
            <button>
              <FaFacebookSquare />
            </button>
            <button>
              <FaInstagram />
            </button>
          </div>
          <div className="w-full bg-white h-[1.5px] "></div>
        </div>

        <div className="flex flex-col gap-vh1">
          <a className="w-full text-right" href={emailLink}>ameliaweddingstudio@gmail.com</a>
          <p className="w-full text-right capitalize">
            207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka, 10230
          </p>
          <p className="w-full text-right">+94718736668</p>
        </div>
        
        {/* <div className=" flex flex-col gap-vh2 py-vh5 justify-center items-center">
                <Logo/>
                <p className="w-full text-center">
                ameliaweddingstudio@gmail.com</p>
                <p className="w-full text-center capitalize">
                207/1,Rathmaldeniya Road, Pannipitiya, Sri Lanka, 10230</p>
                <p className="w-full text-center">
                +94718736614</p>
               
                <div className="w-full flex justify-center items-center gap-vw1">
                    <button>

                <FaFacebookSquare />
                    </button>
                    <button>

                <FaInstagram />
                    </button>
                </div>
                </div> */}
      </div>
    </div>
  );
};

export default Footer;
