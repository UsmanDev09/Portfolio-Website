import React, { useEffect, useState } from 'react'
import { Center, Float, Html, ContactShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

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

      {/* <OrbitControls makeDefault /> */}
      <pointLight castShadow position={[10, 10, 10]} intensity={1.5} />

      <group position={[0,0,0]} rotation={[0,0,0]}>
        <Center>
          {/* <Float> */}
          <Model position={[1, 0, 0]} rotation={[0.34000000000000064, -0.05999999999999988, 0]} scale={1} castShadow></Model>

          <Html transform distanceFactor={1} className="htmlWrapper" position={[1, 2, -5]} rotation={[-0.011000000000000205, -0.09399999999999997, -0.03]}>
            <TypeWriter />
          </Html>
          {/* </Float> */}
          <ContactShadows position={[1, -1, 0]} scale={4} blur={3} far={2.5} />
        </Center>
      </group>
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
