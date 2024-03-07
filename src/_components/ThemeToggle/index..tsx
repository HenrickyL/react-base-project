import { useState } from "react"
import { Icon } from "../Icon"
import { ThemeToggleSty } from "./style"
import { Theme, darkTheme, ThemeController } from "../../_middlewares/Themes"
import { 
    MdLightMode as LightIcon,
    MdDarkMode  as DarkIcon

 } from "react-icons/md";


export const ThemeToggle = ()=>{
    const [theme, setTheme] = useState<Theme>(ThemeController.getTheme())

    const handleClick = ()=>{
        ThemeController.toggle()
        setTheme(ThemeController.getTheme())
    }
    return (
        <ThemeToggleSty onClick={handleClick}>
            <Icon icon={theme === darkTheme ? LightIcon : DarkIcon} />
        </ThemeToggleSty>
    )
}