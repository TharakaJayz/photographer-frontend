import ServiceImageSingle from "./ServiceImageSingle";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";
interface Props {
  Style?: string;
}

const ServiceImages: React.FC<Props> = ({ Style }) => {
  return (
    <>
      <div
        className={`${Style} flex justify-between items-center gap-2 lg2_:hidden`}
      >
        <ServiceImageSingle
          Style="flex-1 h-full"
          src="https://lh3.googleusercontent.com/pw/AP1GczMGvuXAiVBiB-2Qlr2ikg78NziRvgY6yrgRzGfiS6q4vIrs7gvRR6JQWPSOYpio0V_cC-9_oooFu4CdIIQmGiEA0vgSxmgoNy1YupcA-VkJH_O8UytNbP-7TMspEHHWI7pCc7vgXlKzyxcjn2SnKqYA=w609-h913-s-no-gm?authuser=0"
          title="Weddings"
          desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences"
        />

        <ServiceImageSingle
          Style="flex-1 h-full"
          src="https://lh3.googleusercontent.com/pw/AP1GczM59CIpet9t8wyCmaVkdrg1AdfwCvj1chAJOg1mGgmtvF1UqfgnP9ID3ke785wQBgNfKCYdUkVfksTF_n-g_MlwhtVhzMfs99pkqNsrhVlqwvRXNCicgBfH2O2dYxMbt1ycIfk3iBzXiBpe4BNC043D=w609-h913-s-no-gm?authuser=0"
          title="Engagements"
          desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences"
        />

        <ServiceImageSingle
          Style="flex-1 h-full"
          src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/431968280_901556608644850_6517733653551307726_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=EmoX4zQr2fwQ7kNvgE3bkA6&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=AUYiMqBYHDRI54gNj25hgjR&oh=00_AYBM1eeTXVSw_WrXvaSQ-el0TnKS7yOVgQb_XimEYYBVHA&oe=66F09E53"
          title="Pre-shoots
"
          desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences"
        />
      </div>

      <Swiper
        className="mySwiper service_slider h-full flex gap-5 "
        loop={true}
        pagination={true}
        modules={[Pagination]}
        //   slidesPerView={1}
        slidesPerView={1}
        centeredSlides={true}
        //   spaceBetween={10}
      >
        <SwiperSlide>
          <ServiceImageSingle
            Style="flex-1 h-full"
            src="https://lh3.googleusercontent.com/pw/AP1GczMGvuXAiVBiB-2Qlr2ikg78NziRvgY6yrgRzGfiS6q4vIrs7gvRR6JQWPSOYpio0V_cC-9_oooFu4CdIIQmGiEA0vgSxmgoNy1YupcA-VkJH_O8UytNbP-7TMspEHHWI7pCc7vgXlKzyxcjn2SnKqYA=w609-h913-s-no-gm?authuser=0"
            title="Weddings"
            desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceImageSingle
            Style="flex-1 h-full"
            src="https://lh3.googleusercontent.com/pw/AP1GczM59CIpet9t8wyCmaVkdrg1AdfwCvj1chAJOg1mGgmtvF1UqfgnP9ID3ke785wQBgNfKCYdUkVfksTF_n-g_MlwhtVhzMfs99pkqNsrhVlqwvRXNCicgBfH2O2dYxMbt1ycIfk3iBzXiBpe4BNC043D=w609-h913-s-no-gm?authuser=0"
            title="Engagements"
            desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceImageSingle
            Style="flex-1 h-full"
            src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/431968280_901556608644850_6517733653551307726_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=EmoX4zQr2fwQ7kNvgE3bkA6&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=AUYiMqBYHDRI54gNj25hgjR&oh=00_AYBM1eeTXVSw_WrXvaSQ-el0TnKS7yOVgQb_XimEYYBVHA&oe=66F09E53"
            title="Pre-shoots
"
            desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ServiceImages;
