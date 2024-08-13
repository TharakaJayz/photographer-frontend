import React from 'react'
import {images} from ".././assets/Images"
interface Props {
    
}

const PageHederImg = (props: Props) => {
    return (
        <div className='w-full h-vh80  '>
            <img src={images[2]}  alt='home-bg'  className='w-full h-full object-cover object-center' />
        </div>
    )
}

export default PageHederImg
