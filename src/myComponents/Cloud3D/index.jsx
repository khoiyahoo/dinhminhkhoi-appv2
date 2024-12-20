import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import Typography from "@/myComponents/Typography";

function Model({ open, hinge, ...props }) {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("/3d/mac-draco.glb");
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  // Make it float in the air when it's opened
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });
  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export default function Cloud3D() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(true);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <web.main
      style={{
        background: props.open.to([0, 1], ["#FFFFFF00", "#FFFFFF00"]),
        height: "350px",
        position: "relative",
      }}
    >
      {!open && (
        <div
          className="absolute left-0 right-0 top-[160px] ml-auto mr-auto text-center"
          style={{ top: "100px" }}
        >
          <Typography
            size="normal"
            type="bold"
            variant="h2"
            className="relative"
          >
            Hi, I&apos;m{" "}
            <div className="absolute left-1/2 top-[5%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="39"
                viewBox="0 0 105 39"
                fill="none"
              >
                <path
                  className="dash"
                  d="M8.99306 23.2725C18.4418 35.9728 71.0212 33.6263 75.0924 33.2353C79.1637 32.8444 110.292 30.716 99.6952 12.3534C89.0986 -6.00909 28.5114 18.0953 25.7485 5.50946C22.9855 -7.07639 -7.80726 9.07085 3.47482 24.6747C12.9734 37.8119 65.6029 42.644 104 32.7089"
                  stroke="url(#paint0_linear_8278_9636)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_8278_9636"
                    x1="81.2355"
                    y1="35.4529"
                    x2="70.1015"
                    y2="-9.94537"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F2BA73"></stop>
                    <stop offset="0.223958" stopColor="#F2A550"></stop>
                    <stop offset="0.479167" stopColor="#EA8D37"></stop>
                    <stop offset="0.78125" stopColor="#F07835"></stop>
                    <stop offset="1" stopColor="#F05322"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="animate-text bg-conversion-01 bg-clip-text text-transparent ml-[1rem]">
              Khoi
            </span>
          </Typography>
        </div>
      )}

      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, -30], fov: 35 }}
        style={{
          height: "700px",
          position: "absolute",
          left: 0,
          top: "-200px",
        }}
      >
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  );
}