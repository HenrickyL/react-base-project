import styled from "styled-components";
import { notificationColors } from "../../../_hooks/theme";
interface NotificationFieldStyProps{
    type: NotificationType
}
type NotificationType = 'success' | 'warning'| 'error'| 'report'


export const NotificationRootSty = styled.div<NotificationFieldStyProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
    transition: 0.4s;
    border-radius: 8px;
    border: 2px solid ${(props) => notificationColors[props.type](props).default };
    padding: 0.5rem;
    background-color: ${(props) => 
        notificationColors[props.type](props).background ||
        props.theme.background
    };
    filter: brightness(0.95);


    &:hover{
        filter: brightness(1);
        transform: translateX(4px);
    }
`