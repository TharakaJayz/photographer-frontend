
import axios from "axios";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import Gallary from "../../components/portfolio/Gallary/Gallary";

type Props = {}

const AddSingleAlbum = (props: Props) => {

  const [titleImage, setTitleImage] = useState<string>("");
  const [headerImage, setHeaderImage] = useState<string>("");
  const [singleAlbumImage, setSingleAlbumImage] = useState<string>("");
  const [albumType, setAlbumType] = useState<string>("");
  const [boyName, setBoyName] = useState<string>("");
  const [girlName, setGirlName] = useState<string>("");
  const [albumImages, setAlbumImages] = useState<string[]>([]);
  const [album, setAlbum] = useState<any>();

  const titleImageSubmitHandler = (e: any) => {
    if (e === "submit") {
      const titleImageValue = {
        "titleImage": titleImage
      }
      setAlbum({ ...album, ...titleImageValue })
      console.log("album", { ...album, ...titleImageValue })
      // add title image to object that send to backend
    }
    if (e === "reset") {

      setTitleImage("");
    }



  }
  const headerImageSubmitHandler = (e: any) => {


    if (e === "submit") {

      const headerImgValue = {
        "headerImage": headerImage
      }
      setAlbum({ ...album, ...headerImgValue })

      // add title image to object that send to backend
    }
    if (e === "reset") {

      setHeaderImage("");
    }
    // add title image to object that send to backend
  }
  const albumSingleImageSubmitHandler = (e: any) => {


    if (e === "submit") {
      setAlbumImages([...albumImages, singleAlbumImage])
      console.log("this is single album images", albumImages);
      setSingleAlbumImage("");

      // add title image to object that send to backend
    }
    if (e === "reset") {

      setSingleAlbumImage("");
    }
    // add title image to object that send to backend
  }

  const onSubminHandler = async (e: any) => {
    setAlbum({ ...album, "albumType": albumType, "boyName": boyName, "girlName": girlName, "images": albumImages });
    console.log("this is final data to submit", { ...album, "albumType": albumType, "boyName": boyName, "girlName": girlName, "images": albumImages })

    try {

      const albumResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}/album/create_album`,
        { ...album, "albumType": albumType, "boyName": boyName, "girlName": girlName, "images": albumImages }
      );

      console.log("alubm response", albumResponse);

      canselHandler();
    } catch (error) {
      console.log("alubm uploading error", error);
      return error;
    }

  }

  const canselHandler = () => {
    setTitleImage("");
    setHeaderImage("");
    setSingleAlbumImage("");
    setAlbumType("");
    setBoyName("");
    setGirlName("");
    setAlbumImages([]);
    setAlbum({});


  }

  return (
    <div className="min-h-vh100 w-full  flex flex-col justify-start items-start ">
      <div className=' flex justify-start items-start w-full border  h-vh100 '>
        <div className='w-p50  h-full flex flex-col gap-vh1 bg-gray-200  px-vw1'>

          <div className='w-full flex flex-col gap-1 py-vh1'>
            <label className='text-xs'>AlbumType</label>
            <select className='w-p60 outline-none px-2 py-1' value={albumType} onChange={(e) => { setAlbumType(e.target.value) }}>
              <option value=""></option>
              <option value="Pre-shoots">Pre-Shoots</option>
              <option value="Weddings">Weddings</option>
              <option value="Engagements">Engagements</option>
            </select>
          </div>

          <div className='w-full flex flex-col justify-between  py-vh1'>
            <div className='w-full flex justify-between '>

              <div className='w-p45 flex flex-col gap-1 py-vh1'>
                <label className='text-xs'>Name of Boy</label>
                <input type="text" placeholder='Name of Boy ' className='px-2 py-1 outline-none' value={boyName} onChange={(e) => { setBoyName(e.target.value) }} />
              </div>
              <div className='w-p45 flex flex-col gap-1 py-vh1'>
                <label className='text-xs'>Name of Girl</label>
                <input type="text" placeholder='Name of Girl ' className='px-2 py-1 outline-none' value={girlName} onChange={(e) => { setGirlName(e.target.value) }} />
              </div>

            </div>

            <div className='w-full '>
              <p className='text-xs'>Album Title Will be:- {boyName} & {girlName}</p>
            </div>


          </div>

          <div className='w-full h-vh25 flex justify-between items-center  '>

            <div className='w-p45 flex justify-between items-center  py-vh1'>
              <div className='w-p80 flex flex-col  gap-1' >

                <label className='text-xs'>Title Image</label>
                <section className='w-full flex gap-2'>

                  <input type="text" placeholder='Title Image ' className='px-2 py-1 outline-none' value={titleImage} onChange={(e) => { setTitleImage(e.target.value) }} />

                  <div className='w-p20 flex justify-between gap-2 items-center'>
                    <button className="text-xl text-red-500" onClick={() => { titleImageSubmitHandler("reset") }} ><MdOutlineCancel /></button>
                    <button className="text-xl text-green-400" onClick={() => { titleImageSubmitHandler("submit") }} > <GiConfirmed /></button>
                  </div>
                </section>
              </div>


            </div>
            {titleImage !== "" && (
              <img src={titleImage} alt='title_ig' className='w-auto h-p100  object-contain' />
            )}




          </div>
          <div className='w-full flex justify-between items-center h-vh25 '>

            <div className='w-p45 flex justify-between items-center  py-vh1'>
              <div className='w-p80 flex flex-col  gap-1' >

                <label className='text-xs'>Header Image</label>
                <section className='w-full flex gap-2'>

                  <input type="text" placeholder='Header Image ' className='px-2 py-1 outline-none' value={headerImage} onChange={(e) => { setHeaderImage(e.target.value) }} />

                  <div className='w-p20 flex justify-between gap-2 items-center'>
                    <button className="text-xl text-red-500" onClick={() => { headerImageSubmitHandler("reset") }} ><MdOutlineCancel /></button>
                    <button className="text-xl text-green-400" onClick={() => { headerImageSubmitHandler("submit") }} > <GiConfirmed /></button>
                  </div>
                </section>
              </div>


            </div>
            {headerImage !== "" && (
              <img src={headerImage} alt='title_ig' className='w-auto h-p100  object-contain' />
            )}




          </div>
          <div className='w-full flex justify-between items-center h-vh25  '>

            <div className='w-p45 flex justify-between items-center  py-vh1'>
              <div className='w-p80 flex flex-col  gap-1' >

                <label className='text-xs'>Single Album Image</label>
                <section className='w-full flex gap-2'>

                  <input type="text" placeholder='Single Image ' className='px-2 py-1 outline-none' value={singleAlbumImage} onChange={(e) => { setSingleAlbumImage(e.target.value) }} />

                  <div className='w-p20 flex justify-between gap-2 items-center'>
                    <button className="text-xl text-red-500" onClick={() => { albumSingleImageSubmitHandler("reset") }} ><MdOutlineCancel /></button>
                    <button className="text-xl text-green-400" onClick={() => { albumSingleImageSubmitHandler("submit") }} > <GiConfirmed /></button>
                  </div>
                </section>
              </div>


            </div>
            {singleAlbumImage !== "" && (
              <img src={singleAlbumImage} alt='title_ig' className='w-auto h-p100  object-contain' />
            )}




          </div>



        </div>
        <div className='w-p50  h-full flex flex-col gap-5 p-5  '>
          {/* <section className="w-full h-p92 py-vh1 overflow-y-scroll flex flex-wrap gap-3  justify-center items-start border border-gray-600 ">
            {(albumImages.length > 0) && (albumImages.map((image,index) => {
              return <img src={image} alt="t" className="w-p40 h-auto  " />
            }))}

            {(albumImages.length === 0) && (<h1>Please Add Some Images !</h1>)}
          </section> */}
          <section className="w-full h-p92 py-vh1 overflow-y-scroll border border-gray-600">

          <Gallary images={albumImages} />
          </section>

          <section className="w-full flex justify-end items-center gap-vw1">
            <button className="text-xl text-red-500 border border-red-500 rounded-md px-3 transition-all hover:bg-red-500 hover:text-white" onClick={canselHandler} >Cancel</button>
            <button onClick={onSubminHandler} className="text-xl text-green-400 border border-green-400 rounded-md px-3 transition-all hover:bg-green-400 hover:text-white" > Confirm</button>
          </section>

        </div>
      </div>
    </div>
  )
}

export default AddSingleAlbum