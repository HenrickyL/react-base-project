import { IconType } from 'react-icons';
import { Icon } from '../../Icon';

interface InputIconProps{
    icon?: IconType
    size?: number
}

export const InputIcon = ({icon, size }: InputIconProps)=>{
    return (
        <Icon icon={icon} size={size}/>
    )
}