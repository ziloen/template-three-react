import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva, folder, useControls } from 'leva'

// #region
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
// #endregion

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
      <Canvas className='size-full' dpr={[1, 2]} renderer={{ antialias: true, forceWebGL: false }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
        <OrbitControls makeDefault />
        <CornellBox />
      </Canvas>
    </>
  )
}



function CornellBox() {
  return (
    <group>
      {/* --- 墙壁 --- */}

      {/* 地板 (白色) */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardNodeMaterial color="#FFFFFF" roughness={0.8} />
      </mesh>

      {/* 天花板 (白色) */}
      <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardNodeMaterial color="#FFFFFF" roughness={0.8} />
      </mesh>

      {/* 后墙 (白色) */}
      <mesh position={[0, 0, -2.5]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardNodeMaterial color="#FFFFFF" roughness={0.8} />
      </mesh>

      {/* 左墙 (红色 - 经典康奈尔红) */}
      <mesh position={[-2.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardNodeMaterial color="#FF0000" roughness={0.8} />
      </mesh>

      {/* 右墙 (绿色 - 经典康奈尔绿) */}
      <mesh position={[2.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <meshStandardNodeMaterial color="#00FF00" roughness={0.8} />
      </mesh>

      {/* --- 内部物体 --- */}

      {/* 左侧高方体 (通常稍作旋转) */}
      <mesh
        position={[-0.8, -1, -0.8]}
        rotation={[0, 0.3, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.5, 3, 1.5]} />
        <meshStandardNodeMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* 右侧矮方体 (这里我们按常见变体换成球体，或者你可以换回 BoxGeometry) */}
      <mesh
        position={[0.8, -1.75, 0.8]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.75, 32, 32]} />
        {/* 为了展示 WebGPU 材质，这里稍微加点光泽 */}
        <meshStandardNodeMaterial color="#FFFFFF" roughness={0.1} metalness={0.1} />
      </mesh>

      {/* --- 光源 --- */}

      {/* 顶部模拟面光源 (Emissive Mesh + PointLight) */}
      <mesh position={[0, 2.49, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>

      {/* 实际照亮场景的光 (由于不是光追，面光源不发光，需用聚光灯或点光源模拟) */}
      <spotLight
        position={[0, 2.4, 0]}
        intensity={20}
        angle={Math.PI / 3}
        penumbra={0.5}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* 补充一点环境光模拟间接照明，否则阴影太黑 */}
      <ambientLight intensity={0.5} />
    </group>)
}