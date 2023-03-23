import Laptop from './Laptop'
import AboutMe from './AboutMe'

const LandingPage = () => {
  return (
    <>
      <div className='xl:w-1/2 lg:w-3/5 flex-1 md:w-full mx-auto h-[100vh]' id="about">
      <AboutMe />
      </div>
      <div className='xl:w-1/2 lg:w-2/5 md:w-full h-[100vh]'>
      <Laptop />
      </div>
    </>
   );
}

export default LandingPage;
