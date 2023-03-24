import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

import ContactMeCanvas from './ContactMeCanvas';
import { slideIn } from './helpers/motion';
import { styles } from './styles';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const formRef = useRef()

  return (
    <div id="contact" className=' py-20'>
    <p className={`${styles.sectionSubText} px-20`}> Get in touch</p>
        <h3 className={`${styles.sectionHeadText} px-20`}>Contact. </h3>
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="xl:w-1/2 w-full  rounded-2xl"
      >


        <form
        ref={formRef}
        // onSubmit={handleSubmit}
        className="lg:mt-12 flex flex-col gap-8 px-20"
        >
          <label className="flex flex-col">
            <span className="text-secondary mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              // onChange={handleChange}
              placeholder="Usman"
              className='bg-transparent border-secondary border-2 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium '
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-secondary mb-4'>
            Your Email
            </span>
           <input
              type="text"
              name="email"
              value={form.email}
              // onChange={handleChange}
              placeholder="usman.siddique@gmail.com"
              className='bg-transparent border-secondary border-2 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium '
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-secondary mb-4'>
            Your Message
            </span>
           <textarea
              rows="7"
              name="message"
              value={form.message}
              // onChange={handleChange}
              placeholder="What's your message?"
              className='bg-transparent border-secondary border-2 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium '
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold  rounded-xl"

          >
            {/* {loading ? 'Sending' : 'Send'} */} Send
          </button>
        </form>
              </motion.div>

        <motion.div
         variant={slideIn('right', 'tween', 0.2, 1)}
         className="xl:w-1/2  w-full xl:h-[550px] h-[250px] justify-center"
         >
          <ContactMeCanvas />
         </motion.div>

    </div>
    </div>
  )
}


export default Contact;
