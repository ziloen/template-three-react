import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Leva, folder, useControls } from 'leva'

// TODO:
// 1. 雷达转圈扫描效果
// 2. 爆炸震荡波效果
// 3. 仿 GitHub 地球效果

export default function Index() {
  const controls = useControls({
    number: 3,
    color: 'lightblue',
    folder: folder({
      select: { value: 'something', options: ['else'] }
    })
  })

  return (
    <>
      <Leva collapsed={false} />
      <Canvas className='h-full w-full bg-gray-9 text-white'>
        <OrbitControls />
        <ambientLight intensity={1} color={'pink'} />
        <BoxModel />
      </Canvas>
    </>
  )
}


function BoxModel() {
  useFrame(state => {
    const { gl, scene, camera } = state
  })

  return (
    <mesh
      castShadow
      receiveShadow
    >
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}