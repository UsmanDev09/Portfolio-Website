import React, {useEffect, useState} from 'react';
import { Text, Html, ContactShadows, PresentationControls, Environment, useGLTF, OrbitControls, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MacbookPro } from './Model/Macbook_pro'
import {OptimizedMacbook} from './Model/OptimizedMacbook'
import { useAspect, Center } from '@react-three/drei'
import TypeWriter from './TypeWriter'
function Laptop() {

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

  const aspect = useAspect()



  return (
    <>
      {/* #131528 */}
      <color args={['#f5f0e5']} attach="background" />

      {/* <OrbitControls makeDefault /> */}
              <pointLight castShadow position={[10, 10, 10]} intensity={1.5} />

        <group>
        <perspectiveCamera
          aspect={aspect}
          position={[0, 0, 5]}
          fov={75}
          near={0.1}
          far={1000}
        />
      <Center>
        {/* <Float> */}
        <OptimizedMacbook
          position={[0, 0, 0]}
          rotation={[0.34000000000000064, -0.05999999999999988, 0]}
          scale={10}
          castShadow
          // positionScreen={positionScreen}
          // rotationScreen={rotationScreen}
          // positionScreenZ={positionScreenZ}
          // rotationScreenZ={rotationScreenZ}
          // positionKeyboard={positionKeyboard}
          // positionKeyboardZ={positionKeyboardZ}
          // rotationKeyboard={rotationKeyboard}
          // rotationKeyboardZ={rotationKeyboardZ}
        >
        </OptimizedMacbook>

        <Html
          transform
          distanceFactor={1}
          position={[`${isSmallScreen ? '0.12' : '-0.3600000000000022'}`, 1.8539999999999968, -5]}
          rotation={[-0.010000000000000205, -0.08999999999999997, -0.03]}>
            <TypeWriter />
        </Html>
        {/* </Float> */}
        <ContactShadows position={[0,-1 , 0]} scale={20} blur={2} far={4.5} />
      </Center>


        </group>
        {/* <Html
          position={[-7, 3.9, 0]}
        >
          <AboutMe />
        </Html> */}
      {/*
      <ContactShadows
        position-y={ -1.3 }
        rotation-y={ -0.1 }
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2 }
      /> */}
    </>
  )
}

export default function Portfolio() {
  return (
    <Canvas>
      <Laptop />
    </Canvas>
  )
}
