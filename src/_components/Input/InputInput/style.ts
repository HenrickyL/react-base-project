import styled from "styled-components";

interface InputSty{
    background?: string
}

export const InputSty = styled.input<InputSty>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 2px 4px;
    color: ${prop => prop.theme.contrast};
    
    &[type="button"] {
        transition: ${prop=>`${prop.theme.settings.normalTransition}ms`};
        background-color: ${prop => prop.background || prop.theme.primary };
        font-weight: bold;
    }
`