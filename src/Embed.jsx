import React, { useState, useEffect } from 'react'
import { isMotionValue, motion } from 'framer-motion'

const navigation = [
  { name: 'Create Quiz', href: '#' },
  { name: 'Quizzes', href: '#' },
  { name: 'Tournament', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Embed() {

  const [isSmallScreen, setIsSmallScreen] = useState()

  useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1020px')

      setIsSmallScreen(mediaQuery.matches)
      const handleMediaQueryChange = (event) => {
        setIsSmallScreen(event.matches)
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange)

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }

  }, [])

  return (

      <div
        style={{
          border: 'none',
          stroke: '#574240',
        }}>
        <motion.svg className="h-[700px]"  viewBox={`${isSmallScreen ? '-100 0 700 700' : '0 0 500 500'}`} xmlns="http://www.w3.org/2000/svg">
          <motion.image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
            href="bitmoji1.png" opacity="1" height="170" width="145" x="2" mask="url(#about-profil-picture-mask)" image-rendering="optimizeSpeed"></motion.image>
          <g >
            <motion.g
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              transform="translate(170 118)"
              font-weight="bold"
              fill="#574240"
              style={{ stroke: '#574240', strokeWidth: '0.5px' }}>
              <text x="0" y="0" fontSize="12" className="about-header-upper-text" style={{ opacity: 1 }}>
                Name :
              </text>
              <text x="0" y="20" fontSize="18" className="about-header-lower-text" style={{ opacity: 1 }}>
                Usman
              </text>
              <text
                x="110"
                y="0"
                fontSize="12"
                className="about-header-upper-text"
                style={{ opacity: 1, strokeWidth: '1px' }}>
                Age :
              </text>
              <text x="110" y="20" fontSize="18" className="about-header-lower-text" style={{ opacity: 1 }}>
                23
              </text>
              <text
                x="200"
                y="0"
                fontSize="12"
                className="about-header-upper-text"
                style={{ opacity: 1, strokeWidth: '1px' }}>
                Experience :
              </text>
              <text x="200" y="20" fontSize="18" className="about-header-lower-text" style={{ opacity: 1 }}>
                1 year
              </text>
            </motion.g>
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              strokeDasharray="0 1"
              fill="none"
              points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
            />
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              strokeDasharray="0 1"
              fill="none"
              points="145,85 250,85 260,95 490,95 500,105 500,135 500,150 490,160 200,160 190,170 145,170"
            />
          </g>
          <g transform="translate(0 188)">
            <mask id="skills-header-mask">
              <motion.polyline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              fill="white" points="0,37 0,10 10,0 190,0 200,10 200,37"></motion.polyline>
              <rect fill="white" x="0" y="210" width="500" height="6"></rect>
            </mask>
            <rect
              id="skills-header-rect"
              x="0"
              y="0"
              height="40"
              width="200"
              fill="black"
              opacity=".15"
              mask="url(#skills-header-mask)"
              style={{ width: '200px' }}></rect>
            <motion.text initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              x="71" y="25" class="about-header" fill="#574240" font-size="18" font-weight="bold" style={{ stroke: '#574240', strokeWidth: '1px' }}>
              SKILLS
            </motion.text>
            <motion.foreignObject initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              x="0" y="60" width="506" height="340">
              <div id="about-skills-container" class="about-container">
                <div id="about-skills-render-container">
                  <div id="about-skill-container-0" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-0" class="about-skill-span">
                      React Js
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-0" class="about-skill-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-1" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-1" class="about-skill-span">
                      Node Js
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-1" class="about-skill-bar" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-2" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-2" class="about-skill-span">
                      JavaScript
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-2" class="about-skill-bar" style={{ width: '55%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-3" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-3" class="about-skill-span">
                      HTML + CSS
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-3" class="about-skill-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div id="about-skill-container-4" class="row about-skill-container" style={{ opacity: 1 }}>
                    <span id="about-skill-span-4" class="about-skill-span">
                      React Three Fiber
                    </span>
                    <div class="about-skill-bar-container">
                      <div id="about-skill-bar-4" class="about-skill-bar" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                <div id="about-others-render-container"></div>
              </div>
            </motion.foreignObject>
            <motion.polyline
            initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: 0,
              }}
              fill="none" //fill="#00b7ff"
              points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290 400,290 410,280 490,280 500,270 500,55 490,45 310,45 300,35
"
            />
            {/* <motion.polyline
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              fill="none"
              points="250,35 300,35 310,45 490,45 500,55 500,270 490,280 410,280 400,290 250,290"
            />
            <motion.polyline
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              fill="none"
              points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335 490,335 500,325 500,55 490,45 410,45 400,35"
            /> */}
          </g>
        </motion.svg>
    </div>
  )
}
