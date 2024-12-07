import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e)=>{
   const {name,value} = e.target;
   setFormData({
    ...formData,
    [name]:value,
   })
  }
  const validate = ()=>{
    let errors = {};
    if(!formData.name) errors.name = "Name is required";
    if(!formData.email){ errors.email = "email is required";
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errors.email = "email is invalid";
    }
    if (!formData.message) errors.message = "message is required";
    return errors;
    
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
    } else{
      setErrors({});
      setIsSending(true);

      emailjs
         .send(
          "service_ojnbf25",
          "template_p6gk3d9",
          formData,
          "Hbs0CTSyYe03E5isq",
         )
         .then((response)=>{
          toast.success("Message sent successfully");
          setFormData({name:"",email:"",message:""});
         })
         .catch((error)=>{
          toast.error("Failed to send message.Please try again later");
         })
         .finally(()=>{
          setIsSending(false);
         })
    }
  }
  return (
    <div className='p-4 lg:w-3/4'id='contact'>
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold
      tracking-tighter'>
  Let's connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4 flex space-x-4'>
          <div className='lg:w-1/2'>
          <input type="text"
          id='name'
          name='name'
          value={formData.name}
          placeholder='name'
          onChange={handleChange}
          className='mb-8 w-full appearance-none rounded-lg border border-gray-700 bg-transparent
          px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
          
          />
          {errors.name && (
            <p className='text-sm text-rose-800
            '>{errors.name}</p>
          )}

          </div>
          <div className='lg:w-1/2'>
          <input type="email"
          id='email'
          name='email'
          value={formData.email}
          placeholder='email'
          onChange={handleChange}
          className='mb-8 w-full appearance-none rounded-lg border border-gray-700 bg-transparent
          px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
          
          />
          {errors.email && (
            <p className='text-sm text-rose-800
            '>{errors.email}</p>
          )}

          </div>
         

        </div>
        <div className='mb-4'>
          <textarea
          id='message'
          name='message'
          value={formData.message}
          placeholder='message'
          onChange={handleChange}
          className='mb-8 w-full appearance-none rounded-lg border border-gray-700 bg-transparent
          px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
          
          />
          {errors.message && (
            <p className='text-sm text-rose-800
            '>{errors.message}</p>
          )}

          </div>
          <button type='submit' className={`mb-8 w-full rounded border border-slate-700 bg-stone-100 
            px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-stone-300
             ${isSending ? "cursor-not-allowed opacity-50":""}`}
             disabled={isSending}
             
             > 
             <div className='flex items-center justify-center gap-2'>
              {isSending ? "Sending..." : "send"}
              <FiSend/>
             </div>
              

          </button>
      </form>
      
    </div>
  )
}

export default ContactForm
