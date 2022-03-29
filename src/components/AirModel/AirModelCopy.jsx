import React, { useRef, Suspense } from 'react'
import {ContactShadows, OrbitControls, Environment, useGLTF} from '@react-three/drei'
import {Canvas, useFrame} from "@react-three/fiber";

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/4K.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.AirMax_Head_Low.geometry} material={nodes.AirMax_Head_Low.material} position={[0, -164.59, -0.8]} rotation={[-Math.PI / 2, 0, 0]} scale={99.3} />
            <mesh geometry={nodes.Cords_low.geometry} material={nodes.Cords_low.material} position={[0.01, -165.79, -0.89]} rotation={[-Math.PI / 2, 0, 0]} scale={10} />
            <mesh geometry={nodes.MADE_IN_METAVERSE.geometry} material={nodes.MADE_IN_METAVERSE.material} position={[0.01, -165.79, -0.89]} scale={10} />
        </group>
    )
}

useGLTF.preload('/4K.glb')


function App() {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
            <Suspense fallback={null}>
                <Model/>
                <Environment preset="sunset" />
                {/*<ambientLight intensity={0.3} color='0xffffff' />*/}
                {/*<ambientLight intensity={0.3} position={[-10, -20, 0]} />*/}
                {/*<directionalLight intensity={0.9} position={[10, 30, 0]} />*/}
                {/*<directionalLight intensity={0.9} position={[10, 10, 0]} />*/}
                {/*<directionalLight intensity={0.9} position={[-10, 10, 0]} />*/}
                {/*<directionalLight intensity={0.9} position={[-5, -10, 0]} />*/}
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={10}  enableZoom={true}  />
        </Canvas>

    );
}

export default App;
