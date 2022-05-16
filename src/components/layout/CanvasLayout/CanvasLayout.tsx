import { ReactNode, useEffect, useRef } from "react";
import { Preload, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import useStore from "../../../hooks/store";

interface CanvasLayoutProps {
    children: ReactNode;
}

const Controls = () => {
    const dom = useStore((state) => state.dom);
    const control = useRef(null);

    useEffect(() => {
        if (control) {
            dom.current.style["touch-action"] = "none";
        }
    }, [dom, control]);
    // @ts-ignore
    return <OrbitControls ref={control} domElement={dom.current} />;
};

const CanvasLayout = ({ children }: CanvasLayoutProps) => {
    const dom = useStore((state) => state.dom);

    return (
        <Canvas
            style={{
                position: "absolute",
                top: 0,
                touchAction: "none",
                // color from blender world theme
                backgroundColor: "rgb(50,50,50)",
            }}
            // Uncomment when using
            // depth texture in shaders
            // camera={{
            //     position: [0, 0, 4],
            //     near: 0.1,
            //     far: 100,
            // }}
            /* @ts-ignore */
            onCreated={(state) => state.events.connect(dom.current)}
            // Note: connect to dom so, from what i know, you can still use orbitControls and other features in the future without next canvas within a main dom div
            // Delete above when ready for own project
        >
            <Preload all />
            <Controls />
            {children}
            <Perf position={"bottom-left"} />
        </Canvas>
    );
};

export default CanvasLayout;
