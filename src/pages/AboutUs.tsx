import HeaderSection from "../components/HeaderSection";

import { Wrapper } from "../components/Wrapper";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <Wrapper >
      <HeaderSection imgUrl={''} title="About Us" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc" TextLogic = {true} />
      <div className="w-full px-vw5 ">
        
        <div className="w-full h-vh100 bg-primary flex  gap-vw2 px-vw5 py-vh5 sm_:px-1 rounded-md xl2_:bg-white xl2_:flex-col-reverse xl2_:h-auto ">
          {/* <section className="w-p50 xl2_:w-full flex flex-col justify-between items-center  xl2_:gap-vh5 ">
            <img src={images[0]} alt="" className="object-cover object-center w-full h-vh30 xl2_:h-vh50  lg2_:h-vh30 rounded-lg  shadow-md shadow-gray-400"/>
            <div className="w-full h-p30 flex justify-between items-center">

                <img src={images2[3]} alt="" className="object-cover object-top w-p48 h-full xl2_:h-vh75  lg2_:h-vh60  md_:h-vh50 rounded-lg shadow-md shadow-gray-400  "/>
                <img src={images2[2]} alt="" className="object-cover object-center w-p48 h-full xl2_:h-vh75 lg2_:h-vh60  md_:h-vh50 rounded-lg shadow-gray-400"/>
                
            </div>
            <img src={images[2]} alt="" className="object-cover object-top w-full h-p30 xl2_:h-vh50 lg2_:h-vh30 rounded-lg  shadow-gray-400"/>
          </section> */}
          <section className="w-auto h-full  flex items-center justify-center"> 
          
            <img src="https://lh3.googleusercontent.com/pw/AP1GczNRBi5zuaiFpwEKUk_QpIHLK7QdzW-WlvE3FOmzbaetFd67AwWhqUHsTiigsRmVI4D1MiELutk5_aD9gcxHW0CEpZ18hCA1rcw6WAih22jhc_CC1XJMtTsErywNeXiIi3vg8OIwS2AN2w9LigbL8RqGEp2NqFduVlLYJi-UNTzkCxWon9hgkXSrB0VDFHwos1b22z6-x_SkE3qdYgW5fS-zsLlyGQJJyK3SYGeBCOT0bX6J3a8fvM0qdX1e8AewOtcpmOjvNGJJiJPpbWNZUoIciuGpuVhns4tISguy5znTrs44sxncyI6_21Nx23yjl1WDT3FRyIGhAoVOtKwUcxxo-4HIf1yYPEER0SQxt-BEIZfwymdiw-YUnrb7HtZftlHXq4mk3RXPllgpqnMgeG58HzqDRaxCFxPoXgpgkQhzNTEHIOvv9nfYOihuN7erz_HrnE6GKfCd6gHlB0Bs0OQ7QgCgQAi6hm7dFtUthmlOwOmVTnfnYLv9bS_Ijfh1ydQ54Le4mv-nW9_AZDaAicvlMF5Ss-rjSNMKXPe1V1H4JK15lfau294nEVGtcZei3P1cdw5Sv_Yuopp-gzUqTqsr01jljiLRoU_xccdgkhhy-ce2yH51l8j6qktHNFcTj-xmkNtkWy6OgModLiK3WYg16CX8UTwxx0PnFzCgT-9nMHysansvIaFiPTpezDChwy_w_OYSh2daMeb0Af7sX_xkhyaqBC9FJSP4KHLKtfPJBp4URWdxn9DlXg-MZc5eQHQw8MUDnrllgpRGq2B4zKvlcESCCoTFL4LC9gecsLkLlRJS4he1uUmofhvti-EQZCKN2TM_wNIY4AerrI7cfPhHevGL3sRYqsgSeGet4KhfGU4ZA5qyffEN1P_zu77yXU6Zj0EpFYIprxyYAADhRIRsUYt1_eBhaAmQ8ipkkcHcUdGVBRUpH69NxA0=w609-h913-s-no-gm?authuser=0"  alt="jsyz" className="max-h-full xl3_:opacity-0 about_animation  xl2_:w-full  bg-red-400 " />
          </section>
          <section className="w-p50 xl2_:w-full   text-white flex flex-col justify-start items-center gap-vh3 xl2_:bg-primary xl2_:px-vw5 xl2_:py-vh12 xl2_:rounded-xl">
            
              

                <p>We're excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile... We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to</p>
            
                <p>We're excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile... We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to</p>
            

          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
