import { ReactNode } from "react"
import { NotificationRootSty } from "./style"

interface NotificationRootProps{
    children: ReactNode
    type?: 'success' | 'warning'| 'error'| 'report'
}

export const NotificationRoot = ({children, type}:NotificationRootProps)=>{
    return(
        <NotificationRootSty type={type || 'report'}>
            {children}
        </NotificationRootSty>
    )
}