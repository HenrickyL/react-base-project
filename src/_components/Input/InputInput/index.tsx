import { InputSty } from "./style"

interface InputInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
}

export const InputInput = ({...rest}: InputInputProps)=>{
    return (
        <InputSty type="text" {...rest}/>
    )
}