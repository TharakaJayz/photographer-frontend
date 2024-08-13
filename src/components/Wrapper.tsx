import React, { useEffect, useState } from 'react'

interface Props {
    children:React.ReactNode;
    extraStyles?:any
}

export const Wrapper = (props: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setTimeout( ()=>{
            // console.log("set TIme out")
            setIsLoading(false);
        },1500)
}, [])

    return (
        <div className={`w-full ${isLoading ? 'opacity-0':'opacity-100 '} transition-all ${props.extraStyles}`}>
            {props.children}
        </div>
    )
}
