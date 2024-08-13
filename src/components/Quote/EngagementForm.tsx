import React from 'react'
import { useForm } from 'react-hook-form';

interface Props {
    onSubmitCallback:(data:ContactFormEngagementType) => void
}

export type ContactFormEngagementType = {
    brideName: string;
    groomName: string;
    weddingDate: Date;
    contact:string;
    email: string;
    weddingLocation: string;
    howDidFindUs:string
    numOfGuests:number;
    message: string;
  };

const EngagementForm = (props: Props) => {


    const {
        register,
        handleSubmit,
        formState: { errors},
      } = useForm<ContactFormEngagementType>();
    
      const submitHandler = handleSubmit((data:ContactFormEngagementType) => {
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
            <label htmlFor="">Bride's Name</label>
            {errors.brideName && (
              <span className="text-xs text-white">
                {errors.brideName.message}
              </span>
            )}
            <input
              type="text"
              placeholder="Bride's Name"
              className="rounded-md px-2 py-1 outline-none "
              {...register("brideName", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col justify-start gap-1 w-p50 lg2_:w-full">
            <label htmlFor="">Groom's Name</label>
            {errors.groomName   && (
              <span className="text-xs text-white">{errors.groomName.message}</span>
            )}
            <input
              type="text"
              placeholder="Groom's Name"
              className="rounded-md px-2 py-1 outline-none "
              {...register("groomName", { required: "This field is required" })}
            />
          </div>
        </section>
        <section className="w-full flex justify-between items-center gap-p5 lg2_:flex-col lg2_:items-start lg2_:gap-5">
          <div className="flex flex-col justify-start gap-1 w-p50 lg2_:w-full">
            <label htmlFor="">Wedding Date</label>
            {errors.weddingDate && (
              <span className="text-xs text-white">
                {errors.weddingDate.message}
              </span>
            )}
            <input
              type="date"
              placeholder="wedding date"
              className="rounded-md px-2 py-1 outline-none "
              {...register("weddingDate", { required: "This field is required" })}
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
            <label htmlFor="">Wedding Location</label>
            {errors.weddingLocation && (
              <span className="text-xs text-white">{errors.weddingLocation.message}</span>
            )}
            <input
              type="text"
              placeholder="wedding location"
              className="rounded-md px-2 py-1 outline-none "
              {...register("weddingLocation", { required: "This field is required" })}
            />
          </div>
        </section>
       
        <section className="w-full flex justify-between items-center gap-p5 ">
         
          <div className="flex flex-col justify-start gap-1 w-p100">
            <label htmlFor="">How Did You Here About Us</label>
            {errors.howDidFindUs && (
              <span className="text-xs text-white">{errors.howDidFindUs.message}</span>
            )}
            <input
              type="text"
              placeholder=""
              className="rounded-md px-2 py-1 outline-none "
              {...register("howDidFindUs", { required: "This field is required" })}
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

export default EngagementForm
