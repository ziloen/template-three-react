import type { ThreeElement } from "@react-three/fiber"
import type { MeshStandardNodeMaterial } from "three/webgpu"

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardNodeMaterial: Omit<ThreeElement<MeshStandardNodeMaterial>, 'args'>
    }
  }
}

export { }

