import React, { useRef, useState, Fragment } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

import '../assets/styles/icube.css';

function Box(props) {

    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        if (active) {
            console.log('clicou');
        }
        if (hovered && !active) {
            mesh.current.rotation.z += 0.01
            mesh.current.rotation.x += 0.01
        }
        if (hovered && active) {
            mesh.current.rotation.y += 0.02
            mesh.current.rotation.x += 0.06
        }
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshStandardMaterial attach="material" color={hovered ? '#f90' : '#6e00ff'} />
        </mesh>
    )
}

export default function ICube() {
    return (
        <Fragment>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
        </Fragment>
    );
}