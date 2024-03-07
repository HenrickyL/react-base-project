import styled from "styled-components";
import { InputLabelSty } from "../Input.Label/style";

export const InputFieldSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 4px;
    border: 2px solid ${prop=> prop.theme.contrastLight};
    border-radius: 8px;
    padding: 12px;
    transition: ${prop=>`${prop.theme.settings.normalTransition}ms`};

    &:hover{
        border: 2px solid ${prop=> prop.theme.contrast};
    }

    &:focus-within{
        background-color: ${prop=>prop.theme.input.background};

        ${InputLabelSty}{
            position:absolute;
            top: -25%;
            border-radius:8px;
            padding:4px;
            background-color: ${prop=>prop.theme.primary}
        }
    }
`