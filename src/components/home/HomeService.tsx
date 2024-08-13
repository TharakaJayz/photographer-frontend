import React from 'react'
import SingleService from '../SingleService'
import { GiShutRose } from "react-icons/gi";
import { GiLovers } from "react-icons/gi";

import { GiBigDiamondRing } from "react-icons/gi";
import { Wrapper } from '../Wrapper';

interface Props {
    
}

export type serviceType = {
    topic:string,
    svg:any,
    desc:string,
    keyIndex?:any
}

const serviceDetails:{services:serviceType[]} = {
    services:[
        {
            desc:"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences",
            svg:<GiBigDiamondRing  />,
            topic:"Weddings"
        },
        {
            desc:"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences",
            svg:<GiLovers />,
            topic:"Engagements"
        },
        {
            desc:"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences",
            svg:<GiShutRose />,
            topic:"Pre-shoots"
        },
    ]
}



const HomeService = (props: Props) => {
    return (
        <Wrapper extraStyles={'py-vh5'}>
            <div className='w-full px-vw5 flex flex-col gap-vh5'>
                <section className='w-full flex flex-col gap-vh5 xl2_:gap-vh3 items-center'>
                    <h1 className='font-bold text-3xl text-center  capitalize text-service_svg_bg'>Our Services</h1>
                    <p className='w-p80  text-center xl2_:w-full ' >Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc</p>
                </section>
                <section className='w-full flex justify-center items-center gap-vw2 xl2_:flex-col'>
                    {
                        serviceDetails.services.map((singleService,index)=>{

                         return   <SingleService keyIndex = {index} desc={singleService.desc} svg={singleService.svg} topic={singleService.topic}/>
                        })
                    }
                   
                </section>
            </div>
        </Wrapper>
    )
}

export default HomeService
