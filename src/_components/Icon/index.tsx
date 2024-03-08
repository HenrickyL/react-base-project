import { IconType } from "react-icons";
import { FaQuestion as Question } from "react-icons/fa6";
import { useTheme } from "../../_hooks/theme";

interface IconProps{
    icon?: IconType
    size?: number
}

export const Icon = ({icon, size }: IconProps)=>{
    const IconComponent: IconType = icon || Question;
    const {theme} =useTheme()
    const IconThemeSize = theme.settings.iconSize
    return (
        <IconComponent size={size || IconThemeSize}/>
    )
}