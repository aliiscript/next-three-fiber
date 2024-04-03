"use client";

import dynamic from "next/dynamic";
import { WebGLRenderer } from "three";
import { Canvas } from "@react-three/fiber";
import Box from "@/components/canvas/Box";
import { Suspense } from "react";
import { Html } from "@react-three/drei";
import styled from "styled-components";
const View = dynamic(() => import("@/components/canvas/View"), {
    ssr: false,
    loading: () => (
        <StyledLoading>
            <p>Loading...</p>
        </StyledLoading>
    ),
});

import WelcomeMessage from "@/components/dom/WelcomeMessage";
import {
    Bloom,
    DepthOfField,
    EffectComposer,
    Noise,
    Vignette,
} from "@react-three/postprocessing";
import { RenderPass } from "three-stdlib";
import { useThree } from "@react-three/fiber";

export default function Page() {
    return (
        <>
            <div>
                <WelcomeMessage />
                {/* Does not work with view for some reason and only regular canvas */}
                <View
                    orbit={true}
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        height: "100vh",
                        width: "100%",
                    }}
                >
                    <Suspense fallback={<Html center>Loading.</Html>}>
                        <Scene />
                    </Suspense>
                </View>
            </div>
        </>
    );
}

const Scene = () => {
    return (
        <>
            <ambientLight intensity={2} />
            <pointLight intensity={2} position={[1, 1, 1]} />
            <Box color={"#c1b61f"} hoverColor={"#2d52ad"} />
        </>
    );
};

const StyledLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;
