import { ReactNode, useRef } from "react"
import { InputFieldSty } from "./style"

interface InputFieldProps{
    children: ReactNode
}

export const InputField = ({children}: InputFieldProps)=>{
    const inputFieldRef = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        let inputElement = inputFieldRef.current?.querySelector(
            'input'
            //'input[type="text"], input[type="password"]'
            ) as HTMLInputElement;
        if (inputElement) {
            inputElement.focus();
        }
    };
    return (
        <InputFieldSty ref={inputFieldRef} onClick={handleClick}>
            {children}
        </InputFieldSty>
    )
}