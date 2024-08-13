import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { images } from '../../assets/Images';
interface Props {

}

const HomeReviewDesktop = (props: Props) => {
    return (
        <div className='w-full  flex items-center justify-center'>

            <Swiper
             loop={true}
                pagination={{
                    type: 'fraction',
                }}
               
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-vh80 w-p90 "
            >
                <SwiperSlide className='h-p100 '>
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full  h-p80  bg-primary rounded-2xl '>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0   flex items-center px-vw2 '> 
                        
                        <div className='flex  h-full w-full   items-center '>
                            <section className='flex items-start text-white '>
                                {/* <span className='text-9xl'>"</span> */}
                                <div className='flex flex-col gap-vh4 '>
                                    <p className='text-xl'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1 className='text-4xl font-bold'>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section className='  w-full h-full  relative border'>
                                {/* <img src={images[0]} className='absolute top-0 right-0 h-full w-p65 object-cover rounded-3xl object-center' alt='img_1'  />
                                <img src={images[1] }  className='absolute bottom-vh5 left-vw2 w-p40 h-p50 object-cover object-center rounded-2xl'  alt='img_1'  /> */}
                                <img src={images[0]} className='w-full h-full object-cover object-center rounded-lg'  />

                            </section>
                        </div>
                         </section>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-p100 '>
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full  h-p80  bg-primary rounded-2xl '>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0   flex items-center px-vw2 '> 
                        
                        <div className='flex  h-full w-full   items-center '>
                            <section className='flex items-start text-white '>
                                {/* <span className='text-9xl'>"</span> */}
                                <div className='flex flex-col gap-vh4 '>
                                    <p className='text-xl'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1 className='text-4xl font-bold'>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section className='  w-full h-full  relative border'>
                                {/* <img src={images[0]} className='absolute top-0 right-0 h-full w-p65 object-cover rounded-3xl object-center' alt='img_1'  />
                                <img src={images[1] }  className='absolute bottom-vh5 left-vw2 w-p40 h-p50 object-cover object-center rounded-2xl'  alt='img_1'  /> */}
                                <img src={images[0]} className='w-full h-full object-cover object-center rounded-lg'  />

                            </section>
                        </div>
                         </section>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-p100 '>
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full  h-p80  bg-primary rounded-2xl '>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0   flex items-center px-vw2 '> 
                        
                        <div className='flex  h-full w-full   items-center '>
                            <section className='flex items-start text-white '>
                                {/* <span className='text-9xl'>"</span> */}
                                <div className='flex flex-col gap-vh4 '>
                                    <p className='text-xl'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1 className='text-4xl font-bold'>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section className='  w-full h-full  relative border'>
                                {/* <img src={images[0]} className='absolute top-0 right-0 h-full w-p65 object-cover rounded-3xl object-center' alt='img_1'  />
                                <img src={images[1] }  className='absolute bottom-vh5 left-vw2 w-p40 h-p50 object-cover object-center rounded-2xl'  alt='img_1'  /> */}
                                <img src={images[0]} className='w-full h-full object-cover object-center rounded-lg'  />

                            </section>
                        </div>
                         </section>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-p100 '>
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full  h-p80  bg-primary rounded-2xl '>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0   flex items-center px-vw2 '> 
                        
                        <div className='flex  h-full w-full   items-center '>
                            <section className='flex items-start text-white '>
                                {/* <span className='text-9xl'>"</span> */}
                                <div className='flex flex-col gap-vh4 '>
                                    <p className='text-xl'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1 className='text-4xl font-bold'>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section className='  w-full h-full  relative border'>
                                {/* <img src={images[0]} className='absolute top-0 right-0 h-full w-p65 object-cover rounded-3xl object-center' alt='img_1'  />
                                <img src={images[1] }  className='absolute bottom-vh5 left-vw2 w-p40 h-p50 object-cover object-center rounded-2xl'  alt='img_1'  /> */}
                                <img src={images[0]} className='w-full h-full object-cover object-center rounded-lg'  />

                            </section>
                        </div>
                         </section>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='h-p100'> */}
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full h-p80  bg-primary rounded-2xl '>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0   flex items-center px-vw2 '> 
                        
                        <div className='flex  h-full w-full   items-center '>
                            <section className='flex items-start text-white '>
                                <span className='text-9xl'>"</span>
                                <div className='flex flex-col gap-vh4 '>
                                    <p className='text-xl'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1 className='text-4xl font-bold'>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section className='  w-full h-full  relative'>
                                <img src={images[0]} className='absolute top-0 right-0 h-full w-p65 object-cover rounded-3xl object-center' alt='img_1'  />
                                <img src={images[1] }  className='absolute bottom-vh5 left-vw2 w-p40 h-p50 object-cover object-center rounded-2xl'  alt='img_1'  />

                            </section>
                        </div>
                         </section>
                    </div>
                {/* </SwiperSlide> */}
                {/* <SwiperSlide className='h-p100'> */}
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full h-p80  bg-primary rounded-2xl '>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0   flex items-center px-vw2 '> 
                        
                        <div className='flex  h-full w-full   items-center '>
                            <section className='flex items-start text-white '>
                                <span className='text-9xl'>"</span>
                                <div className='flex flex-col gap-vh4 '>
                                    <p className='text-xl'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1 className='text-4xl font-bold'>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section className='  w-full h-full  relative'>
                                <img src={images[0]} className='absolute top-0 right-0 h-full w-p65 object-cover rounded-3xl object-center' alt='img_1'  />
                                <img src={images[1] }  className='absolute bottom-vh5 left-vw2 w-p40 h-p50 object-cover object-center rounded-2xl'  alt='img_1'  />

                            </section>
                        </div>
                         </section>
                    </div>
                {/* </SwiperSlide> */}
                
               
            </Swiper>

        </div>
    )
}

export default HomeReviewDesktop
