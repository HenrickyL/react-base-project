import { Input } from ".."
import { InputPasswordSty } from "./style"
import { 
    IoMdEye as EyeIcon,
    IoMdEyeOff as EyeOffIcon,
    IoMdUnlock as PasswordOffIcon,
    IoMdLock as PasswordIcon} from "react-icons/io";
import { useState } from "react";
import { ThemeController } from "../../../_middlewares/Themes";


interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement>{
    iconSize?: number
}

export const InputPassword = ({iconSize,...rest}:InputPasswordProps)=>{
    const [isPassword, setIsPassword] = useState<boolean>(true)
    const iconThemeSize = ThemeController.getTheme().settings.iconSize

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setIsPassword(!isPassword)
    }

    return (
        <Input.Field>
            <Input.Icon icon={isPassword ? PasswordIcon : PasswordOffIcon} size={iconSize || iconThemeSize}/>
            <InputPasswordSty  {...rest} type={isPassword ? 'password' : 'text'} />
            <button onClick={handleClick}>
                {isPassword ? <EyeIcon size={iconSize || iconThemeSize}/> : <EyeOffIcon  size={iconSize || iconThemeSize}/>}
            </button>
        </Input.Field>
    )
}