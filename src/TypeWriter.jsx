import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
const TypeWriter = () => {
  return (
    <motion.div
    className='bg-gray-800 '
    initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString(
              '<span style="font-size: 150px; color: rgba(255,255,255,.75);">HI. I AM USMAN, <span style="color:#574240 ; text-shadow: -1px 3px 2px #574240; font-weight: bold; font-size:150px;" >WEB DEVELOPER </span> FROM PAKISTAN.</span> ',
            )
            .changeDelay(500)
            .callFunction(() => {
            })
            .callFunction(() => {
            })
            .start()
        }}

      />
    </motion.div>
  )
}

export default TypeWriter
