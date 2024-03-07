import { ReactNode } from "react"
import { FormTitleSty } from "./style"

interface FromTitleProps {
    children: ReactNode
}
export const FormTitle = (props: FromTitleProps)=>{
    return (
        <FormTitleSty>
            {props.children}
        </FormTitleSty>
    )
}