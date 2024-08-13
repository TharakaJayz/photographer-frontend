import React from 'react'
import HomeReviewDesktop from './HomeReviewDesktop'

interface Props {
    
}

const HomeReview = (props: Props) => {
    return (
        <div className='w-full flex flex-col gap-vh5'>
            <section className='w-full flex flex-col gap-vh2 px-vw5'>
                <h4 className='capitalize font-bold text-3xl w-full text-center text-service_svg_bg'>Unevil the magic shared</h4>
                <p className='w-full  text-center xl2_:w-full ' >Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half least five sentences, a paragraph is half least five sentences, a paragraph is half a page long, etc</p>

            </section>

            <HomeReviewDesktop />
        </div>
    )
}

export default HomeReview
