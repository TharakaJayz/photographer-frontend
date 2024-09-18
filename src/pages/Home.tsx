
import ImageSlider from '../components/home/ImageSlider'
import HomeMemory from '../components/home/HomeMemory'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Service from '../components/home/service/Service'




const Home = () => {

    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
const getHomeImages = async()  =>{
    setIsLoading(true);

    try {

        console.log("url ======>>1",process.env.REACT_APP_BASE_URL)
        console.log("url ======>>2",process.env.REACT_APP_BASE_URL!)

        const imagesHome:any = await axios.get(`${process.env.REACT_APP_BASE_URL}/home/get_home_slider`);
        setImages(imagesHome.data);
       setIsLoading(false);
        
    } catch (error) {
        
    }

}

useEffect(() => {
   
     getHomeImages();

}, [])
    return (
        <div className='w-full flex flex-col'>
             <ImageSlider   images={images} loading = {isLoading} /> 
             <HomeMemory  />
             <Service  />
             {/* <HomeService /> */}
          
        </div>
    )
}

export default Home

