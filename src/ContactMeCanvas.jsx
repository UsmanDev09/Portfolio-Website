import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Float } from '@react-three/drei';
import { OptimizedContactModel } from './Model/OptimizedContactModel';
import { ContactShadows } from '@react-three/drei';
const ContactMeCanvas = () => {

   const [isSmallScreen, setIsSmallScreen] = useState()

  useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1280px')

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
    <Canvas
      shadows
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}

       receiveShadow
    >
      <Suspense  >
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          position={0}
          rotation={0}
        />
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
        <Float>
        <OptimizedContactModel receiveShadow scale={isSmallScreen? 18: 14} rotation-x={0.5}/>
        {/* <ContactShadows position={[0,-1 , 0]} scale={20} blur={2} far={4.5} /> */}

       </Float>
      </Suspense>
    </Canvas>
   );
}

export default ContactMeCanvas;
