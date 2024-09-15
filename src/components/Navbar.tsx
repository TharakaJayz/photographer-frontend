import  { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';


type props = {
    extraStyle:any
    onCallBack:() => void
}

const Navbar = (props:props) => {
    const navigation = useNavigate();
    const [navSecLogic,setNavSecLogic] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {

        if(isLoading){

            setTimeout( ()=>{
                // console.log("set TIme out")
                setIsLoading(false);
            },1500)
        }

        return
        
}, [isLoading])
  
const onClickHandler = ()  =>{
    setNavSecLogic(false)
     setIsLoading(true)  
     props.onCallBack()
}

    return (
        <div className= {`  w-full  bg-navcolor  py-vh2   fixed top-0 left-0 opacity-0  z-40 ${props.extraStyle} ${isLoading ? '':''} `}>
            <div className=' w-full h-full flex items-center justify-between   lg_:flex-col'>
                <section className='flex justify-between lg_:w-full px-vw5 '>
                <Logo/>
                <button className='  lg_:block hidden text-white text-2xl'  onClick={()=>{setNavSecLogic(!navSecLogic);  }}><IoMenu /></button>
                </section>

                <section className={`flex  items-center gap-vw3 text-white  transition-all duration-500 origin-top  lg_:w-full  lg_:flex-col scale-y-0 h-0 lg:scale-100 lg:pr-vw5 lg:h-auto lg_:opacity-0 lg_:gap-vh3 lg_:items-start ${navSecLogic &&('lg_:pt-vh5 lg_:pb-vh2 lg_:scale-y-100 lg_:h-vh56 lg_:opacity-100   ')}`}>
                    <NavLink  to="/" className={({ isActive }) =>
                        isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } onClick={onClickHandler} >Home</NavLink>
                    <NavLink  className={({ isActive }) =>
                         isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    }  to="/about" onClick={onClickHandler}>About US</NavLink>
                    {/* <NavLink className={({ isActive }) =>
                         isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } to="/service" onClick={()=>{setNavSecLogic(false)}}>Services</NavLink> */}
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } to="/portfolio" onClick={onClickHandler}>Portfolio</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } to="/contact" onClick={onClickHandler}>Contact Us</NavLink>
                    <button className='bg-transparent border border-white text-white font-semibold px-vw1 sm_:px-vw3 lg_:px-vw2 py-vh1 rounded  transition-all cursor-pointer hover:bg-primary hover:border-primary ml-vw5' onClick={()=>{navigation("/admin")}}  >Request a Quote</button>
                </section>
                
                
            </div>
        </div>
    )
}

export default Navbar
