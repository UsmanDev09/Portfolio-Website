import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Laptop from './Laptop'
import Embed from './Embed'
import Spinner from './Spinner/Spinner'

const Main = () => {
  const [loading, setLoading] = useState(true)
  const handleLoading = () => {
    setLoading(false)
  }
  useEffect(() => {

window.addEventListener("load",handleLoading);
return () => window.removeEventListener("load",handleLoading);
  }, [])
  return (
    <>
    {/* {loading ? <Spinner />  : */}
    <>
      <div className='2xl:px-20 xl:px-0 flex 2xl:flex-row flex-col-reverse relative mt-24 ' id="about">
        <div className="2xl:w-2/3  2xl:px-0 px-20 flex-1 w-full h-[calc(100vh-80px)] flex items-center 2xl:justify-start justify-center">
        <Embed />
        </div>
         <motion.div
          initial={{
            x: 0,
            y: -500,
          }}
          whileInView={{
            x: 0,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            type: 'spring',
            delay: 0,
            duration: 4,
            ease: 'easeOut',
          }}
          className='2xl:w-1/3 w-full sm:w-full xs:w-full h-[calc(100vh-80px)]'
          >
            <Laptop />
        </motion.div>
      </div>
      <Portfolio />
      <Contact />
      </>
  {/* } */}
    </>
    );
}

export default Main;
