import React from 'react'
import "./Gallary.css"
type Props = {
    images: Array<string>
}

const Gallary = (props: Props) => {
    return (
        <div className='gallary'>
        { props.images.length >0 &&  (props.images.map((image: any,index) => {
                        return <img src={image} alt='' className='portfolio_gallary_img' key={index} />
                    }))}
        </div>
    )
}

export default Gallary