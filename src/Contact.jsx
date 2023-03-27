import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik';
 import * as Yup from 'yup';

import ContactMeCanvas from './ContactMeCanvas';
import { slideIn } from './helpers/motion';
import { styles } from './styles';
//oHg88FyMruAGD26Py
//template_f1timmc
//service_tripdfq
const Contact = () => {

  const formRef = useRef()
  const [message, setMessage] = useState()

  const EmailSchema = Yup.object().shape({
   name: Yup.string()
     .required('Your name is required'),
   message: Yup.string()
     .required('Your messgae is required'),
   email: Yup.string().email('Invalid email').required('Your Email is Required'),
  });

  const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: ''
      },
      validationSchema: EmailSchema,
      onSubmit: values => {
        emailjs.send(
          'service_tripdfq',
          'template_fv5aftp',
          {
            from_email: JSON.stringify(values.name),
            to_name: 'Usman',
            from_email: JSON.stringify(values.email),
            to_email: 'usiddique09@gmail.com',
            message: JSON.stringify(values.message)
          },
          'oHg88FyMruAGD26Py'
        )
        .then(() => {
          setMessage('Thankyou for reaching out to me. I will reach back to you soon')
        })
        }})




  return (
    <div id="contact" className=' py-20'>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        viewport={{ once: false }}
        transition={{
          type: 'spring',
          delay: 0,
          duration: 1,
          ease: 'easeOut',
        }}
      >
        <p className={`${styles.sectionSubText} px-20`}> Get in touch</p>
        <h3 className={`${styles.sectionHeadText} px-20`}>Contact. </h3>
      </motion.div>
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        initial={{
            x: '-100%',
            y: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            type: 'tween',
            delay: 0,
            duration: 1,
            ease: 'easeOut',
          }}
        className="xl:w-1/2 w-full  rounded-2xl"
      >
        <form
        ref={formRef}
        onSubmit={formik.handleSubmit}
        className="lg:mt-12 flex flex-col gap-8 px-20"
        >
          <label className="flex flex-col">
            <span className="text-secondary mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Usman"
              className='bg-transparent border-secondary border-2 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium '
            />
          </label>

          {formik.errors.name && <p className='text-red-700'>{formik.errors.name}</p>}

          <label className='flex flex-col'>
            <span className='text-secondary mb-4'>
            Your Email
            </span>
           <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="usman.siddique@gmail.com"
              className='bg-transparent border-secondary border-2 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium '
            />
          </label>

          {formik.errors.email && <p className='text-red-700'>{formik.errors.email}</p>}

          <label className='flex flex-col'>
            <span className='text-secondary mb-4'>
            Your Message
            </span>
           <textarea
              rows="7"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="What's your message?"
              className='bg-transparent border-secondary border-2 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none font-medium '
            />
          </label>

          {formik.errors.message && <p className='text-red-700'>{formik.errors.message}</p>}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold  rounded-xl"

          >
            {/* {loading ? 'Sending' : 'Send'} */} Send
          </button>
          <p className='text-white'>{message}</p>
        </form>
              </motion.div>

        <motion.div
          initial={{
            x: '100%',
            y: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            type: 'spring',
            delay: 0,
            duration: 1,
            ease: 'easeOut',
          }}
         className="xl:w-1/2  w-full xl:h-[550px] h-[250px] justify-center"
         >
          <ContactMeCanvas />
         </motion.div>

    </div>
    </div>
  )
}


export default Contact;
