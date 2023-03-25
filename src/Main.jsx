import Portfolio from './Portfolio';
import Contact from './Contact';

import { useEffect, useState } from 'react'
import Laptop from './Laptop'
import Embed from './Embed';
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
        <div className="2xl:w-2/3  2xl:px-0 px-20 flex-1 w-full sm:w-full xs:w-full h-[calc(100vh-80px)] flex items-center 2xl:justify-start justify-center">
        <Embed />
        </div>
        <div className='2xl:w-1/3 w-full sm:w-full xs:w-full h-[calc(100vh-80px)]'>
          <Laptop />
        </div>
      </div>
      <Portfolio />
      <Contact />
      </>
  {/* } */}
    </>
    );
}

export default Main;
