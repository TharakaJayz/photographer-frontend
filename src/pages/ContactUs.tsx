import React from 'react'
import HeaderSection from '../components/HeaderSection'
import { images } from '../assets/Images';
import { FaPhone } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { Wrapper } from '../components/Wrapper';
interface Props {
    
}

type ContactForm = {
  firstname:string,
  email:string,
  subject:string,
  message:string
}

const ContactUs = (props: Props) => {


    const {register,handleSubmit,formState:{errors}}  = useForm<ContactForm>();

    const submitHandler = handleSubmit((data)=>{
      // console.log("This is submitted data",data)
    })

    return (
        <Wrapper >
          <HeaderSection imgUrl={images[0]} title="Contact Us" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc " TextLogic = {true} />
          <div className='w-full px-vw5 '>
            <section className='w-full flex items-center justify-center '>
              {/* <div className='w-p60 bg-green-500 flex flex-col gap-vh2 px-vw5 text-white'>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
              </div> */}
              <form className='flex flex-col gap-5 justify-center items-center p-4 bg-primary_light4 rounded-xl w-p75 xl2_:w-p85 lg2_:w-p100 sm_3:px-vw5  px-vw2 py-vh6 text-sm' onSubmit={submitHandler}>
                <section className='w-full flex sm_3:flex-col sm_3:gap-5 justify-between sm_3:items-start items-center gap-p5'>
                  <div className='flex flex-col justify-start gap-1 w-p50 sm_3:w-full'>
                    <label htmlFor="">First Name</label>
                   {errors.firstname && (<span className='text-xs text-white'>{errors.firstname.message}</span>)} 
                    <input type='text'  placeholder='first name'   className='rounded-md px-2 py-1 outline-none '  {...register("firstname",{required:"This field is required"})} />
                  </div>
                  <div className='flex flex-col justify-start gap-1 w-p50 sm_3:w-full'>
                    <label htmlFor="">Email</label>
                    {errors.email && (<span className='text-xs text-white'>{errors.email.message}</span>)} 
                    <input type='text'  placeholder='email'   className='rounded-md px-2 py-1 outline-none ' {...register("email",{required:"This field is required"})}  />
                  </div>
                </section>
                <section className='w-full flex justify-center items-center'>

                  <div className='flex flex-col justify-start gap-1 w-full'>
                    <label htmlFor="">Subject</label>
                    {errors.subject && (<span className='text-xs text-white'>{errors.subject.message}</span>)} 
                    <input type='text'  placeholder='subject'   className='rounded-md px-2 py-1 outline-none '  {...register("subject",{required:"This field is required"})} />
                  </div>
                </section>
                <section className='w-full flex items-center justify-center'>
                  <div className='flex flex-col justify-start gap-1 w-full'>
                    <label htmlFor="">Message</label>
                    {errors.message && (<span className='text-xs text-white'>{errors.message.message}</span>)} 
                    <textarea placeholder='message'  className='rounded-md px-2 py-1 outline-none ' {...register("message",{required:"This field is required"})} ></textarea>
                  </div>

                </section>

                <button className='w-full   border-transparent py-2 bg-primary rounded-lg transition-all hover:bg-white hover:border-primary hover:text-primary'>Send</button>

              </form>
            </section>
          </div>
        </Wrapper>
    )
}

export default ContactUs
