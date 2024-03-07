import { IconType } from "react-icons";
import { FaQuestion as Question } from "react-icons/fa6";
import { ThemeController } from "../../_middlewares/Themes";

interface IconProps{
    icon?: IconType
    size?: number
}

export const Icon = ({icon, size }: IconProps)=>{
    const IconComponent: IconType = icon || Question;
    const IconThemeSize = ThemeController.getTheme().settings.iconSize
    return (
        <IconComponent size={size || IconThemeSize}/>
    )
}