import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Navigation = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [navBg, setNavBg] = useState(false)
  console.log('navbg', navBg)

  const changeNavBg = () => {
   window.scrollY >= 400 ? setNavBg(true) : setNavBg(false);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },

  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])
  return (
    // bg-[#00E2BD]
    <nav  className={`px-4 md:px-20 lg:px-20 xl:px-20 2xl:px-20 rounded-b-lg absolute w-full z-20 top-0 left-0 ${navBg ?  'bg-secondary py-0' : 'py-2.5' }`}>
      <div className=" flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center flex-col">
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="150"
              height="75"
              viewBox="300 0 1000 623">
              <g transform="matrix(1,0,0,1,-0.6060606060606233,0.2522267206477409)">
                <svg
                  viewBox="0 0 396 247"
                  data-background-color="#ffffff"
                  preserveAspectRatio="xMidYMid meet"
                  height="623"
                  width="1000"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,-0.09999999999999432)">
                    <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                      <g>
                        <svg></svg>
                      </g>
                      <g>
                        <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                          <g transform="matrix(1,0,0,1,120.95347222222223,37.08)">
                            <svg viewBox="0 0 153.61305555555552 173.04" height="173.04" width="153.61305555555552">
                              <g>
                                <svg viewBox="0 0 153.61305555555555 173.04000000000002" height="173.04" width="153.61305555555552">
                                  <g>
                                    <svg viewBox="0 0 153.61305555555555 173.04000000000002" height="173.04000000000002" width="153.61305555555555">
                                      <g>
                                        <svg viewBox="0 0 153.61305555555555 173.04000000000002" height="173.04000000000002" width="153.61305555555555">
                                          <g>
                                            <svg viewBox="0 0 153.61305555555555 173.04000000000002" height="173.04000000000002" width="153.61305555555555">
                                              <g transform="matrix(1,0,0,1,0,0)">
                                                <svg
                                                    width="153.61305555555555"
                                                    viewBox="2 -36.5 44 40"
                                                    height="173.04000000000002"
                                                    data-palette-color="#00c8a1">
                                                  <motion.path
                                                    d="M17.95 6.7L17.95 6.7Q13.1 6.7 9.98 5.68 6.85 4.65 5.1 2.95 3.35 1.25 2.68-0.95 2-3.15 2-5.5L2-5.5 2-28.75Q2-29.4 2.18-29.85 2.35-30.3 2.7-30.6L2.7-30.6 9.15-36.05Q9.4-36.25 9.83-36.38 10.25-36.5 10.75-36.5L10.75-36.5 18.6-36.5Q19.8-36.5 20.35-35.95 20.9-35.4 20.9-34.2L20.9-34.2 20.9-11.4Q20.9-10.95 21.05-10.58 21.2-10.2 21.7-10L21.7-10 21.7-28.75Q21.7-29.4 21.85-29.85 22-30.3 22.3-30.55L22.3-30.55 22.35-30.6 28.85-36.05Q29.1-36.25 29.5-36.38 29.9-36.5 30.45-36.5L30.45-36.5 38.05-36.5Q39.25-36.5 39.8-35.95 40.35-35.4 40.35-34.2L40.35-34.2 40.35-9.45Q40.35-7.15 39.7-5.2 39.05-3.25 37.35-1.85L37.35-1.85 30.85 3.55Q29.1 5.05 26 5.88 22.9 6.7 17.95 6.7ZM39.85-9.45L39.85-9.45 39.85-34.2Q39.85-35.15 39.43-35.58 39-36 38.05-36L38.05-36 30.45-36Q29.5-36 29.08-35.58 28.65-35.15 28.65-34.2L28.65-34.2 28.65-11.4Q28.65-10.4 27.9-9.73 27.15-9.05 24.5-9.05L24.5-9.05Q21.9-9.05 21.15-9.73 20.4-10.4 20.4-11.4L20.4-11.4 20.4-34.2Q20.4-35.15 19.98-35.58 19.55-36 18.6-36L18.6-36 10.75-36Q9.8-36 9.38-35.58 8.95-35.15 8.95-34.2L8.95-34.2 8.95-9.45Q8.95-7.15 9.63-5.28 10.3-3.4 12.03-2.08 13.75-0.75 16.75 0 19.75 0.75 24.4 0.75L24.4 0.75Q29.05 0.75 32.05 0 35.05-0.75 36.77-2.08 38.5-3.4 39.18-5.28 39.85-7.15 39.85-9.45ZM14.45-10.65L14.45-31.5 14.95-31.5 14.95-10.65Q14.95-7.85 16.93-6.13 18.9-4.4 24.45-4.4L24.45-4.4Q30-4.4 32-6.13 34-7.85 34-10.65L34-10.65 34-31.5 34.5-31.5 34.5-10.65Q34.5-7.65 32.4-5.78 30.3-3.9 24.45-3.9L24.45-3.9Q18.6-3.9 16.53-5.78 14.45-7.65 14.45-10.65L14.45-10.65Z"
                                                    stroke={`${navBg ? '#000' : '#00c8a1'}`}
                                                    strokeWidth={2}
                                                    fill={`${navBg ? '#000' : 'transparent'}`}
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    strokeDasharray="0 1"
                                                    transition={{
                                                      ease: 'linear',
                                                      duration: 2,
                                                    }}

                                                   ></motion.path>
                                                </svg>
                                              </g>
                                            </svg>
                                          </g>
                                        </svg>
                                      </g>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                          <g></g>
                        </svg>
                      </g>
                      <defs></defs>
                    </svg>
                    <motion.rect
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 200,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 2
                      }}
                      width="395.52" height="247.2" fill="none" stroke="none" visibility="hidden"></motion.rect>
                  </g>
                </svg>
              </g>
            </svg>
            {/* <img src="usmanlogo.svg" className="h-6 mr-3 sm:h-9" alt="Usmans Logo" /> */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{
                duration: 200,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2
              }}
              className={`font-monspace  ml-2 ${navBg ? 'text-black' : 'text-secondary'}`}
            >
              USMAN.
            </motion.p>
          </div>
        </a>
        <div className="flex md:order-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
              transition={{
                duration: 1,
            }}
            className="text-white flex gap-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <a href="https://www.linkedin.com/in/muhammadusmansiddique/" target="_blank" rel="noreferrer" className="cursor-pointer">
              <img src="linkedin.png" height="28px" width="28px" alt="linkedin"/>
            </a>
            <a href="https://github.com/UsmanDev09" target="_blank" rel="noreferrer" className="cursor-pointer">
              <img src="github.png" height="28px" width="28px" alt="github"/>
            </a>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
              transition={{
                duration: 1,
            }}
            onClick={() => setOpenMenu(!openMenu)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2  dark:hover:bg-gray-700 "
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </motion.button>
        </div>
        <AnimatePresence>
        <motion.div
          animate={openMenu ? "open" : "closed"}
          variants={variants}

          className={`items-center rounded-xl mt-10 justify-between ${openMenu ? 'block bg-white' : 'blvk'} w-full md:flex md:w-auto md:order-1 lg:bg-transparent`}
          id="navbar-sticky">
          <ul class="flex flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <motion.li>
              <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{
                duration: 1,
              }}
                href="#about"
                className={`font-monospace block py-2 pl-3 pr-4  md:hover:text-black rounded md:bg-transparent md:p-0 dark:text-white ${navBg ? 'text-black' : 'text-secondary' }`}
                aria-current="page">
                About
              </motion.a>
            </motion.li>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{
                  duration: 1,
                }}
                href="#work"
                className={`font-monospace block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${navBg ? 'text-black' : 'text-secondary' }`}>
                Work
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  transition={{
                    duration: 1,
                }}
                href="#contact"
                className={`font-monospace block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${navBg ? 'text-black' : 'text-secondary' }`}>
                Contact
              </motion.a>
            </li>
          </ul>
        </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
