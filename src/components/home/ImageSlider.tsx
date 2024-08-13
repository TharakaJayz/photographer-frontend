
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Wrapper } from "../Wrapper";
import Loading from "../Loading";

interface Props {
  images: string[];
  loading: boolean
}

const ImageSlider = ({ images, loading }: Props) => {


  return (
    <>
      <Wrapper extraStyles={`w-full m-0 ${loading ? 'opacity-0' : ''}`}>
        {images.length >=5 && (
          <Swiper
            loop={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}

            speed={1500}


            modules={[Pagination, Autoplay]}
            className="mySwiper border w-full "
          >
            {(images.length >=5) ?  images.map((singleImage, index) => (
              <SwiperSlide>
                {" "}
                <img
                  key={index}
                  src={singleImage}
                  alt="image_slider"
                  className="h-vh100 w-full object-cover object-center  sm_:h-vh50 md_:h-vh60 lg2_:h-vh80 lg_:h-vh80 sm_3:min-h-vh80"
                />
              </SwiperSlide>
            )): (<div></div>)}
          </Swiper>
        )}
      </Wrapper>
      {
        loading && (
          <Loading />
        )
      }
    </>
  );
};

export default ImageSlider;
