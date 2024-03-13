import styled from "styled-components";
interface NotificationFieldStyProps{
    type: NotificationType
}
type NotificationType = 'success' | 'warning'| 'error'| 'report'

const notificationColors = {
    success: (props: any) => props.theme.notification.success,
    warning: (props: any) => props.theme.notification.warning,
    error: (props: any) => props.theme.notification.error,
    report: (props: any) => props.theme.notification.report
};

export const NotificationRootSty = styled.div<NotificationFieldStyProps>`
    display: flex;
    flex-direction: row;
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
`