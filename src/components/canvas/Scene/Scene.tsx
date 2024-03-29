"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { webgl } from "@/helpers/global";

export default function Scene({ ...props }) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <Canvas {...props}>
            <webgl.Out />
            <Preload all />
        </Canvas>
    );
}
