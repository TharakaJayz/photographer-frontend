import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ErrorCard from '../../components/ErrorCard';

interface Props {
    
}


type LoginFormType = {
    username:string,
    password:string
}

const Login = (props: Props) => {

    const {register,handleSubmit,formState:{errors}}  = useForm<LoginFormType>();

    const [loginError,setLoginError] = useState<string>("");

    const errorCardHandler = (e:any)  =>{
        if(e.btn1){
            setLoginError("")
        }
    }
    

    const submitHandler = handleSubmit(async(data)=>{
    //   console.log("This is submitted data",data)
      try {

        const loginResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`,{
            ...data
          
        });

        localStorage.setItem("token",loginResponse.data)
        // need to save this in local storeage
        navigation("/admin/home/slider");
        

        
      } catch (error:any) {
        console.log("login error",error);
        if(error.status === 500){
            window.location.reload();
            return
        }

        setLoginError(error.response.data);

        return
      }
      
    })

    const navigation = useNavigate();
    return (
        <div className='w-full h-vh100 flex items-center justify-center '>

            <form className='px-vw10 py-vh5 flex flex-col items-center justify-center gap-vh3 border border-gray-600 bg-gray-100' onSubmit={submitHandler}>
                <section className='flex flex-col gap-vh1'>
                    <label htmlFor="" className='text-sm'>UserName</label>
                    <input type='text'  className='pl-3 outline-none' placeholder='usename'  {...register("username",{required:"This field is required"})} />
                    <p className='w-full text-left text-red-500 text-xs '>{errors.username && (errors.username.message)}</p>
                </section>
                <section className='flex flex-col gap-vh1'>
                    <label htmlFor="" className='text-sm'>Password</label>
                    <input type='password'  className='pl-3 outline-none '  {...register("password",{required:"This field is required"})} />
                    <p className='w-full text-left text-red-500 text-xs'>{errors.password && (errors.password.message)}</p>
                </section>
               

                <section className='w-full flex justify-end items-center'>

                <button className='w-p30 bg-gray-400 text-white' >Login</button>
                </section>
                
            </form>

            {loginError  !=="" && (
                <ErrorCard
                
                fn={errorCardHandler}
                details={{
                    message: loginError,
                    btn1: [true, "Try Again"],
                    btn2: [false, "cancel",""],
                  }}
                
                />
            )}
            
        </div>
    )
}

export default Login
