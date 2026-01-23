import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Leva, folder, useControls } from 'leva'
import { WebGPURenderer } from "three/webgpu"

// TODO:
// 1. 雷达转圈扫描效果
// 2. 爆炸震荡波效果
// 3. 仿 GitHub 地球效果

// Example
// https://codepen.io/bsehovac/pen/EMyWVv
// https://codepen.io/radixzz/pen/PRaRZB
// https://codepen.io/sanprieto/pen/XWNjBdb
// https://codepen.io/Yakudoo/pen/YGxYej
// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
// https://github.com/wwwtyro/Astray
// https://codepen.io/pizza3/pen/pobevYW
// https://codepen.io/ko-yelie/pen/LqXWWx
// https://codepen.io/xdesro/pen/JxOrqe
// https://codepen.io/mwmwmw/pen/VgemeN
// https://codepen.io/ReGGae/pen/bmyYEj
// https://codepen.io/zadvorsky/pen/PNXbGo
// https://codepen.io/kenjiSpecial/pen/BVxxJa


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
      <Canvas className='size-full bg-dark-gray-800 text-white' dpr={[1, 2]} gl={async (props) => {
        const renderer = new WebGPURenderer({
          canvas: props.canvas as HTMLCanvasElement,
          antialias: props.antialias,
          alpha: props.alpha,
        })
        await renderer.init()
        return renderer
      }}>
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