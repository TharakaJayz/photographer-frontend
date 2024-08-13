import React from 'react'
import { useForm } from 'react-hook-form';

interface Props {
    onSubmitCallback:(data:ContactFormPreShootType) => void
}

export type ContactFormPreShootType = { 
    girlName: string;
    boyName: string;
    contact:string;
    email: string;
    howDidFindUs:string
    message: string;
  };

const PreShootForm = (props: Props) => {



    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm<ContactFormPreShootType>();
    
      const submitHandler = handleSubmit((data:ContactFormPreShootType) => {
        console.log("This is submitted data", data);

        props.onSubmitCallback(data);
      });
    return (
        <div className='w-full'>
            <form
        className="flex flex-col gap-5 justify-center items-center p-4  bg-primary_light4 rounded-xl w-full px-vw2 py-vh6 text-sm"
        onSubmit={submitHandler}
      >
        <section className="w-full flex justify-between items-center gap-p5 lg2_:flex-col lg2_:items-start lg2_:gap-5">
          <div className="flex flex-col justify-start gap-1 w-p50 lg2_:w-full">
            <label htmlFor="">Girl's Name</label>
            {errors.girlName && (
              <span className="text-xs text-white">
                {errors.girlName.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Girl's Name"
              className="rounded-md px-2 py-1 outline-none "
              {...register("girlName", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col justify-start gap-1 w-p50 lg2_:w-full">
            <label htmlFor="">Boy's Name</label>
            {errors.boyName   && (
              <span className="text-xs text-white">{errors.boyName.message}</span>
            )}
            <input
              type="text"
              placeholder="Boy's Name"
              className="rounded-md px-2 py-1 outline-none "
              {...register("boyName", { required: "This field is required" })}
            />
          </div>
        </section>
        
        <section className="w-full flex justify-between items-center gap-p5 lg2_:flex-col lg2_:items-start lg2_:gap-5">
          <div className="flex flex-col justify-start gap-1 w-p50 lg2_:w-full">
            <label htmlFor="">Email</label>
            {errors.email && (
              <span className="text-xs text-white">
                {errors.email.message}
              </span>
            )}
            <input
              type="text"
              placeholder="email"
              className="rounded-md px-2 py-1 outline-none "
              {...register("email", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col justify-start gap-1 w-p50 lg2_:w-full">
            <label htmlFor="">Contact</label>
            {errors.contact && (
              <span className="text-xs text-white">
                {errors.contact.message}
              </span>
            )}
            <input
              type="tel"
              className="rounded-md px-2 py-1 outline-none "
              {...register("contact", { required: "This field is required" })}
            />
          </div>
        </section>
       
       

        <section className="w-full flex items-center justify-center">
          <div className="flex flex-col justify-start gap-1 w-full">
            <label htmlFor="">Message</label>
            {errors.message && (
              <span className="text-xs text-white">
                {errors.message.message}
              </span>
            )}
            <textarea
              placeholder="message"
              className="rounded-md px-2 py-1 outline-none "
              {...register("message", { required: "This field is required" })}
            ></textarea>
          </div>
        </section>

        <button className="w-full   border-transparent py-2 bg-primary rounded-lg transition-all hover:bg-white hover:border-primary hover:black disabled:bg-gray-500"

        >
          Send
        </button>
      </form>
        </div>
    )
}

export default PreShootForm
