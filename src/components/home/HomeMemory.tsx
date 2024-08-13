
import { images2 } from '../../assets/Images'
import { Wrapper } from '../Wrapper'
interface Props {
    
}

const HomeMemory = (props: Props) => {
    return (
        <Wrapper >
            <section className='w-full pr-vw10 h-vh100 flex items-center bg-primary_light1 relative lg2_:pr-0 md_:py-vh8 md_:h-auto 
            opacity-0 home_memories_animation '>
                <div className='w-full bg-primary_light2 pl-vw10 rounded-xl rounded-l-none py-vh5 lg2_:pl-0 '>
                    <div className='w-full flex items-center justify-start gap-vw5   pr-vw5 lg2_:pr-0 md_:pr-0 md_:pl-0  md_:px-0 lg2_:px-vw1  lg_:gap-vw4 md_:gap-vw5  '>
                        <img src={images2[0]}  alt='memory' className='w-auto h-vh75 object-center object-cover rounded-3xl md_:hidden lg2_:h-auto lg2_:w-vw40 ' />
                        <section className='flex flex-col w-1/2    items-start  gap-vh4 text-gray-600 md_:w-full md_:items-center sm_:px-vw3 md_:px-vw5  '>
                            <h3 className='font-bold text-3xl  md_:text-3xl xl2_:text-2xl  w-full    text-left md_:text-center leading-10'>"The Memories to Remember"</h3>
                            <p className=' md_:text-center'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph</p>
                            {/* <button className='px-vw4 py-vh2 rounded border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-md'>Read More</button> */}
                        </section>
                    </div>
                </div>
                </section> 
        </Wrapper>
    )
}

export default HomeMemory
