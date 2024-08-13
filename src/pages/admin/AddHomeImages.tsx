import axios from "axios";
import React, { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
interface Props {}

const AddHomeImages = (props: Props) => {
  const [imageInput, setImageInput] = useState<string>("");

  const [imageArray, setImageArray] = useState<any>([]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (imageArray.length <= 5) {
      setImageArray([...imageArray, imageInput]);
      setImageInput("")
    }

    return;
  };


  const ImageArraySubmitHandler = async()  =>{
    // call backend to save this images

    try {

      const imageUploadResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}/home/create_home_slider`,{
        images:[...imageArray]
      })

      setImageArray([]);

      // console.log("imageupload Response",imageUploadResponse);
      return
      
    } catch (error) {
      console.log("image upload error",error);
      return 
    }

  }

  return (
    <div className="h-vh100 w-full  flex flex-col justify-start items-start ">
      <section className="w-full h-p35 border flex justify-between items-start bg-gray-50">
        <div className="w-p40 h-full flex flex-col justify-center items-center gap-1 ">
          <label className="w-p70 text-xs">Select Images to Slider</label>
          <form className="w-p70 flex gap-2 " onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="imageUrl"
              className="pl-2"
              value={imageInput}
              onChange={(e) => {
                setImageInput(e.target.value);
              }}
            />
            <div className="flex gap-1">
              <button className="text-xl text-red-500" type="reset">
                <MdOutlineCancel />
              </button> 
              <button className="text-xl text-green-400" type="submit">
                <GiConfirmed />
              </button>
            </div>
          </form>
        </div>
        {imageInput !== "" && (
          <img src={imageInput} alt="test" className="h-full w-auto" />
        )}
      </section>

      <section className="w-full h-p65 border  py-4 px-3 flex flex-col justify-between">
        <div className="w-full h-p90 flex flex-wrap gap-1 ">
          {imageArray.map((image: any) => {
            return <img src={image} alt="" className="h-p50 w-auto" />;
          })}
        </div>
        <div className="w-full flex justify-end gap-3 ">
          <button
            className="text-red-500"
            onClick={() => {
              setImageArray([]);
            }}
          >
            Cancel
          </button>
          <button className="text-green-400" onClick={ImageArraySubmitHandler}>Confirm</button>
        </div>
      </section>
    </div>
  );
};

export default AddHomeImages;
