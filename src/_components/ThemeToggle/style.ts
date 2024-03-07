import styled from "styled-components";


export const ThemeToggleSty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border-radius: 50%;
    color: ${prop=> prop.theme.contrast};
    border: 1px solid ${prop=> prop.theme.contrast};;
    background-color: ${prop=>prop.theme.gray};
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
        10px 10px 70px rgba(0,0,0,0.25),
        inset 5px 5px 20px rgba(0,0,0,0.5),
        inset 5px 5px 8px rgba(255,255,255,0.2),
        inset -3px -3px 8px rgba(0,0,0,0.75);

    &:hover{
        box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
        10px 10px 70px rgba(255,255,255,0.25),
        inset 5px 5px 20px rgba(255,255,255,0.5),
        inset 5px 5px 8px rgba(0,0,0,0.2),
        inset -3px -3px 8px rgba(255,255,255,0.75);
    }
    svg{
        width: 100%;
        height: 100%;
    }
`