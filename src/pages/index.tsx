import type { NextPage } from "next";
import styled from "styled-components";
import { useControls } from "leva";
import CanvasLayout from "../components/layout/CanvasLayout";
import DomLayout from "../components/layout/DomLayout";
import WelcomeMessage from "../components/dom/WelcomeMessage";
import Box from "../components/canvas/Box";

// dom components go here
const DOM = () => {
    return (
        <DomLayout>
            <WelcomeMessage />
        </DomLayout>
    );
};

// canvas components go here
const R3F = () => {
    // Leva's useControl causes the ReactDOM.render warning that shows in the console
    //comment out if u dont want error
    const { color, hoverColor } = useControls({
        color: "#c1b61f",
        hoverColor: "#2d52ad",
    });

    return (
        <CanvasLayout>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box color={color} hoverColor={hoverColor} />
        </CanvasLayout>
    );
};

const Home: NextPage = () => {
    return (
        <>
            <DOM />
            <R3F />
        </>
    );
};

export default Home;
