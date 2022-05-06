// Delete this welcome message folder and files when youre ready to start your project //
import styled from "styled-components";

const WelcomeMessage = () => {
    return (
        <>
            <StyledDiv>
                <Styledh2>
                    A minimal react three fiber Starter using Nextjs with
                    TypeScript and Styled Components
                </Styledh2>
                <StyledTip>
                    <DeleteSpan>delete:</DeleteSpan>{" "}
                    @/component/dom/WelcomeMessage Folder when readly to start
                    your project
                </StyledTip>
                <StyledTip2>
                    <DeleteSpan>delete:</DeleteSpan>{" "}
                    @/component/canvas/Box Folder when readly to start
                    your project
                </StyledTip2>
            </StyledDiv>
        </>
    );
};

const StyledDiv = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");
    background-color: hsl(200, 100%, 68%);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: fit-content;
    margin-top: 58px;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
        0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const Styledh2 = styled.h2`
    font-family: "Maven Pro", sans-serif;
    font-size: 1rem;
    padding: 8px 12px 8px 12px;
    &::selection {
        background: hsl(51, 46%, 84%);
    }
`;

const StyledTip = styled.p`
    font-family: "Maven Pro", sans-serif;
    font-size: 1rem;
    padding: 8px 12px 8px 12px;
    &::selection {
        background: hsl(51, 46%, 84%);
    }
`;

const StyledTip2 = styled(StyledTip)`
    padding: 0px 12px 8px 12px;
`;

const DeleteSpan = styled.span`
    font-family: "Maven Pro", sans-serif;
    font-weight: bold;
    color: hsl(0, 100%, 24%);
    &::selection {
        background: hsl(51, 46%, 84%);
    }
`;

export default WelcomeMessage;
