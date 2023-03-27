import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from './helpers/motion';
import { styles } from './styles';
import { projects } from './Projects/projects';

const ProjectCard = ({index, name, desciption, tags, image, source_code_link }) => {
  return (
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
        type: 'spring',
        delay: 0,
        duration: 1,
        ease: 'easeOut',
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="p-4 rounded-2xl sm:w-[360px] w-full shadow-lg">
        <div className="relative w-full h-[230px]">
          <a href={source_code_link} target="_blank">
            <img src={image} alt={name} className="w-full h-full object-fit rounded-2xl" />
            <div className="absolute inset-0 flex-justify-end m-3 card-img-hover">
              <div className="black-graident w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                {/* <img src={github} alt={github} className="w-1/2 h-1/2 object-contain" /> */}
              </div>
            </div>
          </a>
        </div>
        <div></div>

        <div className="mt-5">
          <h3 className="text-secondary font-bold mt-2 ">{name}</h3>
          <p classname="text-secondary mt-2 text-[14px]">{desciption}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pb-5">
          {tags.map((tag) => {
            return (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color} border-secondary   text-secondary  text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-${tag.color}`}>
                {tag.name}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Portfolio = () => {
  return (
    <div className="px-20 py-6">
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
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex work" id="work">
        {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills
          and experience through real-world examples
          of my work. Each project is briefly described
          with links to code repositories and live demos
          in it. It reflects my ability to solve
          complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p> */}
      </div>

      <div className="mt-20 flex flex-wrap gap-10 m-auto">
        {projects.map((project, index) => {
          return <ProjectCard key={index} index={index} {...project} />
        })}
      </div>
    </div>
  )
}

export default Portfolio;
