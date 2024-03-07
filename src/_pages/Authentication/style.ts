import styled, {keyframes} from "styled-components";
import { FormRootSty } from "../../_components/Form/FormRoot/style";
import { FormFieldGroupSty } from "../../_components/Form/FormFieldGroup/style";
import { FormFieldSty } from "../../_components/Form/FormField/style";
import { InputButtonSty } from "../../_components/Input/InputButton/style";

const rotating = keyframes`
  0% {
    --angle: 0deg; 
  }
  100% {
    --angle: 360deg; 
  }
`


export const SpanSty = styled.div`
    color: ${prop=>prop.theme.secondaryLight};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    & span{
        transition: 0.5s;
        font-weight: bold;
        cursor: pointer;
    }
    & span:hover {
        color: ${prop=>prop.theme.secondary};
        text-shadow: 0 0 5px ${prop=>prop.theme.secondary},
        0 0 10px ${prop=>prop.theme.secondary};
    }
`

export const LoginDivSty =  styled.div`
    position: relative;
    width: 25rem;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    &, &::before{
        background: repeating-conic-gradient(
            from var(--angle), 
            ${prop=>prop.theme.primary} 0%,
            ${prop=>prop.theme.primary} 5%,
            transparent 10%, transparent 40%,
            ${prop=>prop.theme.primaryLight} 50%
        );
        filter: drop-shadow(0 15px 50px ${prop=>prop.theme.black});
        border-radius: 20px;
        animation: ${rotating} 4s linear infinite;
    }


    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${prop=>prop.theme.background};
        border-radius: 20px;
        background: repeating-conic-gradient(
            from var(--angle), 
            ${prop=>prop.theme.secondary} 0%,
            ${prop=>prop.theme.secondary} 5%,
            transparent 10%, transparent 40%,
            ${prop=>prop.theme.secondaryLight} 50%
        );
        animation-delay: -1s;
    }

    &::after{
        content: '';
        position: absolute;
        inset: 4px;
        background-color: ${prop=>prop.theme.backgroundSnd};
        border: 8px solid ${prop=>prop.theme.background};
        border-radius: 15px;
    }

    &:hover, &:focus-within {
        width: 25rem;
        height: 22rem;
        ${FormRootSty}{
            inset: 40px;
            ${FormFieldGroupSty}, ${FormFieldSty}, ${InputButtonSty}, ${SpanSty}{
                display: flex;
                opacity: 100%; 
                transform: translateY(0);
                position: relative;
                transition: 0.5s;
                transition-delay: 0.1s;
            }

            ${InputButtonSty}{
                box-shadow: 0 0 4px ${prop=>prop.theme.primaryLight},
                0 0 10px ${prop=>prop.theme.primaryLight};
            }
        }

    }
`

export const LoginSty = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    ${FormRootSty}{
        position: absolute;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        inset: 60px;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.2);
        border-bottom: 2px solid rgba(255,255,255,0.5);
        box-shadow: inset 0 10px 20px rgba(0,0,0,0.5);
        z-index: 10;
        transition: 0.5s;
        overflow: hidden;


        ${FormFieldGroupSty}, ${FormFieldSty}, ${InputButtonSty}, ${SpanSty}{
            transition: 0;
            opacity: 0%; 
            transform: translateY(126px);
            position: absolute;
        }

        ${InputButtonSty}:hover{
            box-shadow: 0 0 10px ${prop=>prop.theme.primaryLight},
            0 0 40px ${prop=>prop.theme.primaryLight};
        }
    }

    span{
        transition: 0.5s;
        border: 1px solid red;
        padding: 8px;
        border-radius: 8px;
        position: absolute;
        right: 1rem;
        top: 1rem;
        color: red;
        filter: blur(0.2);
        text-shadow: 0 0 5px red, 0 0 10px red;
    }
   
`


