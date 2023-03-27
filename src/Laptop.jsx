import React, { useEffect, useState } from 'react'
import { Center, Float, Html, ContactShadows, OrbitControls, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { OptimizedMacbook } from './Model/OptimizedMacbook'
import {Model} from './Model';
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

  return (
    <>
      <color args={['#0D0948']} attach="background" />

      <pointLight castShadow position={[10, 10, 10]} intensity={1.5} />
      <PresentationControls
            global
            rotation={ [ 0, 0, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
      <group position={[0,0,0]} rotation={[0,0,0]}>
        <Center>
          <Float rotationIntensity={0.4}>
          <Model position={[1, 0, 0]} rotation={[0.34000000000000064, -0.39999999999999988, 0]} scale={1} castShadow></Model>
          </Float>

          <ContactShadows position={[1, -1, 0]} scale={5} blur={3} far={3.5} />
        </Center>
      </group>
      </PresentationControls>
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
