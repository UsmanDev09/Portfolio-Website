import { useState } from 'react'


const Navigation = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
// bg-[#00E2BD]
      <nav className="px-4 md:px-20 lg:px-20 xl:px-20 2xl:px-20 py-2.5  fixed w-full z-20 top-0 left-0  dark:border-gray-600">
        <div className=" flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center flex-col">
            <div className="flex flex-col">
              <img src="usmanlogo.svg" className="h-6 mr-3 sm:h-9" alt="Usmans Logo" />
              <p className="font-monspace text-secondary">USMAN.</p>
            </div>
        </a>
        <div className="flex md:order-2">
            <div className="text-white flex gap-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <a href="https://www.linkedin.com/in/muhammadusmansiddique/" target="_blank" className="cursor-pointer"><img src="linkedin.png" height="28px" width="28px"/></a>
              <a href="https://github.com/UsmanDev09" target="_blank" className="cursor-pointer"><img src="github.png" height="28px" width="28px"/></a>
            </div>
            <button onClick={() => setOpenMenu(!openMenu) }data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div class={`items-center justify-between ${openMenu ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 lg:bg-transparent md:bg-white`} id="navbar-sticky">
          <ul class="flex flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#about" className="font-monospace block py-2 pl-3 pr-4 text-secondary md:hover:text-black rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">About</a>
            </li>
            <li>
              <a href="#work" className="font-monospace block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Work</a>
            </li>
            <li>
              <a href="#contact" className="font-monospace block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>

  )
}

export default Navigation
