
import ImageSlider from '../components/home/ImageSlider'
import HomeMemory from '../components/home/HomeMemory'
import HomeService from '../components/home/HomeService'
import { useEffect, useState } from 'react'
import axios from 'axios'




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
             <HomeService />
             {/* <HomeSwiper/> */}
             {/* <HomeReview /> */}
        </div>
    )
}

export default Home

