import { ReactNode } from "react"
import { FormRootSty } from "./style"

interface FormRootProps extends React.FormHTMLAttributes<HTMLFormElement>{
    children: ReactNode
}

export const FormRoot = ({children, ...props}: FormRootProps)=>{
    return(
        <FormRootSty {...props}>
            {children}
        </FormRootSty>
    )
    
}