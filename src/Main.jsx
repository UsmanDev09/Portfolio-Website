import LandingPage from './LandingPage';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { useEffect, useState } from 'react'
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
    {loading ? <Spinner /> :
    <>
    <div className={` flex xl:flex-row lg:flex-row flex-col-reverse`} >
     <LandingPage />
    </div>

    <div>
      <Portfolio />
    </div>

    <div className='contact-me'>
      <Contact />
    </div>
    </>
}
    </>
    );
}

export default Main;
