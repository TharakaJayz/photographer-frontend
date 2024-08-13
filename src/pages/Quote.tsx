import React, { useState } from "react";
import QuoteForm from "../components/Quote/QuoteForm";
import HeaderSection from "../components/HeaderSection";
import { images } from "../assets/Images";
import CategoryCard from "../components/portfolio/CategoryCard";
import { albumTypes } from "../assets/details";
import { Wrapper } from "../components/Wrapper";

interface Props {}

const Quote = (props: Props) => {

    const [selectedType, setSelectedType] = useState<any>(albumTypes[0]);

  const setTypeFromCard = (value: string) => {
    setSelectedType(value);
  }
  return (
    <Wrapper>
         <HeaderSection imgUrl={images[1]} title="About Us" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc" TextLogic = {true} />
      <div className="w-full px-vw5 flex justify-center items-center">
      <div className=" w-p80 flex flex-col gap-vh2  justify-center items-center">
      <section className='w-full flex justify-between items-center md_:flex-col md_:gap-3'>
            <CategoryCard svg={""} title={albumTypes[0]} onClickAction={setTypeFromCard} desc='See our wedding albums' />
            <CategoryCard svg={""} title={albumTypes[1]} onClickAction={setTypeFromCard} desc='See our engagement albums' />
            <CategoryCard svg={""} title={albumTypes[2]} onClickAction={setTypeFromCard} desc='See our pre-shoots albums' />

          </section>
        
        <div className="w-full flex justify-center items-center ">

        <QuoteForm formType={selectedType || albumTypes[0]} />
        </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Quote;
