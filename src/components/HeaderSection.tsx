

interface Props {
  title: string;
  desc: string;
  imgUrl?: string;
  TextLogic: boolean;
}

const HeaderSection = (props: Props) => {
  return (
    <div className="w-full   flex flex-col justify-between gap-vh5 mb-vh3  sm_3:justify-start sm_3:items-start z-20">
      <img
        src={props.imgUrl || ""}
        alt="img"
        className="w-full h-auto object-cover object-center sm_3:h-vh70  bg-red-300 header_image "
      />
      {props.TextLogic && (
        // <div className="flex flex-col h-vh20 justify-start pt-vh2 text-center gap-vh2">
        //   <h2 className="font-bold text-2xl">{props.title}</h2>
        //   <p>{props.desc}</p>
        // </div>

        <section className="w-full flex flex-col gap-vh5 xl2_:gap-vh5 items-center px-vw5">
          <h1 className="font-bold text-3xl text-center  capitalize text-service_svg_bg">
          {props.title}
          </h1>
          <p className="w-p80 sm_:text-justify text-center xl2_:w-full capitalize ">
          {props.desc}
          </p>
        </section>
      )}
    </div>
  );
};

export default HeaderSection;
