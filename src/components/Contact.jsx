import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo ={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/bkkgjmwb", userInfo)
            toast.success("Your message has been sent");
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
            
        }

      }
  return (
   <>
   <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
    <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
    <span>Please fill out the form below to contact me </span>
    <div className='flex flex-col items-center justify-center mt-5 '>
        <form onSubmit={handleSubmit(onSubmit)}
        // action="https://getform.io/f/bkkgjmwb" 
        // method="POST"
        className='bg-slate-100 w-96 rounded-xl px-8 py-6 mb-4' >
            <h1 className='font-semibold text-xl mb-4'>Send Your Message</h1>
            <div className='flex flex-col '>
                <label className='block text-gray-700'>FullName</label>
                <input 
                {...register("name", { required: true })} 
                className='shadow appearance-none rounded-lg py-2 px-3 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type="text" 
                id='name' 
                name='name'
                placeholder='Enter your fullName' />
            </div>
            {errors.name && <span className='text-sm px-3 '>This field is required</span>}
            <div className='flex flex-col mt-4 '>
                <label className='block text-gray-700'>Email Address </label>
                <input  {...register("email", { required: true })} 
                className='shadow appearance-none rounded-lg py-2 px-3 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                 type="email" 
                 id='email'
                 name='email'
                 placeholder='Enter your email address' />
            </div>
            {errors.email && <span className='text-sm px-3'>This field is required</span>}
            <div className='flex flex-col mt-4 '>
                <label className='block text-gray-700'>Message</label>
                <textarea
                {...register("message", { required: true })}
                className='shadow appearance-none rounded-lg py-2 px-3 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type="text" 
                id='name' 
                name='message'
                placeholder='Type your Query' />
            </div>
            {errors.message && <span className='text-sm px-3 mb-4'>This field is required</span>}
            <br />
            <button type='submit'
            className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 mt-4'>Send</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Contact
