import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 160, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#795dbb"
          attach="material"
          distort={0.5}
          speed={1.5}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default Shape;
