import { IconType } from "react-icons"
import { Icon } from "../../Icon"

interface NotificationIconProps{
    icon?: IconType
}

export const NotificationIcon = ({icon}:NotificationIconProps)=>{
    return(
        <Icon icon={icon}/>
    )
}